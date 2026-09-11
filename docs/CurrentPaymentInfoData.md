# CurrentPaymentInfoData

The data returned by the API call.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_number** | **string** | The credit card number. | [optional] [default to undefined]
**expiry_month** | **number** | The credit card expiry month. | [optional] [default to undefined]
**expiry_year** | **number** | The credit card expiry year. | [optional] [default to undefined]
**name** | **string** | The credit card name. | [optional] [default to undefined]

## Example

```typescript
import { CurrentPaymentInfoData } from 'clicksend';

const instance: CurrentPaymentInfoData = {
    display_number,
    expiry_month,
    expiry_year,
    name,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
