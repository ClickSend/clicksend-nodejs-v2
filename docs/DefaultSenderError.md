# DefaultSenderError


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**http_code** | **number** | HTTP status code of the response. | [default to undefined]
**response_code** | **string** | Code indicating the result of the response. | [default to undefined]
**response_msg** | **string** | Message providing additional information. | [default to undefined]
**data** | **object** |  | [optional] [default to undefined]
**details** | [**Array&lt;DefaultSenderErrorDetailsInner&gt;**](DefaultSenderErrorDetailsInner.md) | List of error details | [default to undefined]

## Example

```typescript
import { DefaultSenderError } from 'clicksend';

const instance: DefaultSenderError = {
    http_code,
    response_code,
    response_msg,
    data,
    details,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
