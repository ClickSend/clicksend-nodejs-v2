# NumbersApi

All URIs are relative to *https://rest.clicksend.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**purchaseDedicatedNumber**](#purchasededicatednumber) | **POST** /v3/numbers/buy/{dedicated_number} | Purchase Dedicated Number|
|[**registerNumbers**](#registernumbers) | **POST** /v3/numbers/registrations/number-types/{number_type}/country/{country_code} | Register Numbers|
|[**viewAvailableNumbers**](#viewavailablenumbers) | **GET** /v3/numbers/search/{country} | View Available Numbers|
|[**viewYourNumbers**](#viewyournumbers) | **GET** /v3/numbers | View Your Numbers|

# **purchaseDedicatedNumber**
> PurchaseDedicatedNumber purchaseDedicatedNumber(buyNumberRequest)

_Buy dedicated number_  This endpoint allows you to purchase a dedicated phone number for messaging services. You can optionally include registration data for compliance purposes.  ### Request Body  | Field | Type | Required | Description | | --- | --- | --- | --- | | dedicated_number | string | true | Phone number to purchase | | type | string | true | Service type (sms, mms) | | registration_data | object | false | Registration data for compliance (AU SMS/MMS numbers only) |  #### Registration Data Fields (Optional)  | Field | Type | Required | Description | | --- | --- | --- | --- | | business_name | string | true | Name of the business (2 - 100 characters) | | business_address | string | true | Business address (5 - 150 characters) | | suburb | string | true | Suburb/City (2 - 50 characters) | | postcode | string | true | Postal code (2 - 20 characters) | | state | string | true | State/Province (2 - 50 characters) | | contact_name | string | true | Contact person name (2 - 100 characters) | | contact_number | string | true | Contact phone number (valid local or international phone number) | | country | string | true | Country code (ISO 3166-1 alpha-2) |   ### Path Parameters  | Parameter | In | Type | Required | Description | | --- | --- | --- | --- | --- | | dedicated_number | path | string | true | Phone number to purchase |   Refer to [Status Codes](/#status-codes) for definitions of HTTP status code responses.   <div style=\"background-color: #FF6A4B; padding: 10px; border-radius: 8px;\">   <span style=\"color: white;\">This endpoint requires authentication,</span>    <a href=\"/docs/#authentication\" style=\"color: white; text-decoration: underline;\">more info...</a> </div>

### Example

```typescript
import {
    NumbersApi,
    Configuration,
    BuyNumberRequest
} from 'clicksend';

const configuration = new Configuration();
const apiInstance = new NumbersApi(configuration);

let dedicatedNumber: string; //Phone number to purchase (default to undefined)
let buyNumberRequest: BuyNumberRequest; //
let contentType: string; // (optional) (default to undefined)
let type: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.purchaseDedicatedNumber(
    dedicatedNumber,
    buyNumberRequest,
    contentType,
    type
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **buyNumberRequest** | **BuyNumberRequest**|  | |
| **dedicatedNumber** | [**string**] | Phone number to purchase | defaults to undefined|
| **contentType** | [**string**] |  | (optional) defaults to undefined|
| **type** | [**string**] |  | (optional) defaults to undefined|


### Return type

**PurchaseDedicatedNumber**

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

# **registerNumbers**
> RegisterNumbers registerNumbers()

<div style=\"background-color: #e8f4ff; padding: 15px; border-radius: 4px; border-left: 4px solid #0066cc;\"> This endpoint is currently only available for <b>Canada 10DLC</b> number registration. </div>  Registers a number that requires additional verification information. This endpoint facilitates the registration process for numbers requiring special compliance documentation.  After submission, ClickSend\'s compliance team will review the registration and notify you of the approval status.  Refer to [Status Codes](/#status-codes) for definitions of HTTP status code responses. <div style=\"background-color: #FF6A4B; padding: 10px; border-radius: 8px;\">   <span style=\"color: white;\">This endpoint requires authentication,</span>    <a href=\"/docs/#authentication\" style=\"color: white; text-decoration: underline;\">more info...</a> </div>

### Example

```typescript
import {
    NumbersApi,
    Configuration,
    RegisterNumbersRequest
} from 'clicksend';

const configuration = new Configuration();
const apiInstance = new NumbersApi(configuration);

let numberType: string; //The type of number being registered (default to undefined)
let countryCode: string; //Two-character ISO country code (default to undefined)
let contentType: string; // (optional) (default to undefined)
let registerNumbersRequest: RegisterNumbersRequest; // (optional)

const { status, data } = await apiInstance.registerNumbers(
    numberType,
    countryCode,
    contentType,
    registerNumbersRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **registerNumbersRequest** | **RegisterNumbersRequest**|  | |
| **numberType** | [**string**] | The type of number being registered | defaults to undefined|
| **countryCode** | [**string**] | Two-character ISO country code | defaults to undefined|
| **contentType** | [**string**] |  | (optional) defaults to undefined|


### Return type

**RegisterNumbers**

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful response |  -  |
|**400** | Bad request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **viewAvailableNumbers**
> ViewAvailableNumbers viewAvailableNumbers()

_Get all dedicated numbers by country_  ### Parameters  | Parameter | In | Type | Required | Description | | --- | --- | --- | --- | --- | | country | path | string | true | Country code to search | | search | query | string | false | Your search pattern or query. | | search_type | query | integer(int32) | false | Your strategy for searching, 0 = starts with, 1 = anywhere, 2 = ends with. | | page | query | integer(int32) | false | [Page number](/#pagination) | | limit | query | integer(int32) | false | [Number of records per page](/#pagination) |   Refer to [Status Codes](/#status-codes) for definitions of HTTP status code responses.   <div style=\"background-color: #FF6A4B; padding: 10px; border-radius: 8px;\">   <span style=\"color: white;\">This endpoint requires authentication,</span>    <a href=\"/docs/#authentication\" style=\"color: white; text-decoration: underline;\">more info...</a> </div>

### Example

```typescript
import {
    NumbersApi,
    Configuration
} from 'clicksend';

const configuration = new Configuration();
const apiInstance = new NumbersApi(configuration);

let country: string; // (default to undefined)
let contentType: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.viewAvailableNumbers(
    country,
    contentType
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **country** | [**string**] |  | defaults to undefined|
| **contentType** | [**string**] |  | (optional) defaults to undefined|


### Return type

**ViewAvailableNumbers**

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

# **viewYourNumbers**
> ViewYourNumbers viewYourNumbers()

_Get all available dedicated numbers_  ### Parameters  | Parameter | In | Type | Required | Description | | --- | --- | --- | --- | --- | | page | query | integer(int32) | false | [Page number](/#pagination) | | limit | query | integer(int32) | false | [Number of records per page](/#pagination) | | q | query | string | false | Filter numbers based on multiple criteria. The query string should be formatted as key-value pairs separated by commas. Available filter keys: `type`, `number_type`, `country` | | q2 | query | string | false | Filter numbers based on multiple criteria. The query string should be formatted as key-value pairs separated by commas. Available filter keys: `type` | | excluding_number_type | query | string | false | Exclude specific number types from the results. Available number types: `shortcode`, `tollfree`, `10DLC` | | exclude_10dlc_campaign | query | boolean | false | When set to true, excludes all numbers that are associated with 10DLC campaigns |   Refer to [Status Codes](/#status-codes) for definitions of HTTP status code responses.   <div style=\"background-color: #FF6A4B; padding: 10px; border-radius: 8px;\">   <span style=\"color: white;\">This endpoint requires authentication,</span>    <a href=\"/docs/#authentication\" style=\"color: white; text-decoration: underline;\">more info...</a> </div>

### Example

```typescript
import {
    NumbersApi,
    Configuration
} from 'clicksend';

const configuration = new Configuration();
const apiInstance = new NumbersApi(configuration);

let contentType: string; // (optional) (default to undefined)
let page: number; //Page number (optional) (default to 1)
let limit: number; //Number of records per page (optional) (default to 15)
let q: string; //Filter numbers based on multiple criteria. The query string should be formatted as key-value pairs separated by commas. Available filter keys: - `type`: Message type (e.g., `SMS`, `MMS`) - `number_type`: Number classification (e.g., `longcode`, `shortcode`, `tollfree`, `10DLC`) - `country`: Two-letter country code (e.g., `AU`, `US`)  (optional) (default to undefined)
let q2: string; // (optional) (default to undefined)
let excludingNumberType: string; //Exclude specific number types from the results. Available number types: - `shortcode` - `tollfree` - `10DLC`  (optional) (default to undefined)
let exclude10dlcCampaign: boolean; //When set to true, excludes all numbers that are associated with 10DLC campaigns (optional) (default to false)

const { status, data } = await apiInstance.viewYourNumbers(
    contentType,
    page,
    limit,
    q,
    q2,
    excludingNumberType,
    exclude10dlcCampaign
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **contentType** | [**string**] |  | (optional) defaults to undefined|
| **page** | [**number**] | Page number | (optional) defaults to 1|
| **limit** | [**number**] | Number of records per page | (optional) defaults to 15|
| **q** | [**string**] | Filter numbers based on multiple criteria. The query string should be formatted as key-value pairs separated by commas. Available filter keys: - &#x60;type&#x60;: Message type (e.g., &#x60;SMS&#x60;, &#x60;MMS&#x60;) - &#x60;number_type&#x60;: Number classification (e.g., &#x60;longcode&#x60;, &#x60;shortcode&#x60;, &#x60;tollfree&#x60;, &#x60;10DLC&#x60;) - &#x60;country&#x60;: Two-letter country code (e.g., &#x60;AU&#x60;, &#x60;US&#x60;)  | (optional) defaults to undefined|
| **q2** | [**string**] |  | (optional) defaults to undefined|
| **excludingNumberType** | [**string**] | Exclude specific number types from the results. Available number types: - &#x60;shortcode&#x60; - &#x60;tollfree&#x60; - &#x60;10DLC&#x60;  | (optional) defaults to undefined|
| **exclude10dlcCampaign** | [**boolean**] | When set to true, excludes all numbers that are associated with 10DLC campaigns | (optional) defaults to false|


### Return type

**ViewYourNumbers**

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

