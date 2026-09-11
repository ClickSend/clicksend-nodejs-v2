# CreateTestInboundSmsRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**url** | **string** | The webhook URL where the inbound SMS will be sent to.  &lt;div class&#x3D;\&quot;info-box\&quot;&gt;   &lt;h4&gt;&lt;i class&#x3D;\&quot;fas fa-info-circle\&quot;&gt;&lt;/i&gt; Note:&lt;/h4&gt;   &lt;p&gt;You can create a webhook URL in &lt;em&gt;Pipedream&lt;/em&gt; to test receiving the inbound SMS. Follow the instructions &lt;a href&#x3D;\&quot;https://help.clicksend.com/en/articles/43703-integration-guide-pipedream\&quot; target&#x3D;\&quot;_blank\&quot;&gt;here.&lt;/a&gt;&lt;/p&gt; &lt;/div&gt;   | [default to undefined]
**webhook_type** | **string** | Specifies the HTTP method used when the webhook sends a request to the URL. The available options are:  - **post** (Default): Sends the event data using an HTTP POST request.      - **get**: Sends the event data as query parameters in an HTTP GET request.      - **json**: Sends the event data using a custom JSON format (via a POST request).      This parameter is used to determine how the data will be transmitted, depending on your preferred method and how the receiving system is designed to process incoming requests. | [optional] [default to undefined]

## Example

```typescript
import { CreateTestInboundSmsRequest } from 'clicksend';

const instance: CreateTestInboundSmsRequest = {
    url,
    webhook_type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
