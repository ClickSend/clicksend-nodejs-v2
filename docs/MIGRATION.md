# Migration Guide: clicksend-nodejs (legacy) → clicksend-nodejs-v2

This guide helps you migrate from the legacy ClickSend Node.js SDK (generated with **swagger-codegen**) to the new v2 SDK (generated with **openapi-generator**). The two SDKs are **not drop-in compatible** — method names, request/response shapes, and a few internals have changed. Read this guide fully before upgrading, then use the class/method mapping tables to update your code.

## Table of contents

1. [Why this migration isn't a drop-in replacement](#1-why-this-migration-isnt-a-drop-in-replacement)
2. [Installation & imports](#2-installation--imports)
3. [Authentication & client setup](#3-authentication--client-setup)
4. [Base path / URL changes](#4-base-path--url-changes)
5. [Method naming convention change](#5-method-naming-convention-change)
6. [Request payloads: `*Request` models replace reusable domain models](#6-request-payloads-request-models-replace-reusable-domain-models)
7. [Response payloads are now properly typed](#7-response-payloads-are-now-properly-typed)
8. [Error handling changes](#8-error-handling-changes)
9. [New feature: request interceptors](#9-new-feature-request-interceptors)
10. [Class-by-class mapping (all 36 legacy classes)](#10-class-by-class-mapping-all-36-legacy-classes)
11. [Side-by-side examples for common operations](#11-side-by-side-examples-for-common-operations)
12. [The Voice naming trap (read this before touching voice code)](#12-the-voice-naming-trap-read-this-before-touching-voice-code)
13. [Endpoints/methods removed in v2](#13-endpointsmethods-removed-in-v2)
14. [Brand-new resources and methods in v2](#14-brand-new-resources-and-methods-in-v2)
15. [Step-by-step migration checklist](#15-step-by-step-migration-checklist)

---

## 1. Why this migration isn't a drop-in replacement

The legacy SDK was hand-maintained on top of a **swagger-codegen** template and grew organically: one API class per rough "concept" (e.g. `EmailMarketingApi`, `TransactionalEmailApi`, `MasterEmailTemplatesApi`, `UserEmailTemplatesApi`, `EmailDeliveryReceiptRulesApi` were five *separate* classes), method names followed a `resourcePathHttpVerb` pattern (`smsSendPost`, `smsHistoryGet`), and response bodies were never deserialized into real types (always typed `string`).

The v2 SDK is generated fresh from ClickSend's OpenAPI 3 specification using **openapi-generator**, which:

- Groups methods into **one class per resource/tag** (26 classes instead of 36 — several legacy classes were merged, a couple were split, and the Fax, Letters, and Postcards classes were dropped entirely — see §13).
- Names methods after the endpoint's **operationId** (`sendSms`, `viewSmsHistory`, `exportSmsHistory`) instead of `resource+verb`.
- Wraps every request body in a dedicated, single-purpose `*Request` model class instead of reusing broad domain models.
- Properly deserializes every response body into a specific typed model class.
- Adds a real `HttpError` (an `Error` subclass) instead of rejecting promises with a plain `{response, body}` object.
- Adds request interceptors and Bearer-token auth, which didn't exist before.

None of this changes the underlying REST API — it's the same ClickSend v3 API — but it does change **every call site** in your existing integration.

---

## 2. Installation & imports

| | Legacy | v2 |
|---|---|---|
| npm package name (per `package.json`) | `@clicksend/clicksend-nodejs` | `clicksend` |
| Version at time of writing | `5.1.7` | `6.0.0` |
| Main entry | `api.js` (compiled from a single `api.ts`) | `dist/api.js` (compiled from `api.ts` which re-exports `api/apis` and `model/models`) |
| Import style | `const ClickSend = require('clicksend');` | `const ClickSend = require('clicksend');` (same, once installed) |

```bash
# Uninstall the legacy package
npm uninstall @clicksend/clicksend-nodejs

# Install the new package
npm install clicksend
```

> **Check what's actually published on npm before you upgrade.** The legacy repo's own README instructs `npm install clicksend`, which conflicts with the scoped name (`@clicksend/clicksend-nodejs`) in its `package.json`. Confirm the exact package names/versions on the npm registry for your account before changing your `package.json`, since the authoritative name is whatever ClickSend has actually published, not what's in either repo's `package.json` on disk.

TypeScript imports are unchanged in style — you still import classes directly off the package root:

```typescript
import { SmsApi, SendSmsRequest } from 'clicksend';
```

The difference is *which* classes exist and what they're named (see §10 below). Both SDKs also export a build target of `dist/api.d.ts` types once compiled, so editor autocomplete will guide you to the new names once the new package is installed — that's often the fastest way to discover a renamed method.

---

## 3. Authentication & client setup

Client construction is unchanged in *shape* — you still either pass `basePath` alone, or `(username, password, basePath?)`:

```javascript
// Works identically in both SDKs
const smsApi = new ClickSend.SmsApi(); // legacy: new ClickSend.SMSApi()
smsApi.username = 'YOUR_USERNAME';
smsApi.password = 'YOUR_API_KEY';

// or, constructor form (also identical in both)
const smsApi = new ClickSend.SmsApi('YOUR_USERNAME', 'YOUR_API_KEY');
```

What changed under the hood (only matters if you touch `.authentications` directly instead of the `username`/`password` setters):

| | Legacy | v2 |
|---|---|---|
| Basic-auth key in `authentications` map | `authentications.BasicAuth` (capital B) | `authentications.basicAuth` (lowercase b) |
| Auth types available | `HttpBasicAuth`, `ApiKeyAuth`, `OAuth`, `VoidAuth` | Same, **plus `HttpBearerAuth`** (new) |

If your code does `smsApi.authentications.BasicAuth.username = ...` directly (uncommon, but some integrations do this to share one `HttpBasicAuth` instance across multiple API clients), update the casing to `basicAuth`. If you only ever used the `.username` / `.password` setters or the constructor, **no change is needed** here.

---

## 4. Base path / URL changes

| | Legacy | v2 |
|---|---|---|
| `defaultBasePath` | `https://rest.clicksend.com/v3` | `https://rest.clicksend.com` |
| Per-method path | `/sms/send` (no version prefix — it's baked into the base path) | `/v3/sms/send` (version prefix is part of each method's path) |

The final resolved URL is identical in both cases (`https://rest.clicksend.com/v3/sms/send`). This only matters if:

- You've overridden `basePath` (e.g. to point at a proxy or a mock server). If your custom base path currently ends in `/v3` for the legacy SDK, **remove the `/v3` suffix** when you switch to v2 — otherwise you'll end up requesting `.../v3/v3/sms/send`.
- You're constructing raw URLs anywhere in test mocks/fixtures that assume the legacy base path.

---

## 5. Method naming convention change

Every method on every API class has been renamed. There is no shared prefix/suffix rule you can find-and-replace — the new names follow the OpenAPI spec's `operationId`, which reads like an English sentence, while the old ones followed `resourcePath` + HTTP verb.

Examples:

| Legacy | v2 |
|---|---|
| `smsSendPost` | `sendSms` |
| `smsHistoryGet` | `viewSmsHistory` |
| `smsHistoryExportGet` | `exportSmsHistory` |
| `smsTemplatesByTemplateIdDelete` | `deleteSmsTemplate` |
| `listsContactsByListIdPost` | `createNewContact` |
| `subaccountsPost` | `createSubaccount` |

**You cannot mechanically derive the new name from the old one.** Use the mapping tables in §10–11 of this guide, or open the relevant `*Api.ts` file under `api/` in this repo and use your editor's autocomplete against the class instance — the new names are descriptive enough that the right method is usually the first sensible autocomplete match.

---

## 6. Request payloads: `*Request` models replace reusable domain models

Legacy method signatures took a broad, reusable domain model directly as the payload:

```javascript
// Legacy
const smsMessage = new ClickSend.SmsMessage();
smsMessage.to = '+1234567890';
smsMessage.body = 'Hello from ClickSend!';

const smsCollection = new ClickSend.SmsMessageCollection();
smsCollection.messages = [smsMessage];

smsApi.smsSendPost(smsCollection);
```

v2 introduces **one dedicated `*Request` model per operation**, and every method also takes a leading (or near-leading) `contentType?: string` parameter for the `Content-Type` header:

```javascript
// v2
const sendSmsRequest = new ClickSend.SendSmsRequest();
sendSmsRequest.messages = [
  { to: '+1234567890', body: 'Hello from ClickSend!' }
];

smsApi.sendSms('application/json', sendSmsRequest);
```

Practical implications:

- Model class names you currently import (`SmsMessage`, `SmsMessageCollection`, `Email`, `VoiceMessage`, `Contact`, `ContactList`, `Subaccount`, etc.) mostly **do not exist** in v2 by those names. The `model/` folder now has ~384 files, almost all named after a specific operation (`sendSmsRequest.ts`, `createNewContactRequest.ts`, `createSubaccountRequest.ts`, …) rather than a domain noun. (Fax, Letters, and Postcards models were dropped altogether — see §13.)
- Property names on the models themselves are unchanged in style — still camelCase in TypeScript, serialized to snake_case JSON on the wire via the same `attributeTypeMap` mechanism both SDKs use. If you were building message objects with `smsMessage.to = ...` / `smsMessage.body = ...`, the equivalent fields exist on the new `*Request` models with the same names; you just build them via a different class.
- The `contentType` parameter is optional and almost always `'application/json'` — pass it explicitly or `undefined`; the underlying request logic will still set the `Content-Type` header appropriately either way, but the parameter must be accounted for positionally in every call you update.

---

## 7. Response payloads are now properly typed

Legacy responses were **always typed `string`**, regardless of the actual JSON shape, and were never truly deserialized into a model — you had to know the response shape out-of-band (from the API docs) and treat `response.body` as `any` in practice.

```javascript
// Legacy — response.body is nominally `string`, actually a raw JSON blob you must interpret yourself
smsApi.smsSendPost(smsCollection).then((response) => {
  console.log(response.body); // no real typing/autocomplete
});
```

v2 deserializes every response into a specific, per-operation model class (e.g. `SendSms`, `ViewSmsHistory`, `CalculateSmsPrice`), so `response.body` is now meaningfully typed and autocomplete-friendly:

```javascript
// v2 — response.body is a real SendSms instance
smsApi.sendSms('application/json', sendSmsRequest).then((response) => {
  console.log(response.body.data); // typed, autocompletes
});
```

If your legacy code parses `response.body` manually (`JSON.parse`, manual property digging, etc.), you can likely delete that logic — the SDK now does it for you. Double-check any code that assumed `response.body` was a raw string.

---

## 8. Error handling changes

Legacy: non-2xx responses reject the promise with a **plain object**, not an `Error`:

```javascript
// Legacy
smsApi.smsSendPost(smsCollection).catch((error) => {
  // error is NOT an Error instance — it's { response, body }
  console.error(error.message); // undefined! there is no .message
});
```

v2: non-2xx responses reject with a proper `HttpError` (extends `Error`), exposing `.message`, `.name`, `.response`, `.body`, and `.statusCode`:

```javascript
// v2
smsApi.sendSms('application/json', sendSmsRequest).catch((error) => {
  console.error(error.message);    // 'HTTP request failed'
  console.error(error.statusCode); // e.g. 400
  console.error(error.body);       // the raw response body
});
```

**Audit every `.catch()` block in your integration.** If you were previously accessing `error.response` / `error.body` directly (which still works — those properties survive on `HttpError` too), you're fine. If you were checking `error.message`, `error instanceof Error`, or logging via an error-tracking tool that expects a real `Error`, your error handling will behave differently (better) after migrating, but verify it doesn't assume the old plain-object shape.

---

## 9. New feature: request interceptors

v2 adds an `addInterceptor()` method to every API class, letting you mutate outgoing request options (e.g. to add custom headers, logging, or tracing) before each call — a hook the legacy SDK never had:

```javascript
smsApi.addInterceptor((requestOptions) => {
  requestOptions.headers['X-Request-Id'] = generateRequestId();
});
```

This is purely additive — nothing to migrate, just a capability you may want to adopt (e.g. to replace any monkey-patching you were doing around the legacy `request` library options).

---

## 10. Class-by-class mapping (all 36 legacy classes)

26 v2 classes now cover what used to be 36 legacy classes. Some legacy classes merged together (e.g. five email-related classes became one `EmailApi`); one legacy class split in two (`ContactApi`); the Fax, Letters, and Postcards classes were **dropped entirely** (see §13); and — critically — two legacy Voice classes **swapped roles** in v2 naming (see §12).

| Legacy Class | → | New Class(es) | Notes |
|---|---|---|---|
| `AccountApi` | → | `ManagementApi`, `VerificationApi` | Split: account-detail/usage methods → `ManagementApi`; forgot-password/username → `VerificationApi`. Some methods have no v2 equivalent — see §13. |
| `AccountRechargeApi` | → | `TransactionsApi` | Renamed 1:1. |
| `ContactApi` | → | `ContactsApi`, `ListsApi` | Split: single-contact-by-id CRUD → `ContactsApi`; list-scoped contact operations (create/list/copy/transfer/remove-opted-out) → `ListsApi`. |
| `ContactListApi` | → | `ListsApi` | Renamed 1:1. |
| `CountriesApi` | → | `InternationalMessagingApi` | Folded in. |
| `DeliveryIssuesApi` | → | `MessageDeliveryApi` | Renamed 1:1. Not related to the delivery-*receipt-rule* classes below, despite the similar name. |
| `DetectAddressApi` | → | _(removed)_ | Address detection/parsing has no v2 equivalent — see §13. |
| `EmailDeliveryReceiptRulesApi` | → | `EmailApi` | Folded into the unified `EmailApi`. |
| `EmailMarketingApi` | → | `EmailApi` | Folded into the unified `EmailApi`. |
| `EmailToSmsApi` | → | `EmailToSmsApi` | Same class name, methods renamed. |
| `FAXApi` | → | _(removed)_ | Fax is not part of the v2 SDK — see §13. |
| `FAXDeliveryReceiptRulesApi` | → | _(removed)_ | Fax is not part of the v2 SDK — see §13. |
| `GlobalSendingApi` | → | `InternationalMessagingApi` | Renamed 1:1. |
| `InboundFAXRulesApi` | → | _(removed)_ | Fax is not part of the v2 SDK — see §13. |
| `InboundSMSRulesApi` | → | `SmsApi` | Folded into the unified `SmsApi`. |
| `MMSApi` | → | `MmsApi` | Renamed 1:1 for most methods; 2 dropped — see §13. |
| `MasterEmailTemplatesApi` | → | `EmailApi` | Folded into the unified `EmailApi`. |
| `MmsCampaignApi` | → | `MmsCampaignsApi` | Renamed 1:1. |
| `NumberApi` | → | `NumbersApi` | Renamed 1:1, plus a brand-new `registerNumbers` method — see §14. |
| `PostLetterApi` | → | _(removed)_ | Letters is not part of the v2 SDK — see §13. |
| `PostPostcardApi` | → | _(removed)_ | Postcards is not part of the v2 SDK — see §13. |
| `PostReturnAddressApi` | → | `AddressesApi` | Renamed 1:1. |
| `ReferralAccountApi` | → | `ReferralsApi` | Renamed 1:1. |
| `ResellerAccountApi` | → | `ResellerApi` | Merged with `TransferCreditApi`. |
| `SMSApi` | → | `SmsApi` | Renamed 1:1 for all core methods. |
| `SMSDeliveryReceiptRulesApi` | → | `SmsApi` | Folded into the unified `SmsApi`. |
| `SearchApi` | → | `ListsApi` | Folded in as `viewContactLists`. |
| `SmsCampaignApi` | → | `SmsCampaignsApi` | Renamed 1:1. |
| `StatisticsApi` | → | `StatisticsApi` | Same class name, methods renamed. |
| `SubaccountApi` | → | `SubaccountsApi` | Renamed 1:1. |
| `TimezonesApi` | → | `InternationalMessagingApi` | Folded in as `timezones`. |
| `TransactionalEmailApi` | → | `EmailApi` | Folded into the unified `EmailApi`. |
| `TransferCreditApi` | → | `ResellerApi` | Merged with `ResellerAccountApi` as `resellerTransferCredit`. |
| `UploadApi` | → | `UploadsApi` | Renamed 1:1. |
| `UserEmailTemplatesApi` | → | `EmailApi` | Folded into the unified `EmailApi`. |
| `VoiceApi` (send/history/price) | → | **`VoiceMessagingApi`** | ⚠️ See §12 — this is *not* the new `VoiceApi`. |
| `VoiceDeliveryReceiptRulesApi` | → | **`VoiceApi`** | ⚠️ See §12 — the new `VoiceApi` only has delivery-receipt-rule methods. |

`AlphaTagsApi`, `DefaultSendersApi`, `OwnNumbersApi`, and `UrlShorteningApi` in v2 have **no legacy predecessor at all** — see §14.

---

## 11. Side-by-side examples for common operations

### Send an SMS

```javascript
// Legacy
const smsMessage = new ClickSend.SmsMessage();
smsMessage.to = '+1234567890';
smsMessage.body = 'Hello from ClickSend!';
const smsCollection = new ClickSend.SmsMessageCollection();
smsCollection.messages = [smsMessage];

smsApi.smsSendPost(smsCollection)
  .then((response) => console.log(response.body))
  .catch((error) => console.error(error));

// v2
const sendSmsRequest = new ClickSend.SendSmsRequest();
sendSmsRequest.messages = [{ to: '+1234567890', body: 'Hello from ClickSend!' }];

smsApi.sendSms('application/json', sendSmsRequest)
  .then((response) => console.log(response.body))
  .catch((error) => console.error(error.message, error.statusCode));
```

### View SMS history

```javascript
// Legacy
smsApi.smsHistoryGet(q, dateFrom, dateTo, page, limit);

// v2 — note the parameter order changed and `orderBy` was added
smsApi.viewSmsHistory('application/json', page, limit, q, orderBy, dateFrom, dateTo);
```

> Always pass named/documented parameters in the order given by the new method signature — don't positionally port a legacy call without checking the new signature, since order and param sets changed (this one gained `orderBy` and reordered everything else).

### Send an MMS / Email / Voice message

The pattern is identical across every channel — construct a `Send<Channel>Request`, call `send<Channel>(...)`:

| Channel | Legacy call | v2 call |
|---|---|---|
| MMS | `mmsApi.mmsSendPost(mmsMessageCollection)` | `mmsApi.sendMms('application/json', sendMmsRequest)` |
| Email | `emailApi.emailSendPost(email)` | `emailApi.sendEmail('application/json', sendEmailRequest)` |
| Voice | `voiceApi.voiceSendPost(voiceMessageCollection)` (legacy `VoiceApi`) | `voiceMessagingApi.sendVoiceMessage('application/json', sendVoiceMessageRequest)` (⚠️ new `VoiceMessagingApi` class, see §12) |

> **Fax, Letters, and Postcards are not part of the v2 SDK** — there is no `sendFax` / `sendLetter` / `sendPostcard` equivalent. See §13.

### Create a contact in a list

```javascript
// Legacy
contactApi.listsContactsByListIdPost(contact, listId);

// v2 — note listId is now the FIRST parameter, and is a string, not a number
listsApi.createNewContact(String(listId), 'application/json', createNewContactRequest);
```

### List contacts / lists — pagination parameters were dropped

```javascript
// Legacy — page/limit/updatedAfter were real typed parameters
contactApi.listsContactsByListIdGet(listId, page, limit, updatedAfter);
contactListApi.listsGet(page, limit);

// v2 — these typed parameters no longer exist on the method signature
listsApi.viewListContacts(String(listId), 'application/json');
listsApi.viewLists('application/json');
```

**This is a real behavior change, not just a rename** — verify with the current API reference whether pagination is now handled another way (e.g. response-level pagination metadata, or a different endpoint) for any workflow that relied on `page`/`limit` here, since the new SDK signature no longer accepts them as typed arguments. The same drop applies to `subaccountsApi.viewSubaccounts`.

### Create a subaccount

```javascript
// Legacy
subaccountApi.subaccountsPost(subaccount);

// v2
subaccountsApi.createSubaccount('application/json', createSubaccountRequest);
```

---

## 12. The Voice naming trap (read this before touching voice code)

This is the single most confusing rename in the whole migration, and a naive search-and-replace of `VoiceApi` will silently point your code at the wrong class:

- Legacy **`VoiceApi`** (send a voice message, view/export history, calculate price, view receipts) → renamed to new **`VoiceMessagingApi`**.
- Legacy **`VoiceDeliveryReceiptRulesApi`** (create/update/delete/view delivery-receipt rules) → renamed to new **`VoiceApi`**.

In other words, the new `VoiceApi` class has **nothing to do with sending voice calls** — it's purely the old delivery-receipt-rules class under a new name. If you're migrating voice-sending code, you must import `VoiceMessagingApi`, not `VoiceApi`:

```javascript
// Wrong — this compiles, but VoiceApi in v2 only has delivery-receipt-rule methods
const voiceApi = new ClickSend.VoiceApi();
voiceApi.sendVoiceMessage(...); // does not exist on this class

// Correct
const voiceMessagingApi = new ClickSend.VoiceMessagingApi();
voiceMessagingApi.sendVoiceMessage('application/json', sendVoiceMessageRequest);
```

---

## 13. Endpoints/methods removed in v2

### Entire products dropped

The **Fax**, **Letters**, and **Postcards** products have **no presence at all** in the v2 SDK — no API class, no models. If your integration sends faxes, letters, or postcards, there is currently no v2 SDK path for it; you would need to call the REST API directly or stay on the legacy SDK for those channels.

| Legacy class(es) | Covered (legacy) | v2 |
|---|---|---|
| `FAXApi`, `FAXDeliveryReceiptRulesApi`, `InboundFAXRulesApi` | send fax, fax history/export, fax price, fax receipts, fax delivery-receipt rules, inbound fax rules | _none_ |
| `PostLetterApi` | send letter, letter history/export, letter price | _none_ |
| `PostPostcardApi` | send postcard, postcard history/export, postcard price | _none_ |
| `DetectAddressApi` | address detection/parsing | _none_ |

### Individual methods dropped (class otherwise survived)

The following legacy operations have **no equivalent anywhere in the v2 SDK** (verified — no matching path exists in any of the 26 new API files). If your integration depends on any of these, check the current ClickSend API reference before upgrading, since the underlying REST endpoint may have been retired, moved elsewhere, or simply not yet covered by the new SDK's generated spec at the time it was built:

- `AccountApi.accountPost` — update account details
- `AccountApi.accountVerifySendPut` — send account verification email
- `AccountApi.accountVerifyVerifyByActivationTokenPut` — verify account by activation token
- `AccountApi.forgotPasswordVerifyPut` — verify a forgotten-password token
- `MMSApi.mmsReceiptsGet` — view MMS delivery receipts
- `MMSApi.mmsReceiptsReadPut` — mark MMS receipts as read
- `VoiceApi.voiceReceiptsPost` (legacy class) — create a test voice receipt
- `VoiceApi.voiceReceiptsReadPut` (legacy class) — mark voice receipts as read

Additionally, as noted in §11, **pagination parameters (`page`, `limit`, `updatedAfter`) were dropped from several typed method signatures** even where the surrounding class survived — notably `ListsApi.viewLists`, `ListsApi.viewListContacts`, and `SubaccountsApi.viewSubaccounts`.

---

## 14. Brand-new resources and methods in v2

These have no legacy counterpart at all — nothing to migrate, but worth knowing they're now available:

- **`AlphaTagsApi`** — `listAlphaTags`, `getAlphaTag`, `requestAlphaTag`, `deleteAlphaTag`
- **`DefaultSendersApi`** — manage default sender IDs and compliant sender types
- **`OwnNumbersApi`** (Bring Your Own Number) — `listOwnNumbers`, `getOwnNumberDetail`, `updateOwnNumber`, `deleteOwnNumber`, `requestOwnNumberVerificationOtp`, `verifyOwnNumberOtp`
- **`UrlShorteningApi`** — short URL statistics and tracking
- **`NumbersApi.registerNumbers`** — number registration (added alongside the existing renamed `NumberApi` methods)
- **`SmsApi.viewASpecificInboundSmsMessage`** and **`SmsApi.viewASpecificSmsTemplate`** — fetch a single inbound message / template by ID (legacy only exposed list endpoints for these)

---

## 15. Step-by-step migration checklist

1. **Swap the dependency**: uninstall the legacy package, install the new one (confirm the correct npm package name for your account first — see §2).
2. **Update client instantiation**: rename any `SMSApi`/`MMSApi` (etc.) class references to their new casing (`SmsApi`/`MmsApi`), and **pay special attention to `VoiceApi` → `VoiceMessagingApi`** (§12).
3. **Rebuild every request payload** using the matching `*Request` model instead of the old domain model, and add the leading `contentType` argument to every call (§6).
4. **Rename every method call** using §10/§11's mapping tables, or your editor's autocomplete against the new class.
5. **Re-check parameter order and presence** for every call you update — several methods reordered parameters or dropped pagination params entirely (§11, §13). Don't assume positional compatibility.
6. **Update response handling** to use the newly-typed `response.body` instead of manually parsing a raw string (§7).
7. **Update error handling** to expect a real `HttpError` (`.message`, `.statusCode`) instead of a plain `{response, body}` object (§8).
8. **Check for removed endpoints and dropped products** your integration relies on (§13) — the entire Fax, Letters, and Postcards products are gone from the v2 SDK — and confirm a replacement exists in the current API before shipping.
9. **Consider adopting interceptors** (§9) if you were previously monkey-patching request options.
10. **Test each migrated call against ClickSend's sandbox/test credentials** before deploying — given the scope of method/model renames, compile-time TypeScript errors will catch most breakages, but JavaScript consumers should smoke-test each endpoint they use.
