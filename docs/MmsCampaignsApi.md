# MmsCampaignsApi

All URIs are relative to *https://rest.clicksend.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**calculateMmsCampaignPrice**](#calculatemmscampaignprice) | **POST** /v3/mms-campaigns/price | Calculate MMS Campaign Price|
|[**cancelMmsCampaign**](#cancelmmscampaign) | **PUT** /v3/mms-campaigns/{mms_campaign_id}/cancel | Cancel MMS Campaign|
|[**sendMmsCampaign**](#sendmmscampaign) | **POST** /v3/mms-campaigns/send | Send MMS Campaign|
|[**updateMmsCampaign**](#updatemmscampaign) | **PUT** /v3/mms-campaigns/{mms_campaign_id} | Update MMS Campaign|
|[**viewAllMmsCampaigns**](#viewallmmscampaigns) | **GET** /v3/mms-campaigns | View All MMS Campaigns|
|[**viewMmsCampaign**](#viewmmscampaign) | **GET** /v3/mms-campaigns/{mms_campaign_id} | View MMS Campaign|

# **calculateMmsCampaignPrice**
> CalculateMmsCampaignPrice calculateMmsCampaignPrice()

_Calculate price for mms campaign_  ### Properties  | Name | Type | Required | Restrictions | Description | | --- | --- | --- | --- | --- | | list_id | integer(int32) | true | none | Your list id. | | name | string | true | none | Your campaign name. | | body | string | true | none | Your campaign message. | | from | string | true | [yes](http://help.clicksend.com/SMS/what-is-a-sender-id-or-sender-number) | Your sender id | | schedule | integer(int32) | false | none | Your schedule timestamp. | | subject | string | true | none | Subject of MMS campaign. | | media_file | string | true | none | URL pointing to media file. |   Refer to [Status Codes](/#status-codes) for definitions of HTTP status code responses.   <div style=\"background-color: #FF6A4B; padding: 10px; border-radius: 8px;\">   <span style=\"color: white;\">This endpoint requires authentication,</span>    <a href=\"/docs/#authentication\" style=\"color: white; text-decoration: underline;\">more info...</a> </div>

### Example

```typescript
import {
    MmsCampaignsApi,
    Configuration
} from 'clicksend';

const configuration = new Configuration();
const apiInstance = new MmsCampaignsApi(configuration);

let contentType: string; // (optional) (default to undefined)
let body: object; // (optional)

const { status, data } = await apiInstance.calculateMmsCampaignPrice(
    contentType,
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **object**|  | |
| **contentType** | [**string**] |  | (optional) defaults to undefined|


### Return type

**CalculateMmsCampaignPrice**

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

# **cancelMmsCampaign**
> CancelMmsCampaign cancelMmsCampaign()

_Cancel mms campaign_  ### Parameters  | Parameter | In | Type | Required | Description | | --- | --- | --- | --- | --- | | mms_campaign_id | path | integer(int32) | true | ID of MMS Campaign to cancel |   Refer to [Status Codes](/#status-codes) for definitions of HTTP status code responses.   <div style=\"background-color: #FF6A4B; padding: 10px; border-radius: 8px;\">   <span style=\"color: white;\">This endpoint requires authentication,</span>    <a href=\"/docs/#authentication\" style=\"color: white; text-decoration: underline;\">more info...</a> </div>

### Example

```typescript
import {
    MmsCampaignsApi,
    Configuration,
    CalculateSmsCampaignPriceRequest
} from 'clicksend';

const configuration = new Configuration();
const apiInstance = new MmsCampaignsApi(configuration);

let mmsCampaignId: string; // (default to undefined)
let contentType: string; // (optional) (default to undefined)
let calculateSmsCampaignPriceRequest: CalculateSmsCampaignPriceRequest; // (optional)

const { status, data } = await apiInstance.cancelMmsCampaign(
    mmsCampaignId,
    contentType,
    calculateSmsCampaignPriceRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **calculateSmsCampaignPriceRequest** | **CalculateSmsCampaignPriceRequest**|  | |
| **mmsCampaignId** | [**string**] |  | defaults to undefined|
| **contentType** | [**string**] |  | (optional) defaults to undefined|


### Return type

**CancelMmsCampaign**

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

# **sendMmsCampaign**
> SendMmsCampaign sendMmsCampaign()

_Create mms campaign_  ### Properties  | Name | Type | Required | Restrictions | Description | | --- | --- | --- | --- | --- | | list_id | integer(int32) | true | none | Your list id. | | name | string | true | none | Your campaign name. | | body | string | true | none | Your campaign message. | | from | string | true | [yes](http://help.clicksend.com/SMS/what-is-a-sender-id-or-sender-number) | Your sender id | | schedule | integer(int32) | false | none | Your schedule timestamp. | | subject | string | true | none | Subject of MMS campaign. | | media_file | string | true | none | URL pointing to media file. |   Refer to [Status Codes](/#status-codes) for definitions of HTTP status code responses.   <div style=\"background-color: #FF6A4B; padding: 10px; border-radius: 8px;\">   <span style=\"color: white;\">This endpoint requires authentication,</span>    <a href=\"/docs/#authentication\" style=\"color: white; text-decoration: underline;\">more info...</a> </div>

### Example

```typescript
import {
    MmsCampaignsApi,
    Configuration,
    SendMmsCampaignRequest
} from 'clicksend';

const configuration = new Configuration();
const apiInstance = new MmsCampaignsApi(configuration);

let contentType: string; // (optional) (default to undefined)
let sendMmsCampaignRequest: SendMmsCampaignRequest; // (optional)

const { status, data } = await apiInstance.sendMmsCampaign(
    contentType,
    sendMmsCampaignRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **sendMmsCampaignRequest** | **SendMmsCampaignRequest**|  | |
| **contentType** | [**string**] |  | (optional) defaults to undefined|


### Return type

**SendMmsCampaign**

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

# **updateMmsCampaign**
> UpdateMmsCampaign updateMmsCampaign()

_Update mms campaign_  ### Parameters  | Parameter | In | Type | Required | Description | | --- | --- | --- | --- | --- | | mms_campaign_id | path | integer(int32) | true | ID of MMS campaign to update |  ### Properties  | Name | Type | Required | Restrictions | Description | | --- | --- | --- | --- | --- | | list_id | integer(int32) | true | none | Your list id. | | name | string | true | none | Your campaign name. | | body | string | true | none | Your campaign message. | | from | string | true | [yes](http://help.clicksend.com/SMS/what-is-a-sender-id-or-sender-number) | Your sender id | | schedule | integer(int32) | false | none | Your schedule timestamp. | | subject | string | true | none | Subject of MMS campaign. | | media_file | string | true | none | URL pointing to media file. |  Refer to [Status Codes](/#status-codes) for definitions of HTTP status code responses.  <div style=\"background-color: #FF6A4B; padding: 10px; border-radius: 8px;\">   <span style=\"color: white;\">This endpoint requires authentication,</span>    <a href=\"/docs/#authentication\" style=\"color: white; text-decoration: underline;\">more info...</a> </div>

### Example

```typescript
import {
    MmsCampaignsApi,
    Configuration,
    CalculateSmsCampaignPriceRequest
} from 'clicksend';

const configuration = new Configuration();
const apiInstance = new MmsCampaignsApi(configuration);

let mmsCampaignId: string; // (default to undefined)
let contentType: string; // (optional) (default to undefined)
let calculateSmsCampaignPriceRequest: CalculateSmsCampaignPriceRequest; // (optional)

const { status, data } = await apiInstance.updateMmsCampaign(
    mmsCampaignId,
    contentType,
    calculateSmsCampaignPriceRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **calculateSmsCampaignPriceRequest** | **CalculateSmsCampaignPriceRequest**|  | |
| **mmsCampaignId** | [**string**] |  | defaults to undefined|
| **contentType** | [**string**] |  | (optional) defaults to undefined|


### Return type

**UpdateMmsCampaign**

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

# **viewAllMmsCampaigns**
> ViewAllMmsCampaigns viewAllMmsCampaigns()

_Get list of mms campaigns_  ### Parameters  | Parameter | In | Type | Required | Description | | --- | --- | --- | --- | --- | | page | query | integer(int32) | false | [Page number](/#pagination) | | limit | query | integer(int32) | false | [Number of records per page](/#pagination) |   Refer to [Status Codes](/#status-codes) for definitions of HTTP status code responses.   <div style=\"background-color: #FF6A4B; padding: 10px; border-radius: 8px;\">   <span style=\"color: white;\">This endpoint requires authentication,</span>    <a href=\"/docs/#authentication\" style=\"color: white; text-decoration: underline;\">more info...</a> </div>

### Example

```typescript
import {
    MmsCampaignsApi,
    Configuration
} from 'clicksend';

const configuration = new Configuration();
const apiInstance = new MmsCampaignsApi(configuration);

let contentType: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.viewAllMmsCampaigns(
    contentType
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **contentType** | [**string**] |  | (optional) defaults to undefined|


### Return type

**ViewAllMmsCampaigns**

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

# **viewMmsCampaign**
> ViewMmsCampaign viewMmsCampaign()

_Get specific mms campaign_  ### Parameters  | Parameter | In | Type | Required | Description | | --- | --- | --- | --- | --- | | mms_campaign_id | path | integer(int32) | true | ID of MMS campaign to retrieve |   Refer to [Status Codes](/#status-codes) for definitions of HTTP status code responses.   <div style=\"background-color: #FF6A4B; padding: 10px; border-radius: 8px;\">   <span style=\"color: white;\">This endpoint requires authentication,</span>    <a href=\"/docs/#authentication\" style=\"color: white; text-decoration: underline;\">more info...</a> </div>

### Example

```typescript
import {
    MmsCampaignsApi,
    Configuration
} from 'clicksend';

const configuration = new Configuration();
const apiInstance = new MmsCampaignsApi(configuration);

let mmsCampaignId: string; // (default to undefined)
let contentType: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.viewMmsCampaign(
    mmsCampaignId,
    contentType
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **mmsCampaignId** | [**string**] |  | defaults to undefined|
| **contentType** | [**string**] |  | (optional) defaults to undefined|


### Return type

**ViewMmsCampaign**

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

