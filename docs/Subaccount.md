# Subaccount


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**subaccount_id** | **number** | The unique identifier for the subaccount. | [optional] [default to undefined]
**api_username** | **string** | The API username of the subaccount. | [optional] [default to undefined]
**email** | **string** | The email address of the subaccount. | [optional] [default to undefined]
**phone_number** | **string** | The phone number of the subaccount. | [optional] [default to undefined]
**first_name** | **string** | The first name of the subaccount. | [optional] [default to undefined]
**last_name** | **string** | The last name of the subaccount. | [optional] [default to undefined]
**api_key** | **string** | The API key of the subaccount. | [optional] [default to undefined]
**access_smpp** | **number** | Flag indicating if the subaccount has access to SMPP. | [optional] [default to undefined]
**access_users** | **number** | Flag indicating if the subaccount has access to users. | [optional] [default to undefined]
**access_billing** | **number** | Flag indicating if the subaccount has access to billing. | [optional] [default to undefined]
**access_reporting** | **number** | Flag indicating if the subaccount has access to reporting. | [optional] [default to undefined]
**access_contacts** | **number** | Flag indicating if the subaccount has access to contacts. | [optional] [default to undefined]
**access_settings** | **number** | Flag indicating if the subaccount has access to settings. | [optional] [default to undefined]
**access_sms** | **number** | Flag indicating if the subaccount has access to SMS. | [optional] [default to undefined]
**access_email** | **number** | Flag indicating if the subaccount has access to email. | [optional] [default to undefined]
**access_voice** | **number** | Flag indicating if the subaccount has access to voice services. | [optional] [default to undefined]
**access_fax** | **number** | Flag indicating if the subaccount has access to fax services. | [optional] [default to undefined]
**access_post** | **number** | Flag indicating if the subaccount has access to post services. | [optional] [default to undefined]
**access_reseller** | **number** | Flag indicating if the subaccount has access to reseller services. | [optional] [default to undefined]
**access_global_sending** | **number** | Flag indicating if the subaccount has access to global sending. | [optional] [default to undefined]
**access_mms** | **number** | Flag indicating if the subaccount has access to MMS services. | [optional] [default to undefined]
**hide_pricing** | **number** | Flag indicating if pricing is hidden for the subaccount. | [optional] [default to undefined]
**share_campaigns** | **number** | Flag indicating if the subaccount can share campaigns. | [optional] [default to undefined]
**notes** | **string** | Additional notes for the subaccount. | [optional] [default to undefined]
**is_main** | **number** | Flag indicating if this is the main account rather than a subaccount. | [optional] [default to undefined]
**sign_up_type** | **string** | The sign-up type used to create the subaccount, if applicable. | [optional] [default to undefined]

## Example

```typescript
import { Subaccount } from 'clicksend';

const instance: Subaccount = {
    subaccount_id,
    api_username,
    email,
    phone_number,
    first_name,
    last_name,
    api_key,
    access_smpp,
    access_users,
    access_billing,
    access_reporting,
    access_contacts,
    access_settings,
    access_sms,
    access_email,
    access_voice,
    access_fax,
    access_post,
    access_reseller,
    access_global_sending,
    access_mms,
    hide_pricing,
    share_campaigns,
    notes,
    is_main,
    sign_up_type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
