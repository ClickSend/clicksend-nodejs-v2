# CreateDeliveryIssueData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**issue_id** | **number** | The ID of the created delivery issue. | [optional] [default to undefined]
**user_id** | **number** | The ID of the user who created the delivery issue. | [optional] [default to undefined]
**message_id** | **string** | The ID of the message associated with the delivery issue. | [optional] [default to undefined]
**type** | **string** | The type of delivery issue. | [optional] [default to undefined]
**description** | **string** | The description of the delivery issue. | [optional] [default to undefined]
**date_added** | **number** | The timestamp of when the delivery issue was created. | [optional] [default to undefined]
**email_address** | **string** | The email address associated with the delivery issue. | [optional] [default to undefined]

## Example

```typescript
import { CreateDeliveryIssueData } from 'clicksend';

const instance: CreateDeliveryIssueData = {
    issue_id,
    user_id,
    message_id,
    type,
    description,
    date_added,
    email_address,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
