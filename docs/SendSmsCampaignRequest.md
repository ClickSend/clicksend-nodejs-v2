# SendSmsCampaignRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**list_id** | **number** | The &#x60;list_id&#x60; of the contact list to send the message to. Use the  **&lt;a href&#x3D;\&quot;https://developers-dev.clicksend.net/docs/rest/v3/contacts/lists/other/view-list-contacts\&quot; target&#x3D;\&quot;_blank\&quot;&gt;View Contact List&lt;/a&gt;** endpoint to see your contact lists.  You can also use the other **&lt;a href&#x3D;\&quot;https://developers-dev.clicksend.net/docs/rest/v3/contacts/lists\&quot; target&#x3D;\&quot;_blank\&quot;&gt;list endpoints&lt;/a&gt;** to create and manage your contact list.  You need to provide the to parameter or the &#x60;list_id&#x60; parameter.  | [default to undefined]
**name** | **string** | The SMS campaign name. | [default to undefined]
**from** | **string** | The sender of the message. This is also referred to as the **&lt;a href&#x3D;\&quot;https://help.clicksend.com/article/4kgj7krx00-what-is-a-sender-id-or-sender-number\&quot; target&#x3D;\&quot;_blank\&quot;&gt;Sender ID&lt;/a&gt;**. You can use: - **Shared number:** A number that is randomly selected from a pool if no number is specified. This is not available in the US and Canada. You can’t use a shared number if you have a dedicated number. - **Dedicated number:** A number you\&#39;ve purchased from ClickSend. You can purchase a dedicated number using the &lt;a href&#x3D;\&quot;https://dashboard.clicksend.com/sender-ids/manage-senders\&quot; target&#x3D;\&quot;_blank\&quot;&gt;Dashboard&lt;/a&gt; or the [**Purchase Dedicated Number**](/) endpoint. It should be in the international format (&lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/E.164\&quot; target&#x3D;\&quot;_blank\&quot;&gt;E.164&lt;/a&gt;). - **Alpha tag:** A sender name, like the name of your business, used as the **Sender ID** instead of a number. Recipients cannot reply to an alpha tag. You can register an alpha tag using the &lt;a href&#x3D;\&quot;https://dashboard.clicksend.com/sender-ids/manage-senders\&quot; target&#x3D;\&quot;_blank\&quot;&gt;dashboard&lt;/a&gt; or the **[Request Alpha Tag](/)** endpoint. Check which countries support alpha tags &lt;a href&#x3D;\&quot;https://help.clicksend.com/article/532u04vhaq-which-countries-support-alpha-tags\&quot; target&#x3D;\&quot;_blank\&quot;&gt;here&lt;/a&gt;. - **Own number:** Your own number that is connected to your account. Replies from recipients are sent directly to your number. You can register your own number using the &lt;a href&#x3D;\&quot;https://dashboard.clicksend.com/sender-ids/manage-senders\&quot; target&#x3D;\&quot;_blank\&quot;&gt;dashboard&lt;/a&gt; or the [**Request Own Number Verification OTP**](/) endpoint to get the _verification_id_ and OTP code needed for the [**Verify Own Number OTP**](/) endpoint. This isn\&#39;t available in the US and Canada. If your **Sender ID** has a different country code to the recipient’s, it\&#39;ll be replaced by a local number, except in &lt;a href&#x3D;\&quot;https://help.clicksend.com/category/mfdctha7f0-country-specific-features-and-restrictions\&quot; target&#x3D;\&quot;_blank\&quot;&gt;certain countries&lt;/a&gt;. If the sender number is blocked, a different number will replace it. | [default to undefined]
**body** | **string** | The message to send. The price of sending a message depends on the number of characters and the type of message. There are two types:   - Standard message - Contains only characters in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/GSM_03.38\&quot; target&#x3D;\&quot;_blank\&quot;&gt;GSM&lt;/a&gt; set, with a maximum of 160 characters.   - Unicode message - Contains characters outside the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/GSM_03.38\&quot; target&#x3D;\&quot;_blank\&quot;&gt;GSM&lt;/a&gt; set, with a maximum of 70 characters.   Longer messages will be sent as multiple messages (parts), but the recipient will receive them as a single long message. Visit &lt;a href&#x3D;\&quot;https://help.clicksend.com/article/h474eseq3a-how-many-characters-can-i-send-in-an-sms\&quot; target&#x3D;\&quot;_blank\&quot;&gt;this page&lt;/a&gt; to learn more about the number of characters per message, and &lt;a href&#x3D;\&quot;http://smscharactercount.com/#/counter\&quot; target&#x3D;\&quot;_blank\&quot;&gt;this page&lt;/a&gt; to count the number of characters. | [default to undefined]
**source** | **string** | The source of the request. For example, the name of your application. It\&#39;s used to identify messages sent from various applications. | [optional] [default to undefined]
**schedule** | **number** | The time you want the message to be sent. It should be in &lt;a href&#x3D;\&quot;http://help.clicksend.com/what-is-a-unix-timestamp\&quot; target&#x3D;\&quot;_blank\&quot;&gt;Unix format&lt;/a&gt;. | [optional] [default to undefined]
**senders** | [**Array&lt;SendersInner&gt;**](SendersInner.md) | The &#x60;senders&#x60; property specifies sender IDs for each recipient country. - **Want to leverage the default sender settings:**   - If the &#x60;senders&#x60; property is missing or left empty, the system uses the default sender settings configured for each recipient country.  - **Want to override the default sender settings:**   - When the &#x60;senders&#x60; property is provided, it should contain valid sender IDs for each recipient country listed under recipients. These IDs will override the default sender settings for the specified countries.   - If an invalid sender ID is provided, or a sender ID for a specific recipient country is missing, the system will revert to using the default sender settings for that country.  | [default to undefined]
**url_to_shorten** | **string** | The URL you want to shorten. The shortened URL will be appended to the end of the message body.   | [optional] [default to undefined]

## Example

```typescript
import { SendSmsCampaignRequest } from 'clicksend';

const instance: SendSmsCampaignRequest = {
    list_id,
    name,
    from,
    body,
    source,
    schedule,
    senders,
    url_to_shorten,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
