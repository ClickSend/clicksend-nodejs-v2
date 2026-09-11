# SmsTemplateUpdate

The parameters related to the actual templates.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**template_id** | **number** | The generated ID of the template. This remains the same and can’t be updated. | [optional] [default to undefined]
**body** | **string** | The new updated content of the template. | [optional] [default to undefined]
**template_name** | **string** | The new updated name of the template. | [optional] [default to undefined]

## Example

```typescript
import { SmsTemplateUpdate } from 'clicksend';

const instance: SmsTemplateUpdate = {
    template_id,
    body,
    template_name,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
