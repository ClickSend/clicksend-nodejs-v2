# MarkInboundSmsAsRead


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**http_code** | **number** | The HTTP code of the response. Visit [this page](/#status-codes) for more information. | [optional] [default to undefined]
**response_code** | **string** | The response code of the operation. Visit [this page](/#status-codes) for more information. | [optional] [default to undefined]
**response_msg** | **string** | A message describing the outcome of the operation. | [optional] [default to undefined]
**data** | **object** | The parameters related to the inbound SMS.  &lt;div class&#x3D;\&quot;warning-box\&quot;&gt;   &lt;h4&gt;&lt;i class&#x3D;\&quot;fas fa-exclamation-triangle\&quot;&gt;&lt;/i&gt; Warning:&lt;/h4&gt;   &lt;p&gt;This parameter is deprecated and will return &lt;strong&gt;null&lt;/strong/&gt;.&lt;/p&gt; &lt;/div&gt; | [optional] [default to undefined]

## Example

```typescript
import { MarkInboundSmsAsRead } from 'clicksend';

const instance: MarkInboundSmsAsRead = {
    http_code,
    response_code,
    response_msg,
    data,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
