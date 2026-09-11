# VerifyAllowedEmailAddressRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**to** | [**Array&lt;SendEmailRequestToInner&gt;**](SendEmailRequestToInner.md) |  | [optional] [default to undefined]
**from** | [**SendEmailVerificationTokenRequestFrom**](SendEmailVerificationTokenRequestFrom.md) |  | [optional] [default to undefined]
**subject** | **string** |  | [optional] [default to undefined]
**body** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { VerifyAllowedEmailAddressRequest } from 'clicksend';

const instance: VerifyAllowedEmailAddressRequest = {
    to,
    from,
    subject,
    body,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
