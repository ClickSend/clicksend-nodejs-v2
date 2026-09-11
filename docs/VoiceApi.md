# VoiceApi

All URIs are relative to *https://rest.clicksend.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createVoiceDeliveryReceiptRule**](#createvoicedeliveryreceiptrule) | **POST** /v3/automations/voice/receipts | Create Voice Delivery Receipt Rule|
|[**deleteVoiceDeliveryReceiptRule**](#deletevoicedeliveryreceiptrule) | **DELETE** /v3/automations/voice/receipts/{receipt_rule_id} | Delete Voice Delivery Receipt Rule|
|[**updateVoiceDeliveryReceiptRule**](#updatevoicedeliveryreceiptrule) | **PUT** /v3/automations/voice/receipts/{receipt_rule_id} | Update Voice Delivery Receipt Rule|
|[**viewVoiceDeliveryReceiptRule**](#viewvoicedeliveryreceiptrule) | **GET** /v3/automations/voice/receipts/{receipt_rule_id} | View Voice Delivery Receipt Rule|
|[**viewVoiceDeliveryReceiptRules**](#viewvoicedeliveryreceiptrules) | **GET** /v3/automations/voice/receipts | View Voice Delivery Receipt Rules|

# **createVoiceDeliveryReceiptRule**
> CreateVoiceDeliveryReceiptRule createVoiceDeliveryReceiptRule()

_Create voice delivery receipt automations_  Create voice delivery receipt automations  ### Properties  | Name | Type | Required | Restrictions | Description | | --- | --- | --- | --- | --- | | rule_name | string | true | none | Rule Name. | | match_type | number | true | none | Match Type. 0=All reports. | | action | string | true | none | Action to be taken (AUTO_REPLY, EMAIL_USER, EMAIL_FIXED, URL, SMS, POLL, GROUP_SMS, MOVE_CONTACT, CREATE_CONTACT, CREATE_CONTACT_PLUS_EMAIL, CREATE_CONTACT_PLUS_NAME_EMAIL CREATE_CONTACT_PLUS_NAME, SMPP, NONE). | | action_address | string | true | none | Action address. | | enabled | number | true | none | Enabled: Disabled=0 or Enabled=1. |  Refer to [Status Codes](/#status-codes) for definitions of HTTP status code responses.  <div style=\"background-color: #FF6A4B; padding: 10px; border-radius: 8px;\">   <span style=\"color: white;\">This endpoint requires authentication,</span>    <a href=\"/docs/#authentication\" style=\"color: white; text-decoration: underline;\">more info...</a> </div>

### Example

```typescript
import {
    VoiceApi,
    Configuration,
    CreateSmsDeliveryReceiptRuleRequest
} from 'clicksend';

const configuration = new Configuration();
const apiInstance = new VoiceApi(configuration);

let contentType: string; // (optional) (default to undefined)
let createSmsDeliveryReceiptRuleRequest: CreateSmsDeliveryReceiptRuleRequest; // (optional)

const { status, data } = await apiInstance.createVoiceDeliveryReceiptRule(
    contentType,
    createSmsDeliveryReceiptRuleRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createSmsDeliveryReceiptRuleRequest** | **CreateSmsDeliveryReceiptRuleRequest**|  | |
| **contentType** | [**string**] |  | (optional) defaults to undefined|


### Return type

**CreateVoiceDeliveryReceiptRule**

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

# **deleteVoiceDeliveryReceiptRule**
> DeleteVoiceDeliveryReceiptRule deleteVoiceDeliveryReceiptRule()

_Delete voice delivery receipt automation_  Delete voice delivery receipt automation  ### Parameters  | Parameter | In | Type | Required | Description | | --- | --- | --- | --- | --- | | receipt_rule_id | path | integer(int32) | true | Receipt rule id |   Refer to [Status Codes](/#status-codes) for definitions of HTTP status code responses.   <div style=\"background-color: #FF6A4B; padding: 10px; border-radius: 8px;\">   <span style=\"color: white;\">This endpoint requires authentication,</span>    <a href=\"/docs/#authentication\" style=\"color: white; text-decoration: underline;\">more info...</a> </div>

### Example

```typescript
import {
    VoiceApi,
    Configuration
} from 'clicksend';

const configuration = new Configuration();
const apiInstance = new VoiceApi(configuration);

let receiptRuleId: string; // (default to undefined)
let contentType: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.deleteVoiceDeliveryReceiptRule(
    receiptRuleId,
    contentType
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **receiptRuleId** | [**string**] |  | defaults to undefined|
| **contentType** | [**string**] |  | (optional) defaults to undefined|


### Return type

**DeleteVoiceDeliveryReceiptRule**

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

# **updateVoiceDeliveryReceiptRule**
> UpdateVoiceDeliveryReceiptRule updateVoiceDeliveryReceiptRule()

_Update voice delivery receipt automation_  Update voice delivery receipt automation  ### Parameters  | Parameter | In | Type | Required | Description | | --- | --- | --- | --- | --- | | receipt_rule_id | path | integer(int32) | true | Receipt rule id |  ### Properties  | Name | Type | Required | Restrictions | Description | | --- | --- | --- | --- | --- | | rule_name | string | true | none | Rule Name. | | match_type | number | true | none | Match Type. 0=All reports. | | action | string | true | none | Action to be taken (AUTO_REPLY, EMAIL_USER, EMAIL_FIXED, URL, SMS, POLL, GROUP_SMS, MOVE_CONTACT, CREATE_CONTACT, CREATE_CONTACT_PLUS_EMAIL, CREATE_CONTACT_PLUS_NAME_EMAIL CREATE_CONTACT_PLUS_NAME, SMPP, NONE). | | action_address | string | true | none | Action address. | | enabled | number | true | none | Enabled: Disabled=0 or Enabled=1. |   Refer to [Status Codes](/#status-codes) for definitions of HTTP status code responses.   <div style=\"background-color: #FF6A4B; padding: 10px; border-radius: 8px;\">   <span style=\"color: white;\">This endpoint requires authentication,</span>    <a href=\"/docs/#authentication\" style=\"color: white; text-decoration: underline;\">more info...</a> </div>

### Example

```typescript
import {
    VoiceApi,
    Configuration,
    CreateSmsDeliveryReceiptRuleRequest
} from 'clicksend';

const configuration = new Configuration();
const apiInstance = new VoiceApi(configuration);

let receiptRuleId: string; // (default to undefined)
let contentType: string; // (optional) (default to undefined)
let createSmsDeliveryReceiptRuleRequest: CreateSmsDeliveryReceiptRuleRequest; // (optional)

const { status, data } = await apiInstance.updateVoiceDeliveryReceiptRule(
    receiptRuleId,
    contentType,
    createSmsDeliveryReceiptRuleRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createSmsDeliveryReceiptRuleRequest** | **CreateSmsDeliveryReceiptRuleRequest**|  | |
| **receiptRuleId** | [**string**] |  | defaults to undefined|
| **contentType** | [**string**] |  | (optional) defaults to undefined|


### Return type

**UpdateVoiceDeliveryReceiptRule**

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

# **viewVoiceDeliveryReceiptRule**
> ViewVoiceDeliveryReceiptRule viewVoiceDeliveryReceiptRule()

_Get specific voice delivery receipt automation_  Get specific voice delivery receipt automation  ### Parameters  | Parameter | In | Type | Required | Description | | --- | --- | --- | --- | --- | | receipt_rule_id | path | integer(int32) | true | Receipt rule id |   Refer to [Status Codes](/#status-codes) for definitions of HTTP status code responses.   <div style=\"background-color: #FF6A4B; padding: 10px; border-radius: 8px;\">   <span style=\"color: white;\">This endpoint requires authentication,</span>    <a href=\"/docs/#authentication\" style=\"color: white; text-decoration: underline;\">more info...</a> </div>

### Example

```typescript
import {
    VoiceApi,
    Configuration
} from 'clicksend';

const configuration = new Configuration();
const apiInstance = new VoiceApi(configuration);

let receiptRuleId: string; // (default to undefined)
let contentType: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.viewVoiceDeliveryReceiptRule(
    receiptRuleId,
    contentType
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **receiptRuleId** | [**string**] |  | defaults to undefined|
| **contentType** | [**string**] |  | (optional) defaults to undefined|


### Return type

**ViewVoiceDeliveryReceiptRule**

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

# **viewVoiceDeliveryReceiptRules**
> ViewVoiceDeliveryReceiptRules viewVoiceDeliveryReceiptRules()

_Get all voice delivery receipt automations_  Get all voice delivery receipt automations  ### Parameters  | Parameter | In | Type | Required | Description | | --- | --- | --- | --- | --- | | page | query | integer(int32) | false | Page number | | limit | query | integer(int32) | false | Number of records per page |   Refer to [Status Codes](/#status-codes) for definitions of HTTP status code responses.   <div style=\"background-color: #FF6A4B; padding: 10px; border-radius: 8px;\">   <span style=\"color: white;\">This endpoint requires authentication,</span>    <a href=\"/docs/#authentication\" style=\"color: white; text-decoration: underline;\">more info...</a> </div>

### Example

```typescript
import {
    VoiceApi,
    Configuration
} from 'clicksend';

const configuration = new Configuration();
const apiInstance = new VoiceApi(configuration);

let contentType: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.viewVoiceDeliveryReceiptRules(
    contentType
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **contentType** | [**string**] |  | (optional) defaults to undefined|


### Return type

**ViewVoiceDeliveryReceiptRules**

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

