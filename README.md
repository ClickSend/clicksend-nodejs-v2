# ClickSend Node.js SDK

[![npm version](https://img.shields.io/npm/v/clicksend.svg)](https://www.npmjs.com/package/clicksend)
[![npm downloads](https://img.shields.io/npm/dm/clicksend.svg)](https://www.npmjs.com/package/clicksend)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Types: TypeScript](https://img.shields.io/badge/types-TypeScript-blue.svg)](https://www.typescriptlang.org/)

Official Node.js / TypeScript client for the [ClickSend API](https://developers.clicksend.com/) — send SMS, MMS, voice and email messages, run SMS and MMS campaigns, manage numbers, contacts and subaccounts, and pull delivery receipts and reporting through a single authenticated HTTPS client.

This library is generated from ClickSend's official OpenAPI v3 specification and is maintained by ClickSend. It covers every endpoint of the [ClickSend REST API](https://developers.clicksend.com/docs/rest/v3/).

- 📚 **API reference:** https://developers.clicksend.com/docs/rest/v3/
- 🔑 **Dashboard & API credentials:** https://dashboard.clicksend.com
- 🗂 **Source & issues:** https://github.com/ClickSend/clicksend-nodejs-v2
- 💬 **Support:** https://help.clicksend.com

## Features

- **Messaging** — SMS, MMS, voice / text-to-speech, transactional email, email-to-SMS
- **Campaigns** — SMS and MMS campaigns
- **Numbers & sender IDs** — dedicated numbers, own numbers, alpha tags, default senders
- **Contacts** — contact lists, contacts and the address book
- **Account & billing** — account details, transactions, subaccounts, referrals, reseller accounts
- **Delivery & reporting** — delivery receipts, inbound messages, statistics
- **Extras** — URL shortening, file uploads, number verification, international messaging
- **First-class TypeScript** — typed models for every request and response, `.d.ts` shipped in the package
- **HTTP Basic auth** with your ClickSend username and API key
- **Identifiable traffic** — requests are sent with a `ClickSend-SDK/<version>/nodejs` `User-Agent` by default
- MIT licensed

## Requirements

- Node.js 14 or newer

## Installation

```sh
npm install clicksend
```

## Authentication

Every API class authenticates with HTTP Basic auth using your ClickSend **username** and **API key**, both available from the [ClickSend Dashboard](https://dashboard.clicksend.com/#/account/subaccount). Supply them through environment variables rather than hard-coding them:

```sh
export CLICKSEND_USERNAME="your-username"
export CLICKSEND_API_KEY="your-api-key"
```

## Quickstart

```typescript
import { SmsApi } from 'clicksend';

const smsApi = new SmsApi(
  process.env.CLICKSEND_USERNAME,
  process.env.CLICKSEND_API_KEY
);

// The first argument is the optional `contentType` header — pass `undefined` to use the default.
// The request body is the second argument.
smsApi.sendSms(undefined, {
  messages: [
    {
      source: 'sdk',
      body: 'Hello from ClickSend!',
      to: '+61411111111',
    },
  ],
}).then(({ body }) => {
  console.log(body);
});
```

## More Examples

### View account details

```typescript
import { ManagementApi } from 'clicksend';

const managementApi = new ManagementApi(
  process.env.CLICKSEND_USERNAME,
  process.env.CLICKSEND_API_KEY
);

managementApi.viewAccountDetails().then(({ body }) => {
  console.log(body);
});
```

### Send an MMS

```typescript
import { MmsApi } from 'clicksend';

const mmsApi = new MmsApi(
  process.env.CLICKSEND_USERNAME,
  process.env.CLICKSEND_API_KEY
);

// As with `sendSms`, the first argument is the optional `contentType` header — pass `undefined`.
mmsApi.sendMms(undefined, {
  mediaFile: 'https://clicksend.com/logo.png',
  messages: [
    {
      to: '+61411111111',
      from: 'sdk',
      subject: 'Hello',
      body: 'Hello from ClickSend!',
      source: 'sdk',
    },
  ],
}).then(({ body }) => {
  console.log(body);
});
```

## Configuration

```typescript
import { SmsApi } from 'clicksend';

// Optional third argument overrides the API base URL (default: https://rest.clicksend.com).
const smsApi = new SmsApi(
  process.env.CLICKSEND_USERNAME,
  process.env.CLICKSEND_API_KEY,
  'https://rest.clicksend.com'
);

// Add headers sent on every request from this client.
smsApi.defaultHeaders = { 'X-My-Header': 'value' };

// Inspect or mutate every outgoing request (logging, tracing, custom auth).
smsApi.addInterceptor((requestOptions) => {
  console.log(requestOptions.method, requestOptions.uri);
});
```

Each API method also accepts a final `options` argument for per-call overrides, e.g. `{ headers: { ... } }`.

## Error Handling

API calls return a promise that resolves to `{ response, body }` and rejects with an `HttpError` on non-2xx responses:

```typescript
try {
  const { body } = await smsApi.sendSms(undefined, { messages: [/* ... */] });
  console.log(body);
} catch (err) {
  // err.statusCode — HTTP status code
  // err.body       — parsed error payload from the API
  console.error(err.statusCode, err.body);
}
```

## Documentation

- Full REST API reference: https://developers.clicksend.com/docs/rest/v3/
- Per-endpoint SDK docs: the [`docs/`](docs) directory in this repository
- Source code: https://github.com/ClickSend/clicksend-nodejs-v2

## Versioning

This package follows [semantic versioning](https://semver.org/). Breaking changes are released as major versions.

## Support

- Help Centre: https://help.clicksend.com
- Contact support: https://clicksend.com/contact
- SDK bugs and feature requests: https://github.com/ClickSend/clicksend-nodejs-v2/issues

## License

Released under the [MIT License](https://opensource.org/licenses/MIT).

---

**Keywords:** clicksend, sms, sms api, send sms, bulk sms, text message, texting, mms, mms api, voice, voice call, text to speech, tts, ivr, email to sms, sms campaign, mms campaign, url shortening, number verification, messaging, notifications, otp, 2fa, two factor authentication, transactional sms, marketing sms, appointment reminders, alerts, nodejs, node, typescript, rest api, clicksend sdk
