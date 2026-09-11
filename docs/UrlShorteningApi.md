# UrlShorteningApi

All URIs are relative to *https://rest.clicksend.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**shortUrlGetStatistics**](#shorturlgetstatistics) | **GET** /v3/short-url/statistics/{source}/{source_id} | Get Statistics|
|[**shortUrlGetTracking**](#shorturlgettracking) | **GET** /v3/short-url/tracking/{long_url_id} | Get Tracking|

# **shortUrlGetStatistics**
> GetStatistics shortUrlGetStatistics()

Use this endpoint to get the aggregated statistics for a shortened URL. This allows you to track the total number of clicks on the link. You can gather details such as the device type and where it was opened from as well.

### Example

```typescript
import {
    UrlShorteningApi,
    Configuration
} from 'clicksend';

const configuration = new Configuration();
const apiInstance = new UrlShorteningApi(configuration);

let source: 'quick_sms'; //Source of the request. (default to undefined)
let sourceId: string; //ID of the source (e.g. message ID). (default to undefined)
let contentType: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.shortUrlGetStatistics(
    source,
    sourceId,
    contentType
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **source** | [**&#39;quick_sms&#39;**]**Array<&#39;quick_sms&#39;>** | Source of the request. | defaults to undefined|
| **sourceId** | [**string**] | ID of the source (e.g. message ID). | defaults to undefined|
| **contentType** | [**string**] |  | (optional) defaults to undefined|


### Return type

**GetStatistics**

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

# **shortUrlGetTracking**
> GetTracking shortUrlGetTracking()

Use this endpoint to track how individual recipients interact with the link.  It returns data from the most recent click, including statistics such as how many times they’ve visited the link and when it was last opened. To use this endpoint, reference the _long_url_id_ provided in the [GET /short-url/statistics](/messaging/url-shortening/other/short-url-get-statistics) endpoint.

### Example

```typescript
import {
    UrlShorteningApi,
    Configuration
} from 'clicksend';

const configuration = new Configuration();
const apiInstance = new UrlShorteningApi(configuration);

let longUrlId: string; //ID of the long URL (uniquely defined by the source, source ID, and long URL). Obtained from the GET statistics endpoint. (default to undefined)
let contentType: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.shortUrlGetTracking(
    longUrlId,
    contentType
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **longUrlId** | [**string**] | ID of the long URL (uniquely defined by the source, source ID, and long URL). Obtained from the GET statistics endpoint. | defaults to undefined|
| **contentType** | [**string**] |  | (optional) defaults to undefined|


### Return type

**GetTracking**

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

