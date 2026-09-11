# ViewSmsHistoryDataAllOfDataInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**direction** | **string** | It can either be in or out:   - **in** - You received a message. it has to do with inbound messages.   - **out** - You are sending a message. It has to do with outbound messages. | [optional] [default to undefined]
**date** | **number** | The date you sent the message. It is in &lt;a href&#x3D;\&quot;http://help.clicksend.com/what-is-a-unix-timestamp\&quot; target&#x3D;\&quot;_blank\&quot;&gt;Unix format&lt;/a&gt;. | [optional] [default to undefined]
**to** | **string** | The phone number of the recipient. It should be in &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/E.164\&quot; target&#x3D;\&quot;_blank\&quot;&gt;E.164 format&lt;/a&gt;. | [optional] [default to undefined]
**body** | **string** | The message sent. | [optional] [default to undefined]
**status** | **string** | The status of the SMS. It can either be:  - _Queued_ - _Completed_ - _Scheduled_ - _WaitApproval_ - _Failed_ - _Cancelled_ - _CancelledAfterReview_ - _Received_ - _Sent_  This parameter reflects the actual status of the SMS. It is based on the  status of the SMS sent from the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/SMS_gateway\&quot; target&#x3D;\&quot;_blank\&quot;&gt;SMS gateway&lt;/a&gt;, which is different  from the [API status code](https://developers-dev.clicksend.net/docs/#status-codes). Visit &lt;a href&#x3D;\&quot;https://help.clicksend.com/article/8cc479qlbb-list-of-sms-gateway-error-codes\&quot; target&#x3D;\&quot;_blank\&quot;&gt;this page&lt;/a&gt; for more information. | [optional] [default to undefined]
**from** | **string** | The sender of the message. | [optional] [default to undefined]
**schedule** | **string** | The scheduled date of the message. It is in &lt;a href&#x3D;\&quot;http://help.clicksend.com/what-is-a-unix-timestamp\&quot; target&#x3D;\&quot;_blank\&quot;&gt;Unix format&lt;/a&gt;. | [optional] [default to undefined]
**status_code** | **string** | The status code sent from the &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/SMS_gateway\&quot; target&#x3D;\&quot;_blank\&quot;&gt;SMS gateway&lt;/a&gt;. Visit &lt;a href&#x3D;\&quot;https://help.clicksend.com/article/8cc479qlbb-list-of-sms-gateway-error-codes\&quot; target&#x3D;\&quot;_blank\&quot;&gt;this page&lt;/a&gt; for more information. | [optional] [default to undefined]
**status_text** | **string** | A message describing the _status_code_ of the operation. Visit &lt;a href&#x3D;\&quot;https://help.clicksend.com/article/8cc479qlbb-list-of-sms-gateway-error-codes\&quot; target&#x3D;\&quot;_blank\&quot;&gt;this page&lt;/a&gt; for more information. | [optional] [default to undefined]
**error_code** | **string** | The error code of the operation. Visit &lt;a href&#x3D;\&quot;https://help.clicksend.com/article/8cc479qlbb-list-of-sms-gateway-error-codes\&quot; target&#x3D;\&quot;_blank\&quot;&gt;this page&lt;/a&gt; for more information. If no error occurred, the value is **null**. | [optional] [default to undefined]
**error_text** | **string** | A message describing the _error_code_ of the operation. Visit &lt;a href&#x3D;\&quot;https://help.clicksend.com/article/8cc479qlbb-list-of-sms-gateway-error-codes\&quot; target&#x3D;\&quot;_blank\&quot;&gt;this page&lt;/a&gt; for more information. If no error occurred, the value is **null**. | [optional] [default to undefined]
**message_id** | **string** | The generated ID of the message. | [optional] [default to undefined]
**message_parts** | **number** | The number of parts the message was broken into. To look at how many parts your message is broken down into, use the &lt;a href&#x3D;\&quot;http://smscharactercount.com/\&quot; target&#x3D;\&quot;_blank\&quot;&gt;&lt;strong&gt;SMS Character Count&lt;/strong&gt;&lt;/a&gt;. | [optional] [default to undefined]
**message_price** | **string** | The price of this message. This depends on the total number of parts of the message. | [optional] [default to undefined]
**from_email** | **string** | The email address to which replies should be emailed to. If omitted, the reply will be emailed back to the user who sent the outgoing SMS | [optional] [default to undefined]
**list_id** | **string** | The _list_id_ of the contact list the message was sent to. This parameter will have a **null** value if you didn’t send to a list in the request. | [optional] [default to undefined]
**custom_string** | **string** | A note that was included with the outgoing SMS. If no note was included, the value is **null**. | [optional] [default to undefined]
**contact_id** | **string** | This is the ID of the contact. This parameter will have a **null** value if you didn’t provide a _contact_id_ in the request. | [optional] [default to undefined]
**user_id** | **number** | The unique user ID of the sender. | [optional] [default to undefined]
**subaccount_id** | **number** | The sub-account of the user. A user can have multiple sub-accounts. | [optional] [default to undefined]
**country** | **string** | The country of the recipient in two-letter format (e.g. US, UK, AU, NZ, etc). | [optional] [default to undefined]
**carrier** | **string** | The phone carrier of the recipient. | [optional] [default to undefined]
**first_name** | **string** | The first name of the recipient. The name will appear if you sent the message to a contact from a contact list. If you are sending directly to a phone number, the value will be **null**. | [optional] [default to undefined]
**last_name** | **string** | The last name of the recipient. The name will appear if you sent the message to a contact from a contact list. If you are sending directly to a phone number, the value will be **null**. | [optional] [default to undefined]
**_api_username** | **string** | The username of the SMS sender. This can be a &lt;a href&#x3D;\&quot;https://dashboard.clicksend.com/account/subaccounts\&quot; target&#x3D;\&quot;_blank\&quot;&gt;sub-account&lt;/a&gt;. | [optional] [default to undefined]

## Example

```typescript
import { ViewSmsHistoryDataAllOfDataInner } from 'clicksend';

const instance: ViewSmsHistoryDataAllOfDataInner = {
    direction,
    date,
    to,
    body,
    status,
    from,
    schedule,
    status_code,
    status_text,
    error_code,
    error_text,
    message_id,
    message_parts,
    message_price,
    from_email,
    list_id,
    custom_string,
    contact_id,
    user_id,
    subaccount_id,
    country,
    carrier,
    first_name,
    last_name,
    _api_username,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
