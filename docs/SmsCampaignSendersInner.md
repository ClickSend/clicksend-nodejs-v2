# SmsCampaignSendersInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**recipient_country_code** | **string** | Recipient ISO country code | [optional] [default to undefined]
**sender_id** | **string** | The sender ID you specified in the request. This parameter would not be returned if you did specify it in the SMS campaign. | [optional] [default to undefined]
**sender_type** | **string** | The type of sender ID you specified in the request. This parameter would not be returned if you did specify it in the SMS campaign. | [optional] [default to undefined]
**sender_country_code** | **string** | The country code of the sender you specified in the request. It is in two-letter format (e.g. US, UK, AU, NZ, &lt;a href&#x3D;\&quot;https://help.clicksend.com/article/7wtbhhy6sy-country-code-calling-code-list\&quot; target&#x3D;\&quot;_blank\&quot;&gt;etc&lt;/a&gt;).  For certain countries, you can receive SMS from abroad. This parameter would not be returned if you did specify it in the SMS campaign. | [optional] [default to undefined]

## Example

```typescript
import { SmsCampaignSendersInner } from 'clicksend';

const instance: SmsCampaignSendersInner = {
    recipient_country_code,
    sender_id,
    sender_type,
    sender_country_code,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
