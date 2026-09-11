# OwnNumber


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | The unique identifier for the record. | [optional] [default to undefined]
**account_id** | **string** | The unique identifier for the account. | [optional] [default to undefined]
**workspace_id** | **string** | The unique identifier for the workspace. | [optional] [default to undefined]
**user_id** | **string** | The unique identifier for the user. | [optional] [default to undefined]
**phone_number** | **string** | The user\&#39;s phone number. | [optional] [default to undefined]
**country** | **string** | The country code of the phone number. | [optional] [default to undefined]
**label** | **string** | A label for the phone number. | [optional] [default to undefined]
**status** | **string** | The status of the phone number. | [optional] [default to undefined]
**verified_timestamp** | **string** | The timestamp when the phone number was verified. | [optional] [default to undefined]
**notified_timestamp** | **string** | The timestamp when the user was last notified about this number, if applicable. | [optional] [default to undefined]
**is_nearing_expiration** | **boolean** | Indicates whether the phone number verification is nearing its expiration date: - **true:** The verification was completed more than 11 months ago and will expire soon. You should re-verify your phone number to maintain uninterrupted service. - **false:** The verification is still valid and not approaching expiration. | [optional] [default to undefined]
**created_timestamp** | **string** | The timestamp when the record was created. | [optional] [default to undefined]
**updated_timestamp** | **string** | The timestamp when the record was last updated. | [optional] [default to undefined]

## Example

```typescript
import { OwnNumber } from 'clicksend';

const instance: OwnNumber = {
    id,
    account_id,
    workspace_id,
    user_id,
    phone_number,
    country,
    label,
    status,
    verified_timestamp,
    notified_timestamp,
    is_nearing_expiration,
    created_timestamp,
    updated_timestamp,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
