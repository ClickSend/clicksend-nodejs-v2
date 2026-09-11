# InboundSmsTest

The parameters related to the message receipt.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**timestamp_send** | **number** | The time you sent the test message. It’s in the &lt;a href&#x3D;\&quot;http://help.clicksend.com/what-is-a-unix-timestamp\&quot;&gt;Unix format.&lt;/a&gt; | [optional] [default to undefined]
**from** | **string** | This is a random number used for testing purposes. | [optional] [default to undefined]
**body** | **string** | The sample test message. | [optional] [default to undefined]
**original_body** | **string** | The sample test message you sent to your recipient. | [optional] [default to undefined]
**original_message_id** | **string** | The generated ID of the message that you sent to your receipient.  &lt;div class&#x3D;\&quot;info-box\&quot;&gt;   &lt;h4&gt;&lt;i class&#x3D;\&quot;fas fa-info-circle\&quot;&gt;&lt;/i&gt; Note:&lt;/h4&gt;   &lt;p&gt;This &lt;em&gt;original_message_id&lt;/em&gt; is different from the ID that is generated when sending an actual SMS. This ID is used for testing only.&lt;/p&gt; &lt;/div&gt; | [optional] [default to undefined]
**to** | **string** | The receiver of the inbound message, which can be either the shared number or the dedicated number you used to send the message. | [optional] [default to undefined]
**custom_string** | **string** | The sample test note that was included with the inbound SMS. | [optional] [default to undefined]
**message_id** | **string** | The generated ID of the inbound SMS. This ID is typically used as a reference for &lt;a href&#x3D;\&quot;https://www.clicksend.com/au/help/\&quot; target&#x3D;\&quot;_blank\&quot;&gt;customer support&lt;/a&gt; in case of any issues. | [optional] [default to undefined]
**_keyword** | **string** | The keyword of the inbound SMS.  &lt;div class&#x3D;\&quot;warning-box\&quot;&gt;   &lt;h4&gt;&lt;i class&#x3D;\&quot;fas fa-exclamation-triangle\&quot;&gt;&lt;/i&gt; Warning:&lt;/h4&gt;   &lt;p&gt;This parameter is deprecated and will return &lt;strong&gt;null.&lt;/strong&gt;&lt;/p&gt; &lt;/div&gt; | [optional] [default to undefined]

## Example

```typescript
import { InboundSmsTest } from 'clicksend';

const instance: InboundSmsTest = {
    timestamp_send,
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
