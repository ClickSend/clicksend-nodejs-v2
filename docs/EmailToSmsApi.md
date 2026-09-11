# EmailToSmsApi

All URIs are relative to *https://rest.clicksend.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**addAllowedEmail**](#addallowedemail) | **POST** /v3/sms/email-sms | Add Allowed Email|
|[**createStrippedStringRule**](#createstrippedstringrule) | **POST** /v3/sms/email-sms-stripped-strings | Create Stripped String Rule|
|[**deleteStrippedStringRule**](#deletestrippedstringrule) | **DELETE** /v3/sms/email-sms-stripped-strings/{rule_id} | Delete Stripped String Rule|
|[**updateStrippedStringRule**](#updatestrippedstringrule) | **PUT** /v3/sms/email-sms-stripped-strings/{rule_id} | Update Stripped String Rule|
|[**viewAllowedEmails**](#viewallowedemails) | **GET** /v3/sms/email-sms | View Allowed Emails|
|[**viewStrippedStringRule**](#viewstrippedstringrule) | **GET** /v3/sms/email-sms-stripped-strings/{rule_id} | View Stripped String Rule|
|[**viewStrippedStringRules**](#viewstrippedstringrules) | **GET** /v3/sms/email-sms-stripped-strings | View Stripped String Rules|

# **addAllowedEmail**
> AddAllowedEmail addAllowedEmail()

_Create email to sms allowed address_  ### Properties  | Name | Type | Required | Restrictions | Description | | --- | --- | --- | --- | --- | | email_address | string | true | none | Your email address | | from | string | false | [yes](http://help.clicksend.com/SMS/what-is-a-sender-id-or-sender-number) | Your sender id |   Refer to [Status Codes](/#status-codes) for definitions of HTTP status code responses.   <div style=\"background-color: #FF6A4B; padding: 10px; border-radius: 8px;\">   <span style=\"color: white;\">This endpoint requires authentication,</span>    <a href=\"/docs/#authentication\" style=\"color: white; text-decoration: underline;\">more info...</a> </div>

### Example

```typescript
import {
    EmailToSmsApi,
    Configuration,
    AddAllowedEmailRequest
} from 'clicksend';

const configuration = new Configuration();
const apiInstance = new EmailToSmsApi(configuration);

let contentType: string; // (optional) (default to undefined)
let addAllowedEmailRequest: AddAllowedEmailRequest; // (optional)

const { status, data } = await apiInstance.addAllowedEmail(
    contentType,
    addAllowedEmailRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **addAllowedEmailRequest** | **AddAllowedEmailRequest**|  | |
| **contentType** | [**string**] |  | (optional) defaults to undefined|


### Return type

**AddAllowedEmail**

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

# **createStrippedStringRule**
> CreateStrippedStringRule createStrippedStringRule()

_Create email to sms stripped string rule_  Create email to sms stripped string rules  ### Parameters  | Parameter | In | Type | Required | Description | | --- | --- | --- | --- | --- | | stripped-string | body | string | true | String to be stripped. |  Refer to [Status Codes](/#status-codes) for definitions of HTTP status code responses.  <div style=\"background-color: #FF6A4B; padding: 10px; border-radius: 8px;\">   <span style=\"color: white;\">This endpoint requires authentication,</span>    <a href=\"/docs/#authentication\" style=\"color: white; text-decoration: underline;\">more info...</a> </div>

### Example

```typescript
import {
    EmailToSmsApi,
    Configuration,
    CreateStrippedStringRuleRequest
} from 'clicksend';

const configuration = new Configuration();
const apiInstance = new EmailToSmsApi(configuration);

let contentType: string; // (optional) (default to undefined)
let createStrippedStringRuleRequest: CreateStrippedStringRuleRequest; // (optional)

const { status, data } = await apiInstance.createStrippedStringRule(
    contentType,
    createStrippedStringRuleRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createStrippedStringRuleRequest** | **CreateStrippedStringRuleRequest**|  | |
| **contentType** | [**string**] |  | (optional) defaults to undefined|


### Return type

**CreateStrippedStringRule**

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

# **deleteStrippedStringRule**
> DeleteStrippedStringRule deleteStrippedStringRule()

_Delete email to sms stripped string rule_  Delete email to sms stripped string rule  ### Parameters  | Parameter | In | Type | Required | Description | | --- | --- | --- | --- | --- | | rule_id | path | integer(int32) | true | Your rule id |   Refer to [Status Codes](/#status-codes) for definitions of HTTP status code responses.   <div style=\"background-color: #FF6A4B; padding: 10px; border-radius: 8px;\">   <span style=\"color: white;\">This endpoint requires authentication,</span>    <a href=\"/docs/#authentication\" style=\"color: white; text-decoration: underline;\">more info...</a> </div>

### Example

```typescript
import {
    EmailToSmsApi,
    Configuration
} from 'clicksend';

const configuration = new Configuration();
const apiInstance = new EmailToSmsApi(configuration);

let ruleId: string; // (default to undefined)
let contentType: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.deleteStrippedStringRule(
    ruleId,
    contentType
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **ruleId** | [**string**] |  | defaults to undefined|
| **contentType** | [**string**] |  | (optional) defaults to undefined|


### Return type

**DeleteStrippedStringRule**

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

# **updateStrippedStringRule**
> UpdateStrippedStringRule updateStrippedStringRule()

_Update email to sms stripped string rule_  Update email to sms stripped string rule  ### Parameters  | Parameter | In | Type | Required | Description | | --- | --- | --- | --- | --- | | rule_id | path | integer(int32) | true | Your rule id | | stripped-string | body | string | true | String to be stripped. |   Refer to [Status Codes](/#status-codes) for definitions of HTTP status code responses.   <div style=\"background-color: #FF6A4B; padding: 10px; border-radius: 8px;\">   <span style=\"color: white;\">This endpoint requires authentication,</span>    <a href=\"/docs/#authentication\" style=\"color: white; text-decoration: underline;\">more info...</a> </div>

### Example

```typescript
import {
    EmailToSmsApi,
    Configuration,
    CreateStrippedStringRuleRequest
} from 'clicksend';

const configuration = new Configuration();
const apiInstance = new EmailToSmsApi(configuration);

let ruleId: string; // (default to undefined)
let contentType: string; // (optional) (default to undefined)
let createStrippedStringRuleRequest: CreateStrippedStringRuleRequest; // (optional)

const { status, data } = await apiInstance.updateStrippedStringRule(
    ruleId,
    contentType,
    createStrippedStringRuleRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createStrippedStringRuleRequest** | **CreateStrippedStringRuleRequest**|  | |
| **ruleId** | [**string**] |  | defaults to undefined|
| **contentType** | [**string**] |  | (optional) defaults to undefined|


### Return type

**UpdateStrippedStringRule**

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

# **viewAllowedEmails**
> ViewAllowedEmails viewAllowedEmails()

_Get list of email to sms allowed addresses_  ### Parameters  | Parameter | In | Type | Required | Description | | --- | --- | --- | --- | --- | | page | query | integer(int32) | false | [Page number](/#pagination) | | limit | query | integer(int32) | false | [Number of records per page](/#pagination) |   Refer to [Status Codes](/#status-codes) for definitions of HTTP status code responses.   <div style=\"background-color: #FF6A4B; padding: 10px; border-radius: 8px;\">   <span style=\"color: white;\">This endpoint requires authentication,</span>    <a href=\"/docs/#authentication\" style=\"color: white; text-decoration: underline;\">more info...</a> </div>

### Example

```typescript
import {
    EmailToSmsApi,
    Configuration
} from 'clicksend';

const configuration = new Configuration();
const apiInstance = new EmailToSmsApi(configuration);

let contentType: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.viewAllowedEmails(
    contentType
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **contentType** | [**string**] |  | (optional) defaults to undefined|


### Return type

**ViewAllowedEmails**

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

# **viewStrippedStringRule**
> ViewStrippedStringRule viewStrippedStringRule()

_Get email to sms stripped string rule_  Get email to sms stripped string rule  ### Parameters  | Parameter | In | Type | Required | Description | | --- | --- | --- | --- | --- | | rule_id | path | integer(int32) | true | Your rule id |   Refer to [Status Codes](/#status-codes) for definitions of HTTP status code responses.   <div style=\"background-color: #FF6A4B; padding: 10px; border-radius: 8px;\">   <span style=\"color: white;\">This endpoint requires authentication,</span>    <a href=\"/docs/#authentication\" style=\"color: white; text-decoration: underline;\">more info...</a> </div>

### Example

```typescript
import {
    EmailToSmsApi,
    Configuration
} from 'clicksend';

const configuration = new Configuration();
const apiInstance = new EmailToSmsApi(configuration);

let ruleId: string; // (default to undefined)
let contentType: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.viewStrippedStringRule(
    ruleId,
    contentType
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **ruleId** | [**string**] |  | defaults to undefined|
| **contentType** | [**string**] |  | (optional) defaults to undefined|


### Return type

**ViewStrippedStringRule**

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

# **viewStrippedStringRules**
> ViewStrippedStringRules viewStrippedStringRules()

_Get list of email to sms stripped string rules_  Get list of email to sms stripped string rules  ### Parameters  | Parameter | In | Type | Required | Description | | --- | --- | --- | --- | --- | | page | query | integer(int32) | false | Page number | | limit | query | integer(int32) | false | Number of records per page |   Refer to [Status Codes](/#status-codes) for definitions of HTTP status code responses.   <div style=\"background-color: #FF6A4B; padding: 10px; border-radius: 8px;\">   <span style=\"color: white;\">This endpoint requires authentication,</span>    <a href=\"/docs/#authentication\" style=\"color: white; text-decoration: underline;\">more info...</a> </div>

### Example

```typescript
import {
    EmailToSmsApi,
    Configuration
} from 'clicksend';

const configuration = new Configuration();
const apiInstance = new EmailToSmsApi(configuration);

let contentType: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.viewStrippedStringRules(
    contentType
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **contentType** | [**string**] |  | (optional) defaults to undefined|


### Return type

**ViewStrippedStringRules**

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

