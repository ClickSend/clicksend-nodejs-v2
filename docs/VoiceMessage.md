# VoiceMessage


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**date** | **string** | The date, if applicable. May be null; see also &#x60;date_added&#x60;. | [optional] [default to undefined]
**date_added** | **number** | The Unix timestamp when the message was added. | [optional] [default to undefined]
**list_id** | **string** | The ID of the list associated with the message, if applicable. | [optional] [default to undefined]
**to** | **string** | The recipient\&#39;s phone number. | [optional] [default to undefined]
**to_type** | **string** | The type of recipient. | [optional] [default to undefined]
**body** | **string** | The body of the message. | [optional] [default to undefined]
**from** | **string** | The sender\&#39;s phone number. | [optional] [default to undefined]
**lang** | **string** | The language of the message. | [optional] [default to undefined]
**voice** | **string** | The voice of the message. | [optional] [default to undefined]
**schedule** | [**VoiceMessageSchedule**](VoiceMessageSchedule.md) |  | [optional] [default to undefined]
**message_id** | **string** | The ID of the message. | [optional] [default to undefined]
**message_parts** | [**VoiceMessageSchedule**](VoiceMessageSchedule.md) |  | [optional] [default to undefined]
**message_price** | **string** | The price of the message. | [optional] [default to undefined]
**custom_string** | **string** | The custom string of the message. | [optional] [default to undefined]
**user_id** | **number** | The ID of the user. | [optional] [default to undefined]
**subaccount_id** | **number** | The ID of the subaccount. | [optional] [default to undefined]
**country** | **string** | The country code of the message. | [optional] [default to undefined]
**require_input** | **number** | The require input of the message. | [optional] [default to undefined]
**machine_detection** | **number** | The machine detection of the message. | [optional] [default to undefined]
**machine_detected** | **number** | Flag indicating if an answering machine was detected. | [optional] [default to undefined]
**digits** | **string** | The digits entered by the recipient, if any input was collected. | [optional] [default to undefined]
**carrier** | **string** | The carrier of the recipient\&#39;s phone number. | [optional] [default to undefined]
**status_code** | **string** | The status code of the message. | [optional] [default to undefined]
**status_text** | **string** | A human-readable description of the status. | [optional] [default to undefined]
**status** | **string** | The status of the message. | [optional] [default to undefined]
**_api_username** | **string** | The API username associated with the message. | [optional] [default to undefined]

## Example

```typescript
import { VoiceMessage } from 'clicksend';

const instance: VoiceMessage = {
    date,
    date_added,
    list_id,
    to,
    to_type,
    body,
    from,
    lang,
    voice,
    schedule,
    message_id,
    message_parts,
    message_price,
    custom_string,
    user_id,
    subaccount_id,
    country,
    require_input,
    machine_detection,
    machine_detected,
    digits,
    carrier,
    status_code,
    status_text,
    status,
    _api_username,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
