# OwnNumbersApi

All URIs are relative to *https://rest.clicksend.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**deleteOwnNumber**](#deleteownnumber) | **DELETE** /v3/own-numbers/{own_number_id} | Delete Own Number|
|[**getOwnNumberDetail**](#getownnumberdetail) | **GET** /v3/own-numbers/{own_number_id} | Get Own Number Detail|
|[**listOwnNumbers**](#listownnumbers) | **GET** /v3/own-numbers | List Own Numbers|
|[**requestOwnNumberVerificationOtp**](#requestownnumberverificationotp) | **POST** /v3/own-numbers/verifications | Request Own Number Verification OTP|
|[**updateOwnNumber**](#updateownnumber) | **PATCH** /v3/own-numbers/{own_number_id} | Update Own Number|
|[**verifyOwnNumberOtp**](#verifyownnumberotp) | **POST** /v3/own-numbers/verifications/{verification_id}/verify | Verify Own Number OTP|

# **deleteOwnNumber**
> OwnNumber deleteOwnNumber()

_Delete a specific own numbers._  ### Parameters  | Parameter | In | Type | Required | Description | | --- | --- | --- | --- | --- | | own_number_id | path | uuid | true | ID of the own number |  Refer to [Status Codes](/#status-codes) for definitions of HTTP status code responses.  This endpoint requires authentication, [more info...](/#authentication)

### Example

```typescript
import {
    OwnNumbersApi,
    Configuration
} from 'clicksend';

const configuration = new Configuration();
const apiInstance = new OwnNumbersApi(configuration);

let ownNumberId: string; // (default to undefined)
let contentType: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.deleteOwnNumber(
    ownNumberId,
    contentType
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **ownNumberId** | [**string**] |  | defaults to undefined|
| **contentType** | [**string**] |  | (optional) defaults to undefined|


### Return type

**OwnNumber**

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

# **getOwnNumberDetail**
> OwnNumber getOwnNumberDetail()

_Get a specific own numbers._  ### Parameters  | Parameter | In | Type | Required | Description | | --- | --- | --- | --- | --- | | own_number_id | path | uuid | true | ID of the own number |  Refer to [Status Codes](/#status-codes) for definitions of HTTP status code responses.  This endpoint requires authentication, [more info...](/#authentication)

### Example

```typescript
import {
    OwnNumbersApi,
    Configuration
} from 'clicksend';

const configuration = new Configuration();
const apiInstance = new OwnNumbersApi(configuration);

let ownNumberId: string; // (default to undefined)
let contentType: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.getOwnNumberDetail(
    ownNumberId,
    contentType
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **ownNumberId** | [**string**] |  | defaults to undefined|
| **contentType** | [**string**] |  | (optional) defaults to undefined|


### Return type

**OwnNumber**

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

# **listOwnNumbers**
> ListOwnNumbers listOwnNumbers()

_List own numbers._  ### Parameters  | Parameter | In | Type | Required | Description | | --- | --- | --- | --- | --- | | offset | query | uuid | false | Page(offset) to be used for pagination. Example: `offset=f99872cc-11a6-48ba-a9f2-bcfb6dd1e3d4#8fa5ebc2-777b-45db-a448-ec76a40d4384` | | page_size | query | integer | false | Number of records per page. Default: 10. Range \\[1..500\\] | | filter\\[status\\]\\[\\] | query | string | false | Filter by statuses. Value must be in enum \\[`PENDING`, `APPROVED`, `REJECTED`\\]. For example: `filter[status][0]=PENDING&filter[status][1]=APPROVED` . | | sort_by | query | string | false | Sort by parameter. Default: `created_timestamp` | | sort_direction | query | string | false | Direction of sorting. Default: `asc`. Value must be in enum \\[`asc`, `desc`\\]. |  Refer to [Status Codes](/#status-codes) for definitions of HTTP status code responses.   This endpoint requires authentication, [more info...](/#authentication)

### Example

```typescript
import {
    OwnNumbersApi,
    Configuration
} from 'clicksend';

const configuration = new Configuration();
const apiInstance = new OwnNumbersApi(configuration);

let contentType: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.listOwnNumbers(
    contentType
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **contentType** | [**string**] |  | (optional) defaults to undefined|


### Return type

**ListOwnNumbers**

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

# **requestOwnNumberVerificationOtp**
> RequestOwnNumberVerificationOtp requestOwnNumberVerificationOtp()

_Request to generate own number verification OTP_  ### Properties  | Name | Type | Required | Restrictions | Description | | --- | --- | --- | --- | --- | | label | string | false | none | Custom label for phone number. Length must be between 1 - 200 characters. | | phone_number | string | true | none | Phone number. | | country | string | false | none | Country code. |  Refer to [Status Codes](/#status-codes) for definitions of HTTP status code responses.  This endpoint requires authentication, [more info...](/#authentication)

### Example

```typescript
import {
    OwnNumbersApi,
    Configuration,
    RequestOwnNumberVerificationOtpRequest
} from 'clicksend';

const configuration = new Configuration();
const apiInstance = new OwnNumbersApi(configuration);

let contentType: string; // (optional) (default to undefined)
let requestOwnNumberVerificationOtpRequest: RequestOwnNumberVerificationOtpRequest; // (optional)

const { status, data } = await apiInstance.requestOwnNumberVerificationOtp(
    contentType,
    requestOwnNumberVerificationOtpRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **requestOwnNumberVerificationOtpRequest** | **RequestOwnNumberVerificationOtpRequest**|  | |
| **contentType** | [**string**] |  | (optional) defaults to undefined|


### Return type

**RequestOwnNumberVerificationOtp**

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

# **updateOwnNumber**
> OwnNumber updateOwnNumber()

_Update details of a specific own numbers._  ### Parameters  | Parameter | In | Type | Required | Description | | --- | --- | --- | --- | --- | | own_number_id | path | uuid | true | ID of the own number |  ### Properties  | Name | Type | Required | Restrictions | Description | | --- | --- | --- | --- | --- | | label | string | false | none | Custom label for phone number. Length must be between 1 - 200 characters. |  Refer to [Status Codes](/#status-codes) for definitions of HTTP status code responses.  This endpoint requires authentication, [more info...](/#authentication)

### Example

```typescript
import {
    OwnNumbersApi,
    Configuration
} from 'clicksend';

const configuration = new Configuration();
const apiInstance = new OwnNumbersApi(configuration);

let ownNumberId: string; // (default to undefined)

const { status, data } = await apiInstance.updateOwnNumber(
    ownNumberId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **ownNumberId** | [**string**] |  | defaults to undefined|


### Return type

**OwnNumber**

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

# **verifyOwnNumberOtp**
> VerifyOwnNumberOtp verifyOwnNumberOtp()

_Request to verify an OTP for Own Number verification_  ### Parameters  | Parameter | In | Type | Required | Description | | --- | --- | --- | --- | --- | | verification_id | path | uuid | true | ID of the Own Number verification |  ### Properties  | Name | Type | Required | Restrictions | Description | | --- | --- | --- | --- | --- | | code | string | true | none | OTP code. Length must be 6 characters | | phone_number | string | true | none | Phone number. | | country | string | false | none | Country code. |  Refer to [Status Codes](/#status-codes) for definitions of HTTP status code responses.  This endpoint requires authentication, [more info...](/#authentication)

### Example

```typescript
import {
    OwnNumbersApi,
    Configuration,
    VerifyOwnNumberOtpRequest
} from 'clicksend';

const configuration = new Configuration();
const apiInstance = new OwnNumbersApi(configuration);

let verificationId: string; // (default to undefined)
let contentType: string; // (optional) (default to undefined)
let verifyOwnNumberOtpRequest: VerifyOwnNumberOtpRequest; // (optional)

const { status, data } = await apiInstance.verifyOwnNumberOtp(
    verificationId,
    contentType,
    verifyOwnNumberOtpRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **verifyOwnNumberOtpRequest** | **VerifyOwnNumberOtpRequest**|  | |
| **verificationId** | [**string**] |  | defaults to undefined|
| **contentType** | [**string**] |  | (optional) defaults to undefined|


### Return type

**VerifyOwnNumberOtp**

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

