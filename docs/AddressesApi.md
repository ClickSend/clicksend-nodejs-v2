# AddressesApi

All URIs are relative to *https://rest.clicksend.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createReturnAddress**](#createreturnaddress) | **POST** /v3/post/return-addresses | Create Return Address|
|[**deleteReturnAddress**](#deletereturnaddress) | **DELETE** /v3/post/return-addresses/{return_address_id} | Delete Return Address|
|[**updateReturnAddress**](#updatereturnaddress) | **PUT** /v3/post/return-addresses/{return_address_id} | Update Return Address|
|[**viewSpecificReturnAddress**](#viewspecificreturnaddress) | **GET** /v3/post/return-addresses/{return_address_id} | View Specific Return Address|
|[**viewYourReturnAddresses**](#viewyourreturnaddresses) | **GET** /v3/post/return-addresses | View Your Return Addresses|

# **createReturnAddress**
> CreateReturnAddress createReturnAddress()

_Create post return address_  ### Properties  | Name | Type | Required | Restrictions | Description | | --- | --- | --- | --- | --- | | address_name | string | true | none | Your address name. | | address_line_1 | string | true | none | Your address line 1 | | address_city | string | true | none | Your city | | address_postal_code | string | true | none | Your postal code | | address_country | string | true | none | Your country | | address_line_2 | string | false | none | Your address line 2 | | address_state | string | false | none | Your state |    Refer to [Status Codes](/#status-codes) for definitions of HTTP status code responses.    <div style=\"background-color: #FF6A4B; padding: 10px; border-radius: 8px;\">   <span style=\"color: white;\">This endpoint requires authentication,</span>    <a href=\"/docs/#authentication\" style=\"color: white; text-decoration: underline;\">more info...</a> </div>

### Example

```typescript
import {
    AddressesApi,
    Configuration,
    CreateReturnAddressRequest
} from 'clicksend';

const configuration = new Configuration();
const apiInstance = new AddressesApi(configuration);

let contentType: string; // (optional) (default to undefined)
let createReturnAddressRequest: CreateReturnAddressRequest; // (optional)

const { status, data } = await apiInstance.createReturnAddress(
    contentType,
    createReturnAddressRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createReturnAddressRequest** | **CreateReturnAddressRequest**|  | |
| **contentType** | [**string**] |  | (optional) defaults to undefined|


### Return type

**CreateReturnAddress**

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

# **deleteReturnAddress**
> DeleteReturnAddress deleteReturnAddress()

_Delete specific post return address_  ### Parameters  | Parameter | In | Type | Required | Description | | --- | --- | --- | --- | --- | | return_address_id | path | integer(int32) | true | Return address ID |   Refer to [Status Codes](/#status-codes) for definitions of HTTP status code responses.   <div style=\"background-color: #FF6A4B; padding: 10px; border-radius: 8px;\">   <span style=\"color: white;\">This endpoint requires authentication,</span>    <a href=\"/docs/#authentication\" style=\"color: white; text-decoration: underline;\">more info...</a> </div>

### Example

```typescript
import {
    AddressesApi,
    Configuration
} from 'clicksend';

const configuration = new Configuration();
const apiInstance = new AddressesApi(configuration);

let returnAddressId: string; // (default to undefined)
let contentType: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.deleteReturnAddress(
    returnAddressId,
    contentType
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **returnAddressId** | [**string**] |  | defaults to undefined|
| **contentType** | [**string**] |  | (optional) defaults to undefined|


### Return type

**DeleteReturnAddress**

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

# **updateReturnAddress**
> UpdateReturnAddress updateReturnAddress()

_Update post return address_  ### Parameters  | Parameter | In | Type | Required | Description | | --- | --- | --- | --- | --- | | return_address_id | path | integer(int32) | true | Return address ID |  ### Properties  | Name | Type | Required | Restrictions | Description | | --- | --- | --- | --- | --- | | address_name | string | true | none | Your address name. | | address_line_1 | string | true | none | Your address line 1 | | address_city | string | true | none | Your city | | address_postal_code | string | true | none | Your postal code | | address_country | string | true | none | Your country | | address_line_2 | string | false | none | Your address line 2 | | address_state | string | false | none | Your state |   Refer to [Status Codes](/#status-codes) for definitions of HTTP status code responses.   <div style=\"background-color: #FF6A4B; padding: 10px; border-radius: 8px;\">   <span style=\"color: white;\">This endpoint requires authentication,</span>    <a href=\"/docs/#authentication\" style=\"color: white; text-decoration: underline;\">more info...</a> </div>

### Example

```typescript
import {
    AddressesApi,
    Configuration,
    UpdateReturnAddressRequest
} from 'clicksend';

const configuration = new Configuration();
const apiInstance = new AddressesApi(configuration);

let returnAddressId: string; // (default to undefined)
let contentType: string; // (optional) (default to undefined)
let updateReturnAddressRequest: UpdateReturnAddressRequest; // (optional)

const { status, data } = await apiInstance.updateReturnAddress(
    returnAddressId,
    contentType,
    updateReturnAddressRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateReturnAddressRequest** | **UpdateReturnAddressRequest**|  | |
| **returnAddressId** | [**string**] |  | defaults to undefined|
| **contentType** | [**string**] |  | (optional) defaults to undefined|


### Return type

**UpdateReturnAddress**

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

# **viewSpecificReturnAddress**
> ViewSpecificReturnAddress viewSpecificReturnAddress()

_Get specific post return address_  ### Parameters  | Parameter | In | Type | Required | Description | | --- | --- | --- | --- | --- | | return_address_id | path | integer(int32) | true | Return address ID |   Refer to [Status Codes](/#status-codes) for definitions of HTTP status code responses.   <div style=\"background-color: #FF6A4B; padding: 10px; border-radius: 8px;\">   <span style=\"color: white;\">This endpoint requires authentication,</span>    <a href=\"/docs/#authentication\" style=\"color: white; text-decoration: underline;\">more info...</a> </div>

### Example

```typescript
import {
    AddressesApi,
    Configuration
} from 'clicksend';

const configuration = new Configuration();
const apiInstance = new AddressesApi(configuration);

let returnAddressId: string; // (default to undefined)
let contentType: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.viewSpecificReturnAddress(
    returnAddressId,
    contentType
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **returnAddressId** | [**string**] |  | defaults to undefined|
| **contentType** | [**string**] |  | (optional) defaults to undefined|


### Return type

**ViewSpecificReturnAddress**

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

# **viewYourReturnAddresses**
> ViewYourReturnAddresses viewYourReturnAddresses()

_Get list of post return addresses_  ### Parameters  | Parameter | In | Type | Required | Description | | --- | --- | --- | --- | --- | | page | query | integer(int32) | false | [Page number](/#pagination) | | limit | query | integer(int32) | false | [Number of records per page](/#pagination) |   Refer to [Status Codes](/#status-codes) for definitions of HTTP status code responses.   <div style=\"background-color: #FF6A4B; padding: 10px; border-radius: 8px;\">   <span style=\"color: white;\">This endpoint requires authentication,</span>    <a href=\"/docs/#authentication\" style=\"color: white; text-decoration: underline;\">more info...</a> </div>

### Example

```typescript
import {
    AddressesApi,
    Configuration
} from 'clicksend';

const configuration = new Configuration();
const apiInstance = new AddressesApi(configuration);

let contentType: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.viewYourReturnAddresses(
    contentType
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **contentType** | [**string**] |  | (optional) defaults to undefined|


### Return type

**ViewYourReturnAddresses**

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

