# SmsCampaign

The parameters related to the SMS campaign.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sms_campaign_id** | **number** | The ID of the SMS campaign. | [optional] [default to undefined]
**name** | **string** | The name of the SMS campaign. | [optional] [default to undefined]
**user_id** | **number** | The unique user ID of the sender. | [optional] [default to undefined]
**subaccount_id** | **number** | The sub-account of the user. A user can have multiple sub-accounts. | [optional] [default to undefined]
**list_id** | **number** | The _list_id_ of the contact list to which the SMS campaign was sent or will be sent to. | [optional] [default to undefined]
**from** | **string** | The sender of the message. This is also referred to as the **Sender ID**. If your **Sender ID** has a different country code to the recipient’s, it\&#39;ll be replaced by a local number, except in &lt;a href&#x3D;\&quot;https://help.clicksend.com/category/mfdctha7f0-country-specific-features-and-restrictions\&quot; target&#x3D;\&quot;_blank\&quot;&gt;certain countries&lt;/a&gt;. If the sender number is blocked, a different number will replace it. | [optional] [default to undefined]
**body** | **string** | The message body of the SMS campaign sent. | [optional] [default to undefined]
**schedule** | **number** | The scheduled date of the message. It is in &lt;a href&#x3D;\&quot;http://help.clicksend.com/what-is-a-unix-timestamp\&quot; target&#x3D;\&quot;_blank\&quot;&gt;Unix format&lt;/a&gt;. | [optional] [default to undefined]
**status** | **string** | The status of the SMS. Available statuses are:    - _Approved_: The SMS campaign has been approved and is ready to be sent.   - _Cancelled_: The SMS campaign was scheduled but has been cancelled before sending.   - _Draft_: The SMS campaign is saved as a draft and has not been sent.   - _Failed_: The SMS campaign failed to send due to an issue.   - _Queued_: The SMS campaign is waiting to be sent.   - _Scheduled_: The SMS campaign is set to be sent at a later time.   - _Sending_: The SMS campaign is currently being sent.   - _Sent_: The SMS campaign has been sent, but this does not guarantee that all messages were successfully delivered.   - _WaitApproval_: The SMS campaign is awaiting approval from ClickSend, which may take a few minutes. | [optional] [default to undefined]
**date_added** | **number** | The date you created the SMS campaign. It is in &lt;a href&#x3D;\&quot;http://help.clicksend.com/what-is-a-unix-timestamp\&quot; target&#x3D;\&quot;_blank\&quot;&gt;Unix format&lt;/a&gt;. | [optional] [default to undefined]
**custom_string** | **string** | The custom note that was added when creating or updating the SMS campaign. | [optional] [default to undefined]
**url_to_shorten** | **string** | The original URL that had been shorten. It will return an **empty** value if the SMS campaign didn’t include any shortened URL. | [optional] [default to undefined]
**unsubscribe_link** | **number** | Indicates whether an unsubscribe link has been included in the message. To provide the option to unsubscribe, you can add the literal &#x60;StopMsg.me/xxxxx&#x60; in the message body. This parameter specifies whether the link was added:    - **0**: The unsubscribe option was not provided.   - **1**: The unsubscribe option was provided. | [optional] [default to undefined]
**source** | **string** | The source of the request. For example, the name of your application. It\&#39;s used to identify messages sent from various applications. It will return a **null** value if the source was not specified in the SMS campaign. | [optional] [default to undefined]
**senders** | [**Array&lt;SmsCampaignSendersInner&gt;**](SmsCampaignSendersInner.md) | The specific sender IDs for each recipient country. It will return a **null** value if you did not specify the sender in the SMS campaign. | [optional] [default to undefined]
**_total_count** | **number** | The total number of messages sent in the SMS campaign. | [optional] [default to undefined]
**_list_name** | **string** | The name of the contact list of the SMS campaign. This is related of the _list_id_ parameter. | [optional] [default to undefined]

## Example

```typescript
import { SmsCampaign } from 'clicksend';

const instance: SmsCampaign = {
    sms_campaign_id,
    name,
    user_id,
    subaccount_id,
    list_id,
    from,
    body,
    schedule,
    status,
    date_added,
    custom_string,
    url_to_shorten,
    unsubscribe_link,
    source,
    senders,
    _total_count,
    _list_name,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
