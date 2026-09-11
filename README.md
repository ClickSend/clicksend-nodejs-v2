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
- **First-class TypeScript** — every method takes a single, fully-typed request-parameters object; typed models for every request and response, `.d.ts` shipped in the package
- **Built on axios** — bring your own `AxiosInstance` for interceptors, proxies, retries, or custom transports
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

Every API class takes a `Configuration` instance holding your credentials. Every method takes a single request-parameters object — there's no positional `contentType` argument to remember or skip.

> **Field names inside request/response bodies are `snake_case`** (e.g. `media_file`, `email_address_id`, `list_id`), matching the API's wire format exactly — they are **not** camelCased. Only the outer request-parameters object's own keys (the method's named arguments, like `sendSmsRequest` or `listId`) are camelCase. Check the TypeScript types (or the [API reference](https://developers.clicksend.com/docs/rest/v3/)) for the exact field name rather than guessing.

```typescript
import { Configuration, SmsApi } from 'clicksend';

const configuration = new Configuration({
  username: process.env.CLICKSEND_USERNAME,
  password: process.env.CLICKSEND_API_KEY,
});

const smsApi = new SmsApi(configuration);

const { data } = await smsApi.sendSms({
  sendSmsRequest: {
    messages: [
      {
        source: 'sdk',
        body: 'Hello from ClickSend!',
        to: '+61411111111',
      },
    ],
  },
});

console.log(data);
```

## More Examples

### View account details

```typescript
import { Configuration, ManagementApi } from 'clicksend';

const configuration = new Configuration({
  username: process.env.CLICKSEND_USERNAME,
  password: process.env.CLICKSEND_API_KEY,
});

const managementApi = new ManagementApi(configuration);

const { data } = await managementApi.viewAccountDetails();
console.log(data);
```

### Send an MMS

```typescript
import { Configuration, MmsApi } from 'clicksend';

const configuration = new Configuration({
  username: process.env.CLICKSEND_USERNAME,
  password: process.env.CLICKSEND_API_KEY,
});

const mmsApi = new MmsApi(configuration);

const { data } = await mmsApi.sendMms({
  sendMmsRequest: {
    media_file: 'https://clicksend.com/logo.png',
    messages: [
      {
        to: '+61411111111',
        from: 'sdk',
        subject: 'Hello',
        body: 'Hello from ClickSend!',
        source: 'sdk',
      },
    ],
  },
});

console.log(data);
```

## Configuration

```typescript
import axios from 'axios';
import { Configuration, SmsApi } from 'clicksend';

const configuration = new Configuration({
  username: process.env.CLICKSEND_USERNAME,
  password: process.env.CLICKSEND_API_KEY,
  // Override the API base URL (default: https://rest.clicksend.com).
  basePath: 'https://rest.clicksend.com',
  // Headers sent on every request from this client.
  baseOptions: { headers: { 'X-My-Header': 'value' } },
});

// Bring your own axios instance for interceptors, proxies, retries, etc.
const axiosInstance = axios.create();
axiosInstance.interceptors.request.use((config) => {
  console.log(config.method, config.url);
  return config;
});

const smsApi = new SmsApi(configuration, undefined, axiosInstance);
```

Each API method also accepts a final `options` argument (an `AxiosRequestConfig`) for per-call overrides, e.g. `{ headers: { ... } }`.

## Error Handling

Every method returns a promise that resolves to an `AxiosResponse` (`.data`, `.status`, `.headers`) and rejects with an `AxiosError` on non-2xx responses:

```typescript
try {
  const { data } = await smsApi.sendSms({ sendSmsRequest: { messages: [/* ... */] } });
  console.log(data);
} catch (err) {
  if (axios.isAxiosError(err)) {
    console.error(err.response?.status, err.response?.data); // HTTP status + parsed error payload
  } else {
    throw err;
  }
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
