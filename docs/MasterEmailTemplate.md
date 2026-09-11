# MasterEmailTemplate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**template_id_master** | **number** | The unique identifier for the template. | [optional] [default to undefined]
**template_name** | **string** | The name of the template. | [optional] [default to undefined]
**date_added** | **number** | The date the template was added. | [optional] [default to undefined]
**body** | **string** | The body of the template. | [optional] [default to undefined]
**thumbnail** | [**MasterEmailTemplateThumbnail**](MasterEmailTemplateThumbnail.md) |  | [optional] [default to undefined]

## Example

```typescript
import { MasterEmailTemplate } from 'clicksend';

const instance: MasterEmailTemplate = {
    template_id_master,
    template_name,
    date_added,
    body,
    thumbnail,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
