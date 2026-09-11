# AlphaTagsApi

All URIs are relative to *https://rest.clicksend.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**deleteAlphaTag**](#deletealphatag) | **DELETE** /v3/alpha-tags/{alpha_tag_id} | Delete Alpha Tag|
|[**getAlphaTag**](#getalphatag) | **GET** /v3/alpha-tags/{alpha_tag_id} | Get Alpha Tag|
|[**listAlphaTags**](#listalphatags) | **GET** /v3/alpha-tags | List Alpha Tags|
|[**requestAlphaTag**](#requestalphatag) | **POST** /v3/alpha-tags | Request Alpha Tag|

# **deleteAlphaTag**
> deleteAlphaTag()

_Delete a specific alpha tag._  ### Parameters  | Parameter | In | Type | Required | Description | | --- | --- | --- | --- | --- | | alpha_tag_id | path | uuid | true | ID of the alpha tag |  Refer to [Status Codes](/#status-codes) for definitions of HTTP status code responses.  This endpoint requires authentication, [more info...](/#authentication)

### Example

```typescript
import {
    AlphaTagsApi,
    Configuration
} from 'clicksend';

const configuration = new Configuration();
const apiInstance = new AlphaTagsApi(configuration);

let alphaTagId: string; // (default to undefined)
let contentType: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.deleteAlphaTag(
    alphaTagId,
    contentType
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **alphaTagId** | [**string**] |  | defaults to undefined|
| **contentType** | [**string**] |  | (optional) defaults to undefined|


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

# **getAlphaTag**
> AlphaTag getAlphaTag()

_Get a specific alpha tag._  ### Parameters  | Parameter | In | Type | Required | Description | | --- | --- | --- | --- | --- | | alpha_tag_id | path | uuid | true | ID of the alpha tag |  Refer to [Status Codes](/#status-codes) for definitions of HTTP status code responses.   This endpoint requires authentication, [more info...](/#authentication)

### Example

```typescript
import {
    AlphaTagsApi,
    Configuration
} from 'clicksend';

const configuration = new Configuration();
const apiInstance = new AlphaTagsApi(configuration);

let alphaTagId: string; // (default to undefined)
let contentType: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.getAlphaTag(
    alphaTagId,
    contentType
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **alphaTagId** | [**string**] |  | defaults to undefined|
| **contentType** | [**string**] |  | (optional) defaults to undefined|


### Return type

**AlphaTag**

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

# **listAlphaTags**
> ListAlphaTags listAlphaTags()



### Example

```typescript
import {
    AlphaTagsApi,
    Configuration
} from 'clicksend';

const configuration = new Configuration();
const apiInstance = new AlphaTagsApi(configuration);

let sortDirection: 'asc' | 'desc'; //The sort direction for the results. The default value is asc. (optional) (default to 'asc')
let pageSize: number; //The number of items to return per page. This parameter controls the size of each page of results. The default value is 10. (optional) (default to 10)

const { status, data } = await apiInstance.listAlphaTags(
    sortDirection,
    pageSize
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **sortDirection** | [**&#39;asc&#39; | &#39;desc&#39;**]**Array<&#39;asc&#39; &#124; &#39;desc&#39;>** | The sort direction for the results. The default value is asc. | (optional) defaults to 'asc'|
| **pageSize** | [**number**] | The number of items to return per page. This parameter controls the size of each page of results. The default value is 10. | (optional) defaults to 10|


### Return type

**ListAlphaTags**

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

# **requestAlphaTag**
> AlphaTag requestAlphaTag()

_Request to register an alpha tag. After requested, the alpha tag will be reviewed by ClickSend and either approved or rejected. Some countries (e.g Australia) require you to submit additional fields due to government mandated compliance checks._  ### Properties  | Name | Type | Required | Restrictions | Description | | --- | --- | --- | --- | --- | | alpha_tag | string | true | [yes](https://help.clicksend.com/article/1qxfxkcwm2-global-generic-alpha-tags) | The alpha tag name. Length must be between 3 - 11 characters, can only contain a-z A-Z 0-9 + and must contain at least one non numeric. | | reason | string | false | none | Must be one of the following: `Sole Trader Name`, `Company Name`, `Partnership Name`, `Registered Trust Name`, `Co-Operative Name`, `Indigenous Corporation Name`, `Registered Organisation Name`, `Personal Name`, `Trademark`, `Government Agency or Entity`, `Product or Service Name`, `Acronym/Initialism`, `Contraction of Name`, `Third Party`. In case of `Third Party`, we will contact you to collect the relevant information. | | countries | array of strings | false | none | List of country codes (e.g., \"AU\", \"US\") where the alpha tag is requested. Only supported and required for AU. | | businesses | array of objects | false | none | List of business details required for alpha tag registration. Each object contains country, business information, ... Required if `countries` is provided. When `business_relationship` is `ENTITY_ASSOCIATE`, the following partner fields are also **required**: `partner_business_name`, `partner_abn`, `partner_business_info`, `partner_business_address`, `partner_representative`. These fields are **forbidden** for any other `business_relationship` value. |  Refer to [Status Codes](/#status-codes) for definitions of HTTP status code responses.  _This endpoint requires authentication,_ [more info...](/#authentication) 

### Example

```typescript
import {
    AlphaTagsApi,
    Configuration,
    RequestAlphaTagRequest
} from 'clicksend';

const configuration = new Configuration();
const apiInstance = new AlphaTagsApi(configuration);

let contentType: string; // (optional) (default to undefined)
let requestAlphaTagRequest: RequestAlphaTagRequest; // (optional)

const { status, data } = await apiInstance.requestAlphaTag(
    contentType,
    requestAlphaTagRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **requestAlphaTagRequest** | **RequestAlphaTagRequest**|  | |
| **contentType** | [**string**] |  | (optional) defaults to undefined|


### Return type

**AlphaTag**

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

