# SendMmsData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**total_price** | **number** | The total price of the MMS messages. | [optional] [default to undefined]
**total_count** | **number** | The total count of the MMS messages. | [optional] [default to undefined]
**queued_count** | **number** | The count of the queued MMS messages. | [optional] [default to undefined]
**messages** | [**Array&lt;Mms&gt;**](Mms.md) |  | [optional] [default to undefined]

## Example

```typescript
import { SendMmsData } from 'clicksend';

const instance: SendMmsData = {
    total_price,
    total_count,
    queued_count,
    messages,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
