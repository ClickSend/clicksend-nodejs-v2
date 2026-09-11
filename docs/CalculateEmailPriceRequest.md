# CalculateEmailPriceRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**to** | [**Array&lt;SendEmailRequestToInner&gt;**](SendEmailRequestToInner.md) |  | [optional] [default to undefined]
**from** | [**SendEmailRequestFrom**](SendEmailRequestFrom.md) |  | [optional] [default to undefined]
**subject** | **string** |  | [optional] [default to undefined]
**body** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { CalculateEmailPriceRequest } from 'clicksend';

const instance: CalculateEmailPriceRequest = {
    to,
    from,
    subject,
    body,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
