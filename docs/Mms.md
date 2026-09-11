# Mms


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**list_id** | **string** | The ID of the list (if applicable). | [optional] [default to undefined]
**contact_id** | **number** | The ID of the contact. | [optional] [default to undefined]
**message_id** | **string** | The ID of the message. | [optional] [default to undefined]
**to** | **string** | The recipient of the message. | [optional] [default to undefined]
**subject** | **string** | The subject of the message. | [optional] [default to undefined]
**from** | **string** | The sender of the message. | [optional] [default to undefined]
**body** | **string** | The body of the message. | [optional] [default to undefined]
**country** | **string** | The country code. | [optional] [default to undefined]
**custom_string** | **string** | Custom string associated with the message. | [optional] [default to undefined]
**schedule** | **string** | The schedule time of the message. | [optional] [default to undefined]
**message_parts** | **number** | The number of parts the message was split into. | [optional] [default to undefined]
**message_price** | **string** | The price of the message. | [optional] [default to undefined]
**_media_file_url** | **string** | The URL of the media file attached to the message. | [optional] [default to undefined]
**status** | **string** | The status of the message. | [optional] [default to undefined]

## Example

```typescript
import { Mms } from 'clicksend';

const instance: Mms = {
    list_id,
    contact_id,
    message_id,
    to,
    subject,
    from,
    body,
    country,
    custom_string,
    schedule,
    message_parts,
    message_price,
    _media_file_url,
    status,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
