# BuyNumberRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dedicated_number** | **string** | Phone number to purchase | [default to undefined]
**type** | **string** | Service type for the number | [default to undefined]
**registration_data** | [**BuyNumberRequestRegistrationData**](BuyNumberRequestRegistrationData.md) |  | [optional] [default to undefined]

## Example

```typescript
import { BuyNumberRequest } from 'clicksend';

const instance: BuyNumberRequest = {
    dedicated_number,
    type,
    registration_data,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
