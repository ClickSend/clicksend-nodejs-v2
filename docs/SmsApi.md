# SmsApi

All URIs are relative to *https://rest.clicksend.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**calculateSmsPrice**](#calculatesmsprice) | **POST** /v3/sms/price | Calculate SMS Price|
|[**cancelAllSms**](#cancelallsms) | **PUT** /v3/sms/cancel-all | Cancel All SMS|
|[**cancelSms**](#cancelsms) | **PUT** /v3/sms/{message_id}/cancel | Cancel SMS|
|[**createSmsDeliveryReceiptRule**](#createsmsdeliveryreceiptrule) | **POST** /v3/automations/sms/receipts | Create SMS Delivery Receipt Rule|
|[**createSmsInboundAutomation**](#createsmsinboundautomation) | **POST** /v3/automations/sms/inbound | Create SMS Inbound Automation|
|[**createSmsTemplate**](#createsmstemplate) | **POST** /v3/sms/templates | Create SMS Template|
|[**createTestInboundSms**](#createtestinboundsms) | **POST** /v3/sms/inbound | Create Test Inbound SMS|
|[**createTestSmsReceipt**](#createtestsmsreceipt) | **POST** /v3/sms/receipts | Create Test SMS Receipt|
|[**deleteSmsDeliveryReceiptRule**](#deletesmsdeliveryreceiptrule) | **DELETE** /v3/automations/sms/receipts/{receipt_rule_id} | Delete SMS Delivery Receipt Rule|
|[**deleteSmsInboundAutomation**](#deletesmsinboundautomation) | **DELETE** /v3/automations/sms/inbound/{inbound_rule_id} | Delete SMS Inbound Automation|
|[**deleteSmsTemplate**](#deletesmstemplate) | **DELETE** /v3/sms/templates/{template_id} | Delete SMS Template|
|[**exportSmsHistory**](#exportsmshistory) | **GET** /v3/sms/history/export | Export SMS History|
|[**markInboundSmsAsRead**](#markinboundsmsasread) | **PUT** /v3/sms/inbound-read | Mark Inbound SMS as Read|
|[**markSmsReceiptAsRead**](#marksmsreceiptasread) | **PUT** /v3/sms/receipts-read | Mark SMS Receipt As Read|
|[**markSpecificInboundSmsMessageAsRead**](#markspecificinboundsmsmessageasread) | **PUT** /v3/sms/inbound-read/{message_id} | Mark Specific Inbound SMS Message As Read|
|[**sendSms**](#sendsms) | **POST** /v3/sms/send | Send SMS|
|[**updateSmsDeliveryReceiptRule**](#updatesmsdeliveryreceiptrule) | **PUT** /v3/automations/sms/receipts/{receipt_rule_id} | Update SMS Delivery Receipt Rule|
|[**updateSmsInboundAutomation**](#updatesmsinboundautomation) | **PUT** /v3/automations/sms/inbound/{inbound_rule_id} | Update SMS Inbound Automation|
|[**updateSmsTemplate**](#updatesmstemplate) | **PUT** /v3/sms/templates/{template_id} | Update SMS Template|
|[**viewASpecificInboundSmsMessage**](#viewaspecificinboundsmsmessage) | **GET** /v3/sms/inbound/{original_message_id} | View a specific inbound SMS message|
|[**viewASpecificSmsTemplate**](#viewaspecificsmstemplate) | **GET** /v3/sms/templates/{template_id} | View a Specific SMS Template|
|[**viewInboundSms**](#viewinboundsms) | **GET** /v3/sms/inbound | View Inbound SMS|
|[**viewSmsDeliveryReceiptRule**](#viewsmsdeliveryreceiptrule) | **GET** /v3/automations/sms/receipts/{receipt_rule_id} | View SMS Delivery Receipt Rule|
|[**viewSmsDeliveryReceiptRules**](#viewsmsdeliveryreceiptrules) | **GET** /v3/automations/sms/receipts | View SMS Delivery Receipt Rules|
|[**viewSmsHistory**](#viewsmshistory) | **GET** /v3/sms/history | View SMS History|
|[**viewSmsInboundAutomation**](#viewsmsinboundautomation) | **GET** /v3/automations/sms/inbound/{inbound_rule_id} | View SMS Inbound Automation|
|[**viewSmsInboundAutomations**](#viewsmsinboundautomations) | **GET** /v3/automations/sms/inbound | View SMS Inbound Automations|
|[**viewSmsReceipts**](#viewsmsreceipts) | **GET** /v3/sms/receipts | View SMS Receipts|
|[**viewSmsTemplates**](#viewsmstemplates) | **GET** /v3/sms/templates | View SMS Templates|
|[**viewSpecificSmsReceipt**](#viewspecificsmsreceipt) | **GET** /v3/sms/receipts/{message_id} | View Specific SMS Receipt|

# **calculateSmsPrice**
> CalculateSmsPrice calculateSmsPrice()

Use this endpoint to calculate the price of sending messages. The cost of sending messages varies based on the <a href=\"https://help.clicksend.com/article/h474eseq3a-how-many-characters-can-i-send-in-an-sms\" target=\"_blank\">type</a> and length of the message.

### Example

```typescript
import {
    SmsApi,
    Configuration,
    CalculateSmsPriceRequest
} from 'clicksend';

const configuration = new Configuration();
const apiInstance = new SmsApi(configuration);

let contentType: string; // (optional) (default to undefined)
let calculateSmsPriceRequest: CalculateSmsPriceRequest; // (optional)

const { status, data } = await apiInstance.calculateSmsPrice(
    contentType,
    calculateSmsPriceRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **calculateSmsPriceRequest** | **CalculateSmsPriceRequest**|  | |
| **contentType** | [**string**] |  | (optional) defaults to undefined|


### Return type

**CalculateSmsPrice**

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

# **cancelAllSms**
> CancelAllSms cancelAllSms()

Use this endpoint to cancel all scheduled SMS. To cancel only one scheduled SMS, use the **Cancel SMS** endpoint.

### Example

```typescript
import {
    SmsApi,
    Configuration,
    CancelAllSmsRequest
} from 'clicksend';

const configuration = new Configuration();
const apiInstance = new SmsApi(configuration);

let contentType: string; // (optional) (default to undefined)
let cancelAllSmsRequest: CancelAllSmsRequest; // (optional)

const { status, data } = await apiInstance.cancelAllSms(
    contentType,
    cancelAllSmsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **cancelAllSmsRequest** | **CancelAllSmsRequest**|  | |
| **contentType** | [**string**] |  | (optional) defaults to undefined|


### Return type

**CancelAllSms**

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

# **cancelSms**
> CancelSms cancelSms()

Use this endpoint to cancel a specific scheduled SMS. Unlike the **Cancel All SMS** endpoint, which cancels all scheduled SMS, this endpoint only cancels one specified scheduled SMS.  Specify the scheduled SMS to cancel by providing its _message_id_.

### Example

```typescript
import {
    SmsApi,
    Configuration
} from 'clicksend';

const configuration = new Configuration();
const apiInstance = new SmsApi(configuration);

let messageId: string; //The _message_id_ of the scheduled SMS to cancel. (default to undefined)
let contentType: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.cancelSms(
    messageId,
    contentType
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **messageId** | [**string**] | The _message_id_ of the scheduled SMS to cancel. | defaults to undefined|
| **contentType** | [**string**] |  | (optional) defaults to undefined|


### Return type

**CancelSms**

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

# **createSmsDeliveryReceiptRule**
> CreateSmsDeliveryReceiptRule createSmsDeliveryReceiptRule()

_Create sms delivery receipt automations_  Create sms delivery receipt automations  ### Properties  | Name | Type | Required | Restrictions | Description | | --- | --- | --- | --- | --- | | rule_name | string | true | none | Rule Name. | | match_type | number | true | none | Match Type. 0=All reports. | | action | string | true | none | Action to be taken (AUTO_REPLY, EMAIL_USER, EMAIL_FIXED, URL, SMS, POLL, GROUP_SMS, MOVE_CONTACT, CREATE_CONTACT, CREATE_CONTACT_PLUS_EMAIL, CREATE_CONTACT_PLUS_NAME_EMAIL CREATE_CONTACT_PLUS_NAME, SMPP, NONE). | | action_address | string | true | none | Action address. | | enabled | number | true | none | Enabled: Disabled=0 or Enabled=1. |   Refer to [Status Codes](/#status-codes) for definitions of HTTP status code responses.   <div style=\"background-color: #FF6A4B; padding: 10px; border-radius: 8px;\">   <span style=\"color: white;\">This endpoint requires authentication,</span>    <a href=\"/docs/#authentication\" style=\"color: white; text-decoration: underline;\">more info...</a> </div>

### Example

```typescript
import {
    SmsApi,
    Configuration,
    CreateSmsDeliveryReceiptRuleRequest
} from 'clicksend';

const configuration = new Configuration();
const apiInstance = new SmsApi(configuration);

let contentType: string; // (optional) (default to undefined)
let createSmsDeliveryReceiptRuleRequest: CreateSmsDeliveryReceiptRuleRequest; // (optional)

const { status, data } = await apiInstance.createSmsDeliveryReceiptRule(
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

**CreateSmsDeliveryReceiptRule**

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

# **createSmsInboundAutomation**
> CreateSmsInboundAutomation createSmsInboundAutomation()

_Create new inbound sms automation_  Create new inbound sms automation  | Name | Type | Required | Restrictions | Description | | --- | --- | --- | --- | --- | | dedicated_number | string | true | none | Decicated Number. Can be \'\\*\' to apply to all numbers. | | rule_name | string | true | none | Rule Name. | | message_search_type | number | true | none | Message Search Type: 0=Any message, 1=starts with, 2=contains, 3=does not contain. | | message_search_term | string | true | none | Message search term. | | action | string | true | none | Action to be taken (AUTO_REPLY, EMAIL_USER, EMAIL_FIXED, URL, SMS, POLL, GROUP_SMS, MOVE_CONTACT, CREATE_CONTACT, CREATE_CONTACT_PLUS_EMAIL, CREATE_CONTACT_PLUS_NAME_EMAIL CREATE_CONTACT_PLUS_NAME, SMPP, NONE). | | action_address | string | true | none | Action address. | | enabled | number | true | none | Enabled: Disabled=0 or Enabled=1. | | webhook_type | string | false | Required when action = URL only | Set as post, get, or json to change the format of the request sent. |   Refer to [Status Codes](/#status-codes) for definitions of HTTP status code responses.   <div style=\"background-color: #FF6A4B; padding: 10px; border-radius: 8px;\">   <span style=\"color: white;\">This endpoint requires authentication,</span>    <a href=\"/docs/#authentication\" style=\"color: white; text-decoration: underline;\">more info...</a> </div>

### Example

```typescript
import {
    SmsApi,
    Configuration,
    CreateSmsInboundAutomationRequest
} from 'clicksend';

const configuration = new Configuration();
const apiInstance = new SmsApi(configuration);

let contentType: string; // (optional) (default to undefined)
let createSmsInboundAutomationRequest: CreateSmsInboundAutomationRequest; // (optional)

const { status, data } = await apiInstance.createSmsInboundAutomation(
    contentType,
    createSmsInboundAutomationRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createSmsInboundAutomationRequest** | **CreateSmsInboundAutomationRequest**|  | |
| **contentType** | [**string**] |  | (optional) defaults to undefined|


### Return type

**CreateSmsInboundAutomation**

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

# **createSmsTemplate**
> CreateSmsTemplate createSmsTemplate()

Use this endpoint to create a SMS template that you can use for sending SMS.

### Example

```typescript
import {
    SmsApi,
    Configuration,
    CreateSmsTemplateRequest
} from 'clicksend';

const configuration = new Configuration();
const apiInstance = new SmsApi(configuration);

let contentType: string; // (optional) (default to undefined)
let createSmsTemplateRequest: CreateSmsTemplateRequest; // (optional)

const { status, data } = await apiInstance.createSmsTemplate(
    contentType,
    createSmsTemplateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createSmsTemplateRequest** | **CreateSmsTemplateRequest**|  | |
| **contentType** | [**string**] |  | (optional) defaults to undefined|


### Return type

**CreateSmsTemplate**

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

# **createTestInboundSms**
> CreateTestInboundSms createTestInboundSms()

Use this endpoint to generate and send a test <a href=\"https://help.clicksend.com/article/ik4hw5xu35-can-i-receive-inbound-sms-to-my-url\" target=\"_blank\">inbound SMS</a> to your webhook URL. Inbound SMS are messages sent by your recipient to you.  This test endpoint allows you to verify that the inbound SMS is correctly sent to your webhook URL.

### Example

```typescript
import {
    SmsApi,
    Configuration,
    CreateTestInboundSmsRequest
} from 'clicksend';

const configuration = new Configuration();
const apiInstance = new SmsApi(configuration);

let contentType: string; // (optional) (default to undefined)
let createTestInboundSmsRequest: CreateTestInboundSmsRequest; // (optional)

const { status, data } = await apiInstance.createTestInboundSms(
    contentType,
    createTestInboundSmsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createTestInboundSmsRequest** | **CreateTestInboundSmsRequest**|  | |
| **contentType** | [**string**] |  | (optional) defaults to undefined|


### Return type

**CreateTestInboundSms**

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

# **createTestSmsReceipt**
> CreateTestSmsReceipt createTestSmsReceipt()

Use this endpoint to generate and send a test <a href=\"https://help.clicksend.com/article/49eq1qdcui-how-do-i-receive-sms-delivery-receipts-delivery-status-updates\" target=\"_blank\">SMS delivery receipt</a> to your webhook URL. When you send an SMS, a delivery receipt is generated and can be received at your webhook URL. This test endpoint allows you to verify that the receipt is correctly sent to your webhook URL.  Additionally, you can obtain SMS receipts by setting the webhook URL to **poll** and periodically calling the **View SMS Receipt** endpoint to check for new receipts. This process is known as _polling_.

### Example

```typescript
import {
    SmsApi,
    Configuration,
    CreateTestSmsReceiptRequest
} from 'clicksend';

const configuration = new Configuration();
const apiInstance = new SmsApi(configuration);

let contentType: string; // (optional) (default to undefined)
let createTestSmsReceiptRequest: CreateTestSmsReceiptRequest; // (optional)

const { status, data } = await apiInstance.createTestSmsReceipt(
    contentType,
    createTestSmsReceiptRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createTestSmsReceiptRequest** | **CreateTestSmsReceiptRequest**|  | |
| **contentType** | [**string**] |  | (optional) defaults to undefined|


### Return type

**CreateTestSmsReceipt**

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

# **deleteSmsDeliveryReceiptRule**
> DeleteSmsDeliveryReceiptRule deleteSmsDeliveryReceiptRule()

_Delete sms delivery receipt automation_  Delete sms delivery receipt automation  ### Parameters  | Parameter | In | Type | Required | Description | | --- | --- | --- | --- | --- | | receipt_rule_id | path | integer(int32) | true | Receipt rule id |   Refer to [Status Codes](/#status-codes) for definitions of HTTP status code responses.   <div style=\"background-color: #FF6A4B; padding: 10px; border-radius: 8px;\">   <span style=\"color: white;\">This endpoint requires authentication,</span>    <a href=\"/docs/#authentication\" style=\"color: white; text-decoration: underline;\">more info...</a> </div>

### Example

```typescript
import {
    SmsApi,
    Configuration
} from 'clicksend';

const configuration = new Configuration();
const apiInstance = new SmsApi(configuration);

let receiptRuleId: string; // (default to undefined)
let contentType: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.deleteSmsDeliveryReceiptRule(
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

**DeleteSmsDeliveryReceiptRule**

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

# **deleteSmsInboundAutomation**
> DeleteSmsInboundAutomation deleteSmsInboundAutomation()

_Delete inbound sms automation_  Delete inbound sms automation  ### Parameters  | Parameter | In | Type | Required | Description | | --- | --- | --- | --- | --- | | inbound_rule_id | path | integer(int32) | true | Inbound rule id |   Refer to [Status Codes](/#status-codes) for definitions of HTTP status code responses.   <div style=\"background-color: #FF6A4B; padding: 10px; border-radius: 8px;\">   <span style=\"color: white;\">This endpoint requires authentication,</span>    <a href=\"/docs/#authentication\" style=\"color: white; text-decoration: underline;\">more info...</a> </div>

### Example

```typescript
import {
    SmsApi,
    Configuration
} from 'clicksend';

const configuration = new Configuration();
const apiInstance = new SmsApi(configuration);

let inboundRuleId: string; // (default to undefined)
let contentType: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.deleteSmsInboundAutomation(
    inboundRuleId,
    contentType
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **inboundRuleId** | [**string**] |  | defaults to undefined|
| **contentType** | [**string**] |  | (optional) defaults to undefined|


### Return type

**DeleteSmsInboundAutomation**

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

# **deleteSmsTemplate**
> DeleteSmsTemplate deleteSmsTemplate()

Use this endpoint to delete a <a href=\"https://help.clicksend.com/article/9z9uloaz8y-sms-templates-for-different-industries\" target=\"_blank\">SMS template</a>. Specify the SMS template to delete by providing its _template_id_.

### Example

```typescript
import {
    SmsApi,
    Configuration
} from 'clicksend';

const configuration = new Configuration();
const apiInstance = new SmsApi(configuration);

let templateId: string; //The ID of the template to delete. (default to undefined)
let contentType: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.deleteSmsTemplate(
    templateId,
    contentType
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **templateId** | [**string**] | The ID of the template to delete. | defaults to undefined|
| **contentType** | [**string**] |  | (optional) defaults to undefined|


### Return type

**DeleteSmsTemplate**

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

# **exportSmsHistory**
> ExportSmsHistory exportSmsHistory()

Use this endpoint to create a download link of your SMS history. You can filter the SMS history result using the query parameters.

### Example

```typescript
import {
    SmsApi,
    Configuration
} from 'clicksend';

const configuration = new Configuration();
const apiInstance = new SmsApi(configuration);

let contentType: string; // (optional) (default to undefined)
let filename: string; //The filename of the result. It should be in the .csv format. (optional) (default to 'export.csv')
let page: number; //The page number to retrieve. Use this parameter to navigate through the [pagination](/#pagination) results. The default value is 1. (optional) (default to 1)
let limit: number; //The number of items to return per page. This parameter controls the size of each page of results. The default value is 15. (optional) (default to 15)
let q: string; //Allows filtering of results based on your search criteria. The query should be in the format `field_name:value`.  1. **Field Name**: The field within the SMS history you want to filter by. You can use the following fields:          - _Status_: The status of the SMS. Available values for status are: Queued, Completed, Scheduled, WaitApproval, Failed, Cancelled, CancelledAfterReview, Received, Sent.              - _To_: The recipient of the SMS.              - _from_: The sender of the SMS.              - _subaccount_id_: The sub-account identifier.              - _message_id_: The ID of your SMS.          2. **Value**: The text or keyword you\'re searching for within the specified field. If left empty after the colon, the filter will look for all templates with any value in the **Field Name**.             For example, if you are searching for a SMS with the status of _Scheduled_, the final query would look like this:    `q=status:Scheduled`  <div class=\"info-box\">   <h4><i class=\"fas fa-info-circle\"></i> Note:</h4>   <div>   <p>Some characters have to be encoded. For example, if you are searching for SMS sent from the phone number +61437085284, your search query q would be:<br/></p>     <ul>       <li>q=from:%2B61437085284</li>     </ul>     <p>You can use the <a href=\"https://www.urlencoder.org/\" target=\"_blank\">URL encoder</a> to encode the text. If a character is not an alphanumeric character (A-Z, a-z, 0-9), it is typically either reserved or unsafe and should be encoded.</p>   </div> </div> (optional) (default to 'field_name')
let orderBy: string; //Specifies the field and order to sort the results by. The value is composed of the field name followed by a colon and the sort direction (asc for ascending or desc for descending).  The default sort order is by date in ascending order. You can use the following fields:    - _date_    - _username_   - _from_    - _to_   - _status_    - _body_  For example, if you want to order by the most recently sent SMS, you should sort by date in descending order. The query would look like this:    `order_by=date:desc` (optional) (default to 'date:asc')
let dateFrom: number; //Start date to filter results. It should be in <a href=\"http://help.clicksend.com/what-is-a-unix-timestamp\" target=\"_blank\">Unix format</a>. (optional) (default to undefined)
let dateTo: number; //End date to filter results. It should be in <a href=\"http://help.clicksend.com/what-is-a-unix-timestamp\" target=\"_blank\">Unix format</a>. (optional) (default to undefined)

const { status, data } = await apiInstance.exportSmsHistory(
    contentType,
    filename,
    page,
    limit,
    q,
    orderBy,
    dateFrom,
    dateTo
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **contentType** | [**string**] |  | (optional) defaults to undefined|
| **filename** | [**string**] | The filename of the result. It should be in the .csv format. | (optional) defaults to 'export.csv'|
| **page** | [**number**] | The page number to retrieve. Use this parameter to navigate through the [pagination](/#pagination) results. The default value is 1. | (optional) defaults to 1|
| **limit** | [**number**] | The number of items to return per page. This parameter controls the size of each page of results. The default value is 15. | (optional) defaults to 15|
| **q** | [**string**] | Allows filtering of results based on your search criteria. The query should be in the format &#x60;field_name:value&#x60;.  1. **Field Name**: The field within the SMS history you want to filter by. You can use the following fields:          - _Status_: The status of the SMS. Available values for status are: Queued, Completed, Scheduled, WaitApproval, Failed, Cancelled, CancelledAfterReview, Received, Sent.              - _To_: The recipient of the SMS.              - _from_: The sender of the SMS.              - _subaccount_id_: The sub-account identifier.              - _message_id_: The ID of your SMS.          2. **Value**: The text or keyword you\&#39;re searching for within the specified field. If left empty after the colon, the filter will look for all templates with any value in the **Field Name**.             For example, if you are searching for a SMS with the status of _Scheduled_, the final query would look like this:    &#x60;q&#x3D;status:Scheduled&#x60;  &lt;div class&#x3D;\&quot;info-box\&quot;&gt;   &lt;h4&gt;&lt;i class&#x3D;\&quot;fas fa-info-circle\&quot;&gt;&lt;/i&gt; Note:&lt;/h4&gt;   &lt;div&gt;   &lt;p&gt;Some characters have to be encoded. For example, if you are searching for SMS sent from the phone number +61437085284, your search query q would be:&lt;br/&gt;&lt;/p&gt;     &lt;ul&gt;       &lt;li&gt;q&#x3D;from:%2B61437085284&lt;/li&gt;     &lt;/ul&gt;     &lt;p&gt;You can use the &lt;a href&#x3D;\&quot;https://www.urlencoder.org/\&quot; target&#x3D;\&quot;_blank\&quot;&gt;URL encoder&lt;/a&gt; to encode the text. If a character is not an alphanumeric character (A-Z, a-z, 0-9), it is typically either reserved or unsafe and should be encoded.&lt;/p&gt;   &lt;/div&gt; &lt;/div&gt; | (optional) defaults to 'field_name'|
| **orderBy** | [**string**] | Specifies the field and order to sort the results by. The value is composed of the field name followed by a colon and the sort direction (asc for ascending or desc for descending).  The default sort order is by date in ascending order. You can use the following fields:    - _date_    - _username_   - _from_    - _to_   - _status_    - _body_  For example, if you want to order by the most recently sent SMS, you should sort by date in descending order. The query would look like this:    &#x60;order_by&#x3D;date:desc&#x60; | (optional) defaults to 'date:asc'|
| **dateFrom** | [**number**] | Start date to filter results. It should be in &lt;a href&#x3D;\&quot;http://help.clicksend.com/what-is-a-unix-timestamp\&quot; target&#x3D;\&quot;_blank\&quot;&gt;Unix format&lt;/a&gt;. | (optional) defaults to undefined|
| **dateTo** | [**number**] | End date to filter results. It should be in &lt;a href&#x3D;\&quot;http://help.clicksend.com/what-is-a-unix-timestamp\&quot; target&#x3D;\&quot;_blank\&quot;&gt;Unix format&lt;/a&gt;. | (optional) defaults to undefined|


### Return type

**ExportSmsHistory**

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

# **markInboundSmsAsRead**
> MarkInboundSmsAsRead markInboundSmsAsRead()

Use this endpoint to mark all <a href=\"https://help.clicksend.com/article/ik4hw5xu35-can-i-receive-inbound-sms-to-my-url\" target=\"_blank\">inbound SMS</a> as read. Inbound SMS that has been marked as read won’t be shown in the **View Inbound SMS** endpoint. You can still use the **View Specific Inbound SMS** endpoint to view inbound SMS marked as read.  In the request, you can optionally add a _date_before_ parameter to only mark inbound SMS sent before that date as read.

### Example

```typescript
import {
    SmsApi,
    Configuration,
    MarkSmsReceiptAsReadRequest
} from 'clicksend';

const configuration = new Configuration();
const apiInstance = new SmsApi(configuration);

let contentType: string; // (optional) (default to undefined)
let markSmsReceiptAsReadRequest: MarkSmsReceiptAsReadRequest; // (optional)

const { status, data } = await apiInstance.markInboundSmsAsRead(
    contentType,
    markSmsReceiptAsReadRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **markSmsReceiptAsReadRequest** | **MarkSmsReceiptAsReadRequest**|  | |
| **contentType** | [**string**] |  | (optional) defaults to undefined|


### Return type

**MarkInboundSmsAsRead**

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

# **markSmsReceiptAsRead**
> MarkSmsReceiptAsRead markSmsReceiptAsRead()

Use this endpoint to mark all <a target=\"_blank\" href=\"https://help.clicksend.com/article/49eq1qdcui-how-do-i-receive-sms-delivery-receipts-delivery-status-updates\">SMS delivery receipts</a> as read. Delivery receipts that have been marked as read won’t be shown in the **View SMS Receipts** endpoint.  You can still use the **View Specific SMS Receipt** endpoint to view delivery receipts marked as read. In the request, you can optionally add a _date_before_ parameter to only mark receipts sent before that date as read

### Example

```typescript
import {
    SmsApi,
    Configuration,
    MarkSmsReceiptAsReadRequest
} from 'clicksend';

const configuration = new Configuration();
const apiInstance = new SmsApi(configuration);

let contentType: string; // (optional) (default to undefined)
let markSmsReceiptAsReadRequest: MarkSmsReceiptAsReadRequest; // (optional)

const { status, data } = await apiInstance.markSmsReceiptAsRead(
    contentType,
    markSmsReceiptAsReadRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **markSmsReceiptAsReadRequest** | **MarkSmsReceiptAsReadRequest**|  | |
| **contentType** | [**string**] |  | (optional) defaults to undefined|


### Return type

**MarkSmsReceiptAsRead**

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

# **markSpecificInboundSmsMessageAsRead**
> MarkSpecificInboundSmsMessageAsRead markSpecificInboundSmsMessageAsRead()

Use this endpoint to mark a specific <a href=\"https://help.clicksend.com/article/ik4hw5xu35-can-i-receive-inbound-sms-to-my-url\" target=\"_blank\">inbound SMS</a> as read. Unlike the **View Inbound SMS** endpoint, which marks all inbound SMS as read,  this endpoint only marks one specified inbound SMS. Specify the SMS to be marked as read by providing its _message_id_.

### Example

```typescript
import {
    SmsApi,
    Configuration
} from 'clicksend';

const configuration = new Configuration();
const apiInstance = new SmsApi(configuration);

let messageId: string; //The message_id of the inbound SMS to mark as read.  <div class=\"info-box\">   <h4><i class=\"fas fa-info-circle\"></i> Note:</h4>   <p>     When you receive an inbound message, you will get two parameters: <em>original_message_id</em> and <em>message_id</em>:   </p>   <ul>     <li><em>original_message_id</em>: This is the ID of the outbound message sent to the recipient</li>     <li><em>message_id</em>: This is the ID of the inbound message sent by the recipient.</li>   </ul> </div> (default to undefined)
let contentType: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.markSpecificInboundSmsMessageAsRead(
    messageId,
    contentType
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **messageId** | [**string**] | The message_id of the inbound SMS to mark as read.  &lt;div class&#x3D;\&quot;info-box\&quot;&gt;   &lt;h4&gt;&lt;i class&#x3D;\&quot;fas fa-info-circle\&quot;&gt;&lt;/i&gt; Note:&lt;/h4&gt;   &lt;p&gt;     When you receive an inbound message, you will get two parameters: &lt;em&gt;original_message_id&lt;/em&gt; and &lt;em&gt;message_id&lt;/em&gt;:   &lt;/p&gt;   &lt;ul&gt;     &lt;li&gt;&lt;em&gt;original_message_id&lt;/em&gt;: This is the ID of the outbound message sent to the recipient&lt;/li&gt;     &lt;li&gt;&lt;em&gt;message_id&lt;/em&gt;: This is the ID of the inbound message sent by the recipient.&lt;/li&gt;   &lt;/ul&gt; &lt;/div&gt; | defaults to undefined|
| **contentType** | [**string**] |  | (optional) defaults to undefined|


### Return type

**MarkSpecificInboundSmsMessageAsRead**

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

# **sendSms**
> SendSms sendSms()

Use this endpoint to send messages to your recipients, either as phone numbers or contacts from your contact list.  The sender of the message (<a href=\"https://help.clicksend.com/article/4kgj7krx00-what-is-a-sender-id-or-sender-number\" target=\"_blank\"><strong>Sender ID</strong></a>) can be a shared number, a dedicated number, alpha tag (business name), or your own number.  You can send messages both locally and globally, subject to the country restrictions. The cost of sending messages varies based on the <a href=\"https://help.clicksend.com/article/h474eseq3a-how-many-characters-can-i-send-in-an-sms\" target=\"_blank\">type</a> and length of the message.

### Example

```typescript
import {
    SmsApi,
    Configuration,
    SendSmsRequest
} from 'clicksend';

const configuration = new Configuration();
const apiInstance = new SmsApi(configuration);

let contentType: string; // (optional) (default to undefined)
let sendSmsRequest: SendSmsRequest; // (optional)

const { status, data } = await apiInstance.sendSms(
    contentType,
    sendSmsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **sendSmsRequest** | **SendSmsRequest**|  | |
| **contentType** | [**string**] |  | (optional) defaults to undefined|


### Return type

**SendSms**

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

# **updateSmsDeliveryReceiptRule**
> UpdateSmsDeliveryReceiptRule updateSmsDeliveryReceiptRule()

_Update sms delivery receipt automation_  Update sms delivery receipt automation  ### Parameters  | Parameter | In | Type | Required | Description | | --- | --- | --- | --- | --- | | receipt_rule_id | path | integer(int32) | true | Receipt rule id |  ### Properties  | Name | Type | Required | Restrictions | Description | | --- | --- | --- | --- | --- | | rule_name | string | true | none | Rule Name. | | match_type | number | true | none | Match Type. 0=All reports. | | action | string | true | none | Action to be taken (AUTO_REPLY, EMAIL_USER, EMAIL_FIXED, URL, SMS, POLL, GROUP_SMS, MOVE_CONTACT, CREATE_CONTACT, CREATE_CONTACT_PLUS_EMAIL, CREATE_CONTACT_PLUS_NAME_EMAIL CREATE_CONTACT_PLUS_NAME, SMPP, NONE). | | action_address | string | true | none | Action address. | | enabled | number | true | none | Enabled: Disabled=0 or Enabled=1. |   Refer to [Status Codes](/#status-codes) for definitions of HTTP status code responses.   <div style=\"background-color: #FF6A4B; padding: 10px; border-radius: 8px;\">   <span style=\"color: white;\">This endpoint requires authentication,</span>    <a href=\"/docs/#authentication\" style=\"color: white; text-decoration: underline;\">more info...</a> </div>

### Example

```typescript
import {
    SmsApi,
    Configuration,
    CreateSmsDeliveryReceiptRuleRequest
} from 'clicksend';

const configuration = new Configuration();
const apiInstance = new SmsApi(configuration);

let receiptRuleId: string; // (default to undefined)
let contentType: string; // (optional) (default to undefined)
let createSmsDeliveryReceiptRuleRequest: CreateSmsDeliveryReceiptRuleRequest; // (optional)

const { status, data } = await apiInstance.updateSmsDeliveryReceiptRule(
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

**UpdateSmsDeliveryReceiptRule**

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

# **updateSmsInboundAutomation**
> UpdateSmsInboundAutomation updateSmsInboundAutomation()

_Update inbound sms automation_  Update inbound sms automation  ### Parameters  | Parameter | In | Type | Required | Description | | --- | --- | --- | --- | --- | | inbound_rule_id | path | integer(int32) | true | Inbound rule id |  ### Properties  | Name | Type | Required | Restrictions | Description | | --- | --- | --- | --- | --- | | dedicated_number | string | true | none | Dedicated Number. Can be \'\\*\' to apply to all numbers. | | rule_name | string | true | none | Rule Name. | | message_search_type | number | true | none | Message Search Type: 0=Any message, 1=starts with, 2=contains, 3=does not contain. | | message_search_term | string | true | none | Message search term. | | action | string | true | none | Action to be taken (AUTO_REPLY, EMAIL_USER, EMAIL_FIXED, URL, SMS, POLL, GROUP_SMS, MOVE_CONTACT, CREATE_CONTACT, CREATE_CONTACT_PLUS_EMAIL, CREATE_CONTACT_PLUS_NAME_EMAIL CREATE_CONTACT_PLUS_NAME, SMPP, NONE). | | action_address | string | true | none | Action address. | | enabled | number | true | none | Enabled: Disabled=0 or Enabled=1. | | webhook_type | string | false | Required when action = URL only | Set as post, get, or json to change the format of the request sent. |   Refer to [Status Codes](/#status-codes) for definitions of HTTP status code responses.   <div style=\"background-color: #FF6A4B; padding: 10px; border-radius: 8px;\">   <span style=\"color: white;\">This endpoint requires authentication,</span>    <a href=\"/docs/#authentication\" style=\"color: white; text-decoration: underline;\">more info...</a> </div>

### Example

```typescript
import {
    SmsApi,
    Configuration,
    UpdateSmsInboundAutomationRequest
} from 'clicksend';

const configuration = new Configuration();
const apiInstance = new SmsApi(configuration);

let inboundRuleId: string; // (default to undefined)
let contentType: string; // (optional) (default to undefined)
let updateSmsInboundAutomationRequest: UpdateSmsInboundAutomationRequest; // (optional)

const { status, data } = await apiInstance.updateSmsInboundAutomation(
    inboundRuleId,
    contentType,
    updateSmsInboundAutomationRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateSmsInboundAutomationRequest** | **UpdateSmsInboundAutomationRequest**|  | |
| **inboundRuleId** | [**string**] |  | defaults to undefined|
| **contentType** | [**string**] |  | (optional) defaults to undefined|


### Return type

**UpdateSmsInboundAutomation**

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

# **updateSmsTemplate**
> UpdateSmsTemplate updateSmsTemplate()

Use this endpoint to update a <a href=\"https://help.clicksend.com/article/9z9uloaz8y-sms-templates-for-different-industries\" target=\"_blank\">SMS template</a>.

### Example

```typescript
import {
    SmsApi,
    Configuration,
    CreateSmsTemplateRequest
} from 'clicksend';

const configuration = new Configuration();
const apiInstance = new SmsApi(configuration);

let templateId: string; //The ID of the template to update. (default to undefined)
let contentType: string; // (optional) (default to undefined)
let createSmsTemplateRequest: CreateSmsTemplateRequest; // (optional)

const { status, data } = await apiInstance.updateSmsTemplate(
    templateId,
    contentType,
    createSmsTemplateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createSmsTemplateRequest** | **CreateSmsTemplateRequest**|  | |
| **templateId** | [**string**] | The ID of the template to update. | defaults to undefined|
| **contentType** | [**string**] |  | (optional) defaults to undefined|


### Return type

**UpdateSmsTemplate**

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

# **viewASpecificInboundSmsMessage**
> ViewASpecificInboundSmsMessage viewASpecificInboundSmsMessage()

Use this endpoint to retrieve a specific inbound SMS, including those that have been marked as read.  Inbound SMS are messages sent by your recipient to you. This endpoint enables you to retrieve those inbound SMS.

### Example

```typescript
import {
    SmsApi,
    Configuration
} from 'clicksend';

const configuration = new Configuration();
const apiInstance = new SmsApi(configuration);

let originalMessageId: string; //The _original_message_id_ of the inbound SMS to view. If the recipient replied with multiple messages, this endpoint returns the first inbound SMS received.  <div class=\"info-box\">   <h4><i class=\"fas fa-info-circle\"></i> Note:</h4>   <p>     When you receive an inbound message, you will get two parameters: <em>original_message_id</em> and <em>message_id</em>:   </p>   <ul>     <li><em>original_message_id</em>: This is the ID of the outbound message sent to the recipient</li>     <li><em>message_id</em>: This is the ID of the inbound message sent by the recipient.</li>   </ul> </div> (default to undefined)
let contentType: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.viewASpecificInboundSmsMessage(
    originalMessageId,
    contentType
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **originalMessageId** | [**string**] | The _original_message_id_ of the inbound SMS to view. If the recipient replied with multiple messages, this endpoint returns the first inbound SMS received.  &lt;div class&#x3D;\&quot;info-box\&quot;&gt;   &lt;h4&gt;&lt;i class&#x3D;\&quot;fas fa-info-circle\&quot;&gt;&lt;/i&gt; Note:&lt;/h4&gt;   &lt;p&gt;     When you receive an inbound message, you will get two parameters: &lt;em&gt;original_message_id&lt;/em&gt; and &lt;em&gt;message_id&lt;/em&gt;:   &lt;/p&gt;   &lt;ul&gt;     &lt;li&gt;&lt;em&gt;original_message_id&lt;/em&gt;: This is the ID of the outbound message sent to the recipient&lt;/li&gt;     &lt;li&gt;&lt;em&gt;message_id&lt;/em&gt;: This is the ID of the inbound message sent by the recipient.&lt;/li&gt;   &lt;/ul&gt; &lt;/div&gt; | defaults to undefined|
| **contentType** | [**string**] |  | (optional) defaults to undefined|


### Return type

**ViewASpecificInboundSmsMessage**

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

# **viewASpecificSmsTemplate**
> ViewASpecificSmsTemplate viewASpecificSmsTemplate()

Use this endpoint to retrieve a <a href=\"https://help.clicksend.com/article/9z9uloaz8y-sms-templates-for-different-industries\" target=\"_blank\">SMS template</a>. Specify which template to retrieve using the template ID.

### Example

```typescript
import {
    SmsApi,
    Configuration
} from 'clicksend';

const configuration = new Configuration();
const apiInstance = new SmsApi(configuration);

let templateId: string; //The ID of the template to retrieve (default to undefined)
let contentType: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.viewASpecificSmsTemplate(
    templateId,
    contentType
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **templateId** | [**string**] | The ID of the template to retrieve | defaults to undefined|
| **contentType** | [**string**] |  | (optional) defaults to undefined|


### Return type

**ViewASpecificSmsTemplate**

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

# **viewInboundSms**
> ViewInboundSms viewInboundSms()

Use this endpoint to retrieve <a href=\"https://help.clicksend.com/article/49eq1qdcui-how-do-i-receive-sms-delivery-receipts-delivery-status-updates\" target=\"_blank\">SMS delivery receipts</a> sent by your recipient.  To be able to view receipts, add a <a href=\"https://help.clicksend.com/article/ut4ttdrrai-incoming-reply-sms-options\">inbound rule</a> with the Action set to **POLL** in the Dashboard, or use the [**Create SMS Inbound Automation**](/automations/sms/other/create-sms-inbound-automation) endpoint.  Control [pagination](/#pagination) with the _page_ and _limit_ query parameters to specify the page of results and the number of items returned.  <div class=\"info-box\">   <h4><i class=\"fas fa-info-circle\"></i> Note:</h4>   <p>If you have multiple inbound rules set to <strong>POLL</strong>, you will receive the inbound message multiple times.</p> </div>

### Example

```typescript
import {
    SmsApi,
    Configuration
} from 'clicksend';

const configuration = new Configuration();
const apiInstance = new SmsApi(configuration);

let contentType: string; // (optional) (default to undefined)
let page: number; //The page number to retrieve. Use this parameter to navigate through the [pagination](/#pagination) results. The default value is 1. (optional) (default to 1)
let limit: number; //The number of items to return per page. This parameter controls the size of each page of results. The default value is 15. (optional) (default to 15)

const { status, data } = await apiInstance.viewInboundSms(
    contentType,
    page,
    limit
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **contentType** | [**string**] |  | (optional) defaults to undefined|
| **page** | [**number**] | The page number to retrieve. Use this parameter to navigate through the [pagination](/#pagination) results. The default value is 1. | (optional) defaults to 1|
| **limit** | [**number**] | The number of items to return per page. This parameter controls the size of each page of results. The default value is 15. | (optional) defaults to 15|


### Return type

**ViewInboundSms**

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

# **viewSmsDeliveryReceiptRule**
> ViewSmsDeliveryReceiptRule viewSmsDeliveryReceiptRule()

_Get specific sms delivery receipt automation_  Get specific sms delivery receipt automation  ### Parameters  | Parameter | In | Type | Required | Description | | --- | --- | --- | --- | --- | | receipt_rule_id | path | integer(int32) | true | Receipt rule id |   Refer to [Status Codes](/#status-codes) for definitions of HTTP status code responses.   <div style=\"background-color: #FF6A4B; padding: 10px; border-radius: 8px;\">   <span style=\"color: white;\">This endpoint requires authentication,</span>    <a href=\"/docs/#authentication\" style=\"color: white; text-decoration: underline;\">more info...</a> </div>

### Example

```typescript
import {
    SmsApi,
    Configuration
} from 'clicksend';

const configuration = new Configuration();
const apiInstance = new SmsApi(configuration);

let receiptRuleId: string; // (default to undefined)
let contentType: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.viewSmsDeliveryReceiptRule(
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

**ViewSmsDeliveryReceiptRule**

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

# **viewSmsDeliveryReceiptRules**
> ViewSmsDeliveryReceiptRules viewSmsDeliveryReceiptRules()

_Get all sms delivery receipt automations_  Get all sms delivery receipt automations  ### Parameters  | Parameter | In | Type | Required | Description | | --- | --- | --- | --- | --- | | page | query | integer(int32) | false | Page number | | limit | query | integer(int32) | false | Number of records per page |   Refer to [Status Codes](/#status-codes) for definitions of HTTP status code responses.   <div style=\"background-color: #FF6A4B; padding: 10px; border-radius: 8px;\">   <span style=\"color: white;\">This endpoint requires authentication,</span>    <a href=\"/docs/#authentication\" style=\"color: white; text-decoration: underline;\">more info...</a> </div>

### Example

```typescript
import {
    SmsApi,
    Configuration
} from 'clicksend';

const configuration = new Configuration();
const apiInstance = new SmsApi(configuration);

let contentType: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.viewSmsDeliveryReceiptRules(
    contentType
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **contentType** | [**string**] |  | (optional) defaults to undefined|


### Return type

**ViewSmsDeliveryReceiptRules**

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

# **viewSmsHistory**
> ViewSmsHistory viewSmsHistory()

Use this endpoint to view previously sent SMS. You can filter the SMS history result using the query parameters.

### Example

```typescript
import {
    SmsApi,
    Configuration
} from 'clicksend';

const configuration = new Configuration();
const apiInstance = new SmsApi(configuration);

let contentType: string; // (optional) (default to undefined)
let page: number; //The page number to retrieve. Use this parameter to navigate through the [pagination](/#pagination) results. The default value is 1. (optional) (default to 1)
let limit: number; //The number of items to return per page. This parameter controls the size of each page of results. The default value is 15. (optional) (default to 15)
let q: string; //Allows filtering of results based on your search criteria. The query should be in the format `field_name:value`.  1. **Field Name**: The field within the SMS history you want to filter by. You can use the following fields:          - _Status_: The status of the SMS. Available values for status are: Queued, Completed, Scheduled, WaitApproval, Failed, Cancelled, CancelledAfterReview, Received, Sent.              - _To_: The recipient of the SMS.              - _from_: The sender of the SMS.              - _subaccount_id_: The sub-account identifier.              - _message_id_: The ID of your SMS.          2. **Value**: The text or keyword you\'re searching for within the specified field. If left empty after the colon, the filter will look for all templates with any value in the **Field Name**.             For example, if you are searching for a SMS with the status of Scheduled, the final query would look like this:    `q=status:Scheduled`  <div class=\"info-box\">   <h4><i class=\"fas fa-info-circle\"></i> Note:</h4>   <div>    <p>Some characters have to be encoded. For example, if you are searching for SMS sent from the phone number +61437085284, your search query q would be:<br/></p>     <ul>       <li>q=from:%2B61437085284</li>     </ul>     <p>You can use the <a href=\"https://www.urlencoder.org/\" target=\"_blank\">URL encoder</a> to encode the text. If a character is not an alphanumeric character (A-Z, a-z, 0-9), it is typically either reserved or unsafe and should be encoded.</p>   </div> </div> (optional) (default to 'field_name')
let orderBy: string; //Specifies the field and order to sort the results by. The value is composed of the field name followed by a colon and the sort direction (_asc_ for ascending or _desc_ for descending).  The default sort order is by _date_ in ascending order. You can use the following fields:    - _date_   - _username_   - _from_    - _to_   - _status_   - _body_  For example, if you want to order by the most recently sent SMS, you should sort by date in descending order. The query would look like this:    `order_by=date:desc` (optional) (default to 'date:asc')
let dateFrom: number; //Start date to filter results. It should be in <a href=\"http://help.clicksend.com/what-is-a-unix-timestamp\" target=\"_blank\">Unix format</a>. (optional) (default to undefined)
let dateTo: number; //End date to filter results. It should be in <a href=\"http://help.clicksend.com/what-is-a-unix-timestamp\" target=\"_blank\">Unix format</a>. (optional) (default to undefined)

const { status, data } = await apiInstance.viewSmsHistory(
    contentType,
    page,
    limit,
    q,
    orderBy,
    dateFrom,
    dateTo
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **contentType** | [**string**] |  | (optional) defaults to undefined|
| **page** | [**number**] | The page number to retrieve. Use this parameter to navigate through the [pagination](/#pagination) results. The default value is 1. | (optional) defaults to 1|
| **limit** | [**number**] | The number of items to return per page. This parameter controls the size of each page of results. The default value is 15. | (optional) defaults to 15|
| **q** | [**string**] | Allows filtering of results based on your search criteria. The query should be in the format &#x60;field_name:value&#x60;.  1. **Field Name**: The field within the SMS history you want to filter by. You can use the following fields:          - _Status_: The status of the SMS. Available values for status are: Queued, Completed, Scheduled, WaitApproval, Failed, Cancelled, CancelledAfterReview, Received, Sent.              - _To_: The recipient of the SMS.              - _from_: The sender of the SMS.              - _subaccount_id_: The sub-account identifier.              - _message_id_: The ID of your SMS.          2. **Value**: The text or keyword you\&#39;re searching for within the specified field. If left empty after the colon, the filter will look for all templates with any value in the **Field Name**.             For example, if you are searching for a SMS with the status of Scheduled, the final query would look like this:    &#x60;q&#x3D;status:Scheduled&#x60;  &lt;div class&#x3D;\&quot;info-box\&quot;&gt;   &lt;h4&gt;&lt;i class&#x3D;\&quot;fas fa-info-circle\&quot;&gt;&lt;/i&gt; Note:&lt;/h4&gt;   &lt;div&gt;    &lt;p&gt;Some characters have to be encoded. For example, if you are searching for SMS sent from the phone number +61437085284, your search query q would be:&lt;br/&gt;&lt;/p&gt;     &lt;ul&gt;       &lt;li&gt;q&#x3D;from:%2B61437085284&lt;/li&gt;     &lt;/ul&gt;     &lt;p&gt;You can use the &lt;a href&#x3D;\&quot;https://www.urlencoder.org/\&quot; target&#x3D;\&quot;_blank\&quot;&gt;URL encoder&lt;/a&gt; to encode the text. If a character is not an alphanumeric character (A-Z, a-z, 0-9), it is typically either reserved or unsafe and should be encoded.&lt;/p&gt;   &lt;/div&gt; &lt;/div&gt; | (optional) defaults to 'field_name'|
| **orderBy** | [**string**] | Specifies the field and order to sort the results by. The value is composed of the field name followed by a colon and the sort direction (_asc_ for ascending or _desc_ for descending).  The default sort order is by _date_ in ascending order. You can use the following fields:    - _date_   - _username_   - _from_    - _to_   - _status_   - _body_  For example, if you want to order by the most recently sent SMS, you should sort by date in descending order. The query would look like this:    &#x60;order_by&#x3D;date:desc&#x60; | (optional) defaults to 'date:asc'|
| **dateFrom** | [**number**] | Start date to filter results. It should be in &lt;a href&#x3D;\&quot;http://help.clicksend.com/what-is-a-unix-timestamp\&quot; target&#x3D;\&quot;_blank\&quot;&gt;Unix format&lt;/a&gt;. | (optional) defaults to undefined|
| **dateTo** | [**number**] | End date to filter results. It should be in &lt;a href&#x3D;\&quot;http://help.clicksend.com/what-is-a-unix-timestamp\&quot; target&#x3D;\&quot;_blank\&quot;&gt;Unix format&lt;/a&gt;. | (optional) defaults to undefined|


### Return type

**ViewSmsHistory**

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

# **viewSmsInboundAutomation**
> ViewSmsInboundAutomation viewSmsInboundAutomation()

_Get specific inbound sms automation_  Get specific inbound sms automation  ### Parameters  | Parameter | In | Type | Required | Description | | --- | --- | --- | --- | --- | | inbound_rule_id | path | integer(int32) | true | Inbound rule id |   Refer to [Status Codes](/#status-codes) for definitions of HTTP status code responses.   <div style=\"background-color: #FF6A4B; padding: 10px; border-radius: 8px;\">   <span style=\"color: white;\">This endpoint requires authentication,</span>    <a href=\"/docs/#authentication\" style=\"color: white; text-decoration: underline;\">more info...</a> </div>

### Example

```typescript
import {
    SmsApi,
    Configuration
} from 'clicksend';

const configuration = new Configuration();
const apiInstance = new SmsApi(configuration);

let inboundRuleId: string; // (default to undefined)
let contentType: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.viewSmsInboundAutomation(
    inboundRuleId,
    contentType
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **inboundRuleId** | [**string**] |  | defaults to undefined|
| **contentType** | [**string**] |  | (optional) defaults to undefined|


### Return type

**ViewSmsInboundAutomation**

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

# **viewSmsInboundAutomations**
> ViewSmsInboundAutomations viewSmsInboundAutomations()

_Get all inbound sms automations_  Get all inbound sms automations  ### Parameters  | Parameter | In | Type | Required | Description | | --- | --- | --- | --- | --- | | page | query | integer(int32) | false | Page number | | limit | query | integer(int32) | false | Number of records per page |   Refer to [Status Codes](/#status-codes) for definitions of HTTP status code responses.   <div style=\"background-color: #FF6A4B; padding: 10px; border-radius: 8px;\">   <span style=\"color: white;\">This endpoint requires authentication,</span>    <a href=\"/docs/#authentication\" style=\"color: white; text-decoration: underline;\">more info...</a> </div>

### Example

```typescript
import {
    SmsApi,
    Configuration
} from 'clicksend';

const configuration = new Configuration();
const apiInstance = new SmsApi(configuration);

let contentType: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.viewSmsInboundAutomations(
    contentType
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **contentType** | [**string**] |  | (optional) defaults to undefined|


### Return type

**ViewSmsInboundAutomations**

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

# **viewSmsReceipts**
> ViewSmsReceipts viewSmsReceipts()

Use this endpoint to retrieve <a href=\"https://help.clicksend.com/article/49eq1qdcui-how-do-i-receive-sms-delivery-receipts-delivery-status-updates\" target=\"_blank\">SMS delivery receipts</a> sent by your recipient.  To be able to view receipts, add a <a href=\"https://help.clicksend.com/en/articles/42317-delivery-notifications-reports\" target=\"_blank\">delivery report</a> rule with the Action set to **POLL** in the Dashboard, or use the [**Create SMS Delivery Receipt Rule**](/automations/sms/other/create-sms-delivery-receipt-rule) endpoint.  Control [pagination](/#pagination) with the _page_ and _limit_ query parameters to specify the page of results and the number of items returned.

### Example

```typescript
import {
    SmsApi,
    Configuration
} from 'clicksend';

const configuration = new Configuration();
const apiInstance = new SmsApi(configuration);

let contentType: string; // (optional) (default to undefined)
let page: number; //The page number to retrieve. Use this parameter to navigate through the [pagination](/#pagination) results. The default value is 1. (optional) (default to 1)
let limit: number; //The number of items to return per page. This parameter controls the size of each page of results. The default value is 15. (optional) (default to 15)

const { status, data } = await apiInstance.viewSmsReceipts(
    contentType,
    page,
    limit
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **contentType** | [**string**] |  | (optional) defaults to undefined|
| **page** | [**number**] | The page number to retrieve. Use this parameter to navigate through the [pagination](/#pagination) results. The default value is 1. | (optional) defaults to 1|
| **limit** | [**number**] | The number of items to return per page. This parameter controls the size of each page of results. The default value is 15. | (optional) defaults to 15|


### Return type

**ViewSmsReceipts**

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

# **viewSmsTemplates**
> ViewSmsTemplates viewSmsTemplates()

Use this endpoint to retrieve <a href=\"https://help.clicksend.com/article/9z9uloaz8y-sms-templates-for-different-industries\" target=\"_blank\">SMS templates</a>. You can filter the SMS templates result using the query parameters.

### Example

```typescript
import {
    SmsApi,
    Configuration
} from 'clicksend';

const configuration = new Configuration();
const apiInstance = new SmsApi(configuration);

let contentType: string; // (optional) (default to undefined)
let page: number; //The page number to retrieve. Use this parameter to navigate through the [pagination](/#pagination) results. The default value is 1. (optional) (default to 1)
let limit: number; //The number of items to return per page. This parameter controls the size of each page of results. The default value is 15. (optional) (default to 15)
let q: string; //Allows filtering of results based on your search criteria. The query should be in the format `field_name:value`.  1. **Field Name**: The field within the SMS history you want to filter by. You can use the following fields:    - _template_id_ : The ID of the template   - _template_name_ : The name of the template   - _body_ : The body content of the template.          2. **Value**: The text or keyword you\'re searching for within the specified field. If left empty after the colon, the filter will look for all templates with any value in the **Field Name**.      For example, if you are searching for the template with the name of _sample_name_, the final query would look like this:     `q=template_name:sample_name`  <div class=\"info-box\">   <h4><i class=\"fas fa-info-circle\"></i> Note:</h4>   <div>    <p>Some characters have to be encoded. For example, if you are searching for SMS sent from the phone number +61437085284, your search query q would be:<br/></p>     <ul>       <li>q=from:%2B61437085284</li>     </ul>     <p>You can use the <a href=\"https://www.urlencoder.org/\" target=\"_blank\">URL encoder</a> to encode the text. If a character is not an alphanumeric character (A-Z, a-z, 0-9), it is typically either reserved or unsafe and should be encoded.</p>   </div> </div> (optional) (default to 'field_name')
let orderBy: string; //Specifies the field and order to sort the results by.  The value is composed of the field name followed by a colon and the sort direction (_asc_ for ascending or _desc_ for descending).  The default sort order is by _template_id_ in ascending order. You can use the following fields:      - _template_id_ : The ID of the Template - _template_name_ : The name of the Template - _body_ : The body content of the Template  For example, if you want to order by the _template_id_ in descending order, the query would look like this:    `order_by=template_id:desc` (optional) (default to 'template_id:asc')

const { status, data } = await apiInstance.viewSmsTemplates(
    contentType,
    page,
    limit,
    q,
    orderBy
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **contentType** | [**string**] |  | (optional) defaults to undefined|
| **page** | [**number**] | The page number to retrieve. Use this parameter to navigate through the [pagination](/#pagination) results. The default value is 1. | (optional) defaults to 1|
| **limit** | [**number**] | The number of items to return per page. This parameter controls the size of each page of results. The default value is 15. | (optional) defaults to 15|
| **q** | [**string**] | Allows filtering of results based on your search criteria. The query should be in the format &#x60;field_name:value&#x60;.  1. **Field Name**: The field within the SMS history you want to filter by. You can use the following fields:    - _template_id_ : The ID of the template   - _template_name_ : The name of the template   - _body_ : The body content of the template.          2. **Value**: The text or keyword you\&#39;re searching for within the specified field. If left empty after the colon, the filter will look for all templates with any value in the **Field Name**.      For example, if you are searching for the template with the name of _sample_name_, the final query would look like this:     &#x60;q&#x3D;template_name:sample_name&#x60;  &lt;div class&#x3D;\&quot;info-box\&quot;&gt;   &lt;h4&gt;&lt;i class&#x3D;\&quot;fas fa-info-circle\&quot;&gt;&lt;/i&gt; Note:&lt;/h4&gt;   &lt;div&gt;    &lt;p&gt;Some characters have to be encoded. For example, if you are searching for SMS sent from the phone number +61437085284, your search query q would be:&lt;br/&gt;&lt;/p&gt;     &lt;ul&gt;       &lt;li&gt;q&#x3D;from:%2B61437085284&lt;/li&gt;     &lt;/ul&gt;     &lt;p&gt;You can use the &lt;a href&#x3D;\&quot;https://www.urlencoder.org/\&quot; target&#x3D;\&quot;_blank\&quot;&gt;URL encoder&lt;/a&gt; to encode the text. If a character is not an alphanumeric character (A-Z, a-z, 0-9), it is typically either reserved or unsafe and should be encoded.&lt;/p&gt;   &lt;/div&gt; &lt;/div&gt; | (optional) defaults to 'field_name'|
| **orderBy** | [**string**] | Specifies the field and order to sort the results by.  The value is composed of the field name followed by a colon and the sort direction (_asc_ for ascending or _desc_ for descending).  The default sort order is by _template_id_ in ascending order. You can use the following fields:      - _template_id_ : The ID of the Template - _template_name_ : The name of the Template - _body_ : The body content of the Template  For example, if you want to order by the _template_id_ in descending order, the query would look like this:    &#x60;order_by&#x3D;template_id:desc&#x60; | (optional) defaults to 'template_id:asc'|


### Return type

**ViewSmsTemplates**

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

# **viewSpecificSmsReceipt**
> ViewSpecificSmsReceipt viewSpecificSmsReceipt()

Use this endpoint to retrieve a specific <a href=\"https://help.clicksend.com/article/49eq1qdcui-how-do-i-receive-sms-delivery-receipts-delivery-status-updates\" target=\"_blank\">SMS delivery receipt</a>, including those that have been marked as read. When you send an SMS, a delivery receipt is generated and can be received.  This endpoint enables you to retrieve those receipts.

### Example

```typescript
import {
    SmsApi,
    Configuration
} from 'clicksend';

const configuration = new Configuration();
const apiInstance = new SmsApi(configuration);

let messageId: string; //The _message_id_ of the SMS delivery receipt to retrieve (default to undefined)
let contentType: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.viewSpecificSmsReceipt(
    messageId,
    contentType
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **messageId** | [**string**] | The _message_id_ of the SMS delivery receipt to retrieve | defaults to undefined|
| **contentType** | [**string**] |  | (optional) defaults to undefined|


### Return type

**ViewSpecificSmsReceipt**

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

