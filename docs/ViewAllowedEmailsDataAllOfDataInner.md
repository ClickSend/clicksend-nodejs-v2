# ViewAllowedEmailsDataAllOfDataInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email_address_id** | **number** | The ID of the email address. | [optional] [default to undefined]
**email_address** | **string** | The email address. | [optional] [default to undefined]
**from** | **string** | The sender. | [optional] [default to undefined]
**subaccount_id** | **number** | The ID of the subaccount that owns this email address. | [optional] [default to undefined]
**from_fax** | **string** | The fax number used as the sender, if applicable. | [optional] [default to undefined]
**voice** | **string** | The voice used when this email address triggers a voice message. | [optional] [default to undefined]
**lang** | **string** | The language used when this email address triggers a voice message. | [optional] [default to undefined]
**_subaccount_name** | **string** | The name of the subaccount that owns this email address. | [optional] [default to undefined]

## Example

```typescript
import { ViewAllowedEmailsDataAllOfDataInner } from 'clicksend';

const instance: ViewAllowedEmailsDataAllOfDataInner = {
    email_address_id,
    email_address,
    from,
    subaccount_id,
    from_fax,
    voice,
    lang,
    _subaccount_name,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
