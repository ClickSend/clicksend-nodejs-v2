# InboundSms

The parameters related to the message receipt.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**timestamp** | **number** | The time you receive the inbound message.. It’s in the &lt;a href&#x3D;\&quot;http://help.clicksend.com/what-is-a-unix-timestamp\&quot;&gt;Unix format.&lt;/a&gt; | [optional] [default to undefined]
**from** | **string** | The sender of the message, which is the phone number of the recipient who replied to you. Your recipient can’t reply to an alpha tag (business name). | [optional] [default to undefined]
**body** | **string** | The message you received from your recipient. | [optional] [default to undefined]
**original_body** | **string** | The last message you sent to your recipient. | [optional] [default to undefined]
**original_message_id** | **string** | The generated ID of the message that you sent to your receipient. | [optional] [default to undefined]
**to** | **string** | The receiver of the inbound message, which can be either the shared number or the dedicated number you used to send the message. | [optional] [default to undefined]
**custom_string** | **string** | A note that was included with the inbound SMS. If no note was included, the value will be an empty string. | [optional] [default to undefined]
**message_id** | **string** | The generated ID of the inbound SMS. This ID is typically used as a reference for &lt;a href&#x3D;\&quot;https://www.clicksend.com/au/help/\&quot; target&#x3D;\&quot;_blank\&quot;&gt;customer support&lt;/a&gt; in case of any issues. | [optional] [default to undefined]
**_keyword** | **string** | The keyword of the inbound SMS.  &lt;div class&#x3D;\&quot;warning-box\&quot;&gt;   &lt;h4&gt;&lt;i class&#x3D;\&quot;fas fa-exclamation-triangle\&quot;&gt;&lt;/i&gt; Warning:&lt;/h4&gt;   &lt;p&gt;This parameter is deprecated and will return the first word of the body message.&lt;/p&gt; &lt;/div&gt; | [optional] [default to undefined]

## Example

```typescript
import { InboundSms } from 'clicksend';

const instance: InboundSms = {
    timestamp,
    from,
    body,
    original_body,
    original_message_id,
    to,
    custom_string,
    message_id,
    _keyword,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
