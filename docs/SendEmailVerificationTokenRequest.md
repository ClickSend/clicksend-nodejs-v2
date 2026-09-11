# SendEmailVerificationTokenRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**to** | [**Array&lt;SendEmailVerificationTokenRequestToInner&gt;**](SendEmailVerificationTokenRequestToInner.md) |  | [optional] [default to undefined]
**from** | [**SendEmailVerificationTokenRequestFrom**](SendEmailVerificationTokenRequestFrom.md) |  | [optional] [default to undefined]
**subject** | **string** |  | [optional] [default to undefined]
**body** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { SendEmailVerificationTokenRequest } from 'clicksend';

const instance: SendEmailVerificationTokenRequest = {
    to,
    from,
    subject,
    body,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
