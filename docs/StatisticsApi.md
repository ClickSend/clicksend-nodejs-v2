# StatisticsApi

All URIs are relative to *https://rest.clicksend.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**viewSmsStatistics**](#viewsmsstatistics) | **GET** /v3/statistics/sms | View SMS Statistics|
|[**viewVoiceStatistics**](#viewvoicestatistics) | **GET** /v3/statistics/voice | View Voice Statistics|

# **viewSmsStatistics**
> ViewSmsStatistics viewSmsStatistics()

_Get sms statistics_   Refer to [Status Codes](/#status-codes) for definitions of HTTP status code responses.   <div style=\"background-color: #FF6A4B; padding: 10px; border-radius: 8px;\">   <span style=\"color: white;\">This endpoint requires authentication,</span>    <a href=\"/docs/#authentication\" style=\"color: white; text-decoration: underline;\">more info...</a> </div>

### Example

```typescript
import {
    StatisticsApi,
    Configuration
} from 'clicksend';

const configuration = new Configuration();
const apiInstance = new StatisticsApi(configuration);

let contentType: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.viewSmsStatistics(
    contentType
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **contentType** | [**string**] |  | (optional) defaults to undefined|


### Return type

**ViewSmsStatistics**

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

# **viewVoiceStatistics**
> ViewVoiceStatistics viewVoiceStatistics()

_Get voice statistics_  Refer to [Status Codes](/#status-codes) for definitions of HTTP status code responses.  <div style=\"background-color: #FF6A4B; padding: 10px; border-radius: 8px;\">   <span style=\"color: white;\">This endpoint requires authentication,</span>    <a href=\"/docs/#authentication\" style=\"color: white; text-decoration: underline;\">more info...</a> </div>

### Example

```typescript
import {
    StatisticsApi,
    Configuration
} from 'clicksend';

const configuration = new Configuration();
const apiInstance = new StatisticsApi(configuration);

let contentType: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.viewVoiceStatistics(
    contentType
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **contentType** | [**string**] |  | (optional) defaults to undefined|


### Return type

**ViewVoiceStatistics**

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

