# CalculateSmsPrice


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**http_code** | **number** | The HTTP code of the response. Visit [this page](/#status-codes) for more information.  This parameter doesn’t reflect the status of each message. Check the status parameter of the message object to view the status of the individual message. | [optional] [default to undefined]
**response_code** | **string** | The response code of the operation. Visit [this page](/#status-codes) for more information. | [optional] [default to undefined]
**response_msg** | **string** | A message describing the outcome of the operation. | [optional] [default to undefined]
**data** | [**CalculateSmsPriceData**](CalculateSmsPriceData.md) |  | [optional] [default to undefined]

## Example

```typescript
import { CalculateSmsPrice } from 'clicksend';

const instance: CalculateSmsPrice = {
    http_code,
    response_code,
    response_msg,
    data,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
