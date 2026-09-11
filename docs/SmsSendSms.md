# SmsSendSms


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**direction** | **string** | It can either be **in** or **out**:  - **in** - You received a message. it has to do with inbound messages.      - **out** \\- You are sending a message. It has to do with outbound messages. | [optional] [default to undefined]
**date** | **number** | The date you sent the message. It is in &lt;a href&#x3D;\&quot;http://help.clicksend.com/what-is-a-unix-timestamp\&quot; target&#x3D;\&quot;_blank\&quot;&gt;Unix format&lt;/a&gt;. | [optional] [default to undefined]
**to** | **string** | The phone number of the recipient. It should be in &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/E.164\&quot; target&#x3D;\&quot;_blank\&quot;&gt;E.164 format&lt;/a&gt;. | [optional] [default to undefined]
**body** | **string** | The message sent. The price of sending a message depends on the number of characters and the type of message. There are two types:  - Standard message - Contains only characters in the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/GSM_03.38\&quot; target&#x3D;\&quot;_blank\&quot;&gt;GSM&lt;/a&gt; set, with a maximum of 160 characters.      - Unicode message - Contains characters outside the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/GSM_03.38\&quot; target&#x3D;\&quot;_blank\&quot;&gt;GSM&lt;/a&gt; set, with a maximum of 70 characters.       Longer messages will be sent as multiple messages (parts), but the recipient will receive them as a single long message. Visit &lt;a href&#x3D;\&quot;https://help.clicksend.com/article/h474eseq3a-how-many-characters-can-i-send-in-an-sms\&quot; target&#x3D;\&quot;_blank\&quot;&gt;this page&lt;/a&gt; to learn more about the number of characters per message, and &lt;a href&#x3D;\&quot;http://smscharactercount.com/\&quot; target&#x3D;\&quot;_blank\&quot;&gt;this page&lt;/a&gt; to count the number of characters. | [optional] [default to undefined]
**from** | **string** | The sender of the message. This is also referred to as the **Sender ID**. If your **Sender ID** has a different country code to the recipient’s, it\&#39;ll be replaced by a local number, except in &lt;a href&#x3D;\&quot;https://help.clicksend.com/category/mfdctha7f0-country-specific-features-and-restrictions\&quot; target&#x3D;\&quot;_blank\&quot;&gt;certain countries&lt;/a&gt;. If the sender number is blocked, a different number will replace it. | [optional] [default to undefined]
**schedule** | **number** | The scheduled date of the message. It is in &lt;a href&#x3D;\&quot;http://help.clicksend.com/what-is-a-unix-timestamp\&quot; target&#x3D;\&quot;_blank\&quot;&gt;Unix format&lt;/a&gt;. | [optional] [default to undefined]
**message_id** | **string** | The generated ID of the message. This ID is typically used as a reference for &lt;a href&#x3D;\&quot;https://www.clicksend.com/au/help/\&quot; target&#x3D;\&quot;_blank\&quot;&gt;customer support&lt;/a&gt; in case of any issues. | [optional] [default to undefined]
**message_parts** | **number** | The number of parts the message was broken into. To look at how many parts your message is broken down into, use the **&lt;a href&#x3D;\&quot;http://smscharactercount.com/\&quot;&gt;SMS Character Count&lt;/a&gt;**. | [optional] [default to undefined]
**message_price** | **string** | The price of this message. This depends on the total number of parts of the message. | [optional] [default to undefined]
**from_email** | **string** | The email address to which replies should be emailed to. If omitted, the reply will be emailed back to the user who sent the outgoing SMS. | [optional] [default to undefined]
**list_id** | **string** | The _list_id_ of the contact list the message was sent to. This parameter will have a **null** value if you didn’t send to a list in the request. | [optional] [default to undefined]
**custom_string** | **string** | A note that was sent from the request. | [optional] [default to undefined]
**contact_id** | **string** | This is the ID of the contact. This parameter will have a **null** value if you didn’t provide a _contact_id_ in the request. | [optional] [default to undefined]
**user_id** | **number** | The unique user ID of the sender. | [optional] [default to undefined]
**subaccount_id** | **number** | This sub-account of the user. A user can have multiple sub-accounts. | [optional] [default to undefined]
**is_shared_system_number** | **boolean** | Indicates whether you use a shared number to send a message:  - **True** \\- if the sender is randomly selected.      - **False** \\- if the sender is specified and passed the validation process. | [optional] [default to undefined]
**country** | **string** | The country of the recipient in two-letter format (e.g. US, UK, AU, NZ, etc). | [optional] [default to undefined]
**carrier** | **string** | The phone carrier of the recipient. | [optional] [default to undefined]
**status** | **string** | The response code of the operation. Visit [this page](/#application-status-codes) for more information. This reflects the actual status of the individual message. | [optional] [default to undefined]

## Example

```typescript
import { SmsSendSms } from 'clicksend';

const instance: SmsSendSms = {
    direction,
    date,
    to,
    body,
    from,
    schedule,
    message_id,
    message_parts,
    message_price,
    from_email,
    list_id,
    custom_string,
    contact_id,
    user_id,
    subaccount_id,
    is_shared_system_number,
    country,
    carrier,
    status,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
