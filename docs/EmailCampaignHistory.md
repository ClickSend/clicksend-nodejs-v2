# EmailCampaignHistory


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email_campaign_id** | **number** | The ID of the email campaign. | [optional] [default to undefined]
**from_name** | **string** | The name of the sender. | [optional] [default to undefined]
**from_address** | **string** | The email address of the sender. | [optional] [default to undefined]
**to_name** | **string** | The name of the recipient. | [optional] [default to undefined]
**to_address** | **string** | The email address of the recipient. | [optional] [default to undefined]
**contact_id** | **number** | The ID of the contact associated with the email. | [optional] [default to undefined]
**subject** | **string** | The subject of the email. | [optional] [default to undefined]
**message_id** | **string** | The unique ID of the email message. | [optional] [default to undefined]
**processed_at** | **string** | The date and time when the email was processed. | [optional] [default to undefined]
**status** | **string** | The status of the email (e.g., SpamReport, Sent). | [optional] [default to undefined]
**open_count** | **number** | The count of times the email was opened. | [optional] [default to undefined]
**click_count** | **number** | The count of times links in the email were clicked. | [optional] [default to undefined]
**hard_bounce_count** | **number** | The count of hard bounces for the email. | [optional] [default to undefined]
**soft_bounce_count** | **number** | The count of soft bounces for the email. | [optional] [default to undefined]

## Example

```typescript
import { EmailCampaignHistory } from 'clicksend';

const instance: EmailCampaignHistory = {
    email_campaign_id,
    from_name,
    from_address,
    to_name,
    to_address,
    contact_id,
    subject,
    message_id,
    processed_at,
    status,
    open_count,
    click_count,
    hard_bounce_count,
    soft_bounce_count,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
