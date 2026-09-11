# CreateTestSmsReceiptData

The parameters related to the message receipt.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**timestamp_send** | **number** | The time you sent the test message. It is in &lt;a target&#x3D;\&quot;_blank\&quot; href&#x3D;\&quot;http://help.clicksend.com/what-is-a-unix-timestamp\&quot;&gt;Unix format.&lt;/a&gt; | [optional] [default to undefined]
**timestamp** | **number** | The time you receive the test message receipt. It is in &lt;a target&#x3D;\&quot;_blank\&quot; href&#x3D;\&quot;http://help.clicksend.com/what-is-a-unix-timestamp\&quot;&gt;Unix format.&lt;/a&gt; | [optional] [default to undefined]
**message_id** | **string** | The generated ID of the message. This ID is typically used as a reference for &lt;a target&#x3D;\&quot;_blank\&quot; href&#x3D;\&quot;https://www.clicksend.com/au/help/\&quot;&gt;customer support&lt;/a&gt; in case of any issues.  &lt;div class&#x3D;\&quot;info-box\&quot;&gt;   &lt;h4&gt;&lt;i class&#x3D;\&quot;fas fa-info-circle\&quot;&gt;&lt;/i&gt; Note:&lt;/h4&gt;   &lt;p&gt;This &lt;em&gt;message_id&lt;/em&gt; is different from the ID that is generated when sending or receving an actual SMS. This ID is used for testing only.&lt;/p&gt; &lt;/div&gt; | [optional] [default to undefined]
**status_code** | **number** | The status code that is sent from the &lt;a target&#x3D;\&quot;_blank\&quot; href&#x3D;\&quot;https://en.wikipedia.org/wiki/SMS_gateway\&quot;&gt;SMS gateway.&lt;/a&gt; Visit &lt;a target&#x3D;\&quot;_blank\&quot; href&#x3D;\&quot;https://help.clicksend.com/article/8cc479qlbb-list-of-sms-gateway-error-codes\&quot;&gt;this page&lt;/a&gt; for more information. | [optional] [default to undefined]
**status_text** | **string** | A message describing the _status_code_ of the operation. Visit &lt;a target&#x3D;\&quot;_blank\&quot; href&#x3D;\&quot;https://help.clicksend.com/article/8cc479qlbb-list-of-sms-gateway-error-codes\&quot;&gt;this&lt;/a&gt; page for more information. | [optional] [default to undefined]
**error_code** | **number** | The error code of the operation. Visit &lt;a target&#x3D;\&quot;_blank\&quot; href&#x3D;\&quot;https://help.clicksend.com/article/8cc479qlbb-list-of-sms-gateway-error-codes\&quot;&gt;this page&lt;/a&gt; for more information. If no error occurred, the value is **null**. | [optional] [default to undefined]
**error_text** | **string** | A message describing the _error_code_ of the operation. Visit &lt;a target&#x3D;\&quot;_blank\&quot; href&#x3D;\&quot;https://help.clicksend.com/article/8cc479qlbb-list-of-sms-gateway-error-codes\&quot;&gt;this page&lt;/a&gt; for more information. If no error occurred, the value is **null**. | [optional] [default to undefined]
**custom_string** | **string** | A note that was sent from the request.  &lt;div class&#x3D;\&quot;warning-box\&quot;&gt;   &lt;h4&gt;&lt;i class&#x3D;\&quot;fas fa-exclamation-triangle\&quot;&gt;&lt;/i&gt; Warning:&lt;/h4&gt;   &lt;p&gt;This parameter is deprecated and will return &lt;strong&gt;null.&lt;/strong&gt;&lt;/p&gt; &lt;/div&gt; | [optional] [default to undefined]
**subaccount_id** | **number** | The sub-account of the user. A user can have multiple sub-accounts. | [optional] [default to undefined]
**message_type** | **string** | The type of message (e.g. SMS, MMS, etc). | [optional] [default to undefined]
**digits** | **number** | The numbers that the recipient pressed on their keypad during the call. A **null** value is returned if the recipient didn\&#39;t provide any input.  &lt;div class&#x3D;\&quot;info-box\&quot;&gt;   &lt;h4&gt;&lt;i class&#x3D;\&quot;fas fa-info-circle\&quot;&gt;&lt;/i&gt; Note:&lt;/h4&gt;   &lt;p&gt;This parameter is only relevant to &lt;a href&#x3D;\&quot;/messaging/voice-messaging/\&quot;&gt;&lt;strong&gt;Voice Messaging&lt;/strong&gt;&lt;/a&gt; receipts.&lt;/p&gt; &lt;/div&gt; | [optional] [default to undefined]

## Example

```typescript
import { CreateTestSmsReceiptData } from 'clicksend';

const instance: CreateTestSmsReceiptData = {
    timestamp_send,
    timestamp,
    message_id,
    status_code,
    status_text,
    error_code,
    error_text,
    custom_string,
    subaccount_id,
    message_type,
    digits,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
