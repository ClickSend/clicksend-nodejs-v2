# MarkSmsReceiptAsReadRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**date_before** | **number** | The cutoff date. Receipts sent before this time will be marked as read. It’s in the &lt;a target&#x3D;\&quot;_blank\&quot; href&#x3D;\&quot;http://help.clicksend.com/what-is-a-unix-timestamp\&quot;&gt;Unix format&lt;/a&gt;. | [optional] [default to undefined]

## Example

```typescript
import { MarkSmsReceiptAsReadRequest } from 'clicksend';

const instance: MarkSmsReceiptAsReadRequest = {
    date_before,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
