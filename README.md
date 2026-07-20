# ClickSend Node.js SDK

Official Node.js / TypeScript client for the [ClickSend API](https://developers.clicksend.com/) — send and manage SMS, MMS, email, voice, fax, letters, postcards, and more.

## Installation

```sh
npm install clicksend
```

## Getting Started

```typescript
import { SmsApi } from 'clicksend';

const smsApi = new SmsApi(
  process.env.CLICKSEND_USERNAME,
  process.env.CLICKSEND_API_KEY
);

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

## Authentication

The API uses HTTP Basic authentication — your ClickSend **username** and **API key** (available from the [ClickSend Dashboard](https://dashboard.clicksend.com/#/account/subaccount)).

## Documentation

Full API reference: https://developers.clicksend.com/docs/rest/v3/

## Support

Need help? Contact [ClickSend Support](https://clicksend.com/contact) or visit the [Help Centre](https://help.clicksend.com/).