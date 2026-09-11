# ContactList


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**list_id** | **number** | The unique identifier for the list. | [optional] [default to undefined]
**list_name** | **string** | The name of the list. | [optional] [default to undefined]
**list_email_id** | **string** | The email address id of the list. | [optional] [default to undefined]
**_contacts_count** | **number** | The number of contacts in the list. | [optional] [default to undefined]
**_import_in_progress** | **number** | Flag indicating if a contact import is currently in progress for this list. | [optional] [default to undefined]
**_optout_in_progress** | **number** | Flag indicating if an opt-out removal is currently in progress for this list. | [optional] [default to undefined]

## Example

```typescript
import { ContactList } from 'clicksend';

const instance: ContactList = {
    list_id,
    list_name,
    list_email_id,
    _contacts_count,
    _import_in_progress,
    _optout_in_progress,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
