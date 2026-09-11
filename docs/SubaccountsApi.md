# SubaccountsApi

All URIs are relative to *https://rest.clicksend.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createSubaccount**](#createsubaccount) | **POST** /v3/subaccounts | Create Subaccount|
|[**deleteSubaccount**](#deletesubaccount) | **DELETE** /v3/subaccounts/{subaccount_id} | Delete Subaccount|
|[**generateNewApiKey**](#generatenewapikey) | **PUT** /v3/subaccounts/{subaccount_id}/regen-api-key | Generate New API Key|
|[**updateSubaccount**](#updatesubaccount) | **PUT** /v3/subaccounts/{subaccount_id} | Update Subaccount|
|[**viewSpecificSubaccount**](#viewspecificsubaccount) | **GET** /v3/subaccounts/{subaccount_id} | View Specific Subaccount|
|[**viewSubaccounts**](#viewsubaccounts) | **GET** /v3/subaccounts | View Subaccounts|

# **createSubaccount**
> CreateSubaccount createSubaccount()

_Create new subaccount_  ### Properties  | Name | Type | Required | Restrictions | Description | | --- | --- | --- | --- | --- | | api_username | string | true | none | Your new api username. | | password | string | true | none | Your new password | | email | string | true | none | Your new email. | | phone_number | string | true | none | Your phone number in [E.164](https://en.wikipedia.org/wiki/E.164) format. | | first_name | string | true | none | Your firstname | | last_name | string | true | none | Your lastname | | access_users | integer(int1) | false | none | Flag value must be 1 for yes or 0 for no. | | access_billing | integer(int1) | false | none | Flag value must be 1 for yes or 0 for no. | | access_reporting | integer(int1) | false | none | Flag value must be 1 for yes or 0 for no. | | access_contacts | integer(int1) | false | none | Flag value must be 1 for yes or 0 for no. | | access_settings | integer(int1) | false | none | Flag value must be 1 for yes or 0 for no. |  Refer to [Status Codes](/#status-codes) for definitions of HTTP status code responses.  <div style=\"background-color: #FF6A4B; padding: 10px; border-radius: 8px;\">   <span style=\"color: white;\">This endpoint requires authentication,</span>    <a href=\"/docs/#authentication\" style=\"color: white; text-decoration: underline;\">more info...</a> </div>

### Example

```typescript
import {
    SubaccountsApi,
    Configuration,
    CreateSubaccountRequest
} from 'clicksend';

const configuration = new Configuration();
const apiInstance = new SubaccountsApi(configuration);

let contentType: string; // (optional) (default to undefined)
let createSubaccountRequest: CreateSubaccountRequest; // (optional)

const { status, data } = await apiInstance.createSubaccount(
    contentType,
    createSubaccountRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createSubaccountRequest** | **CreateSubaccountRequest**|  | |
| **contentType** | [**string**] |  | (optional) defaults to undefined|


### Return type

**CreateSubaccount**

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

# **deleteSubaccount**
> DeleteSubaccount deleteSubaccount()

_Delete a subaccount_  ### Parameters  | Parameter | In | Type | Required | Description | | --- | --- | --- | --- | --- | | subaccount_id | path | integer(int32) | true | ID of subaccount to delete |   Refer to [Status Codes](/#status-codes) for definitions of HTTP status code responses.   <div style=\"background-color: #FF6A4B; padding: 10px; border-radius: 8px;\">   <span style=\"color: white;\">This endpoint requires authentication,</span>    <a href=\"/docs/#authentication\" style=\"color: white; text-decoration: underline;\">more info...</a> </div>

### Example

```typescript
import {
    SubaccountsApi,
    Configuration
} from 'clicksend';

const configuration = new Configuration();
const apiInstance = new SubaccountsApi(configuration);

let subaccountId: string; // (default to undefined)
let contentType: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.deleteSubaccount(
    subaccountId,
    contentType
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **subaccountId** | [**string**] |  | defaults to undefined|
| **contentType** | [**string**] |  | (optional) defaults to undefined|


### Return type

**DeleteSubaccount**

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

# **generateNewApiKey**
> GenerateNewApiKey generateNewApiKey()

_Regenerate an API Key_  ### Parameters  | Parameter | In | Type | Required | Description | | --- | --- | --- | --- | --- | | subaccount_id | path | integer(int32) | true | ID of subaccount to regenerate API key for |   Refer to [Status Codes](/#status-codes) for definitions of HTTP status code responses.   <div style=\"background-color: #FF6A4B; padding: 10px; border-radius: 8px;\">   <span style=\"color: white;\">This endpoint requires authentication,</span>    <a href=\"/docs/#authentication\" style=\"color: white; text-decoration: underline;\">more info...</a> </div>

### Example

```typescript
import {
    SubaccountsApi,
    Configuration,
    GenerateNewApiKeyRequest
} from 'clicksend';

const configuration = new Configuration();
const apiInstance = new SubaccountsApi(configuration);

let subaccountId: string; // (default to undefined)
let contentType: string; // (optional) (default to undefined)
let generateNewApiKeyRequest: GenerateNewApiKeyRequest; // (optional)

const { status, data } = await apiInstance.generateNewApiKey(
    subaccountId,
    contentType,
    generateNewApiKeyRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **generateNewApiKeyRequest** | **GenerateNewApiKeyRequest**|  | |
| **subaccountId** | [**string**] |  | defaults to undefined|
| **contentType** | [**string**] |  | (optional) defaults to undefined|


### Return type

**GenerateNewApiKey**

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

# **updateSubaccount**
> UpdateSubaccount updateSubaccount()

_Update subaccount_  ### Parameters  | Parameter | In | Type | Required | Description | | --- | --- | --- | --- | --- | | subaccount_id | path | integer(int32) | true | ID of subaccount to update |  ### Properties  | Name | Type | Required | Restrictions | Description | | --- | --- | --- | --- | --- | | api_username | string | true | none | Your new api username. | | password | string | true | none | Your new password | | email | string | true | none | Your new email. | | phone_number | string | true | none | Your phone number in [E.164](https://en.wikipedia.org/wiki/E.164) format. | | first_name | string | true | none | Your firstname | | last_name | string | true | none | Your lastname | | access_users | integer(int1) | false | none | Flag value must be 1 for yes or 0 for no. | | access_billing | integer(int1) | false | none | Flag value must be 1 for yes or 0 for no. | | access_reporting | integer(int1) | false | none | Flag value must be 1 for yes or 0 for no. | | access_contacts | integer(int1) | false | none | Flag value must be 1 for yes or 0 for no. | | access_settings | integer(int1) | false | none | Flag value must be 1 for yes or 0 for no. |   Refer to [Status Codes](/#status-codes) for definitions of HTTP status code responses.   <div style=\"background-color: #FF6A4B; padding: 10px; border-radius: 8px;\">   <span style=\"color: white;\">This endpoint requires authentication,</span>    <a href=\"/docs/#authentication\" style=\"color: white; text-decoration: underline;\">more info...</a> </div>

### Example

```typescript
import {
    SubaccountsApi,
    Configuration,
    UpdateSubaccountRequest
} from 'clicksend';

const configuration = new Configuration();
const apiInstance = new SubaccountsApi(configuration);

let subaccountId: string; // (default to undefined)
let contentType: string; // (optional) (default to undefined)
let updateSubaccountRequest: UpdateSubaccountRequest; // (optional)

const { status, data } = await apiInstance.updateSubaccount(
    subaccountId,
    contentType,
    updateSubaccountRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateSubaccountRequest** | **UpdateSubaccountRequest**|  | |
| **subaccountId** | [**string**] |  | defaults to undefined|
| **contentType** | [**string**] |  | (optional) defaults to undefined|


### Return type

**UpdateSubaccount**

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

# **viewSpecificSubaccount**
> ViewSpecificSubaccount viewSpecificSubaccount()

_Get specific subaccount_  ### Parameters  | Parameter | In | Type | Required | Description | | --- | --- | --- | --- | --- | | subaccount_id | path | integer(int32) | true | ID of subaccount to get |   Refer to [Status Codes](/#status-codes) for definitions of HTTP status code responses.   <div style=\"background-color: #FF6A4B; padding: 10px; border-radius: 8px;\">   <span style=\"color: white;\">This endpoint requires authentication,</span>    <a href=\"/docs/#authentication\" style=\"color: white; text-decoration: underline;\">more info...</a> </div>

### Example

```typescript
import {
    SubaccountsApi,
    Configuration
} from 'clicksend';

const configuration = new Configuration();
const apiInstance = new SubaccountsApi(configuration);

let subaccountId: string; // (default to undefined)
let contentType: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.viewSpecificSubaccount(
    subaccountId,
    contentType
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **subaccountId** | [**string**] |  | defaults to undefined|
| **contentType** | [**string**] |  | (optional) defaults to undefined|


### Return type

**ViewSpecificSubaccount**

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

# **viewSubaccounts**
> ViewSubaccounts viewSubaccounts()

_Get all subaccounts_  ### Parameters  | Parameter | In | Type | Required | Description | | --- | --- | --- | --- | --- | | page | query | integer(int32) | false | [Page number](/#pagination) | | limit | query | integer(int32) | false | [Number of records per page](/#pagination) |   Refer to [Status Codes](/#status-codes) for definitions of HTTP status code responses.   <div style=\"background-color: #FF6A4B; padding: 10px; border-radius: 8px;\">   <span style=\"color: white;\">This endpoint requires authentication,</span>    <a href=\"/docs/#authentication\" style=\"color: white; text-decoration: underline;\">more info...</a> </div>

### Example

```typescript
import {
    SubaccountsApi,
    Configuration
} from 'clicksend';

const configuration = new Configuration();
const apiInstance = new SubaccountsApi(configuration);

let contentType: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.viewSubaccounts(
    contentType
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **contentType** | [**string**] |  | (optional) defaults to undefined|


### Return type

**ViewSubaccounts**

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

