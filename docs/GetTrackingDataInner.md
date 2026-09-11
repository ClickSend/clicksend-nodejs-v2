# GetTrackingDataInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**open_count** | **number** | Number of times the short URL was opened | [optional] [default to undefined]
**date_opened** | **number** | Date in unix seconds when the short URL was first opened. Null if the short URL was never opened. | [optional] [default to undefined]
**user_geo_country** | **string** | Country where the recipient is located when the short URL was opened. Null if the short URL was never opened. | [optional] [default to undefined]
**user_geo_region** | **string** | Geographical region where the recipient is located when the short URL was opened. Null if the short URL was never opened. | [optional] [default to undefined]
**user_device** | **string** | Deviced used by the recipient to open the short URL. Null if the short URL was never opened. | [optional] [default to undefined]
**user_browser** | **string** | Browser used by the recipient to open the short URL. Null if the short URL was never opened. | [optional] [default to undefined]
**user_os** | **string** | Opearating system used by the recipient to open the short URL. Null if the short URL was never opened. | [optional] [default to undefined]
**contact** | [**GetTrackingDataInnerContact**](GetTrackingDataInnerContact.md) |  | [optional] [default to undefined]

## Example

```typescript
import { GetTrackingDataInner } from 'clicksend';

const instance: GetTrackingDataInner = {
    open_count,
    date_opened,
    user_geo_country,
    user_geo_region,
    user_device,
    user_browser,
    user_os,
    contact,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
