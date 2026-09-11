# DeliveryIssue


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**issue_id** | **string** | The unique identifier of the delivery issue. | [optional] [default to undefined]
**user_id** | **number** | The unique identifier of the user. | [optional] [default to undefined]
**message_id** | **string** | The message id of the message. | [optional] [default to undefined]
**type** | **string** | The type of message, must be one of the following values SMS, MMS, VOICE, EMAIL_MARKETING, EMAIL_TRANSACTIONAL, FAX, POST. | [optional] [default to undefined]
**description** | **string** | The description of the message. | [optional] [default to undefined]
**client_comments** | **string** | The user\&#39;s comments. | [optional] [default to undefined]
**support_comments** | **string** | The support\&#39;s comments. | [optional] [default to undefined]
**status** | **string** | The status of the delivery issue. | [optional] [default to undefined]
**date_added** | **number** | The date and time the delivery issue was created. | [optional] [default to undefined]
**resolved** | **number** | Flag indicating if the delivery issue is resolved. | [optional] [default to undefined]
**email_address** | **string** | The user\&#39;s email address. | [optional] [default to undefined]

## Example

```typescript
import { DeliveryIssue } from 'clicksend';

const instance: DeliveryIssue = {
    issue_id,
    user_id,
    message_id,
    type,
    description,
    client_comments,
    support_comments,
    status,
    date_added,
    resolved,
    email_address,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
