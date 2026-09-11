# VerifyOwnNumberOtp


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | The ID of the verification request. | [optional] [default to undefined]
**own_number_id** | **string** | The ID of the own number. | [optional] [default to undefined]
**status** | **string** | The status of the verification request. | [optional] [default to undefined]
**expires_timestamp** | **string** | The expiration timestamp of the verification request. | [optional] [default to undefined]
**remaining_attempts** | **number** | The number of remaining attempts. | [optional] [default to undefined]
**created_timestamp** | **string** | The creation timestamp of the verification request. | [optional] [default to undefined]
**updated_timestamp** | **string** | The last update timestamp of the verification request. | [optional] [default to undefined]

## Example

```typescript
import { VerifyOwnNumberOtp } from 'clicksend';

const instance: VerifyOwnNumberOtp = {
    id,
    own_number_id,
    status,
    expires_timestamp,
    remaining_attempts,
    created_timestamp,
    updated_timestamp,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
