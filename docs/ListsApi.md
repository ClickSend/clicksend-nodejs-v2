# ListsApi

All URIs are relative to *https://rest.clicksend.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**copyContactToList**](#copycontacttolist) | **PUT** /v3/lists/{from_list_id}/contacts/{contact_id}/copy/{to_list_id} | Copy Contact to List|
|[**createList**](#createlist) | **POST** /v3/lists | Create List|
|[**createNewContact**](#createnewcontact) | **POST** /v3/lists/{list_id}/contacts | Create New Contact|
|[**deleteList**](#deletelist) | **DELETE** /v3/lists/{list_id} | Delete List|
|[**importContacts**](#importcontacts) | **POST** /v3/lists/{list_id}/import | Import Contacts|
|[**removeDuplicateContacts**](#removeduplicatecontacts) | **PUT** /v3/lists/{list_id}/remove-duplicates/ | Remove Duplicate Contacts|
|[**removeOptedOutContacts**](#removeoptedoutcontacts) | **PUT** /v3/lists/{list_id}/remove-opted-out-contacts/{opt_out_list_id} | Remove Opted Out Contacts|
|[**transferContactToList**](#transfercontacttolist) | **PUT** /v3/lists/{from_list_id}/contacts/{contact_id}/transfer/{to_list_id} | Transfer Contact to List|
|[**updateList**](#updatelist) | **PUT** /v3/lists/{list_id} | Update List|
|[**viewContactLists**](#viewcontactlists) | **GET** /v3/search/contacts-lists | View Contact Lists|
|[**viewListContacts**](#viewlistcontacts) | **GET** /v3/lists/{list_id}/contacts | View List Contacts|
|[**viewLists**](#viewlists) | **GET** /v3/lists | View Lists|
|[**viewSpecificList**](#viewspecificlist) | **GET** /v3/lists/{list_id} | View Specific List|

# **copyContactToList**
> CopyContactToList copyContactToList()

_Copy contact to another list_  Copy contact to another list  ### Parameters  | Parameter | In | Type | Required | Description | | --- | --- | --- | --- | --- | | from_list_id | path | integer(int32) | true | List ID for list that contains contact. | | contact_id | path | integer(int32) | true | Contact ID | | to_list_id | path | integer(int32) | true | List ID for list you want to copy contact to. |   Refer to [Status Codes](/#status-codes) for definitions of HTTP status code responses.   <div style=\"background-color: #FF6A4B; padding: 10px; border-radius: 8px;\">   <span style=\"color: white;\">This endpoint requires authentication,</span>    <a href=\"/docs/#authentication\" style=\"color: white; text-decoration: underline;\">more info...</a> </div>

### Example

```typescript
import {
    ListsApi,
    Configuration
} from 'clicksend';

const configuration = new Configuration();
const apiInstance = new ListsApi(configuration);

let fromListId: string; // (default to undefined)
let contactId: string; // (default to undefined)
let toListId: string; // (default to undefined)
let contentType: string; // (optional) (default to undefined)
let body: object; // (optional)

const { status, data } = await apiInstance.copyContactToList(
    fromListId,
    contactId,
    toListId,
    contentType,
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **object**|  | |
| **fromListId** | [**string**] |  | defaults to undefined|
| **contactId** | [**string**] |  | defaults to undefined|
| **toListId** | [**string**] |  | defaults to undefined|
| **contentType** | [**string**] |  | (optional) defaults to undefined|


### Return type

**CopyContactToList**

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createList**
> CreateList createList()

_Create new contact list_  ### Parameters  | Parameter | In | Type | Required | Description | | --- | --- | --- | --- | --- | | list_name | body | string | true | Your contact list name |  Refer to [Status Codes](/#status-codes) for definitions of HTTP status code responses.  <div style=\"background-color: #FF6A4B; padding: 10px; border-radius: 8px;\">   <span style=\"color: white;\">This endpoint requires authentication,</span>    <a href=\"/docs/#authentication\" style=\"color: white; text-decoration: underline;\">more info...</a> </div>

### Example

```typescript
import {
    ListsApi,
    Configuration,
    CreateListRequest
} from 'clicksend';

const configuration = new Configuration();
const apiInstance = new ListsApi(configuration);

let contentType: string; // (optional) (default to undefined)
let createListRequest: CreateListRequest; // (optional)

const { status, data } = await apiInstance.createList(
    contentType,
    createListRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createListRequest** | **CreateListRequest**|  | |
| **contentType** | [**string**] |  | (optional) defaults to undefined|


### Return type

**CreateList**

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createNewContact**
> CreateNewContact createNewContact()

_Create new contact_  ### parameters  | Parameter | In | Type | Required | Description | | --- | --- | --- | --- | --- | | list_id | path | integer(int32) | true | List id | | page | query | integer(int32) | false | [Page number](/#pagination) | | limit | query | integer(int32) | false | [Number of records per page](/#pagination) |   ### Properties  | Name | Type | Required | Restrictions | Description | | --- | --- | --- | --- | --- | | phone_number | string | true | none | Your phone number in\\_[E.164](https://en.wikipedia.org/wiki/E.164)\\_format. Must be provided if no fax number or email. | | email | string | false | none | Your email. Must be provided if no phone number or fax number. | | fax_number | string | false | none | Your fax number. Must be provided if no phone number or email. | | first_name | string | false | none | Your first name. | | address_line_1 | string | false | none | Your street address | | address_line_2 | string | false | none | none | | address_city | string | false | none | Your nearest city | | address_state | string | false | none | Your current state | | address_postal_code | string | false | none | Your current postcode | | address_country | string | false | none | Your current country | | organization_name | string | false | none | Your organisation name | | custom_1 | string | true | none | none | | custom_2 | string | false | none | none | | custom_3 | string | false | none | none | | custom_4 | string | false | none | none | | last_name | string | false | none | Your last name |   Refer to [Status Codes](/#status-codes) for definitions of HTTP status code responses.   <div style=\"background-color: #FF6A4B; padding: 10px; border-radius: 8px;\">   <span style=\"color: white;\">This endpoint requires authentication,</span>    <a href=\"/docs/#authentication\" style=\"color: white; text-decoration: underline;\">more info...</a> </div>

### Example

```typescript
import {
    ListsApi,
    Configuration,
    CreateNewContactRequest
} from 'clicksend';

const configuration = new Configuration();
const apiInstance = new ListsApi(configuration);

let listId: string; // (default to undefined)
let contentType: string; // (optional) (default to undefined)
let createNewContactRequest: CreateNewContactRequest; // (optional)

const { status, data } = await apiInstance.createNewContact(
    listId,
    contentType,
    createNewContactRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createNewContactRequest** | **CreateNewContactRequest**|  | |
| **listId** | [**string**] |  | defaults to undefined|
| **contentType** | [**string**] |  | (optional) defaults to undefined|


### Return type

**CreateNewContact**

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteList**
> DeleteList deleteList()

_ListsByListIdDelete_  Delete a specific contact list  ### Parameters  | Parameter | In | Type | Required | Description | | --- | --- | --- | --- | --- | | list_id | path | integer(int32) | true | List ID |  Refer to [Status Codes](/#status-codes) for definitions of HTTP status code responses.  <div style=\"background-color: #FF6A4B; padding: 10px; border-radius: 8px;\">   <span style=\"color: white;\">This endpoint requires authentication,</span>    <a href=\"/docs/#authentication\" style=\"color: white; text-decoration: underline;\">more info...</a> </div>

### Example

```typescript
import {
    ListsApi,
    Configuration
} from 'clicksend';

const configuration = new Configuration();
const apiInstance = new ListsApi(configuration);

let listId: string; // (default to undefined)
let contentType: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.deleteList(
    listId,
    contentType
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **listId** | [**string**] |  | defaults to undefined|
| **contentType** | [**string**] |  | (optional) defaults to undefined|


### Return type

**DeleteList**

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **importContacts**
> ImportContacts importContacts()

_Import contacts to list_  ### Parameters  | Parameter | In | Type | Required | Description | | --- | --- | --- | --- | --- | | list_id | path | integer(int32) | true | Your contact list id you want to access. |  ### Properties  | Name | Type | Required | Restrictions | Description | | --- | --- | --- | --- | --- | | file_url | string | true | none | URL of file to process | | field_order | \\[string\\] | true | none | Order of fields in file |   Refer to [Status Codes](/#status-codes) for definitions of HTTP status code responses.   <div style=\"background-color: #FF6A4B; padding: 10px; border-radius: 8px;\">   <span style=\"color: white;\">This endpoint requires authentication,</span>    <a href=\"/docs/#authentication\" style=\"color: white; text-decoration: underline;\">more info...</a> </div>

### Example

```typescript
import {
    ListsApi,
    Configuration,
    ImportContactsRequest
} from 'clicksend';

const configuration = new Configuration();
const apiInstance = new ListsApi(configuration);

let listId: string; // (default to undefined)
let contentType: string; // (optional) (default to undefined)
let importContactsRequest: ImportContactsRequest; // (optional)

const { status, data } = await apiInstance.importContacts(
    listId,
    contentType,
    importContactsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **importContactsRequest** | **ImportContactsRequest**|  | |
| **listId** | [**string**] |  | defaults to undefined|
| **contentType** | [**string**] |  | (optional) defaults to undefined|


### Return type

**ImportContacts**

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **removeDuplicateContacts**
> RemoveDuplicateContacts removeDuplicateContacts()

_Remove duplicate contacts_  ### Parameters  | Parameter | In | Type | Required | Description | | --- | --- | --- | --- | --- | | list_id | path | integer(int32) | true | Your list id |   Refer to [Status Codes](/#status-codes) for definitions of HTTP status code responses.   <div style=\"background-color: #FF6A4B; padding: 10px; border-radius: 8px;\">   <span style=\"color: white;\">This endpoint requires authentication,</span>    <a href=\"/docs/#authentication\" style=\"color: white; text-decoration: underline;\">more info...</a> </div>

### Example

```typescript
import {
    ListsApi,
    Configuration,
    RemoveDuplicateContactsRequest
} from 'clicksend';

const configuration = new Configuration();
const apiInstance = new ListsApi(configuration);

let listId: string; // (default to undefined)
let contentType: string; // (optional) (default to undefined)
let removeDuplicateContactsRequest: RemoveDuplicateContactsRequest; // (optional)

const { status, data } = await apiInstance.removeDuplicateContacts(
    listId,
    contentType,
    removeDuplicateContactsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **removeDuplicateContactsRequest** | **RemoveDuplicateContactsRequest**|  | |
| **listId** | [**string**] |  | defaults to undefined|
| **contentType** | [**string**] |  | (optional) defaults to undefined|


### Return type

**RemoveDuplicateContacts**

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **removeOptedOutContacts**
> RemoveOptedOutContacts removeOptedOutContacts()

_Remove all opted out contacts_  ### Parameters  | Parameter | In | Type | Required | Description | | --- | --- | --- | --- | --- | | list_id | path | integer(int32) | true | Your list id | | opt_out_list_id | path | integer(int32) | true | Your opt out list id |   Refer to [Status Codes](/#status-codes) for definitions of HTTP status code responses.   <div style=\"background-color: #FF6A4B; padding: 10px; border-radius: 8px;\">   <span style=\"color: white;\">This endpoint requires authentication,</span>    <a href=\"/docs/#authentication\" style=\"color: white; text-decoration: underline;\">more info...</a> </div>

### Example

```typescript
import {
    ListsApi,
    Configuration
} from 'clicksend';

const configuration = new Configuration();
const apiInstance = new ListsApi(configuration);

let listId: string; // (default to undefined)
let optOutListId: string; // (default to undefined)
let contentType: string; // (optional) (default to undefined)
let body: object; // (optional)

const { status, data } = await apiInstance.removeOptedOutContacts(
    listId,
    optOutListId,
    contentType,
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **object**|  | |
| **listId** | [**string**] |  | defaults to undefined|
| **optOutListId** | [**string**] |  | defaults to undefined|
| **contentType** | [**string**] |  | (optional) defaults to undefined|


### Return type

**RemoveOptedOutContacts**

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **transferContactToList**
> TransferContactToList transferContactToList()

_Transfer contact to another list_  Transfer contact to another list  ### Parameters  | Parameter | In | Type | Required | Description | | --- | --- | --- | --- | --- | | from_list_id | path | integer(int32) | true | List ID for list that contains contact. | | contact_id | path | integer(int32) | true | Contact ID | | to_list_id | path | integer(int32) | true | List ID for list you want to transfer contact to. |   Refer to [Status Codes](/#status-codes) for definitions of HTTP status code responses.   <div style=\"background-color: #FF6A4B; padding: 10px; border-radius: 8px;\">   <span style=\"color: white;\">This endpoint requires authentication,</span>    <a href=\"/docs/#authentication\" style=\"color: white; text-decoration: underline;\">more info...</a> </div>

### Example

```typescript
import {
    ListsApi,
    Configuration
} from 'clicksend';

const configuration = new Configuration();
const apiInstance = new ListsApi(configuration);

let fromListId: string; // (default to undefined)
let contactId: string; // (default to undefined)
let toListId: string; // (default to undefined)
let contentType: string; // (optional) (default to undefined)
let body: object; // (optional)

const { status, data } = await apiInstance.transferContactToList(
    fromListId,
    contactId,
    toListId,
    contentType,
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **object**|  | |
| **fromListId** | [**string**] |  | defaults to undefined|
| **contactId** | [**string**] |  | defaults to undefined|
| **toListId** | [**string**] |  | defaults to undefined|
| **contentType** | [**string**] |  | (optional) defaults to undefined|


### Return type

**TransferContactToList**

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateList**
> UpdateList updateList()

_Update specific contact list_  ### Parameters  | Parameter | In | Type | Required | Description | | --- | --- | --- | --- | --- | | list_id | path | integer(int32) | true | Your list id | | list_name | body | string | true | Your new list name |  Refer to [Status Codes](/#status-codes) for definitions of HTTP status code responses.  <div style=\"background-color: #FF6A4B; padding: 10px; border-radius: 8px;\">   <span style=\"color: white;\">This endpoint requires authentication,</span>    <a href=\"/docs/#authentication\" style=\"color: white; text-decoration: underline;\">more info...</a> </div>

### Example

```typescript
import {
    ListsApi,
    Configuration,
    CreateListRequest
} from 'clicksend';

const configuration = new Configuration();
const apiInstance = new ListsApi(configuration);

let listId: string; // (default to undefined)
let contentType: string; // (optional) (default to undefined)
let createListRequest: CreateListRequest; // (optional)

const { status, data } = await apiInstance.updateList(
    listId,
    contentType,
    createListRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createListRequest** | **CreateListRequest**|  | |
| **listId** | [**string**] |  | defaults to undefined|
| **contentType** | [**string**] |  | (optional) defaults to undefined|


### Return type

**UpdateList**

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **viewContactLists**
> viewContactLists()

_Get list of searched contact list_  ### Parameters  | Parameter | In | Type | Required | Description | | --- | --- | --- | --- | --- | | q | query | string | true | Your keyword or query. | | page | query | integer(int32) | false | [Page number](/#pagination) | | limit | query | integer(int32) | false | [Number of records per page](/#pagination) |  Refer to [Status Codes](/#status-codes) for definitions of HTTP status code responses.  This endpoint requires authentication, [more info...](/#authentication)

### Example

```typescript
import {
    ListsApi,
    Configuration
} from 'clicksend';

const configuration = new Configuration();
const apiInstance = new ListsApi(configuration);

let q: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.viewContactLists(
    q
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **q** | [**string**] |  | (optional) defaults to undefined|


### Return type

void (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **viewListContacts**
> ViewListContacts viewListContacts()

_Get all contacts in a list_  ### parameters  | Parameter | In | Type | Required | Description | | --- | --- | --- | --- | --- | | list_id | path | integer(int32) | true | Contact list ID | | page | query | integer(int32) | false | [Page number](/#pagination) | | limit | query | integer(int32) | false | [Number of records per page](/#pagination) | | updated_after | query | integer(int32) | false | Get all contacts updated after a given timestamp. |   Refer to [Status Codes](/#status-codes) for definitions of HTTP status code responses.   <div style=\"background-color: #FF6A4B; padding: 10px; border-radius: 8px;\">   <span style=\"color: white;\">This endpoint requires authentication,</span>    <a href=\"/docs/#authentication\" style=\"color: white; text-decoration: underline;\">more info...</a> </div>

### Example

```typescript
import {
    ListsApi,
    Configuration
} from 'clicksend';

const configuration = new Configuration();
const apiInstance = new ListsApi(configuration);

let listId: string; // (default to undefined)
let contentType: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.viewListContacts(
    listId,
    contentType
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **listId** | [**string**] |  | defaults to undefined|
| **contentType** | [**string**] |  | (optional) defaults to undefined|


### Return type

**ViewListContacts**

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **viewLists**
> ViewLists viewLists()

_Get all contact lists_  ### Parameters  | Parameter | In | Type | Required | Description | | --- | --- | --- | --- | --- | | page | query | integer(int32) | false | [Page number](/#pagination) | | limit | query | integer(int32) | false | [Number of records per page](/#pagination) |   Refer to [Status Codes](/#status-codes) for definitions of HTTP status code responses.   <div style=\"background-color: #FF6A4B; padding: 10px; border-radius: 8px;\">   <span style=\"color: white;\">This endpoint requires authentication,</span>    <a href=\"/docs/#authentication\" style=\"color: white; text-decoration: underline;\">more info...</a> </div>

### Example

```typescript
import {
    ListsApi,
    Configuration
} from 'clicksend';

const configuration = new Configuration();
const apiInstance = new ListsApi(configuration);

let contentType: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.viewLists(
    contentType
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **contentType** | [**string**] |  | (optional) defaults to undefined|


### Return type

**ViewLists**

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **viewSpecificList**
> ViewSpecificList viewSpecificList()

_Get specific contact list_  ### Parameters  | Parameter | In | Type | Required | Description | | --- | --- | --- | --- | --- | | list_id | path | integer(int32) | true | List ID |   Refer to [Status Codes](/#status-codes) for definitions of HTTP status code responses.   <div style=\"background-color: #FF6A4B; padding: 10px; border-radius: 8px;\">   <span style=\"color: white;\">This endpoint requires authentication,</span>    <a href=\"/docs/#authentication\" style=\"color: white; text-decoration: underline;\">more info...</a> </div>

### Example

```typescript
import {
    ListsApi,
    Configuration
} from 'clicksend';

const configuration = new Configuration();
const apiInstance = new ListsApi(configuration);

let listId: string; // (default to undefined)
let contentType: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.viewSpecificList(
    listId,
    contentType
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **listId** | [**string**] |  | defaults to undefined|
| **contentType** | [**string**] |  | (optional) defaults to undefined|


### Return type

**ViewSpecificList**

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

