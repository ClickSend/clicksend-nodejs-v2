# Migration Guide: @clicksend/clicksend-nodejs (legacy) → clicksend (v2)

This guide helps you migrate from the legacy ClickSend Node.js SDK (`@clicksend/clicksend-nodejs`) to the current v2 SDK (`clicksend`). The two SDKs are **not drop-in compatible** — method names, request/response shapes, the error type, and a few internals have all changed. Read this guide fully before upgrading, then use the class/method mapping tables to update your code.

## Contents

1. [Why this migration isn't a drop-in replacement](#1-why-this-migration-isnt-a-drop-in-replacement)
2. [Installation & imports](#2-installation--imports)
3. [Authentication & client setup](#3-authentication--client-setup)
4. [Base path / URL changes](#4-base-path--url-changes)
5. [Method naming convention change](#5-method-naming-convention-change)
6. [Request payloads: `*Request` models replace reusable domain models](#6-request-payloads-request-models-replace-reusable-domain-models)
7. [Response payloads are now properly typed](#7-response-payloads-are-now-properly-typed)
8. [Error handling changes](#8-error-handling-changes)
9. [Concurrency model & request customization](#9-concurrency-model--request-customization)
10. [Class-by-class mapping (all 37 legacy classes)](#10-class-by-class-mapping-all-37-legacy-classes)
11. [Side-by-side examples for common operations](#11-side-by-side-examples-for-common-operations)
12. [The Voice naming trap (read this before touching voice code)](#12-the-voice-naming-trap-read-this-before-touching-voice-code)
13. [Endpoints/methods removed in v2](#13-endpointsmethods-removed-in-v2)
14. [Brand-new resources and methods in v2](#14-brand-new-resources-and-methods-in-v2)
15. [Step-by-step migration checklist](#15-step-by-step-migration-checklist)

## 1. Why this migration isn't a drop-in replacement

The legacy SDK grew organically against ClickSend's v3 API: one class per rough "concept" (e.g. `EmailMarketingApi`, `TransactionalEmailApi`, `MasterEmailTemplatesApi`, `UserEmailTemplatesApi`, `EmailDeliveryReceiptRulesApi` were five *separate* classes), method names followed a `resourcePath` + HTTP verb pattern (`smsSendPost`, `smsHistoryGet`), request bodies were broad reusable domain models (`SmsMessage`, `SmsMessageCollection`), and every response body was typed `string` and never deserialized into a real shape.

The v2 SDK is generated fresh from ClickSend's current OpenAPI v3 specification for Node.js/TypeScript, which:

- Groups methods into **one class per resource/tag** (26 classes instead of 37 — several legacy classes were merged, one was split, and the Fax, Letters, and Postcards classes were dropped entirely — see [§13](#13-endpointsmethods-removed-in-v2)).
- Names methods after the endpoint's **operationId** (`sendSms`, `viewSmsHistory`, `exportSmsHistory`) instead of `resourcePath` + verb.
- Wraps every request body in a dedicated, single-purpose `*Request` model instead of reusing broad domain models.
- Is built on **axios** (`typescript-axios` generator target, with `useSingleRequestParameter` enabled): every method takes **one request-parameters object** instead of a positional argument list, so there's no more leading `contentType` slot to fill with `undefined` just to reach the payload.
- **Responses are typed `AxiosResponse<T>`** — axios parses the JSON body for you into `.data`, typed per-operation (e.g. `SendSms`), instead of always typing the body `string`.
- **Errors on non-2xx responses are axios's own `AxiosError`** (from the `axios` package) — there's no ClickSend-specific error class.
- ⚠️ **Request/response body field names are `snake_case`, not camelCase — verify every field name, don't guess.** This is easy to miss and breaks silently (extra/misspelled JSON keys are just ignored, so a wrong field name looks like a 400 error with no obvious cause). See [§6](#6-request-payloads-request-models-replace-reusable-domain-models) and [§7](#7-response-payloads-are-now-properly-typed).
- Patches the default `source` on SMS/MMS/voice message items to `'sdk-nodejs'` and the default `User-Agent` to `ClickSend-SDK/7.0.0/nodejs` (both overridable).

None of this changes the underlying REST API — it's the same ClickSend v3 API — but it does change **every call site** in your existing integration.

| | Legacy | v2 |
|---|---|---|
| npm package name (per `package.json`) | `@clicksend/clicksend-nodejs` | `clicksend` |
| Version at time of writing | `5.1.7` | `7.0.0` |
| API classes | **37** | **26** — Fax, Letters, and Postcards are entirely absent (see [§13](#13-endpointsmethods-removed-in-v2)) |
| Domain/response model classes | 47, defined inline in the single `api.ts` file | Also defined inline in one generated `api.ts` (no `model/` folder) — one interface per operation/nested object, e.g. `SendSmsRequest`, `SendSmsRequestMessagesInner` |
| Method naming | `resourcePathHttpVerb`, e.g. `smsSendPost` | OpenAPI `operationId`, e.g. `sendSms` |
| Method parameters | Positional (`contentType` first or after a path param, then the payload) | **One request-parameters object** per method (e.g. `sendSms({ sendSmsRequest })`) — see [§6](#6-request-payloads-request-models-replace-reusable-domain-models) |
| Request body | Reusable domain model (e.g. `SmsMessageCollection`) | Dedicated `*Request` model (e.g. `SendSmsRequest`), passed as a property of the request-parameters object |
| Response body | Always typed `string` (raw JSON) | Properly typed per-operation model on `.data` (e.g. `SendSms`) — axios parses the JSON for you |
| Returned `Promise` implementation | **Bluebird** (`import Promise = require('bluebird')` shadows the global in `api.ts`) | Native ES2015+ `Promise` resolving to an axios `AxiosResponse<T>` (methods are `async`) — see [§9](#9-concurrency-model--request-customization) |
| Base path | `https://rest.clicksend.com/v3` | `https://rest.clicksend.com` (`/v3` moved into each method's path) |
| Auth wiring | `smsApi.username`/`.password` setters, or the `authentications.BasicAuth` map | `new Configuration({ username, password })` passed into the API class constructor — there's no `authentications` map in v2 at all |
| Auth types available | `HttpBasicAuth`, `ApiKeyAuth`, `OAuth`, `VoidAuth` classes | `Configuration` takes `username`/`password` (basic) or `accessToken` (bearer) fields directly — no separate auth-strategy classes |
| Error on non-2xx | Plain rejected object `{ response, body }` — **not** an `Error` | axios's own `AxiosError`, with `.message`, `.response.status`, `.response.data` — see [§8](#8-error-handling-changes) |
| Per-call request hooks | None | None built in — pass your own `AxiosInstance` (with `.interceptors.request.use(...)`) as the 3rd constructor argument — see [§9](#9-concurrency-model--request-customization) |

## 2. Installation & imports

```bash
# Uninstall the legacy package
npm uninstall @clicksend/clicksend-nodejs

# Install the new package
npm install clicksend
```

> **Check what's actually published on npm before you upgrade.** The legacy repo's own README instructs `npm install clicksend`, which conflicts with the scoped name (`@clicksend/clicksend-nodejs`) that's actually in its `package.json`. Confirm the exact package name/version on the npm registry for your account before changing `package.json` — the authoritative name is whatever ClickSend has actually published, not what's on disk in either repo.

TypeScript imports are unchanged in *style* — you still import classes directly off the package root:

```typescript
// Legacy
import { SMSApi, SmsMessage, SmsMessageCollection } from '@clicksend/clicksend-nodejs';

// v2
import { SmsApi, Configuration, SendSmsRequest } from 'clicksend';
```

The difference is *which* classes exist and what they're named (see [§10](#10-class-by-class-mapping-all-37-legacy-classes)). The legacy package ships a `dist/api.d.ts`; v2 ships `dist/index.d.ts` (which re-exports everything from its internal `api` and `configuration` modules) — either way, `import { ... } from 'clicksend'` plus editor autocomplete is often the fastest way to discover a renamed method.

## 3. Authentication & client setup

This is one of the more mechanical but pervasive changes: **every API class now takes a `Configuration` instance** instead of raw `username`/`password` arguments or setters. There is no `authentications` map to reach into at all in v2.

```typescript
// Legacy
const smsApi = new ClickSend.SMSApi();
smsApi.username = 'YOUR_USERNAME';
smsApi.password = 'YOUR_API_KEY';

// or the constructor form
const smsApi = new ClickSend.SMSApi('YOUR_USERNAME', 'YOUR_API_KEY');
```

```typescript
// v2
import { Configuration, SmsApi } from 'clicksend';

const configuration = new Configuration({
  username: 'YOUR_USERNAME',
  password: 'YOUR_API_KEY',
});

const smsApi = new SmsApi(configuration);
```

What changed:

| | Legacy | v2 |
|---|---|---|
| Credentials | `smsApi.username`/`.password` setters, or constructor args | `new Configuration({ username, password })`, passed to the API class constructor |
| Basic-auth key in `authentications` map | `authentications.BasicAuth` (capital B) | **No `authentications` map exists.** Basic auth is applied internally via axios's own `auth: { username, password }` request option, read straight off `configuration.username`/`.password`. |
| Bearer / token auth | `HttpBearerAuth` did not exist in the legacy SDK | `new Configuration({ accessToken: '...' })` — can be a string, or a `(name?, scopes?) => string \| Promise<string>` callback |
| Default `User-Agent` | generic Swagger-Codegen UA (`defaultHeaders` starts as `{}`) | `ClickSend-SDK/7.0.0/nodejs`, set via `configuration.baseOptions.headers` — override with `new Configuration({ baseOptions: { headers: { 'User-Agent': '...' } } })` |
| Per-call header override | `options: any = {}` → `options.headers` merged in | Final `options?: AxiosRequestConfig` argument on every method, e.g. `smsApi.sendSms({ sendSmsRequest }, { headers: { 'X-Foo': 'bar' } })` |
| Custom HTTP client | Not supported — the legacy SDK always uses the bundled `request` library | Every API class accepts an optional 3rd constructor argument: your own `AxiosInstance` (for interceptors, proxies, retries, mocking in tests, …) — see [§9](#9-concurrency-model--request-customization) |

If your code does `smsApi.authentications.BasicAuth.username = ...` directly (uncommon, but some integrations do this to share one `HttpBasicAuth` instance across multiple API clients), there's no direct v2 equivalent — build a `Configuration` object and pass it to each API class instead.

## 4. Base path / URL changes

| | Legacy | v2 |
|---|---|---|
| `defaultBasePath` | `https://rest.clicksend.com/v3` | `https://rest.clicksend.com` |
| Per-method path | `/sms/send` (no version prefix — it's baked into the base path) | `/v3/sms/send` (the `/v3` prefix is part of each method's path) |
| Override | `smsApi.basePath` setter, or 3rd constructor argument | `new Configuration({ basePath: '...' })`, or the API class's 2nd constructor argument (`new SmsApi(configuration, basePath)`) |

The final resolved URL is identical in both cases (`https://rest.clicksend.com/v3/sms/send`). This only matters if:

- You've overridden the base path (e.g. to point at a proxy or a mock server). If your custom base path currently ends in `/v3` for the legacy SDK, **remove the `/v3` suffix** when you switch to v2 — otherwise you'll request `.../v3/v3/sms/send`.
- You construct raw URLs anywhere in test mocks/fixtures that assume the legacy base path.

## 5. Method naming convention change

Every method on every API class has been renamed. There is no shared prefix/suffix rule you can find-and-replace — the new names follow each endpoint's `operationId` (camelCased), which reads like an English phrase, while the old ones followed `resourcePath` + HTTP verb.

| Legacy | v2 |
|---|---|
| `smsSendPost` | `sendSms` |
| `smsHistoryGet` | `viewSmsHistory` |
| `smsHistoryExportGet` | `exportSmsHistory` |
| `smsTemplatesByTemplateIdDelete` | `deleteSmsTemplate` |
| `listsContactsByListIdPost` | `createNewContact` |
| `subaccountsPost` | `createSubaccount` |
| `voiceLangGet` | `viewVoiceLanguages` |
| `numbersSearchByCountryGet` | `viewAvailableNumbers` |
| `voiceHistoryGet` | `getVoiceHistory` *(not `viewVoiceHistory` — verify exact names, don't guess)* |

**You cannot mechanically derive the new name from the old one.** Use the mapping tables in [§10](#10-class-by-class-mapping-all-37-legacy-classes)–[§11](#11-side-by-side-examples-for-common-operations), or open the relevant `*Api.ts` file under `api/` and use your editor's autocomplete against the class instance — the new names are descriptive enough that the right method is usually the first sensible autocomplete match.

## 6. Request payloads: `*Request` models replace reusable domain models

Legacy methods took a broad, reusable domain model directly as the payload, with **no leading `contentType` parameter at all**:

```typescript
// Legacy
import { SMSApi, SmsMessage, SmsMessageCollection } from '@clicksend/clicksend-nodejs';

const smsMessage = new SmsMessage();
smsMessage.to = '+61411111111';
smsMessage.body = 'Hello from ClickSend!';
smsMessage.source = 'php';

const smsCollection = new SmsMessageCollection();
smsCollection.messages = [smsMessage];

smsApi.smsSendPost(smsCollection);
```

v2 introduces **one dedicated `*Request` model per operation**, and bundles every parameter — the optional `contentType?: string` header override, any required path/id parameter, and the request body — into **one request-parameters object** per method. There's no more positional argument list to get wrong, and no more passing `undefined` as a placeholder just to reach the payload:

```typescript
// v2
import { SmsApi, SendSmsRequest } from 'clicksend';

const sendSmsRequest: SendSmsRequest = {
  messages: [
    { to: '+61411111111', body: 'Hello from ClickSend!', source: 'sdk' },
  ],
};

// One object. Omit any property you don't need — no `undefined` filler required.
smsApi.sendSms({ sendSmsRequest });

// A method with a required path parameter takes it as a property on the same object:
smsApi.deleteSmsTemplate({ templateId });
listsApi.createNewContact({ listId, createNewContactRequest });
```

Practical implications:

- **The old domain-model class names mostly don't exist in v2.** `SmsMessage`, `SmsMessageCollection`, `Email`, `FaxMessage`, `VoiceMessage`, `Contact`, `ContactList`, `Subaccount`, etc. are gone. Every request/response shape is now a TypeScript interface named after a specific operation (`SendSmsRequest`, `CreateNewContactRequest`, `CreateSubaccountRequest`, …), defined inline in the single generated `api.ts` rather than a domain noun in its own file. Nested list items get their own generated interface too (e.g. `SendSmsRequestMessagesInner`).
- **The sender field is unchanged: it's still called `from` in both SDKs.** Unlike Python (where `from` collides with a language keyword and becomes `var_from`), TypeScript/JavaScript has no such restriction — `SmsMessage.from` in legacy and `SendSmsRequestMessagesInner.from` in v2 are both plain `'from'?: string` properties. Nothing to rename here.
- **`source` now defaults to `'sdk-nodejs'`** on SMS, MMS, and voice message items if you don't set one yourself. This is implemented as a patch inside `sendSms`/`sendMms`/`sendVoiceMessage` (`{ source: 'sdk-nodejs', ...m }` spread over each message before serialization), so an explicit `source` you provide always overrides the default. Legacy had no default.
- **A plain object literal works fine as the request body** — you don't have to instantiate a class, since every request shape is a structural TypeScript interface (see the `SendSmsRequest` example above).
- **`contentType` is still there, just as an optional property on the same request-parameters object** — you can omit it entirely (rather than pass `undefined`) and it defaults to `'application/json'`, which is the only content type ClickSend's API ever accepts.
- A handful of methods (e.g. `ListsApi.copyContactToList`, `ListsApi.transferContactToList`, `ListsApi.removeOptedOutContacts`, `VoiceMessagingApi.cancelAllVoiceMessages`, `VoiceMessagingApi.cancelVoiceMessage`) take a generic `body?: object` property in place of a named request model — the underlying OpenAPI spec doesn't define a concrete schema for these bodies.

### ⚠️ Field names inside request bodies are `snake_case`, not camelCase

This is the single easiest mistake to make in the whole migration, and it fails silently: a wrong or misspelled key inside a request body isn't a TypeScript error (these interfaces don't mark most fields `required`, and a plain object literal is only loosely checked), it's just a field the server never receives — which shows up as an unhelpful 400 at runtime, not a compile error.

**Only the outer request-parameters object's own keys are camelCase** (`sendSmsRequest`, `listId`, `contentType` — these come from the operation's parameter names). **Every field *inside* a request or response body keeps the exact name from the OpenAPI spec**, which for ClickSend's API is `snake_case`:

```typescript
// Wrong — mediaFile/emailAddressId look plausible, but the server silently ignores them
mmsApi.sendMms({ sendMmsRequest: { mediaFile: url, messages: [...] } });
emailApi.sendEmail({ sendEmailRequest: { from: { emailAddressId: '123' }, ... } });

// Correct — verified against the generated SendMmsRequest / SendEmailRequestFrom interfaces
mmsApi.sendMms({ sendMmsRequest: { media_file: url, messages: [...] } });
emailApi.sendEmail({ sendEmailRequest: { from: { email_address_id: '123' }, ... } });
```

**This did not exist in the previous (`typescript-node`) Node.js v2 build**, which used `ObjectSerializer`'s explicit `attributeTypeMap` to convert every model field to camelCase at runtime (confirmed: its generated model for the same field declares `'listId'?: number`). The `typescript-axios` generator target has no equivalent mechanism — there's no `modelPropertyNaming` config option for it at all, only `paramNaming` (which governs the outer request-parameters object's keys, and does stay camelCase). If you're migrating from an integration already built against that earlier v2 build, this is a **second migration** on top of the legacy→v2 one, not just a legacy quirk.

Fields that happen to be a single word (`to`, `from`, `body`, `source`, `subject`, `schedule`) are unaffected and look identical either way — the trap is specifically multi-word fields. Confirmed snake_case field names you'll run into constantly: `media_file`, `email_address_id`, `list_id`, `message_id`, `contact_id`, `date_added`, `date_updated`, `response_msg`, `response_code`, `http_code`, `shorten_urls`. **Don't guess — check the actual interface** (search `api.ts`, or the `.d.ts` in your installed package, for the model name) or the [REST API reference](https://developers.clicksend.com/docs/rest/v3/) before writing a request body.

## 7. Response payloads are now properly typed

Legacy responses were **always typed `string`**, regardless of the actual JSON shape, and were never truly deserialized into a model — you had to know the response shape out-of-band (from the API docs) and treat `response.body` as effectively `any`.

```typescript
// Legacy — response.body is nominally `string`, actually a raw JSON blob you must interpret yourself
smsApi.smsSendPost(smsCollection).then((response) => {
  console.log(response.body); // no real typing/autocomplete; you'd JSON.parse it yourself
});
```

v2 methods resolve to an axios `AxiosResponse<T>`, typed per-operation (e.g. `SendSms`, `ViewSmsHistory`, `CalculateSmsPrice`). axios parses the JSON body for you — the payload lives on **`.data`**, not `.body`:

```typescript
// v2 — response.data is a real, typed SendSms object
smsApi.sendSms({ sendSmsRequest }).then((response) => {
  console.log(response.data.data); // typed, autocompletes — note: the outer `.data` is the axios envelope, the inner `.data` is ClickSend's own response field
});

// or, more idiomatically:
const { data } = await smsApi.sendSms({ sendSmsRequest });
console.log(data.data);
```

If your legacy code parses `response.body` manually (`JSON.parse`, manual property digging, etc.), you can delete that logic — axios does it for you now. **Rename every `response.body` access to `response.data`** — this is a mechanical but easy-to-miss rename, since `.body` still exists on an `AxiosResponse` in some other axios-based codebases you may be used to, but not here (ClickSend v2 responses only expose the standard `AxiosResponse` shape: `.data`, `.status`, `.statusText`, `.headers`, `.config`).

**The same `snake_case` field-naming trap from [§6](#6-request-payloads-request-models-replace-reusable-domain-models) applies to response bodies too** — confirmed directly against the generated `SendSms` interface: `'http_code'`, `'response_code'`, `'response_msg'` (not `httpCode`/`responseCode`/`responseMsg`). This bit an early version of this project's own smoke test: `body.responseMsg` silently returned `undefined` where `body.response_msg` returns the real value, because a wrong field name on a *read* doesn't throw — it just yields `undefined`.

```typescript
const { data } = await smsApi.sendSms({ sendSmsRequest });
console.log(data.response_msg);   // correct — 'Messages queued for delivery.'
console.log(data.responseMsg);    // undefined — silently wrong, no error thrown
console.log(data.data);           // ClickSend's own nested `data` field, typed as SendSmsData
```

## 8. Error handling changes

Legacy: non-2xx responses reject the promise with a **plain object**, not an `Error` — confirmed directly in the generated source (`reject({ response: response, body: body })`, with no `HttpError` class defined anywhere in the legacy `api.ts`):

```typescript
// Legacy
smsApi.smsSendPost(smsCollection).catch((error) => {
  // error is NOT an Error instance — it's { response, body }
  console.error(error.message); // undefined! there is no .message
  console.error(error instanceof Error); // false
});
```

v2 is built on axios, and nothing in the generated code overrides axios's default `validateStatus` — so non-2xx responses reject with **axios's own `AxiosError`** (from the `axios` package itself, not a ClickSend-specific class). There is no `HttpError` in v2 at all:

```typescript
// v2
import axios from 'axios';

try {
  const { data } = await smsApi.sendSms({ sendSmsRequest });
  console.log(data);
} catch (error) {
  if (axios.isAxiosError(error)) {
    console.error(error.message);           // e.g. 'Request failed with status code 400'
    console.error(error.response?.status);  // e.g. 400
    console.error(error.response?.data);    // the parsed error payload from the API
  } else {
    throw error; // a genuinely unexpected (non-HTTP) error
  }
}
```

**Audit every `.catch()` block in your integration.**
- `error.response.data` replaces legacy's `error.body` — **not** `error.body` (an `AxiosError` has no `.body` property).
- `error.response.status` replaces legacy's implicit status code (legacy attached it on `error.response.statusCode`, from Node's raw `http.IncomingMessage`).
- `error` **is** a real `Error` in v2 (`error instanceof Error` is `true`, and `error.message` is populated) — this was already broken in the legacy SDK, so error-tracking tools and code that assumed a real `Error` will now behave *better*, but code that destructured `{ response, body }` straight off the rejection needs to change to `error.response.status` / `error.response.data`.
- Use `axios.isAxiosError(error)` (or `import { isAxiosError } from 'axios'`) to narrow the type safely in TypeScript, since not every rejection is guaranteed to be an HTTP error (e.g. a network failure before any response, or a client-side validation error — see below).

Client-side argument validation is new in v2: a missing required parameter (e.g. `messageId` on `cancelSms`) rejects the returned promise with a plain `RequiredError` (`extends Error`, exported from `clicksend`) before any HTTP call is made — it's still a rejected promise, not a synchronous throw, since every method is `async`. This concept didn't really exist in the legacy SDK, which mostly just sent malformed requests to the server instead.

## 9. Concurrency model & request customization

Unlike some other ClickSend SDKs, **neither the legacy nor the v2 Node.js SDK was ever callback-based**, and neither had a `sync`/`async_req` toggle — both have always returned a `Promise` from every method. There is no thread pool to remove here. What actually changed is more subtle and Node-specific:

- **Legacy methods return a Bluebird promise, not a native one.** The top of `api.ts` does `import Promise = require('bluebird');`, which shadows the global `Promise` identifier for the rest of that file. Every legacy method (`public smsSendPost(...): Promise<...>`) is a plain (non-`async`) function that manually constructs `new Promise((resolve, reject) => { ... })` — and because of that import, `Promise` there resolves to Bluebird's implementation, not the native ES2015 one. In practice `.then()`/`.catch()` behave the same, but you also get Bluebird's extra methods (`.finally()`, `.map()`, cancellation, etc.) if you choose to use them, and any code that does something like `promise.constructor === global.Promise` would get a surprise.
- **v2 methods are `async` functions returning a native `Promise<AxiosResponse<T>>`.** There's no Bluebird anywhere in v2 — it's not imported in the generated code, and (unlike the legacy package) it isn't even listed as a dependency in v2's `package.json`.
- **There's no `addInterceptor()` in v2.** The legacy SDK's per-instance interceptor hook doesn't exist on the generated API classes anymore. Instead, every API class accepts your own `AxiosInstance` as its 3rd constructor argument, and axios interceptors are the idiomatic replacement:

```typescript
import axios from 'axios';
import { Configuration, SmsApi } from 'clicksend';

const axiosInstance = axios.create();
axiosInstance.interceptors.request.use((config) => {
  config.headers['X-Request-Id'] = generateRequestId();
  return config;
});

const smsApi = new SmsApi(configuration, undefined, axiosInstance);
```

  This is more capable than the old hook (axios interceptors can also inspect/transform *responses*, retry, or short-circuit requests entirely), but it's a real code change, not just a rename — any logic you had inside `addInterceptor(...)` needs to move into an `axios.interceptors.request.use(...)` callback on an instance you construct and pass in yourself.
- **Both SDKs accept a per-call options object** for one-off overrides (`smsApi.sendSms({ sendSmsRequest }, { headers: { 'X-Foo': 'bar' } })`); v2 types it as a full `AxiosRequestConfig` (so you can override timeout, params, etc. per call, not just headers) instead of legacy's `{ headers: any }`.
- If your integration needs real concurrency (parallel sends), the pattern is unchanged across both versions: fire off multiple promise-returning calls and `Promise.all()` them, or use one API-class instance per worker if you're pooling connections yourself. There is nothing to "replace" here — it already worked this way.

## 10. Class-by-class mapping (all 37 legacy classes)

26 v2 classes now cover what used to be 37 legacy classes. Some legacy classes merged (five email classes → one `EmailApi`); `ContactApi` split in two; and — critically — the two Voice classes **swapped roles** in v2 naming (see [§12](#12-the-voice-naming-trap-read-this-before-touching-voice-code)).

| Legacy class | → | New class(es) | Notes |
|---|---|---|---|
| `AccountApi` | → | `ManagementApi`, `VerificationApi` | Split: `accountGet`/`accountUseageBySubaccountGet` → `ManagementApi`; `forgotPasswordPut`/`forgotUsernamePut` → `VerificationApi`. 4 methods have no v2 equivalent — see [§13](#13-endpointsmethods-removed-in-v2). |
| `AccountRechargeApi` | → | `TransactionsApi` | Renamed 1:1 (6 methods). |
| `ContactApi` | → | `ContactsApi`, `ListsApi` | Split: single-contact-by-id CRUD (3 methods) → `ContactsApi`; list-scoped contact operations (5 methods: create/list/copy/transfer/remove-opted-out) → `ListsApi`. |
| `ContactListApi` | → | `ListsApi` | Merged into `ListsApi` (7 methods). |
| `CountriesApi` | → | `InternationalMessagingApi` | `countriesGet` → `listCountries`. |
| `DeliveryIssuesApi` | → | `MessageDeliveryApi` | Renamed 1:1 (2 methods). Unrelated to the delivery-*receipt-rule* classes below despite the similar name. |
| `DetectAddressApi` | → | _(removed)_ | Address detection/parsing has no v2 equivalent — see [§13](#13-endpointsmethods-removed-in-v2). |
| `EmailDeliveryReceiptRulesApi` | → | `EmailApi` | Folded into the unified `EmailApi` (5 methods). |
| `EmailMarketingApi` | → | `EmailApi` | Folded into the unified `EmailApi` (14 methods). |
| `EmailToSmsApi` | → | `EmailToSmsApi` | Same class name, methods renamed (7 → 7). |
| `FAXApi` | → | _(removed)_ | Fax is not part of the v2 SDK — see [§13](#13-endpointsmethods-removed-in-v2). |
| `FAXDeliveryReceiptRulesApi` | → | _(removed)_ | Fax is not part of the v2 SDK — see [§13](#13-endpointsmethods-removed-in-v2). |
| `GlobalSendingApi` | → | `InternationalMessagingApi` | Folded in (4 methods). |
| `InboundFAXRulesApi` | → | _(removed)_ | Fax is not part of the v2 SDK — see [§13](#13-endpointsmethods-removed-in-v2). |
| `InboundSMSRulesApi` | → | `SmsApi` | Folded in as `*SmsInboundAutomation(s)` (5 methods). |
| `MMSApi` | → | `MmsApi` | Renamed 1:1 for 4 methods; 2 dropped — see [§13](#13-endpointsmethods-removed-in-v2). |
| `MasterEmailTemplatesApi` | → | `EmailApi` | Folded into the unified `EmailApi` (5 methods). |
| `MmsCampaignApi` | → | `MmsCampaignsApi` | Renamed 1:1 (6 methods). |
| `NumberApi` | → | `NumbersApi` | Renamed 1:1 (3 methods), plus a brand-new `registerNumbers` — see [§14](#14-brand-new-resources-and-methods-in-v2). |
| `PostLetterApi` | → | _(removed)_ | Letters is not part of the v2 SDK — see [§13](#13-endpointsmethods-removed-in-v2). |
| `PostPostcardApi` | → | _(removed)_ | Postcards is not part of the v2 SDK — see [§13](#13-endpointsmethods-removed-in-v2). |
| `PostReturnAddressApi` | → | `AddressesApi` | Renamed 1:1 (5 methods): `postReturnAddresses*` → `*ReturnAddress(es)`. |
| `ReferralAccountApi` | → | `ReferralsApi` | `referralAccountsGet` → `viewReferralAccounts`. |
| `ResellerAccountApi` | → | `ResellerApi` | Merged with `TransferCreditApi` (5 methods total). |
| `SMSApi` | → | `SmsApi` | Renamed 1:1 for all 18 core methods. |
| `SMSDeliveryReceiptRulesApi` | → | `SmsApi` | Folded in as `*SmsDeliveryReceiptRule(s)` (5 methods). |
| `SearchApi` | → | `ListsApi` | `searchContactsListsGet` → `viewContactLists`. |
| `SmsCampaignApi` | → | `SmsCampaignsApi` | Renamed 1:1 (6 methods). |
| `StatisticsApi` | → | `StatisticsApi` | Same class name: `statisticsSmsGet` → `viewSmsStatistics`, `statisticsVoiceGet` → `viewVoiceStatistics`. |
| `SubaccountApi` | → | `SubaccountsApi` | Renamed 1:1 (6 methods). |
| `TimezonesApi` | → | `InternationalMessagingApi` | `timezonesGet` → `timezones`. |
| `TransactionalEmailApi` | → | `EmailApi` | Folded into the unified `EmailApi` (4 methods). |
| `TransferCreditApi` | → | `ResellerApi` | Merged with `ResellerAccountApi`; `resellerTransferCreditPut` → `resellerTransferCredit`. |
| `UploadApi` | → | `UploadsApi` | `uploadsPost` → `uploadAMediaFile`. |
| `UserEmailTemplatesApi` | → | `EmailApi` | Folded into the unified `EmailApi` (5 methods). |
| `VoiceApi` (send/history/price/lang) | → | **`VoiceMessagingApi`** | ⚠️ See [§12](#12-the-voice-naming-trap-read-this-before-touching-voice-code) — this is *not* the new `VoiceApi`. 2 methods dropped — see [§13](#13-endpointsmethods-removed-in-v2). |
| `VoiceDeliveryReceiptRulesApi` | → | **`VoiceApi`** | ⚠️ See [§12](#12-the-voice-naming-trap-read-this-before-touching-voice-code) — the new `VoiceApi` only has delivery-receipt-rule methods. |

`AlphaTagsApi`, `DefaultSendersApi`, `OwnNumbersApi`, and `UrlShorteningApi` in v2 have **no legacy predecessor at all** — see [§14](#14-brand-new-resources-and-methods-in-v2).

### Email: the five legacy classes → `EmailApi`

| Legacy | v2 (`EmailApi`) |
|---|---|
| `TransactionalEmailApi.emailSendPost` | `sendEmail` |
| `TransactionalEmailApi.emailHistoryGet` | `viewEmailHistory` |
| `TransactionalEmailApi.emailHistoryExportGet` | `exportEmailHistory` |
| `TransactionalEmailApi.emailPricePost` | `calculateEmailPrice` |
| `EmailMarketingApi.emailCampaignPost` | `sendEmailCampaign` |
| `EmailMarketingApi.emailCampaignsGet` | `viewAllEmailCampaigns` |
| `EmailMarketingApi.emailCampaignGet` | `viewEmailCampaign` |
| `EmailMarketingApi.emailCampaignPut` | `updateEmailCampaign` |
| `EmailMarketingApi.cancelEmailCampaignPut` | `cancelEmailCampaign` |
| `EmailMarketingApi.emailCampaignPricePost` | `calculateEmailCampaignPrice` |
| `EmailMarketingApi.emailCampaignHistoryGet` | `viewEmailCampaignHistory` |
| `EmailMarketingApi.emailCampaignHistoryExportGet` | `exportEmailCampaignHistory` |
| `EmailMarketingApi.allowedEmailAddressGet` | `viewAllowedEmailAddresses` |
| `EmailMarketingApi.allowedEmailAddressPost` | `createAllowedEmailAddress` |
| `EmailMarketingApi.specificAllowedEmailAddressGet` | `viewAllowedEmailAddress` |
| `EmailMarketingApi.specificAllowedEmailAddressDelete` | `deleteAllowedEmailAddress` |
| `EmailMarketingApi.verifyAllowedEmailAddressGet` | `verifyAllowedEmailAddress` |
| `EmailMarketingApi.sendVerificationTokenGet` | `sendEmailVerificationToken` |
| `UserEmailTemplatesApi.emailTemplatesGet` | `viewEmailTemplates` |
| `UserEmailTemplatesApi.emailTemplateGet` | `viewEmailTemplate` |
| `UserEmailTemplatesApi.emailTemplatePost` | `createEmailTemplate` |
| `UserEmailTemplatesApi.emailTemplatePut` | `updateEmailTemplate` |
| `UserEmailTemplatesApi.emailTemplateDelete` | `deleteEmailTemplate` |
| `MasterEmailTemplatesApi.masterEmailTemplatesGet` | `viewMasterEmailTemplates` |
| `MasterEmailTemplatesApi.masterEmailTemplateGet` | `viewMasterEmailTemplate` |
| `MasterEmailTemplatesApi.masterEmailTemplateCategoriesGet` | `viewTemplateCategories` |
| `MasterEmailTemplatesApi.masterEmailTemplateCategoryGet` | `viewTemplateCategory` |
| `MasterEmailTemplatesApi.masterEmailTemplatesInCategoryGet` | `viewTemplatesInCategory` |
| `EmailDeliveryReceiptRulesApi.emailDeliveryReceiptAutomationsGet` | `viewEmailDeliveryReceiptRules` |
| `EmailDeliveryReceiptRulesApi.emailDeliveryReceiptAutomationGet` | `viewEmailDeliveryReceiptRule` |
| `EmailDeliveryReceiptRulesApi.emailDeliveryReceiptAutomationPost` | `createEmailDeliveryReceiptRule` |
| `EmailDeliveryReceiptRulesApi.emailDeliveryReceiptAutomationPut` | `updateEmailDeliveryReceiptRule` |
| `EmailDeliveryReceiptRulesApi.emailDeliveryReceiptAutomationDelete` | `deleteEmailDeliveryReceiptRule` |

> `EmailMarketingApi.emailCampaignPut` in the legacy SDK reused an `EmailCampaign` model for update; v2's `updateEmailCampaign` takes an `UpdateEmailCampaignRequest`. Same story for every other method above.

### SMS: `SMSApi` + `InboundSMSRulesApi` + `SMSDeliveryReceiptRulesApi` → `SmsApi`

| Legacy | v2 (`SmsApi`) |
|---|---|
| `SMSApi.smsSendPost` | `sendSms` |
| `SMSApi.smsHistoryGet` | `viewSmsHistory` |
| `SMSApi.smsHistoryExportGet` | `exportSmsHistory` |
| `SMSApi.smsPricePost` | `calculateSmsPrice` |
| `SMSApi.smsCancelAllPut` | `cancelAllSms` |
| `SMSApi.smsCancelByMessageIdPut` | `cancelSms` |
| `SMSApi.smsInboundGet` | `viewInboundSms` |
| `SMSApi.smsInboundPost` | `createTestInboundSms` |
| `SMSApi.smsInboundReadPut` | `markInboundSmsAsRead` |
| `SMSApi.smsInboundReadByMessageIdPut` | `markSpecificInboundSmsMessageAsRead` |
| `SMSApi.smsReceiptsGet` | `viewSmsReceipts` |
| `SMSApi.smsReceiptsByMessageIdGet` | `viewSpecificSmsReceipt` |
| `SMSApi.smsReceiptsPost` | `createTestSmsReceipt` |
| `SMSApi.smsReceiptsReadPut` | `markSmsReceiptAsRead` |
| `SMSApi.smsTemplatesGet` | `viewSmsTemplates` |
| `SMSApi.smsTemplatesPost` | `createSmsTemplate` |
| `SMSApi.smsTemplatesByTemplateIdPut` | `updateSmsTemplate` |
| `SMSApi.smsTemplatesByTemplateIdDelete` | `deleteSmsTemplate` |
| `InboundSMSRulesApi.smsInboundAutomationsGet` | `viewSmsInboundAutomations` |
| `InboundSMSRulesApi.smsInboundAutomationGet` | `viewSmsInboundAutomation` |
| `InboundSMSRulesApi.smsInboundAutomationPost` | `createSmsInboundAutomation` |
| `InboundSMSRulesApi.smsInboundAutomationPut` | `updateSmsInboundAutomation` |
| `InboundSMSRulesApi.smsInboundAutomationDelete` | `deleteSmsInboundAutomation` |
| `SMSDeliveryReceiptRulesApi.smsDeliveryReceiptAutomationsGet` | `viewSmsDeliveryReceiptRules` |
| `SMSDeliveryReceiptRulesApi.smsDeliveryReceiptAutomationGet` | `viewSmsDeliveryReceiptRule` |
| `SMSDeliveryReceiptRulesApi.smsDeliveryReceiptAutomationPost` | `createSmsDeliveryReceiptRule` |
| `SMSDeliveryReceiptRulesApi.smsDeliveryReceiptAutomationPut` | `updateSmsDeliveryReceiptRule` |
| `SMSDeliveryReceiptRulesApi.smsDeliveryReceiptAutomationDelete` | `deleteSmsDeliveryReceiptRule` |
| — | `viewASpecificSmsTemplate` *(new — see [§14](#14-brand-new-resources-and-methods-in-v2))* |
| — | `viewASpecificInboundSmsMessage` *(new — see [§14](#14-brand-new-resources-and-methods-in-v2))* |

### Contacts & lists: `ContactApi` + `ContactListApi` + `SearchApi` → `ContactsApi` + `ListsApi`

| Legacy | v2 |
|---|---|
| `ContactApi.listsContactsByListIdAndContactIdGet` | `ContactsApi.getSpecificContact` |
| `ContactApi.listsContactsByListIdAndContactIdPut` | `ContactsApi.updateContact` |
| `ContactApi.listsContactsByListIdAndContactIdDelete` | `ContactsApi.deleteContact` |
| `ContactApi.listsContactsByListIdPost` | `ListsApi.createNewContact` |
| `ContactApi.listsContactsByListIdGet` | `ListsApi.viewListContacts` |
| `ContactApi.listsCopyContactPut` | `ListsApi.copyContactToList` |
| `ContactApi.listsTransferContactPut` | `ListsApi.transferContactToList` |
| `ContactApi.listsRemoveOptedOutContactsByListIdAndOptOutListIdPut` | `ListsApi.removeOptedOutContacts` |
| `ContactListApi.listsGet` | `ListsApi.viewLists` |
| `ContactListApi.listsPost` | `ListsApi.createList` |
| `ContactListApi.listsByListIdGet` | `ListsApi.viewSpecificList` |
| `ContactListApi.listsByListIdPut` | `ListsApi.updateList` |
| `ContactListApi.listsByListIdDelete` | `ListsApi.deleteList` |
| `ContactListApi.listsImportByListIdPost` | `ListsApi.importContacts` |
| `ContactListApi.listsRemoveDuplicatesByListIdPut` | `ListsApi.removeDuplicateContacts` |
| `SearchApi.searchContactsListsGet` | `ListsApi.viewContactLists` — **confirmed present** in `listsApi.ts` (takes `q?: string`, returns `body?: any`); this endpoint has a v2 home, it did not disappear. |

### Account & billing

| Legacy | v2 |
|---|---|
| `AccountApi.accountGet` | `ManagementApi.viewAccountDetails` |
| `AccountApi.accountUseageBySubaccountGet` | `ManagementApi.viewAccountUsage` |
| `AccountApi.forgotPasswordPut` | `VerificationApi.forgotPassword` |
| `AccountApi.forgotUsernamePut` | `VerificationApi.forgotUsername` |
| `AccountRechargeApi.rechargeCreditCardGet` | `TransactionsApi.currentPaymentInfo` |
| `AccountRechargeApi.rechargeCreditCardPut` | `TransactionsApi.updatePaymentInfo` |
| `AccountRechargeApi.rechargePackagesGet` | `TransactionsApi.viewRechargePackages` |
| `AccountRechargeApi.rechargePurchaseByPackageIdPut` | `TransactionsApi.purchaseRechargePackage` |
| `AccountRechargeApi.rechargeTransactionsGet` | `TransactionsApi.viewAllTransactions` |
| `AccountRechargeApi.rechargeTransactionsByTransactionIdGet` | `TransactionsApi.viewSpecificTransaction` |
| `ResellerAccountApi.resellerAccountsGet` | `ResellerApi.viewClientAccounts` |
| `ResellerAccountApi.resellerAccountsPost` | `ResellerApi.createResellerAccount` |
| `ResellerAccountApi.resellerAccountsByClientUserIdGet` | `ResellerApi.viewSpecificClientAccount` |
| `ResellerAccountApi.resellerAccountsByClientUserIdPut` | `ResellerApi.updateClientAccount` |
| `TransferCreditApi.resellerTransferCreditPut` | `ResellerApi.resellerTransferCredit` |
| `SubaccountApi.subaccountsGet` | `SubaccountsApi.viewSubaccounts` |
| `SubaccountApi.subaccountsPost` | `SubaccountsApi.createSubaccount` |
| `SubaccountApi.subaccountsBySubaccountIdGet` | `SubaccountsApi.viewSpecificSubaccount` |
| `SubaccountApi.subaccountsBySubaccountIdPut` | `SubaccountsApi.updateSubaccount` |
| `SubaccountApi.subaccountsBySubaccountIdDelete` | `SubaccountsApi.deleteSubaccount` |
| `SubaccountApi.subaccountsRegenApiKeyBySubaccountIdPut` | `SubaccountsApi.generateNewApiKey` |
| `ReferralAccountApi.referralAccountsGet` | `ReferralsApi.viewReferralAccounts` |

### Numbers, addresses, uploads, international, delivery issues

| Legacy | v2 |
|---|---|
| `NumberApi.numbersGet` | `NumbersApi.viewYourNumbers` |
| `NumberApi.numbersSearchByCountryGet` | `NumbersApi.viewAvailableNumbers` |
| `NumberApi.numbersBuyByDedicatedNumberPost` | `NumbersApi.purchaseDedicatedNumber` |
| `PostReturnAddressApi.postReturnAddressesGet` | `AddressesApi.viewYourReturnAddresses` |
| `PostReturnAddressApi.postReturnAddressesPost` | `AddressesApi.createReturnAddress` |
| `PostReturnAddressApi.postReturnAddressesByReturnAddressIdGet` | `AddressesApi.viewSpecificReturnAddress` |
| `PostReturnAddressApi.postReturnAddressesByReturnAddressIdPut` | `AddressesApi.updateReturnAddress` |
| `PostReturnAddressApi.postReturnAddressesByReturnAddressIdDelete` | `AddressesApi.deleteReturnAddress` |
| `UploadApi.uploadsPost` | `UploadsApi.uploadAMediaFile` |
| `CountriesApi.countriesGet` | `InternationalMessagingApi.listCountries` |
| `TimezonesApi.timezonesGet` | `InternationalMessagingApi.timezones` |
| `GlobalSendingApi.listCountriesGet` | `InternationalMessagingApi.getCountriesForGlobalSending` |
| `GlobalSendingApi.userCountriesGet` | `InternationalMessagingApi.viewCountries` |
| `GlobalSendingApi.userCountriesPost` | `InternationalMessagingApi.selectCountriesForGlobalSending` |
| `GlobalSendingApi.userCountriesAgreePost` | `InternationalMessagingApi.agreeToRulesAndRegulation` |
| `DeliveryIssuesApi.deliveryIssuesGet` | `MessageDeliveryApi.getAllDeliveryIssues` |
| `DeliveryIssuesApi.deliveryIssuesPost` | `MessageDeliveryApi.createDeliveryIssue` |

### MMS, campaigns, voice, statistics

| Legacy | v2 |
|---|---|
| `MMSApi.mmsSendPost` | `MmsApi.sendMms` |
| `MMSApi.mmsHistoryGet` | `MmsApi.viewMmsHistory` |
| `MMSApi.mmsHistoryExportGet` | `MmsApi.exportMmsHistory` |
| `MMSApi.mmsPricePost` | `MmsApi.calculateMmsPrice` |
| `MmsCampaignApi.mmsCampaignsSendPost` | `MmsCampaignsApi.sendMmsCampaign` |
| `MmsCampaignApi.mmsCampaignsGet` | `MmsCampaignsApi.viewAllMmsCampaigns` |
| `MmsCampaignApi.mmsCampaignByMmsCampaignIdGet` | `MmsCampaignsApi.viewMmsCampaign` |
| `MmsCampaignApi.mmsCampaignsByMmsCampaignIdPut` | `MmsCampaignsApi.updateMmsCampaign` |
| `MmsCampaignApi.mmsCampaignsCancelByMmsCampaignIdPut` | `MmsCampaignsApi.cancelMmsCampaign` |
| `MmsCampaignApi.mmsCampaignsPricePost` | `MmsCampaignsApi.calculateMmsCampaignPrice` |
| `SmsCampaignApi.smsCampaignsSendPost` | `SmsCampaignsApi.sendSmsCampaign` |
| `SmsCampaignApi.smsCampaignsGet` | `SmsCampaignsApi.viewSmsCampaigns` |
| `SmsCampaignApi.smsCampaignBySmsCampaignIdGet` | `SmsCampaignsApi.viewSpecificSmsCampaign` |
| `SmsCampaignApi.smsCampaignsBySmsCampaignIdPut` | `SmsCampaignsApi.updateSmsCampaign` |
| `SmsCampaignApi.smsCampaignsCancelBySmsCampaignIdPut` | `SmsCampaignsApi.cancelSmsCampaign` |
| `SmsCampaignApi.smsCampaignsPricePost` | `SmsCampaignsApi.calculateSmsCampaignPrice` |
| `VoiceApi.voiceSendPost` | `VoiceMessagingApi.sendVoiceMessage` ⚠️ [§12](#12-the-voice-naming-trap-read-this-before-touching-voice-code) |
| `VoiceApi.voiceHistoryGet` | `VoiceMessagingApi.getVoiceHistory` |
| `VoiceApi.voiceHistoryExportGet` | `VoiceMessagingApi.exportVoiceHistory` |
| `VoiceApi.voicePricePost` | `VoiceMessagingApi.calculateVoicePrice` |
| `VoiceApi.voiceLangGet` | `VoiceMessagingApi.viewVoiceLanguages` |
| `VoiceApi.voiceCancelAllPut` | `VoiceMessagingApi.cancelAllVoiceMessages` |
| `VoiceApi.voiceCancelByMessageIdPut` | `VoiceMessagingApi.cancelVoiceMessage` |
| `VoiceApi.voiceReceiptsGet` | `VoiceMessagingApi.viewVoiceReceipts` |
| `VoiceDeliveryReceiptRulesApi.voiceDeliveryReceiptAutomationsGet` | `VoiceApi.viewVoiceDeliveryReceiptRules` ⚠️ [§12](#12-the-voice-naming-trap-read-this-before-touching-voice-code) |
| `VoiceDeliveryReceiptRulesApi.voiceDeliveryReceiptAutomationGet` | `VoiceApi.viewVoiceDeliveryReceiptRule` |
| `VoiceDeliveryReceiptRulesApi.voiceDeliveryReceiptAutomationPost` | `VoiceApi.createVoiceDeliveryReceiptRule` |
| `VoiceDeliveryReceiptRulesApi.voiceDeliveryReceiptAutomationPut` | `VoiceApi.updateVoiceDeliveryReceiptRule` |
| `VoiceDeliveryReceiptRulesApi.voiceDeliveryReceiptAutomationDelete` | `VoiceApi.deleteVoiceDeliveryReceiptRule` |
| `StatisticsApi.statisticsSmsGet` | `StatisticsApi.viewSmsStatistics` |
| `StatisticsApi.statisticsVoiceGet` | `StatisticsApi.viewVoiceStatistics` |

### Email-to-SMS: `EmailToSmsApi` → `EmailToSmsApi`

| Legacy | v2 |
|---|---|
| `smsEmailSmsGet` | `viewAllowedEmails` |
| `smsEmailSmsPost` | `addAllowedEmail` |
| `smsEmailSmsStrippedStringPost` | `createStrippedStringRule` |
| `smsEmailSmsStrippedStringGet` | `viewStrippedStringRule` |
| `smsEmailSmsStrippedStringsGet` | `viewStrippedStringRules` |
| `smsEmailSmsStrippedStringPut` | `updateStrippedStringRule` |
| `smsEmailSmsStrippedStringDelete` | `deleteStrippedStringRule` |

## 11. Side-by-side examples for common operations

### Send an SMS

```typescript
// Legacy
import { SmsMessage, SmsMessageCollection } from '@clicksend/clicksend-nodejs';

const smsMessage = new SmsMessage();
smsMessage.to = '+61411111111';
smsMessage.body = 'Hello from ClickSend!';
smsMessage.source = 'php';
const smsCollection = new SmsMessageCollection();
smsCollection.messages = [smsMessage];

smsApi.smsSendPost(smsCollection)
  .then((response) => console.log(response.body))  // raw JSON string
  .catch((error) => console.error(error));          // plain {response, body}, not an Error

// v2
import { SendSmsRequest } from 'clicksend';

const sendSmsRequest: SendSmsRequest = {
  messages: [{ to: '+61411111111', body: 'Hello from ClickSend!', source: 'sdk' }],
};

smsApi.sendSms({ sendSmsRequest })
  .then((response) => console.log(response.data))         // typed SendSms instance
  .catch((error) => console.error(error.message, error.response?.status));
```

### View SMS history

```typescript
// Legacy — q, dateFrom, dateTo, page, limit, in that order
smsApi.smsHistoryGet(q, dateFrom, dateTo, page, limit);

// v2 — named properties, order doesn't matter, and orderBy is new
smsApi.viewSmsHistory({ page, limit, q, orderBy, dateFrom, dateTo });
```

> Parameter **order** no longer matters in v2 (everything's a named property), but the parameter **set** still changed — `orderBy` is new. Check the current signature in `api.ts` (search for the `SmsApiViewSmsHistoryRequest` interface) rather than assuming every legacy parameter carried over.

### Send an MMS / Email / Voice message

The pattern is identical across every surviving channel — build a `Send<Channel>Request`, call `send<Channel>(...)`:

| Channel | Legacy call | v2 call |
|---|---|---|
| MMS | `mmsApi.mmsSendPost(mmsMessageCollection)` | `mmsApi.sendMms({ sendMmsRequest })` |
| Email | `emailApi.emailSendPost(email)` | `emailApi.sendEmail({ sendEmailRequest })` |
| Voice | `voiceApi.voiceSendPost(voiceMessageCollection)` (legacy `VoiceApi`) | `voiceMessagingApi.sendVoiceMessage({ sendVoiceMessageRequest })` (⚠️ new `VoiceMessagingApi` class, see [§12](#12-the-voice-naming-trap-read-this-before-touching-voice-code)) |

> **Fax, Letters, and Postcards are not part of the v2 SDK** — there is no `sendFax` / `postLettersSendPost` / `postPostcardsSendPost` equivalent. See [§13](#13-endpointsmethods-removed-in-v2).

### Create a contact in a list

```typescript
// Legacy — contact model first, listId (number) second
contactApi.listsContactsByListIdPost(contact, listId);

// v2 — listId is now a STRING, passed as a named property alongside the request model
listsApi.createNewContact({ listId: String(listId), createNewContactRequest });
```

### List contacts / lists — pagination parameters were dropped

```typescript
// Legacy — page/limit/updatedAfter were real typed parameters
contactApi.listsContactsByListIdGet(listId, page, limit, updatedAfter);
contactListApi.listsGet(page, limit);
subaccountApi.subaccountsGet(page, limit);

// v2 — confirmed: these parameters no longer exist on the request-parameters interface at all
listsApi.viewListContacts({ listId: String(listId) });
listsApi.viewLists();
subaccountsApi.viewSubaccounts();
```

**This is a real behavior change, not just a rename.** `ListsApi.viewListContacts`, `ListsApi.viewLists`, and `SubaccountsApi.viewSubaccounts` in v2 take no `page` / `limit` / `updatedAfter` parameter — verified directly against their request-parameters interfaces in `api.ts`. Check the current API reference for how (or whether) pagination is now handled for any workflow that relied on these before you ship.

### Create a subaccount

```typescript
// Legacy
subaccountApi.subaccountsPost(subaccount);

// v2
subaccountsApi.createSubaccount({ createSubaccountRequest });
```

## 12. The Voice naming trap (read this before touching voice code)

This is the single most confusing rename in the whole migration, and a naive search-and-replace of `VoiceApi` will silently point your code at the wrong class:

- Legacy **`VoiceApi`** (send a voice message, view/export history, calculate price, list voice languages, cancel, view receipts — 10 methods) → renamed to new **`VoiceMessagingApi`** (8 methods; `voiceReceiptsPost` and `voiceReceiptsReadPut` were dropped, see [§13](#13-endpointsmethods-removed-in-v2)).
- Legacy **`VoiceDeliveryReceiptRulesApi`** (create/update/delete/view delivery-receipt rules — 5 methods) → renamed to new **`VoiceApi`** (5 methods, 1:1).

The new `VoiceApi` has **nothing to do with sending voice calls** — it is purely the old delivery-receipt-rules class under a new name. To migrate voice-sending code, import `VoiceMessagingApi`:

```typescript
// Wrong — this compiles, but VoiceApi in v2 only has delivery-receipt-rule methods
const voiceApi = new VoiceApi(configuration);
voiceApi.sendVoiceMessage(...); // does not exist on this class — TypeScript will reject it

// Correct
const voiceMessagingApi = new VoiceMessagingApi(configuration);
voiceMessagingApi.sendVoiceMessage({ sendVoiceMessageRequest });
```

Also note: `voiceHistoryGet` was renamed to `getVoiceHistory` on `VoiceMessagingApi` — not `viewVoiceHistory`, which would be the more "expected" pattern given every other `view*` method in the SDK. Verify this specific name against `api/voiceMessagingApi.ts` before you rely on autocomplete guessing it.

## 13. Endpoints/methods removed in v2

### Entire products dropped

The **Fax**, **Letters**, and **Postcards** products have **no presence at all** in the v2 SDK — no API class, no models. If your integration sends faxes, letters, or postcards, there is currently no v2 SDK path for it; call the REST API directly or stay on the legacy SDK for those channels.

| Legacy class(es) | Covered (legacy) | v2 |
|---|---|---|
| `FAXApi` (7 methods), `FAXDeliveryReceiptRulesApi` (5), `InboundFAXRulesApi` (5) | send fax, fax history/export, fax price, fax receipts, fax delivery-receipt rules, inbound fax rules | _none_ |
| `PostLetterApi` (4) | send letter, letter history/export, letter price | _none_ |
| `PostPostcardApi` (4) | send postcard, postcard history/export, postcard price | _none_ |
| `DetectAddressApi` (1) | address detection/parsing (`detectAddressPost`) | _none_ |

### Individual methods dropped (class otherwise survived)

The following legacy operations have **no equivalent anywhere in the v2 SDK** — confirmed by enumerating every method in all 26 v2 API files and finding no counterpart. If your integration depends on any of these, check the current ClickSend API reference before upgrading — the underlying endpoint may have been retired, moved, or simply not covered by the new spec at build time:

- `AccountApi.accountPost` — update account details
- `AccountApi.accountVerifySendPut` — send account verification email
- `AccountApi.accountVerifyVerifyByActivationTokenPut` — verify account by activation token
- `AccountApi.forgotPasswordVerifyPut` — verify a forgotten-password token
- `MMSApi.mmsReceiptsGet` — view MMS delivery receipts
- `MMSApi.mmsReceiptsReadPut` — mark MMS receipts as read
- `VoiceApi.voiceReceiptsPost` (legacy class) — create a test voice receipt
- `VoiceApi.voiceReceiptsReadPut` (legacy class) — mark voice receipts as read

Additionally, **pagination parameters (`page`, `limit`, `updatedAfter`) were dropped** from several method signatures even where the class survived — confirmed on `ListsApi.viewLists`, `ListsApi.viewListContacts`, and `SubaccountsApi.viewSubaccounts` (see [§11](#11-side-by-side-examples-for-common-operations)).

## 14. Brand-new resources and methods in v2

No legacy counterpart at all — nothing to migrate, but worth knowing they exist:

- **`AlphaTagsApi`** — `listAlphaTags`, `getAlphaTag`, `requestAlphaTag`, `deleteAlphaTag`
- **`DefaultSendersApi`** — `getDefaultSendersList`, `getDefaultSenderDetails`, `createDefaultSender`, `updateDefaultSender`, `deleteDefaultSender`, `listCompliantSenderTypes`
- **`OwnNumbersApi`** (Bring Your Own Number) — `listOwnNumbers`, `getOwnNumberDetail`, `updateOwnNumber`, `deleteOwnNumber`, `requestOwnNumberVerificationOtp`, `verifyOwnNumberOtp`
- **`UrlShorteningApi`** — `shortUrlGetStatistics`, `shortUrlGetTracking`
- **`NumbersApi.registerNumbers`** — number registration (alongside the renamed `NumberApi` methods)
- **`SmsApi.viewASpecificSmsTemplate`** and **`SmsApi.viewASpecificInboundSmsMessage`** — fetch a single template / inbound message by ID (legacy only exposed the list endpoints)

## 15. Step-by-step migration checklist

1. **Swap the dependency**: `npm uninstall @clicksend/clicksend-nodejs`, then `npm install clicksend` (confirm the correct npm package name for your account first — see [§2](#2-installation--imports)).
2. **Switch to `Configuration`-based construction**: build a `new Configuration({ username, password })` once and pass it into every API class constructor, instead of setting `.username`/`.password` or passing raw credential strings ([§3](#3-authentication--client-setup)).
3. **Update client instantiation**: rename API class references to their new casing (`SMSApi` → `SmsApi`, `MMSApi` → `MmsApi`, `FAXApi`/`PostLetterApi`/`PostPostcardApi` have no replacement at all). **Pay special attention to `VoiceApi` → `VoiceMessagingApi`** ([§12](#12-the-voice-naming-trap-read-this-before-touching-voice-code)).
4. **Confirm you don't depend on Fax, Letters, or Postcards** — these product areas were dropped entirely and have no v2 equivalent ([§13](#13-endpointsmethods-removed-in-v2)).
5. **Rebuild every call as a single request-parameters object**: `contentType`, any path/id parameter, and the request body (a plain object literal works fine) are now all named properties of one object argument — there's no more positional order to get right and no more passing `undefined` as a placeholder ([§6](#6-request-payloads-request-models-replace-reusable-domain-models)). The sender field stays `from` in both SDKs — no rename needed there.
6. **Check every multi-word field name inside a request or response body against the actual TypeScript interface** — they're `snake_case` (`media_file`, `email_address_id`, `response_msg`, …), not camelCase, and a wrong name fails silently rather than raising a compile or runtime error ([§6](#6-request-payloads-request-models-replace-reusable-domain-models), [§7](#7-response-payloads-are-now-properly-typed)). This is a real regression versus the previous `typescript-node`-based v2 build, which did camelCase these — don't assume prior v2 experience covers it.
7. **Rename every method call** using the [§10](#10-class-by-class-mapping-all-37-legacy-classes)/[§11](#11-side-by-side-examples-for-common-operations) tables or your editor's autocomplete against the new class.
8. **Re-check which parameters exist** for every call you update — several methods changed types (`listId` number → string), added params (`orderBy`), or dropped pagination params entirely ([§11](#11-side-by-side-examples-for-common-operations), [§13](#13-endpointsmethods-removed-in-v2)). Parameter *order* no longer matters (everything's named), but the parameter *set* did change in places.
9. **Update response handling**: `response.body` → `response.data` everywhere — v2 resolves to a typed axios `AxiosResponse<T>`, not a raw JSON string; delete manual `JSON.parse`/property-digging where it's no longer needed ([§7](#7-response-payloads-are-now-properly-typed)).
10. **Update error handling**: catch axios's own `AxiosError` (`axios.isAxiosError(error)`), and read `error.response.status` / `error.response.data` instead of legacy's `error.response.statusCode` / `error.body` — there is no `HttpError` class in v2 ([§8](#8-error-handling-changes)).
11. **Replace any `addInterceptor()` usage** with an `axios.interceptors.request.use(...)` callback on your own `AxiosInstance`, passed as the 3rd constructor argument to each API class — the legacy hook doesn't exist in v2 ([§9](#9-concurrency-model--request-customization)).
12. **Check for removed endpoints** your integration relies on ([§13](#13-endpointsmethods-removed-in-v2)) and confirm a replacement exists in the current API before shipping.
13. **Test each migrated call against ClickSend's sandbox/test credentials** before deploying — as this migration itself demonstrated, a wrong field name can produce a 400 with no compile-time warning, so an actual live-API smoke test (not just `tsc` passing) is the only real confirmation. TypeScript will catch most renamed methods and dropped parameters, but plain-JavaScript consumers and any `any`-typed call sites need this most.

---

**Further resources:** full REST API reference at https://developers.clicksend.com/docs/rest/v3/; per-class TypeScript definitions in `dist/index.d.ts` of the installed `clicksend` package; support via https://clicksend.com/contact or the [Help Centre](https://help.clicksend.com/).
