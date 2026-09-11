# VoiceReceipt


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**timestamp_send** | **string** | Timestamp of the original send request in UNIX format. e.g 1439173980 | [optional] [default to undefined]
**timestamp** | **string** | Timestamp of delivery report in UNIX format. e.g 1439173981 | [optional] [default to undefined]
**message_id** | **string** | Message ID, returned when originally sending the message. | [optional] [default to undefined]
**status_code** | **string** | Status code. Refer to \&#39;Voice Delivery Status Codes\&#39; in docs. | [optional] [default to undefined]
**status_text** | **string** | Status text. | [optional] [default to undefined]
**error_code** | **string** | Error code. | [optional] [default to undefined]
**error_text** | **string** | Error text. | [optional] [default to undefined]
**custom_string** | **string** | A custom string used when sending the original message. | [optional] [default to undefined]
**message_type** | **string** | voice (constant). | [optional] [default to undefined]
**digits** | **string** | Numbers the recipient pressed on their keypad during the call. A blank string will be used if they didn\&#39;t provide any input. | [optional] [default to undefined]

## Example

```typescript
import { VoiceReceipt } from 'clicksend';

const instance: VoiceReceipt = {
    timestamp_send,
    timestamp,
    message_id,
    status_code,
    status_text,
    error_code,
    error_text,
    custom_string,
    message_type,
    digits,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
