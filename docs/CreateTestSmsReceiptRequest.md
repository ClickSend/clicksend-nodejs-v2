# CreateTestSmsReceiptRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**url** | **string** | The webhook URL where the delivery receipt will be sent to. You can set the value to **poll** to send it to the ClickSend   system, and then retrieve it with the **View SMS Receipt** endpoint  &lt;div class&#x3D;\&quot;info-box\&quot;&gt;   &lt;h4&gt;&lt;i class&#x3D;\&quot;fas fa-info-circle\&quot;&gt;&lt;/i&gt; Note:&lt;/h4&gt;   &lt;p&gt;You can create a webhook URL in Pipedream to test receiving the SMS receipt. Follow the instructions &lt;a target&#x3D;\&quot;_blank\&quot; href&#x3D;\&quot;https://help.clicksend.com/en/articles/43703-integration-guide-pipedream\&quot;&gt;here&lt;/a&gt;.&lt;/p&gt; &lt;/div&gt; | [default to undefined]

## Example

```typescript
import { CreateTestSmsReceiptRequest } from 'clicksend';

const instance: CreateTestSmsReceiptRequest = {
    url,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
