# GetTrackingDataInnerContact


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contact_id** | **string** | Contact ID of the recipient. Null if the recipient is not a contact. | [optional] [default to undefined]
**first_name** | **string** | First name of the recipient. Null if the recipient has no data for first name. | [optional] [default to undefined]
**last_name** | **string** | Last name of the recipient. Null if the recipient has no data last name. | [optional] [default to undefined]
**phone_number** | **string** | Phone number of the recipient | [optional] [default to undefined]

## Example

```typescript
import { GetTrackingDataInnerContact } from 'clicksend';

const instance: GetTrackingDataInnerContact = {
    contact_id,
    first_name,
    last_name,
    phone_number,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
