# MessageDeliveryApi

All URIs are relative to *https://rest.clicksend.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createDeliveryIssue**](#createdeliveryissue) | **POST** /v3/delivery-issues | Create Delivery Issues|
|[**getAllDeliveryIssues**](#getalldeliveryissues) | **GET** /v3/delivery-issues | Get All Delivery Issues|

# **createDeliveryIssue**
> CreateDeliveryIssue createDeliveryIssue()

_Create delivery Issue_  Create delivery Issue  ### Properties  | Name | Type | Required | Restrictions | Description | | --- | --- | --- | --- | --- | | message_id | string | false | none | The message id of the message. | | type | string | true | none | The type of message, must be one of the following values SMS, MMS, VOICE, EMAIL_MARKETING, EMAIL_TRANSACTIONAL, FAX, POST. | | description | string | true | none | The description of the message. | | client_comments | string | false | none | The user\'s comments. | | email-address | string | true | none | The user\'s email address. |   Refer to [Status Codes](/#status-codes) for definitions of HTTP status code responses.   <div style=\"background-color: #FF6A4B; padding: 10px; border-radius: 8px;\">   <span style=\"color: white;\">This endpoint requires authentication,</span>    <a href=\"/docs/#authentication\" style=\"color: white; text-decoration: underline;\">more info...</a> </div>

### Example

```typescript
import {
    MessageDeliveryApi,
    Configuration,
    CreateDeliveryIssueRequest
} from 'clicksend';

const configuration = new Configuration();
const apiInstance = new MessageDeliveryApi(configuration);

let contentType: string; // (optional) (default to undefined)
let createDeliveryIssueRequest: CreateDeliveryIssueRequest; // (optional)

const { status, data } = await apiInstance.createDeliveryIssue(
    contentType,
    createDeliveryIssueRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createDeliveryIssueRequest** | **CreateDeliveryIssueRequest**|  | |
| **contentType** | [**string**] |  | (optional) defaults to undefined|


### Return type

**CreateDeliveryIssue**

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

# **getAllDeliveryIssues**
> GetAllDeliveryIssues getAllDeliveryIssues()

_Get all delivery issues_  Get all delivery issues  ### Parameters  | Parameter | In | Type | Required | Description | | --- | --- | --- | --- | --- | | page | query | integer(int32) | false | Page number | | limit | query | integer(int32) | false | Number of records per page |   Refer to [Status Codes](/#status-codes) for definitions of HTTP status code responses.   <div style=\"background-color: #FF6A4B; padding: 10px; border-radius: 8px;\">   <span style=\"color: white;\">This endpoint requires authentication,</span>    <a href=\"/docs/#authentication\" style=\"color: white; text-decoration: underline;\">more info...</a> </div>

### Example

```typescript
import {
    MessageDeliveryApi,
    Configuration
} from 'clicksend';

const configuration = new Configuration();
const apiInstance = new MessageDeliveryApi(configuration);

let contentType: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.getAllDeliveryIssues(
    contentType
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **contentType** | [**string**] |  | (optional) defaults to undefined|


### Return type

**GetAllDeliveryIssues**

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

