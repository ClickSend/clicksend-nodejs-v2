# ViewListsData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**total** | **number** | The total number of contacts in the list. | [optional] [default to undefined]
**per_page** | **number** | The number of contacts returned per page. | [optional] [default to undefined]
**current_page** | **number** | The current page number. | [optional] [default to undefined]
**last_page** | **number** | The total number of pages. | [optional] [default to undefined]
**next_page_url** | **string** | The URL of the next page of contacts. | [optional] [default to undefined]
**prev_page_url** | **string** | The URL of the previous page of contacts. | [optional] [default to undefined]
**from** | **number** | The number of the first contact on the current page. | [optional] [default to undefined]
**to** | **number** | The number of the last contact on the current page. | [optional] [default to undefined]
**first_page_url** | **string** | The URL of the first page of records. | [optional] [default to undefined]
**last_page_url** | **string** | The URL of the last page of records. | [optional] [default to undefined]
**path** | **string** | The base URL path used to build pagination links. | [optional] [default to undefined]
**links** | [**Array&lt;ViewListsDataLinksInner&gt;**](ViewListsDataLinksInner.md) | The list of pagination links. | [optional] [default to undefined]
**data** | [**Array&lt;ContactList&gt;**](ContactList.md) | The contacts in the list. | [optional] [default to undefined]

## Example

```typescript
import { ViewListsData } from 'clicksend';

const instance: ViewListsData = {
    total,
    per_page,
    current_page,
    last_page,
    next_page_url,
    prev_page_url,
    from,
    to,
    first_page_url,
    last_page_url,
    path,
    links,
    data,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
