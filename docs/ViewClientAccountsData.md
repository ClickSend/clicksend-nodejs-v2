# ViewClientAccountsData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**total** | **number** | The total number of items available for viewing. | [optional] [default to undefined]
**per_page** | **number** | The number of items returned per page. This is specified in the limit parameter. You can have 100 items at maximum, and 15 at minimum. | [optional] [default to undefined]
**current_page** | **number** | The current page number. | [optional] [default to undefined]
**last_page** | **number** | The last page number. | [optional] [default to undefined]
**next_page_url** | **string** | A URL of the next page. It will return **null** if there’s no next page. | [optional] [default to undefined]
**prev_page_url** | **string** | A URL of the previous page. It will return **null** if there’s no previous page. | [optional] [default to undefined]
**from** | **number** | The number of the first result in the current page. | [optional] [default to undefined]
**to** | **number** | The number of the last result in the current page. | [optional] [default to undefined]
**data** | [**Array&lt;ResellerAccount&gt;**](ResellerAccount.md) |  | [optional] [default to undefined]
**_currency** | [**Currency**](Currency.md) |  | [optional] [default to undefined]
**_subaccount** | [**Subaccount**](Subaccount.md) |  | [optional] [default to undefined]

## Example

```typescript
import { ViewClientAccountsData } from 'clicksend';

const instance: ViewClientAccountsData = {
    total,
    per_page,
    current_page,
    last_page,
    next_page_url,
    prev_page_url,
    from,
    to,
    data,
    _currency,
    _subaccount,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
