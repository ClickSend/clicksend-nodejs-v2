# MmsCampaign


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mms_campaign_id** | **number** | The ID of the MMS campaign. | [optional] [default to undefined]
**name** | **string** | The name of the MMS campaign. | [optional] [default to undefined]
**user_id** | **number** | The ID of the user who created the campaign. | [optional] [default to undefined]
**subaccount_id** | **number** | The ID of the subaccount associated with the campaign. | [optional] [default to undefined]
**list_id** | **number** | The ID of the list associated with the campaign. | [optional] [default to undefined]
**from** | **string** | The sender\&#39;s phone number or ID. | [optional] [default to undefined]
**subject** | **string** | The subject of the MMS campaign. | [optional] [default to undefined]
**file_name** | **string** | The name of the media file attached to the MMS. | [optional] [default to undefined]
**body** | **string** | The body or content of the MMS. | [optional] [default to undefined]
**schedule** | **number** | The schedule time of the MMS campaign. | [optional] [default to undefined]
**status** | **string** | The status of the MMS campaign. | [optional] [default to undefined]
**date_added** | **number** | The date when the campaign was added. | [optional] [default to undefined]
**_total_count** | **number** | The total count associated with the campaign. | [optional] [default to undefined]
**_list_name** | **string** | The name of the list associated with the campaign. | [optional] [default to undefined]
**_media_file_url** | **string** | The URL of the media file attached to the MMS. | [optional] [default to undefined]

## Example

```typescript
import { MmsCampaign } from 'clicksend';

const instance: MmsCampaign = {
    mms_campaign_id,
    name,
    user_id,
    subaccount_id,
    list_id,
    from,
    subject,
    file_name,
    body,
    schedule,
    status,
    date_added,
    _total_count,
    _list_name,
    _media_file_url,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
