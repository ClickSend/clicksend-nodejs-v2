# ViewEmailTemplatesData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**total** | **number** | The total number of records in the response. | [optional] [default to undefined]
**per_page** | **number** | The number of records per page. | [optional] [default to undefined]
**current_page** | **number** | The current page number. | [optional] [default to undefined]
**last_page** | **number** | The last page number. | [optional] [default to undefined]
**next_page_url** | **string** | The URL of the next page of records. | [optional] [default to undefined]
**prev_page_url** | **string** | The URL of the previous page of records. | [optional] [default to undefined]
**from** | **number** | The index of the first record in the page. | [optional] [default to undefined]
**to** | **number** | The index of the last record in the page. | [optional] [default to undefined]
**data** | [**Array&lt;ViewEmailTemplatesDataDataInner&gt;**](ViewEmailTemplatesDataDataInner.md) |  | [optional] [default to undefined]

## Example

```typescript
import { ViewEmailTemplatesData } from 'clicksend';

const instance: ViewEmailTemplatesData = {
    total,
    per_page,
    current_page,
    last_page,
    next_page_url,
    prev_page_url,
    from,
    to,
    data,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
