# GetTracking


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**total** | **number** | Total number of short URLs associated with the long URL ID | [optional] [default to undefined]
**per_page** | **number** | The limit of tracking data per page | [optional] [default to undefined]
**current_page_size** | **number** | The number of data in the current page | [optional] [default to undefined]
**prev_page_url** | **string** | Link to the previous page. This attribute will not be present if there is no previous page. | [optional] [default to undefined]
**next_page_url** | **string** | Link to the next page. This attribute will not be present if there is no next page. | [optional] [default to undefined]
**data** | [**Array&lt;GetTrackingDataInner&gt;**](GetTrackingDataInner.md) | Tracking data of the short URLs associated with the specified long URL ID. Note that only the data from the most recent click of the recipient (country, region, device, browser, and os) is recorded. | [optional] [default to undefined]

## Example

```typescript
import { GetTracking } from 'clicksend';

const instance: GetTracking = {
    total,
    per_page,
    current_page_size,
    prev_page_url,
    next_page_url,
    data,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
