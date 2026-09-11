# InternationalMessagingApi

All URIs are relative to *https://rest.clicksend.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**agreeToRulesAndRegulation**](#agreetorulesandregulation) | **POST** /v3/user-countries/agree | Agree to rules and regulation|
|[**getCountriesForGlobalSending**](#getcountriesforglobalsending) | **GET** /v3/user-countries | Get Countries for Global Sending|
|[**listCountries**](#listcountries) | **GET** /v3/country-list | International Messaging|
|[**selectCountriesForGlobalSending**](#selectcountriesforglobalsending) | **POST** /v3/user-countries | Select Countries for Global Sending|
|[**timezones**](#timezones) | **GET** /v3/timezones | Timezones|
|[**viewCountries**](#viewcountries) | **GET** /v3/countries | View Countries|

# **agreeToRulesAndRegulation**
> AgreeToRulesAndRegulation agreeToRulesAndRegulation()

_Update Country Rule_  To agree on rules and regulations of selected countries and confirm selection.  ### Properties  | Name | Type | Required | Restrictions | Description | | --- | --- | --- | --- | --- | | country_list_ids | number | true | none | Country list ID\'s |   Refer to [Status Codes](/#status-codes) for definitions of HTTP status code responses.   <div style=\"background-color: #FF6A4B; padding: 10px; border-radius: 8px;\">   <span style=\"color: white;\">This endpoint requires authentication,</span>    <a href=\"/docs/#authentication\" style=\"color: white; text-decoration: underline;\">more info...</a> </div>

### Example

```typescript
import {
    InternationalMessagingApi,
    Configuration
} from 'clicksend';

const configuration = new Configuration();
const apiInstance = new InternationalMessagingApi(configuration);

const { status, data } = await apiInstance.agreeToRulesAndRegulation();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**AgreeToRulesAndRegulation**

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

# **getCountriesForGlobalSending**
> GetCountriesForGlobalSending getCountriesForGlobalSending()

_Get Countries for global sending_  Get the list of selected countries.  Refer to [Status Codes](/#status-codes) for definitions of HTTP status code responses.  <div style=\"background-color: #FF6A4B; padding: 10px; border-radius: 8px;\">   <span style=\"color: white;\">This endpoint requires authentication,</span>    <a href=\"/docs/#authentication\" style=\"color: white; text-decoration: underline;\">more info...</a> </div>

### Example

```typescript
import {
    InternationalMessagingApi,
    Configuration
} from 'clicksend';

const configuration = new Configuration();
const apiInstance = new InternationalMessagingApi(configuration);

const { status, data } = await apiInstance.getCountriesForGlobalSending();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**GetCountriesForGlobalSending**

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

# **listCountries**
> ListCountries listCountries()

_List of countries_  List of countries with IDs that can be used in selecting countries for Global sending.  Refer to [Status Codes](/#status-codes) for definitions of HTTP status code responses.  <div style=\"background-color: #FF6A4B; padding: 10px; border-radius: 8px;\">   <span style=\"color: white;\">This endpoint requires authentication,</span>    <a href=\"/docs/#authentication\" style=\"color: white; text-decoration: underline;\">more info...</a> </div>

### Example

```typescript
import {
    InternationalMessagingApi,
    Configuration
} from 'clicksend';

const configuration = new Configuration();
const apiInstance = new InternationalMessagingApi(configuration);

const { status, data } = await apiInstance.listCountries();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**ListCountries**

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

# **selectCountriesForGlobalSending**
> SelectCountriesForGlobalSending selectCountriesForGlobalSending()

_Select Countries_  Use this endpoint to select countries that you intend to send sms / mms to. To remove / unselect a country, just remove the country id from the array in the payload.  ### Properties  | Name | Type | Required | Restrictions | Description | | --- | --- | --- | --- | --- | | country_list_ids | number | true | none | Country list ID\'s |   Refer to [Status Codes](/#status-codes) for definitions of HTTP status code responses.   <div style=\"background-color: #FF6A4B; padding: 10px; border-radius: 8px;\">   <span style=\"color: white;\">This endpoint requires authentication,</span>    <a href=\"/docs/#authentication\" style=\"color: white; text-decoration: underline;\">more info...</a> </div>

### Example

```typescript
import {
    InternationalMessagingApi,
    Configuration,
    SelectCountriesForGlobalSendingRequest
} from 'clicksend';

const configuration = new Configuration();
const apiInstance = new InternationalMessagingApi(configuration);

let selectCountriesForGlobalSendingRequest: SelectCountriesForGlobalSendingRequest; // (optional)

const { status, data } = await apiInstance.selectCountriesForGlobalSending(
    selectCountriesForGlobalSendingRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **selectCountriesForGlobalSendingRequest** | **SelectCountriesForGlobalSendingRequest**|  | |


### Return type

**SelectCountriesForGlobalSending**

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

# **timezones**
> Timezones timezones()

_Get supported list of timezones._  Get supported list of timezones.  ### Parameters  | Parameter | In | Type | Required | Description | | --- | --- | --- | --- | --- | | page | query | integer(int32) | false | Page number | | limit | query | integer(int32) | false | Number of records per page |   Refer to [Status Codes](/#status-codes) for definitions of HTTP status code responses.   <div style=\"background-color: #FF6A4B; padding: 10px; border-radius: 8px;\">   <span style=\"color: white;\">This endpoint requires authentication,</span>    <a href=\"/docs/#authentication\" style=\"color: white; text-decoration: underline;\">more info...</a> </div>

### Example

```typescript
import {
    InternationalMessagingApi,
    Configuration
} from 'clicksend';

const configuration = new Configuration();
const apiInstance = new InternationalMessagingApi(configuration);

let contentType: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.timezones(
    contentType
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **contentType** | [**string**] |  | (optional) defaults to undefined|


### Return type

**Timezones**

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

# **viewCountries**
> ViewCountries viewCountries()

_Get all country codes_  Get all countries   Refer to [Status Codes](/#status-codes) for definitions of HTTP status code responses.   <div style=\"background-color: #6BBD5B; padding: 10px; border-radius: 8px;\">   <span style=\"color: white;\">This endpoint does not require authentication</span>  </div>

### Example

```typescript
import {
    InternationalMessagingApi,
    Configuration
} from 'clicksend';

const configuration = new Configuration();
const apiInstance = new InternationalMessagingApi(configuration);

const { status, data } = await apiInstance.viewCountries();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**ViewCountries**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

