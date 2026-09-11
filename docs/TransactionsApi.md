# TransactionsApi

All URIs are relative to *https://rest.clicksend.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**currentPaymentInfo**](#currentpaymentinfo) | **GET** /v3/recharge/credit-card | Current Payment Info|
|[**purchaseRechargePackage**](#purchaserechargepackage) | **PUT** /v3/recharge/purchase/{package_id} | Purchase Recharge Package|
|[**updatePaymentInfo**](#updatepaymentinfo) | **PUT** /v3/recharge/credit-card | Update Payment Info|
|[**viewAllTransactions**](#viewalltransactions) | **GET** /v3/recharge/transactions | View All Transactions|
|[**viewRechargePackages**](#viewrechargepackages) | **GET** /v3/recharge/packages | View Recharge Packages|
|[**viewSpecificTransaction**](#viewspecifictransaction) | **GET** /v3/recharge/transactions/{transaction_id} | View Specific Transaction|

# **currentPaymentInfo**
> CurrentPaymentInfo currentPaymentInfo()

_Get current payment info_  This endpoint returns your current payment info, we do not store credit card numbers, only a card token for security reasons.  Refer to [Status Codes](/#status-codes) for definitions of HTTP status code responses.   <div style=\"background-color: #FF6A4B; padding: 10px; border-radius: 8px;\">   <span style=\"color: white;\">This endpoint requires authentication,</span>    <a href=\"/docs/#authentication\" style=\"color: white; text-decoration: underline;\">more info...</a> </div>

### Example

```typescript
import {
    TransactionsApi,
    Configuration
} from 'clicksend';

const configuration = new Configuration();
const apiInstance = new TransactionsApi(configuration);

let contentType: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.currentPaymentInfo(
    contentType
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **contentType** | [**string**] |  | (optional) defaults to undefined|


### Return type

**CurrentPaymentInfo**

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

# **purchaseRechargePackage**
> PurchaseRechargePackage purchaseRechargePackage()

_Purchase a package_  ### Parameters  | Parameter | In | Type | Required | Description | | --- | --- | --- | --- | --- | | package_id | path | integer(int32) | true | ID of package to purchase |   Refer to [Status Codes](/#status-codes) for definitions of HTTP status code responses.   <div style=\"background-color: #FF6A4B; padding: 10px; border-radius: 8px;\">   <span style=\"color: white;\">This endpoint requires authentication,</span>    <a href=\"/docs/#authentication\" style=\"color: white; text-decoration: underline;\">more info...</a> </div>

### Example

```typescript
import {
    TransactionsApi,
    Configuration
} from 'clicksend';

const configuration = new Configuration();
const apiInstance = new TransactionsApi(configuration);

let packageId: string; // (default to undefined)
let contentType: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.purchaseRechargePackage(
    packageId,
    contentType
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **packageId** | [**string**] |  | defaults to undefined|
| **contentType** | [**string**] |  | (optional) defaults to undefined|


### Return type

**PurchaseRechargePackage**

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

# **updatePaymentInfo**
> UpdatePaymentInfo updatePaymentInfo()

_Update credit card info_  ### Properties  | Name | Type | Required | Restrictions | Description | | --- | --- | --- | --- | --- | | number | string | true | none | Credit card number | | expiry_month | integer(int32) | true | none | Expiry month of credit card | | expiry_year | integer(int32) | true | none | Expiry year of credit card | | cvc | integer(int32) | true | none | CVC number of credit card | | name | string | true | none | Name printed on credit card | | bank_name | string | true | none | Name of bank that credit card belongs to |  Refer to [Status Codes](/#status-codes) for definitions of HTTP status code responses.   <div style=\"background-color: #FF6A4B; padding: 10px; border-radius: 8px;\">   <span style=\"color: white;\">This endpoint requires authentication,</span>    <a href=\"/docs/#authentication\" style=\"color: white; text-decoration: underline;\">more info...</a> </div>

### Example

```typescript
import {
    TransactionsApi,
    Configuration,
    UpdatePaymentInfoRequest
} from 'clicksend';

const configuration = new Configuration();
const apiInstance = new TransactionsApi(configuration);

let contentType: string; // (optional) (default to undefined)
let updatePaymentInfoRequest: UpdatePaymentInfoRequest; // (optional)

const { status, data } = await apiInstance.updatePaymentInfo(
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

**UpdatePaymentInfo**

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

# **viewAllTransactions**
> ViewAllTransactions viewAllTransactions()

_Purchase a package_  Get all transactions  ### Parameters  | Parameter | In | Type | Required | Description | | --- | --- | --- | --- | --- | | page | query | integer(int32) | false | [Page number](/#pagination) | | limit | query | integer(int32) | false | [Number of records per page](/#pagination) |  Refer to [Status Codes](/#status-codes) for definitions of HTTP status code responses.   <div style=\"background-color: #FF6A4B; padding: 10px; border-radius: 8px;\">   <span style=\"color: white;\">This endpoint requires authentication,</span>    <a href=\"/docs/#authentication\" style=\"color: white; text-decoration: underline;\">more info...</a> </div>

### Example

```typescript
import {
    TransactionsApi,
    Configuration
} from 'clicksend';

const configuration = new Configuration();
const apiInstance = new TransactionsApi(configuration);

let contentType: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.viewAllTransactions(
    contentType
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **contentType** | [**string**] |  | (optional) defaults to undefined|


### Return type

**ViewAllTransactions**

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

# **viewRechargePackages**
> ViewRechargePackages viewRechargePackages()

_Get list of all packages_  ### Parameters  | Parameter | In | Type | Required | Description | | --- | --- | --- | --- | --- | | country | query | string | false | Two-letter country code ([ISO3166](https://en.wikipedia.org/wiki/ISO_3166)) |  Refer to [Status Codes](/#status-codes) for definitions of HTTP status code responses.   <div style=\"background-color: #FF6A4B; padding: 10px; border-radius: 8px;\">   <span style=\"color: white;\">This endpoint requires authentication,</span>    <a href=\"/docs/#authentication\" style=\"color: white; text-decoration: underline;\">more info...</a> </div>

### Example

```typescript
import {
    TransactionsApi,
    Configuration
} from 'clicksend';

const configuration = new Configuration();
const apiInstance = new TransactionsApi(configuration);

let contentType: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.viewRechargePackages(
    contentType
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **contentType** | [**string**] |  | (optional) defaults to undefined|


### Return type

**ViewRechargePackages**

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

# **viewSpecificTransaction**
> ViewSpecificTransaction viewSpecificTransaction()

_Get specific Transaction_  ### Parameters  | Parameter | In | Type | Required | Description | | --- | --- | --- | --- | --- | | transaction_id | path | string | true | ID of transaction to retrieve |  Refer to [Status Codes](/#status-codes) for definitions of HTTP status code responses.   <div style=\"background-color: #FF6A4B; padding: 10px; border-radius: 8px;\">   <span style=\"color: white;\">This endpoint requires authentication,</span>    <a href=\"/docs/#authentication\" style=\"color: white; text-decoration: underline;\">more info...</a> </div>

### Example

```typescript
import {
    TransactionsApi,
    Configuration
} from 'clicksend';

const configuration = new Configuration();
const apiInstance = new TransactionsApi(configuration);

let transactionId: string; // (default to undefined)
let contentType: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.viewSpecificTransaction(
    transactionId,
    contentType
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **transactionId** | [**string**] |  | defaults to undefined|
| **contentType** | [**string**] |  | (optional) defaults to undefined|


### Return type

**ViewSpecificTransaction**

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

