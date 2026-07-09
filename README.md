# ClickSend Node.js SDK

Official Node.js / TypeScript client for the [ClickSend API](https://developers.clicksend.com/) — send and manage SMS, MMS, email, voice, fax, letters, postcards, and more.

## Installation

```sh
npm install clicksend
```

## Getting Started

```typescript
import { Configuration, SmsApi } from 'clicksend';

const configuration = new Configuration({
  username: process.env.CLICKSEND_USERNAME,
  password: process.env.CLICKSEND_API_KEY,
});

const smsApi = new SmsApi(configuration);

smsApi.smsSendPost({
  messages: [
    {
      source: 'sdk',
      body: 'Hello from ClickSend!',
      to: '+61411111111',
    },
  ],
}).then((response) => {
  console.log(response.data);
});
```

## Authentication

The API uses HTTP Basic authentication — your ClickSend **username** and **API key** (available from the [ClickSend Dashboard](https://dashboard.clicksend.com/#/account/subaccount)).

## Documentation

Full API reference: https://developers.clicksend.com/docs/rest/v3/

## Support

Need help? Contact [ClickSend Support](https://clicksend.com/contact) or visit the [Help Centre](https://help.clicksend.com/).
