# EmailCampaign


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email_campaign_id** | **number** | The ID of the email campaign. | [optional] [default to undefined]
**name** | **string** | The name of the email campaign. | [optional] [default to undefined]
**user_id** | **number** | The ID of the user who created the email campaign. | [optional] [default to undefined]
**subaccount_id** | **number** | The ID of the subaccount associated with the email campaign. | [optional] [default to undefined]
**subject** | **string** | The subject of the email campaign. | [optional] [default to undefined]
**list_id** | **number** | The ID of the email list associated with the campaign. | [optional] [default to undefined]
**from_email_address_id** | **number** | The ID of the sender\&#39;s email address. | [optional] [default to undefined]
**from_name** | **string** | The name of the sender. | [optional] [default to undefined]
**template_id** | **number** | The ID of the email template used in the campaign. | [optional] [default to undefined]
**schedule** | **string** | The schedule for sending the email campaign. | [optional] [default to undefined]
**status** | **string** | The status of the email campaign (e.g., Sent, Scheduled, Draft). | [optional] [default to undefined]
**date_added** | **string** | The date when the email campaign was added. | [optional] [default to undefined]
**custom_string** | **string** | A custom string associated with the email campaign. | [optional] [default to undefined]
**send_count** | **number** | The count of emails sent in the campaign. | [optional] [default to undefined]
**open_count** | **number** | The count of emails opened in the campaign. | [optional] [default to undefined]
**click_count** | **number** | The count of links clicked in the campaign. | [optional] [default to undefined]
**hard_bounce_count** | **number** | The count of hard bounces in the campaign. | [optional] [default to undefined]
**soft_bounce_count** | **number** | The count of soft bounces in the campaign. | [optional] [default to undefined]
**abuse_count** | **number** | The count of abuse complaints in the campaign. | [optional] [default to undefined]
**unsubscribe_count** | **number** | The count of unsubscribes in the campaign. | [optional] [default to undefined]
**body** | **string** | The body of the email campaign. | [optional] [default to undefined]
**body_plain_text** | **string** | The plain text body of the email campaign. | [optional] [default to undefined]

## Example

```typescript
import { EmailCampaign } from 'clicksend';

const instance: EmailCampaign = {
    email_campaign_id,
    name,
    user_id,
    subaccount_id,
    subject,
    list_id,
    from_email_address_id,
    from_name,
    template_id,
    schedule,
    status,
    date_added,
    custom_string,
    send_count,
    open_count,
    click_count,
    hard_bounce_count,
    soft_bounce_count,
    abuse_count,
    unsubscribe_count,
    body,
    body_plain_text,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
