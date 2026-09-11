# ResellerApi

All URIs are relative to *https://rest.clicksend.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createResellerAccount**](#createreselleraccount) | **POST** /v3/reseller/accounts | Create Reseller Account|
|[**resellerTransferCredit**](#resellertransfercredit) | **PUT** /v3/reseller/transfer-credit | Reseller Transfer Credit|
|[**updateClientAccount**](#updateclientaccount) | **PUT** /v3/reseller/accounts/{client_user_id} | Update Client Account|
|[**viewClientAccounts**](#viewclientaccounts) | **GET** /v3/reseller/accounts | View Client Accounts|
|[**viewSpecificClientAccount**](#viewspecificclientaccount) | **GET** /v3/reseller/accounts/{client_user_id} | View Specific Client Account|

# **createResellerAccount**
> CreateResellerAccount createResellerAccount()

_Create reseller account_  ### Properties  | Name | Type | Required | Restrictions | Description | | --- | --- | --- | --- | --- | | username | string | true | none | Account username | | password | string | true | none | Account password (unhashed) | | user_email | string | true | none | Account email | | user_phone | string | true | none | Account phone number | | user_first_name | string | true | none | Account owner first name | | user_last_name | string | true | none | Account owner last name | | account_name | string | true | none | Account name (usually company name) | | country | string | true | none | Country of account holder |  Refer to [Status Codes](/#status-codes) for definitions of HTTP status code responses.   <div style=\"background-color: #FF6A4B; padding: 10px; border-radius: 8px;\">   <span style=\"color: white;\">This endpoint requires authentication,</span>    <a href=\"/docs/#authentication\" style=\"color: white; text-decoration: underline;\">more info...</a> </div>

### Example

```typescript
import {
    ResellerApi,
    Configuration,
    CreateResellerAccountRequest
} from 'clicksend';

const configuration = new Configuration();
const apiInstance = new ResellerApi(configuration);

let contentType: string; // (optional) (default to undefined)
let createResellerAccountRequest: CreateResellerAccountRequest; // (optional)

const { status, data } = await apiInstance.createResellerAccount(
    contentType,
    createResellerAccountRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createResellerAccountRequest** | **CreateResellerAccountRequest**|  | |
| **contentType** | [**string**] |  | (optional) defaults to undefined|


### Return type

**CreateResellerAccount**

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

# **resellerTransferCredit**
> ResellerTransferCredit resellerTransferCredit()

_Transfer Credit_  ### Properties  | Name | Type | Required | Restrictions | Description | | --- | --- | --- | --- | --- | | client_user_id | integer(int32) | true | none | User ID of client | | balance | integer(int32) | true | none | Balance to transfer | | currency | string | true | none | Currency of balance to transfer |  Refer to [Status Codes](/#status-codes) for definitions of HTTP status code responses.  <div style=\"background-color: #FF6A4B; padding: 10px; border-radius: 8px;\">   <span style=\"color: white;\">This endpoint requires authentication,</span>    <a href=\"/docs/#authentication\" style=\"color: white; text-decoration: underline;\">more info...</a> </div>

### Example

```typescript
import {
    ResellerApi,
    Configuration,
    UpdatePaymentInfoRequest
} from 'clicksend';

const configuration = new Configuration();
const apiInstance = new ResellerApi(configuration);

let contentType: string; // (optional) (default to undefined)
let updatePaymentInfoRequest: UpdatePaymentInfoRequest; // (optional)

const { status, data } = await apiInstance.resellerTransferCredit(
    contentType,
    updatePaymentInfoRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updatePaymentInfoRequest** | **UpdatePaymentInfoRequest**|  | |
| **contentType** | [**string**] |  | (optional) defaults to undefined|


### Return type

**ResellerTransferCredit**

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

# **updateClientAccount**
> UpdateClientAccount updateClientAccount()

_Update Reseller clients Account_  ### Parameters  | Parameter | In | Type | Required | Description | | --- | --- | --- | --- | --- | | client_user_id | path | integer(int32) | true | User ID of client |  ### Properties  | Name | Type | Required | Restrictions | Description | | --- | --- | --- | --- | --- | | username | string | true | none | Account username | | password | string | true | none | Account password (unhashed) | | user_email | string | true | none | Account email | | user_phone | string | true | none | Account phone number | | user_first_name | string | true | none | Account owner first name | | user_last_name | string | true | none | Account owner last name | | account_name | string | true | none | Account name (usually company name) | | country | string | true | none | Country of account holder |  Refer to [Status Codes](/#status-codes) for definitions of HTTP status code responses.  <div style=\"background-color: #FF6A4B; padding: 10px; border-radius: 8px;\">   <span style=\"color: white;\">This endpoint requires authentication,</span>    <a href=\"/docs/#authentication\" style=\"color: white; text-decoration: underline;\">more info...</a> </div>

### Example

```typescript
import {
    ResellerApi,
    Configuration,
    UpdatePaymentInfoRequest
} from 'clicksend';

const configuration = new Configuration();
const apiInstance = new ResellerApi(configuration);

let clientUserId: string; // (default to undefined)
let contentType: string; // (optional) (default to undefined)
let updatePaymentInfoRequest: UpdatePaymentInfoRequest; // (optional)

const { status, data } = await apiInstance.updateClientAccount(
    clientUserId,
    contentType,
    updatePaymentInfoRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updatePaymentInfoRequest** | **UpdatePaymentInfoRequest**|  | |
| **clientUserId** | [**string**] |  | defaults to undefined|
| **contentType** | [**string**] |  | (optional) defaults to undefined|


### Return type

**UpdateClientAccount**

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

# **viewClientAccounts**
> ViewClientAccounts viewClientAccounts()

_Get list of reseller accounts_  ### Parameters  | Parameter | In | Type | Required | Description | | --- | --- | --- | --- | --- | | page | query | integer(int32) | false | [Page number](/#pagination) | | limit | query | integer(int32) | false | [Number of records per page](/#pagination) |   Refer to [Status Codes](/#status-codes) for definitions of HTTP status code responses.   <div style=\"background-color: #FF6A4B; padding: 10px; border-radius: 8px;\">   <span style=\"color: white;\">This endpoint requires authentication,</span>    <a href=\"/docs/#authentication\" style=\"color: white; text-decoration: underline;\">more info...</a> </div>

### Example

```typescript
import {
    ResellerApi,
    Configuration
} from 'clicksend';

const configuration = new Configuration();
const apiInstance = new ResellerApi(configuration);

let contentType: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.viewClientAccounts(
    contentType
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **contentType** | [**string**] |  | (optional) defaults to undefined|


### Return type

**ViewClientAccounts**

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

# **viewSpecificClientAccount**
> ViewSpecificClientAccount viewSpecificClientAccount()

_Get Reseller clients Account_  ### Parameters  | Parameter | In | Type | Required | Description | | --- | --- | --- | --- | --- | | client_user_id | path | integer(int32) | true | User ID of client |  Refer to [Status Codes](/#status-codes) for definitions of HTTP status code responses.  <div style=\"background-color: #FF6A4B; padding: 10px; border-radius: 8px;\">   <span style=\"color: white;\">This endpoint requires authentication,</span>    <a href=\"/docs/#authentication\" style=\"color: white; text-decoration: underline;\">more info...</a> </div>

### Example

```typescript
import {
    ResellerApi,
    Configuration
} from 'clicksend';

const configuration = new Configuration();
const apiInstance = new ResellerApi(configuration);

let clientUserId: string; // (default to undefined)
let contentType: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.viewSpecificClientAccount(
    clientUserId,
    contentType
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clientUserId** | [**string**] |  | defaults to undefined|
| **contentType** | [**string**] |  | (optional) defaults to undefined|


### Return type

**ViewSpecificClientAccount**

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

