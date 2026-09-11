# GetStatisticsDataInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**long_url_id** | **string** | ID of a URL under the specified source and source_id | [optional] [default to undefined]
**links** | [**GetStatisticsDataInnerLinks**](GetStatisticsDataInnerLinks.md) |  | [optional] [default to undefined]
**device** | [**Array&lt;GetStatisticsDataInnerDeviceInner&gt;**](GetStatisticsDataInnerDeviceInner.md) | Device statistics of the recipients that clicked the short URL | [optional] [default to undefined]
**os** | [**Array&lt;GetStatisticsDataInnerDeviceInner&gt;**](GetStatisticsDataInnerDeviceInner.md) | OS statistics of the recipients that clicked the short URL | [optional] [default to undefined]
**browser** | [**Array&lt;GetStatisticsDataInnerDeviceInner&gt;**](GetStatisticsDataInnerDeviceInner.md) | Browser statistics of the recipients that clicked the short URL | [optional] [default to undefined]
**country** | [**Array&lt;GetStatisticsDataInnerDeviceInner&gt;**](GetStatisticsDataInnerDeviceInner.md) | Country statistics of the recipients that clicked the short URL | [optional] [default to undefined]
**region** | [**Array&lt;GetStatisticsDataInnerDeviceInner&gt;**](GetStatisticsDataInnerDeviceInner.md) | Region statistics of the recipients that clicked the short URL | [optional] [default to undefined]

## Example

```typescript
import { GetStatisticsDataInner } from 'clicksend';

const instance: GetStatisticsDataInner = {
    long_url_id,
    links,
    device,
    os,
    browser,
    country,
    region,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
