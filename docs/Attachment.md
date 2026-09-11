# Attachment


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**file_name** | **string** | The name of the attached file. | [optional] [default to undefined]
**content_type** | **string** | The MIME type of the attached file. | [optional] [default to undefined]
**content_disposition** | **string** | The content disposition of the attached file. | [optional] [default to undefined]
**content_id** | **string** | The content ID of the attached file. | [optional] [default to undefined]
**_attachment_file_url** | **string** | The URL to download the attached file. | [optional] [default to undefined]

## Example

```typescript
import { Attachment } from 'clicksend';

const instance: Attachment = {
    file_name,
    content_type,
    content_disposition,
    content_id,
    _attachment_file_url,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
