# ManagementApi

All URIs are relative to *https://rest.clicksend.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**viewAccountDetails**](#viewaccountdetails) | **GET** /v3/account | View Account Details|
|[**viewAccountUsage**](#viewaccountusage) | **GET** /v3/account/usage/{year}/{month}/subaccount | View Account Usage|

# **viewAccountDetails**
> ViewAccountDetails viewAccountDetails()

_Get account information_  Refer to [Status Codes](/#status-codes) for definitions of HTTP status code responses.  <div style=\"background-color: #FF6A4B; padding: 10px; border-radius: 8px;\">   <span style=\"color: white;\">This endpoint requires authentication,</span>    <a href=\"/#pagination\" style=\"color: white; text-decoration: underline;\">more info...</a> </div>

### Example

```typescript
import {
    ManagementApi,
    Configuration
} from 'clicksend';

const configuration = new Configuration();
const apiInstance = new ManagementApi(configuration);

let contentType: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.viewAccountDetails(
    contentType
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **contentType** | [**string**] |  | (optional) defaults to undefined|


### Return type

**ViewAccountDetails**

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

# **viewAccountUsage**
> ViewAccountUsage viewAccountUsage()

_Get account usage_  | **Name** | **Type** | **Required** | **Restrictions** | **Description** | | --- | --- | --- | --- | --- | | year | string | true | none | Your account usage year. Example: 2019 | | month | string | true | none | Your account usage month. Example: 4 |  Refer to [Status Codes](/#status-codes) for definitions of HTTP status code responses.  <div style=\"background-color: #FF6A4B; padding: 10px; border-radius: 8px;\">   <span style=\"color: white;\">This endpoint requires authentication,</span>    <a href=\"/#pagination\" style=\"color: white; text-decoration: underline;\">more info...</a> </div>

### Example

```typescript
import {
    ManagementApi,
    Configuration
} from 'clicksend';

const configuration = new Configuration();
const apiInstance = new ManagementApi(configuration);

let year: string; // (default to undefined)
let month: string; // (default to undefined)
let contentType: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.viewAccountUsage(
    year,
    month,
    contentType
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **year** | [**string**] |  | defaults to undefined|
| **month** | [**string**] |  | defaults to undefined|
| **contentType** | [**string**] |  | (optional) defaults to undefined|


### Return type

**ViewAccountUsage**

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

