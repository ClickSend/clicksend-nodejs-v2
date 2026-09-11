# MarkSpecificInboundSmsMessageAsRead


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**http_code** | **number** | The HTTP code of the response. Visit [this page](/#status-codes) for more information. | [optional] [default to undefined]
**response_code** | **string** | The response code of the operation. Visit [this page](/#status-codes) for more information. | [optional] [default to undefined]
**response_msg** | **string** | A message describing the outcome of the operation. | [optional] [default to undefined]
**data** | **number** | The number of SMS marked as read.  If you have multiple inbound rules set to POLL, you will receive the inbound message multiple times. Reading it will mark all those messages as read. | [optional] [default to undefined]

## Example

```typescript
import { MarkSpecificInboundSmsMessageAsRead } from 'clicksend';

const instance: MarkSpecificInboundSmsMessageAsRead = {
    http_code,
    response_code,
    response_msg,
    data,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
