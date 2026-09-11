# SendSmsData

The parameters related to messages.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**total_price** | **number** | The total price of sending the messages. Visit [this page](/#status-codes) for more information. | [optional] [default to undefined]
**total_count** | **number** | The total number of messages sent from the request. | [optional] [default to undefined]
**queued_count** | **number** | The messages will be put in a queue if it goes through the validation process. The validation process checks whether the **Sender ID** is registered or not. Some countries don\&#39;t require messages to go through the validation process.  Messages scheduled to be sent right away will be sent immediately. If not, it will be queued. | [optional] [default to undefined]
**messages** | [**Array&lt;SmsSendSms&gt;**](SmsSendSms.md) | The parameters related to messages. | [optional] [default to undefined]
**_currency** | [**Currency**](Currency.md) |  | [optional] [default to undefined]
**blocked_count** | **number** | The number of messages unable to be sent. This is often caused by:  - Receipient’s country not enabled for &lt;a href&#x3D;\&quot;https://help.clicksend.com/article/qdavyt16qs-global-sending\&quot;&gt;global sending&lt;/a&gt;.      - **Sender ID** resitriction.      - Number registration restrcition. | [optional] [default to undefined]

## Example

```typescript
import { SendSmsData } from 'clicksend';

const instance: SendSmsData = {
    total_price,
    total_count,
    queued_count,
    messages,
    _currency,
    blocked_count,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
