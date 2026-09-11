# SendVoiceMessageData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**total_price** | **number** | The total price of the message. | [optional] [default to undefined]
**total_count** | **number** | The total count of the message. | [optional] [default to undefined]
**queued_count** | **number** | The count of the queued message. | [optional] [default to undefined]
**messages** | [**Array&lt;VoiceMessage&gt;**](VoiceMessage.md) |  | [optional] [default to undefined]
**_currency** | [**Currency**](Currency.md) |  | [optional] [default to undefined]

## Example

```typescript
import { SendVoiceMessageData } from 'clicksend';

const instance: SendVoiceMessageData = {
    total_price,
    total_count,
    queued_count,
    messages,
    _currency,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
