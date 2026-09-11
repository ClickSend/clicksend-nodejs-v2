# PostReturnAddress


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**return_address_id** | **number** | The ID of the return address. | [optional] [default to undefined]
**user_id** | **number** | The ID of the user associated with the return address. | [optional] [default to undefined]
**address_name** | **string** | The name associated with the return address. | [optional] [default to undefined]
**address_line_1** | **string** | The first line of the return address. | [optional] [default to undefined]
**address_line_2** | **string** | The second line of the return address (optional). | [optional] [default to undefined]
**address_city** | **string** | The city of the return address. | [optional] [default to undefined]
**address_state** | **string** | The state or region of the return address. | [optional] [default to undefined]
**address_postal_code** | **string** | The postal code or ZIP code of the return address. | [optional] [default to undefined]
**address_country** | **string** | The country of the return address. | [optional] [default to undefined]

## Example

```typescript
import { PostReturnAddress } from 'clicksend';

const instance: PostReturnAddress = {
    return_address_id,
    user_id,
    address_name,
    address_line_1,
    address_line_2,
    address_city,
    address_state,
    address_postal_code,
    address_country,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
