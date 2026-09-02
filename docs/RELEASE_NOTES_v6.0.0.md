# ClickSend Node.js SDK v6.0.0

The first release of the **next-generation ClickSend Node.js SDK**, published from the new [`clicksend-nodejs-v2`](https://github.com/ClickSend/clicksend-nodejs-v2) repository.

This SDK is built fresh against ClickSend's current REST API, replacing the previous hand-maintained SDK. Although it lives in a new repo, it continues the version line of the legacy `clicksend-nodejs` package (previously `5.1.7`) — hence **6.0.0**, a major bump signalling breaking changes.

> ⚠️ **This is not a drop-in replacement.** Method names, request/response shapes, class groupings, and error handling have all changed. Read the [Migration Guide](https://github.com/ClickSend/clicksend-nodejs-v2/blob/v6.0.0/docs/MIGRATION.md) before upgrading.

## Installation

```sh
npm install clicksend@6.0.0
```

Also published to GitHub Packages as `@clicksend/clicksend-nodejs-v2`.

## What's new

- **Resource-oriented API classes** — 26 classes, one per resource/tag (`SmsApi`, `MmsApi`, `EmailApi`, `VoiceMessagingApi`, `ContactsApi`, `ListsApi`, …), down from 36 loosely-grouped legacy classes. Several legacy classes were merged (five email classes → one `EmailApi`); a couple were split; and the Fax, Letters, and Postcards classes were dropped entirely.
- **Readable method names** — methods are now named after what they do (`sendSms`, `viewSmsHistory`, `exportSmsHistory`) instead of the old `resourcePathHttpVerb` pattern (`smsSendPost`, `smsHistoryGet`).
- **Typed request models** — every operation takes a dedicated `*Request` model (`SendSmsRequest`, `CreateSubaccountRequest`, …) instead of broad reusable domain models.
- **Typed response models** — response bodies are deserialized into specific model classes (`SendSms`, `ViewSmsHistory`, …). `response.body` is now meaningfully typed; no more manual `JSON.parse`.
- **Real error objects** — non-2xx responses reject with an `HttpError` (extends `Error`) exposing `.message`, `.name`, `.response`, `.body`, and `.statusCode`, instead of a plain `{ response, body }` object.
- **Request interceptors** — `addInterceptor()` on every API class to mutate outgoing request options (custom headers, logging, tracing).
- **Bearer-token auth** — `HttpBearerAuth` added alongside the existing Basic / API-key / OAuth auth types.

## New resources and methods (no legacy equivalent)

- `AlphaTagsApi` — list / get / request / delete alpha tags
- `DefaultSendersApi` — manage default sender IDs and compliant sender types
- `OwnNumbersApi` — Bring Your Own Number: list, detail, update, delete, request/verify OTP
- `UrlShorteningApi` — short-URL statistics and tracking
- `NumbersApi.registerNumbers` — number registration
- `SmsApi.viewASpecificInboundSmsMessage`, `SmsApi.viewASpecificSmsTemplate` — fetch a single record by ID

## Breaking changes

- Package name is `clicksend` (npm); the scoped legacy name `@clicksend/clicksend-nodejs` is no longer published from this line.
- Every API class and method has been renamed — no mechanical find-and-replace works. See the [class-by-class mapping](https://github.com/ClickSend/clicksend-nodejs-v2/blob/v6.0.0/docs/MIGRATION.md#10-class-by-class-mapping-all-36-legacy-classes).
- ⚠️ **Voice naming trap:** legacy `VoiceApi` (sending) → new **`VoiceMessagingApi`**; legacy `VoiceDeliveryReceiptRulesApi` → new **`VoiceApi`**. The new `VoiceApi` does *not* send voice calls.
- `defaultBasePath` changed from `https://rest.clicksend.com/v3` to `https://rest.clicksend.com`; the `/v3` prefix is now part of each method path. Update any custom `basePath` that ended in `/v3`.
- `authentications.BasicAuth` → `authentications.basicAuth` (casing).
- Every method takes a leading `contentType?: string` argument for the `Content-Type` header.
- Pagination parameters (`page`, `limit`, `updatedAfter`) were dropped from several method signatures, including `ListsApi.viewLists`, `ListsApi.viewListContacts`, and `SubaccountsApi.viewSubaccounts`.
- **Fax, Letters, and Postcards are not part of the v2 SDK** — the `FAXApi` / `FAXDeliveryReceiptRulesApi` / `InboundFAXRulesApi`, `PostLetterApi`, and `PostPostcardApi` classes (and all their models) have no v2 equivalent. `DetectAddressApi` was also dropped.
- Some other legacy endpoints have no v2 equivalent (various account-verification, receipt-read, and test-receipt operations) — see [Endpoints removed in v2](https://github.com/ClickSend/clicksend-nodejs-v2/blob/v6.0.0/docs/MIGRATION.md#13-endpointsmethods-removed-in-v2).

## Requirements

- Node.js 18+ (built and tested on Node 22)
- TypeScript 4.x or 5.x (types shipped)

## Migration

Full guide: [docs/MIGRATION.md](https://github.com/ClickSend/clicksend-nodejs-v2/blob/v6.0.0/docs/MIGRATION.md) — covers imports, auth, base paths, the naming convention change, request/response model changes, error handling, the complete legacy→v2 class map, side-by-side examples, and a step-by-step checklist.
