# EmailApi

All URIs are relative to *https://rest.clicksend.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**calculateEmailCampaignPrice**](#calculateemailcampaignprice) | **POST** /v3/email-campaigns/price | Calculate Email Campaign Price|
|[**calculateEmailPrice**](#calculateemailprice) | **POST** /v3/email/price | Calculate Email Price|
|[**cancelEmailCampaign**](#cancelemailcampaign) | **PUT** /v3/email-campaigns/{email_campaign_id}/cancel | Cancel Email Campaign|
|[**createAllowedEmailAddress**](#createallowedemailaddress) | **POST** /v3/email/addresses | Create Allowed Email Address|
|[**createEmailDeliveryReceiptRule**](#createemaildeliveryreceiptrule) | **POST** /v3/automations/email/receipts | Create Email Delivery Receipt Rule|
|[**createEmailTemplate**](#createemailtemplate) | **POST** /v3/email/templates | Create Email Template|
|[**deleteAllowedEmailAddress**](#deleteallowedemailaddress) | **DELETE** /v3/email/addresses/{email_address_id} | Delete Allowed Email Address|
|[**deleteEmailDeliveryReceiptRule**](#deleteemaildeliveryreceiptrule) | **DELETE** /v3/automations/email/receipts/{receipt_rule_id} | Delete Email Delivery Receipt Rule|
|[**deleteEmailTemplate**](#deleteemailtemplate) | **DELETE** /v3/email/templates/{template_id} | Delete Email Template|
|[**exportEmailCampaignHistory**](#exportemailcampaignhistory) | **GET** /v3/email-campaigns/{email_campaign_id}/history/export | Export Email Campaign History|
|[**exportEmailHistory**](#exportemailhistory) | **GET** /v3/email/history/export | Export Email History|
|[**sendEmail**](#sendemail) | **POST** /v3/email/send | Send Email|
|[**sendEmailCampaign**](#sendemailcampaign) | **POST** /v3/email-campaigns/send | Send Email Campaign|
|[**sendEmailVerificationToken**](#sendemailverificationtoken) | **PUT** /v3/email/address-verify/{email_address_id}/send | Send Email Verification Token|
|[**updateEmailCampaign**](#updateemailcampaign) | **PUT** /v3/email-campaigns/{email_campaign_id} | Update Email Campaign|
|[**updateEmailDeliveryReceiptRule**](#updateemaildeliveryreceiptrule) | **PUT** /v3/automations/email/receipts/{receipt_rule_id} | Update Email Delivery Receipt Rule|
|[**updateEmailTemplate**](#updateemailtemplate) | **PUT** /v3/email/templates/{template_id} | Update Email Template|
|[**verifyAllowedEmailAddress**](#verifyallowedemailaddress) | **PUT** /v3/email/address-verify/{email_address_id}/verify/{activation_token} | Verify Allowed Email Address|
|[**viewAllEmailCampaigns**](#viewallemailcampaigns) | **GET** /v3/email-campaigns | View All Email Campaigns|
|[**viewAllowedEmailAddress**](#viewallowedemailaddress) | **GET** /v3/email/addresses/{email_address_id} | View Allowed Email Address|
|[**viewAllowedEmailAddresses**](#viewallowedemailaddresses) | **GET** /v3/email/addresses | View Allowed Email Addresses|
|[**viewEmailCampaign**](#viewemailcampaign) | **GET** /v3/email-campaigns/{email_campaign_id} | View Email Campaign|
|[**viewEmailCampaignHistory**](#viewemailcampaignhistory) | **GET** /v3/email-campaigns/{email_campaign_id}/history | View Email Campaign History|
|[**viewEmailDeliveryReceiptRule**](#viewemaildeliveryreceiptrule) | **GET** /v3/automations/email/receipts/{receipt_rule_id} | View Email Delivery Receipt Rule|
|[**viewEmailDeliveryReceiptRules**](#viewemaildeliveryreceiptrules) | **GET** /v3/automations/email/receipts | View Email Delivery Receipt Rules|
|[**viewEmailHistory**](#viewemailhistory) | **GET** /v3/email/history | View Email History|
|[**viewEmailTemplate**](#viewemailtemplate) | **GET** /v3/email/templates/{template_id} | View Email Template|
|[**viewEmailTemplates**](#viewemailtemplates) | **GET** /v3/email/templates | View Email Templates|
|[**viewMasterEmailTemplate**](#viewmasteremailtemplate) | **GET** /v3/email/master-templates/{template_id} | View Master Email Template|
|[**viewMasterEmailTemplates**](#viewmasteremailtemplates) | **GET** /v3/email/master-templates | View Master Email Templates|
|[**viewTemplateCategories**](#viewtemplatecategories) | **GET** /v3/email/master-templates-categories | View Template Categories|
|[**viewTemplateCategory**](#viewtemplatecategory) | **GET** /v3/email/master-templates-categories/{category_id} | View Template Category|
|[**viewTemplatesInCategory**](#viewtemplatesincategory) | **GET** /v3/email/master-templates-categories/{category_id}/master-templates | View Templates in Category|

# **calculateEmailCampaignPrice**
> CalculateEmailCampaignPrice calculateEmailCampaignPrice()

_Calculate email campaign price_  Calculate email campaign price  ### Properties  | Name | Type | Required | Restrictions | Description | | --- | --- | --- | --- | --- | | name | string | true | none | Your campaign name. | | subject | string | true | none | Your campaign subject. | | body | string | true | none | Your campaign message. | | from_email_address_id | number | true | none | The allowed email address id. | | from_name | string | true | none | Your name or business name. | | template_id | number | false | none | Your template id. | | list_id | number | true | none | Your contact list id. | | schedule | integer(int32) | false | none | Your schedule timestamp. |   Refer to [Status Codes](/#status-codes) for definitions of HTTP status code responses.   <div style=\"background-color: #FF6A4B; padding: 10px; border-radius: 8px;\">   <span style=\"color: white;\">This endpoint requires authentication,</span>    <a href=\"/docs/#authentication\" style=\"color: white; text-decoration: underline;\">more info...</a> </div>

### Example

```typescript
import {
    EmailApi,
    Configuration,
    CalculateEmailCampaignPriceRequest
} from 'clicksend';

const configuration = new Configuration();
const apiInstance = new EmailApi(configuration);

let contentType: string; // (optional) (default to undefined)
let calculateEmailCampaignPriceRequest: CalculateEmailCampaignPriceRequest; // (optional)

const { status, data } = await apiInstance.calculateEmailCampaignPrice(
    contentType,
    calculateEmailCampaignPriceRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **calculateEmailCampaignPriceRequest** | **CalculateEmailCampaignPriceRequest**|  | |
| **contentType** | [**string**] |  | (optional) defaults to undefined|


### Return type

**CalculateEmailCampaignPrice**

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

# **calculateEmailPrice**
> CalculateEmailPrice calculateEmailPrice()

_Get transactional email price_  Get transactional email price  ### Properties  | Name | Type | Required | Restrictions | Description | | --- | --- | --- | --- | --- | | to | array | true | none | Array of To Recipient items. (array of names and emails) | | cc | array | false | none | Array of Cc Recipient items. (array of names and emails) | | bcc | array | false | none | Array of Bcc Recipient items. (array of names and emails) | | from | object | true | none | From Email object. (object containing name and email) | | body | string | true | none | Body of the email. | | attachments | array | false | none | Array of Attachment items. | | schedule | number | false | none | Schedule. | | name | string | false | none | Name of person email belongs to | | email | string | true | none | Email to be used. | | content | string | true | none | The base64-encoded contents of the file. | | type | string | true | none | The type of file being attached. | | filename | string | true | none | The name of the file being attached. | | disposition | string | true | none | Inline for content that can be displayed within the email, or attachment for any other files. | | content_id | string | true | none | An ID for the content. |   Refer to [Status Codes](/#status-codes) for definitions of HTTP status code responses.   <div style=\"background-color: #FF6A4B; padding: 10px; border-radius: 8px;\">   <span style=\"color: white;\">This endpoint requires authentication,</span>    <a href=\"/docs/#authentication\" style=\"color: white; text-decoration: underline;\">more info...</a> </div>

### Example

```typescript
import {
    EmailApi,
    Configuration,
    CalculateEmailPriceRequest
} from 'clicksend';

const configuration = new Configuration();
const apiInstance = new EmailApi(configuration);

let contentType: string; // (optional) (default to undefined)
let calculateEmailPriceRequest: CalculateEmailPriceRequest; // (optional)

const { status, data } = await apiInstance.calculateEmailPrice(
    contentType,
    calculateEmailPriceRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **calculateEmailPriceRequest** | **CalculateEmailPriceRequest**|  | |
| **contentType** | [**string**] |  | (optional) defaults to undefined|


### Return type

**CalculateEmailPrice**

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

# **cancelEmailCampaign**
> CancelEmailCampaign cancelEmailCampaign()

_Cancel email campaign_  Cancel email campaign  ### Parameters  | Parameter | In | Type | Required | Description | | --- | --- | --- | --- | --- | | email_campaign_id | path | integer(int32) | true | Allowed email campaign id | | date_from | query | integer(int32) | false | Start date (Unix Timestamp e.g. 1436849372) | | date_to | query | integer(int32) | false | End date (Unix Timestamp e.g. 1436879372) | | page | query | integer(int32) | false | [Page number](/#pagination) | | limit | query | integer(int32) | false | [Number of records per page](/#pagination) |   Refer to [Status Codes](/#status-codes) for definitions of HTTP status code responses.   <div style=\"background-color: #FF6A4B; padding: 10px; border-radius: 8px;\">   <span style=\"color: white;\">This endpoint requires authentication,</span>    <a href=\"/docs/#authentication\" style=\"color: white; text-decoration: underline;\">more info...</a> </div>

### Example

```typescript
import {
    EmailApi,
    Configuration,
    CancelEmailCampaignRequest
} from 'clicksend';

const configuration = new Configuration();
const apiInstance = new EmailApi(configuration);

let emailCampaignId: string; // (default to undefined)
let contentType: string; // (optional) (default to undefined)
let cancelEmailCampaignRequest: CancelEmailCampaignRequest; // (optional)

const { status, data } = await apiInstance.cancelEmailCampaign(
    emailCampaignId,
    contentType,
    cancelEmailCampaignRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **cancelEmailCampaignRequest** | **CancelEmailCampaignRequest**|  | |
| **emailCampaignId** | [**string**] |  | defaults to undefined|
| **contentType** | [**string**] |  | (optional) defaults to undefined|


### Return type

**CancelEmailCampaign**

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

# **createAllowedEmailAddress**
> CreateAllowedEmailAddress createAllowedEmailAddress()

_Create allowed Email Address_  Create allowed Email Address  ### Parameters  | Parameter | In | Type | Required | Description | | --- | --- | --- | --- | --- | | body | body | string | true | Email to be allowed. |  Refer to [Status Codes](/#status-codes) for definitions of HTTP status code responses.  <div style=\"background-color: #FF6A4B; padding: 10px; border-radius: 8px;\">   <span style=\"color: white;\">This endpoint requires authentication,</span>    <a href=\"/docs/#authentication\" style=\"color: white; text-decoration: underline;\">more info...</a> </div>

### Example

```typescript
import {
    EmailApi,
    Configuration,
    CreateAllowedEmailAddressRequest
} from 'clicksend';

const configuration = new Configuration();
const apiInstance = new EmailApi(configuration);

let contentType: string; // (optional) (default to undefined)
let createAllowedEmailAddressRequest: CreateAllowedEmailAddressRequest; // (optional)

const { status, data } = await apiInstance.createAllowedEmailAddress(
    contentType,
    createAllowedEmailAddressRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createAllowedEmailAddressRequest** | **CreateAllowedEmailAddressRequest**|  | |
| **contentType** | [**string**] |  | (optional) defaults to undefined|


### Return type

**CreateAllowedEmailAddress**

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

# **createEmailDeliveryReceiptRule**
> CreateEmailDeliveryReceiptRule createEmailDeliveryReceiptRule()

_Create email delivery receipt automations_  Create email delivery receipt automations  ### Properties  | Name | Type | Required | Restrictions | Description | | --- | --- | --- | --- | --- | | rule_name | string | true | none | Rule Name. | | match_type | number | true | none | Match Type. 0=All reports. | | action | string | true | none | Action to be taken (AUTO_REPLY, EMAIL_USER, EMAIL_FIXED, URL, SMS, POLL, GROUP_SMS, MOVE_CONTACT, CREATE_CONTACT, CREATE_CONTACT_PLUS_EMAIL, CREATE_CONTACT_PLUS_NAME_EMAIL CREATE_CONTACT_PLUS_NAME, SMPP, NONE). | | action_address | string | true | none | Action address. | | enabled | number | true | none | Enabled: Disabled=0 or Enabled=1. |   Refer to [Status Codes](/#status-codes) for definitions of HTTP status code responses.   <div style=\"background-color: #FF6A4B; padding: 10px; border-radius: 8px;\">   <span style=\"color: white;\">This endpoint requires authentication,</span>    <a href=\"/docs/#authentication\" style=\"color: white; text-decoration: underline;\">more info...</a> </div>

### Example

```typescript
import {
    EmailApi,
    Configuration,
    CreateSmsDeliveryReceiptRuleRequest
} from 'clicksend';

const configuration = new Configuration();
const apiInstance = new EmailApi(configuration);

let contentType: string; // (optional) (default to undefined)
let createSmsDeliveryReceiptRuleRequest: CreateSmsDeliveryReceiptRuleRequest; // (optional)

const { status, data } = await apiInstance.createEmailDeliveryReceiptRule(
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

**CreateEmailDeliveryReceiptRule**

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

# **createEmailTemplate**
> CreateEmailTemplate createEmailTemplate()

_Create email template_  Create email template  ### Properties  | Name | Type | Required | Restrictions | Description | | --- | --- | --- | --- | --- | | template_name | string | true | none | The intended name for the new template. | | template_id_master | number | true | none | The ID of the master template you want to base on. |   Refer to [Status Codes](/#status-codes) for definitions of HTTP status code responses.   <div style=\"background-color: #FF6A4B; padding: 10px; border-radius: 8px;\">   <span style=\"color: white;\">This endpoint requires authentication,</span>    <a href=\"/docs/#authentication\" style=\"color: white; text-decoration: underline;\">more info...</a> </div>

### Example

```typescript
import {
    EmailApi,
    Configuration,
    CreateEmailTemplateRequest
} from 'clicksend';

const configuration = new Configuration();
const apiInstance = new EmailApi(configuration);

let contentType: string; // (optional) (default to undefined)
let createEmailTemplateRequest: CreateEmailTemplateRequest; // (optional)

const { status, data } = await apiInstance.createEmailTemplate(
    contentType,
    createEmailTemplateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createEmailTemplateRequest** | **CreateEmailTemplateRequest**|  | |
| **contentType** | [**string**] |  | (optional) defaults to undefined|


### Return type

**CreateEmailTemplate**

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

# **deleteAllowedEmailAddress**
> DeleteAllowedEmailAddress deleteAllowedEmailAddress()

_Delete specific email address_  Delete specific email address  ### Parameters  | Parameter | In | Type | Required | Description | | --- | --- | --- | --- | --- | | email_address_id | path | integer(int32) | true | Allowed email address id |   Refer to [Status Codes](/#status-codes) for definitions of HTTP status code responses.   <div style=\"background-color: #FF6A4B; padding: 10px; border-radius: 8px;\">   <span style=\"color: white;\">This endpoint requires authentication,</span>    <a href=\"/docs/#authentication\" style=\"color: white; text-decoration: underline;\">more info...</a> </div>

### Example

```typescript
import {
    EmailApi,
    Configuration
} from 'clicksend';

const configuration = new Configuration();
const apiInstance = new EmailApi(configuration);

let emailAddressId: string; // (default to undefined)
let contentType: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.deleteAllowedEmailAddress(
    emailAddressId,
    contentType
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **emailAddressId** | [**string**] |  | defaults to undefined|
| **contentType** | [**string**] |  | (optional) defaults to undefined|


### Return type

**DeleteAllowedEmailAddress**

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

# **deleteEmailDeliveryReceiptRule**
> DeleteEmailDeliveryReceiptRule deleteEmailDeliveryReceiptRule()

_Delete email delivery receipt automation_  Delete email delivery receipt automation  ### Parameters  | Parameter | In | Type | Required | Description | | --- | --- | --- | --- | --- | | receipt_rule_id | path | integer(int32) | true | Receipt rule id |  Refer to [Status Codes](/#status-codes) for definitions of HTTP status code responses.  This endpoint requires authentication, [more info...](/#authentication)   Refer to [Status Codes](/#status-codes) for definitions of HTTP status code responses.   <div style=\"background-color: #FF6A4B; padding: 10px; border-radius: 8px;\">   <span style=\"color: white;\">This endpoint requires authentication,</span>    <a href=\"/docs/#authentication\" style=\"color: white; text-decoration: underline;\">more info...</a> </div>

### Example

```typescript
import {
    EmailApi,
    Configuration
} from 'clicksend';

const configuration = new Configuration();
const apiInstance = new EmailApi(configuration);

let receiptRuleId: string; // (default to undefined)
let contentType: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.deleteEmailDeliveryReceiptRule(
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

**DeleteEmailDeliveryReceiptRule**

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

# **deleteEmailTemplate**
> DeleteEmailTemplate deleteEmailTemplate()

_Delete user email template_  Delete user email template  ### Parameters  | Parameter | In | Type | Required | Description | | --- | --- | --- | --- | --- | | template_id | path | integer(int32) | true | Email template id |   Refer to [Status Codes](/#status-codes) for definitions of HTTP status code responses.   <div style=\"background-color: #FF6A4B; padding: 10px; border-radius: 8px;\">   <span style=\"color: white;\">This endpoint requires authentication,</span>    <a href=\"/docs/#authentication\" style=\"color: white; text-decoration: underline;\">more info...</a> </div>

### Example

```typescript
import {
    EmailApi,
    Configuration
} from 'clicksend';

const configuration = new Configuration();
const apiInstance = new EmailApi(configuration);

let templateId: string; // (default to undefined)
let contentType: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.deleteEmailTemplate(
    templateId,
    contentType
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **templateId** | [**string**] |  | defaults to undefined|
| **contentType** | [**string**] |  | (optional) defaults to undefined|


### Return type

**DeleteEmailTemplate**

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

# **exportEmailCampaignHistory**
> exportEmailCampaignHistory()

_Export specific email campaign history_  Export specific email campaign history  ### Parameters  | Parameter | In | Type | Required | Description | | --- | --- | --- | --- | --- | | email_campaign_id | path | integer(int32) | true | Allowed email campaign id | | date_from | query | integer(int32) | false | Start date (Unix Timestamp e.g. 1436849372) | | date_to | query | integer(int32) | false | End date (Unix Timestamp e.g. 1436879372) |   Refer to [Status Codes](/#status-codes) for definitions of HTTP status code responses.   <div style=\"background-color: #FF6A4B; padding: 10px; border-radius: 8px;\">   <span style=\"color: white;\">This endpoint requires authentication,</span>    <a href=\"/docs/#authentication\" style=\"color: white; text-decoration: underline;\">more info...</a> </div>

### Example

```typescript
import {
    EmailApi,
    Configuration
} from 'clicksend';

const configuration = new Configuration();
const apiInstance = new EmailApi(configuration);

let emailCampaignId: string; // (default to undefined)
let contentType: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.exportEmailCampaignHistory(
    emailCampaignId,
    contentType
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **emailCampaignId** | [**string**] |  | defaults to undefined|
| **contentType** | [**string**] |  | (optional) defaults to undefined|


### Return type

void (empty response body)

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

# **exportEmailHistory**
> ExportEmailHistory exportEmailHistory()

_Export all Transactional Email history_  Export all Transactional Email history  ### Parameters  | Parameter | In | Type | Required | Description | | --- | --- | --- | --- | --- | | filename | query | string | true | Filename to download history as | | date_from | query | integer(int32) | false | Start date (Unix Timestamp e.g. 1436849372) | | date_to | query | integer(int32) | false | End date (Unix Timestamp e.g. 1436879372) |   Refer to [Status Codes](/#status-codes) for definitions of HTTP status code responses.   <div style=\"background-color: #FF6A4B; padding: 10px; border-radius: 8px;\">   <span style=\"color: white;\">This endpoint requires authentication,</span>    <a href=\"/docs/#authentication\" style=\"color: white; text-decoration: underline;\">more info...</a> </div>

### Example

```typescript
import {
    EmailApi,
    Configuration
} from 'clicksend';

const configuration = new Configuration();
const apiInstance = new EmailApi(configuration);

let contentType: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.exportEmailHistory(
    contentType
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **contentType** | [**string**] |  | (optional) defaults to undefined|


### Return type

**ExportEmailHistory**

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

# **sendEmail**
> SendEmail sendEmail()

_Send transactional email_  Send transactional email  ### Properties  | Name | Type | Required | Restrictions | Description | | --- | --- | --- | --- | --- | | to | array | true | none | Array of To Recipient items. (array of names and emails) | | cc | array | false | none | Array of Cc Recipient items. (array of names and emails) | | bcc | array | false | none | Array of Bcc Recipient items. (array of names and emails) | | from | object | true | none | From Email object. (object containing name and email) | | body | string | true | none | Body of the email. | | attachments | array | false | none | Array of Attachment items. | | schedule | number | false | none | Schedule. | | name | string | false | none | Name of person email belongs to | | email | string | true | none | Email to be used. | | content | string | true | none | The base64-encoded contents of the file. | | type | string | true | none | The type of file being attached. | | filename | string | true | none | The name of the file being attached. | | disposition | string | true | none | Inline for content that can be displayed within the email, or attachment for any other files. | | content_id | string | true | none | An ID for the content. |   Refer to [Status Codes](/#status-codes) for definitions of HTTP status code responses.   <div style=\"background-color: #FF6A4B; padding: 10px; border-radius: 8px;\">   <span style=\"color: white;\">This endpoint requires authentication,</span>    <a href=\"/docs/#authentication\" style=\"color: white; text-decoration: underline;\">more info...</a> </div>

### Example

```typescript
import {
    EmailApi,
    Configuration,
    SendEmailRequest
} from 'clicksend';

const configuration = new Configuration();
const apiInstance = new EmailApi(configuration);

let contentType: string; // (optional) (default to undefined)
let sendEmailRequest: SendEmailRequest; // (optional)

const { status, data } = await apiInstance.sendEmail(
    contentType,
    sendEmailRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **sendEmailRequest** | **SendEmailRequest**|  | |
| **contentType** | [**string**] |  | (optional) defaults to undefined|


### Return type

**SendEmail**

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

# **sendEmailCampaign**
> SendEmailCampaign sendEmailCampaign()

_Send email campaign_  Send email campaign  ### Properties  | Name | Type | Required | Restrictions | Description | | --- | --- | --- | --- | --- | | name | string | true | none | Your campaign name. | | subject | string | true | none | Your campaign subject. | | body | string | true | none | Your campaign message. | | from_email_address_id | number | true | none | The allowed email address id. | | from_name | string | true | none | Your name or business name. | | template_id | number | false | none | Your template id. | | list_id | number | true | none | Your contact list id. | | schedule | integer(int32) | false | none | Your schedule timestamp. |   Refer to [Status Codes](/#status-codes) for definitions of HTTP status code responses.   <div style=\"background-color: #FF6A4B; padding: 10px; border-radius: 8px;\">   <span style=\"color: white;\">This endpoint requires authentication,</span>    <a href=\"/docs/#authentication\" style=\"color: white; text-decoration: underline;\">more info...</a> </div>

### Example

```typescript
import {
    EmailApi,
    Configuration,
    SendEmailCampaignRequest
} from 'clicksend';

const configuration = new Configuration();
const apiInstance = new EmailApi(configuration);

let contentType: string; // (optional) (default to undefined)
let sendEmailCampaignRequest: SendEmailCampaignRequest; // (optional)

const { status, data } = await apiInstance.sendEmailCampaign(
    contentType,
    sendEmailCampaignRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **sendEmailCampaignRequest** | **SendEmailCampaignRequest**|  | |
| **contentType** | [**string**] |  | (optional) defaults to undefined|


### Return type

**SendEmailCampaign**

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

# **sendEmailVerificationToken**
> SendEmailVerificationToken sendEmailVerificationToken()

_Send verification token_  Send verification token  ### Parameters  | Parameter | In | Type | Required | Description | | --- | --- | --- | --- | --- | | email_address_id | path | integer(int32) | true | Allowed email address id |   Refer to [Status Codes](/#status-codes) for definitions of HTTP status code responses.   <div style=\"background-color: #FF6A4B; padding: 10px; border-radius: 8px;\">   <span style=\"color: white;\">This endpoint requires authentication,</span>    <a href=\"/docs/#authentication\" style=\"color: white; text-decoration: underline;\">more info...</a> </div>

### Example

```typescript
import {
    EmailApi,
    Configuration,
    SendEmailVerificationTokenRequest
} from 'clicksend';

const configuration = new Configuration();
const apiInstance = new EmailApi(configuration);

let emailAddressId: string; // (default to undefined)
let contentType: string; // (optional) (default to undefined)
let sendEmailVerificationTokenRequest: SendEmailVerificationTokenRequest; // (optional)

const { status, data } = await apiInstance.sendEmailVerificationToken(
    emailAddressId,
    contentType,
    sendEmailVerificationTokenRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **sendEmailVerificationTokenRequest** | **SendEmailVerificationTokenRequest**|  | |
| **emailAddressId** | [**string**] |  | defaults to undefined|
| **contentType** | [**string**] |  | (optional) defaults to undefined|


### Return type

**SendEmailVerificationToken**

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

# **updateEmailCampaign**
> UpdateEmailCampaign updateEmailCampaign()

_Edit email campaign_  Edit email campaign  ### Parameters  | Parameter | In | Type | Required | Description | | --- | --- | --- | --- | --- | | email_campaign_id | path | integer(int32) | true | Allowed email campaign id |   Refer to [Status Codes](/#status-codes) for definitions of HTTP status code responses.   <div style=\"background-color: #FF6A4B; padding: 10px; border-radius: 8px;\">   <span style=\"color: white;\">This endpoint requires authentication,</span>    <a href=\"/docs/#authentication\" style=\"color: white; text-decoration: underline;\">more info...</a> </div>

### Example

```typescript
import {
    EmailApi,
    Configuration,
    UpdateEmailCampaignRequest
} from 'clicksend';

const configuration = new Configuration();
const apiInstance = new EmailApi(configuration);

let emailCampaignId: string; // (default to undefined)
let contentType: string; // (optional) (default to undefined)
let updateEmailCampaignRequest: UpdateEmailCampaignRequest; // (optional)

const { status, data } = await apiInstance.updateEmailCampaign(
    emailCampaignId,
    contentType,
    updateEmailCampaignRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateEmailCampaignRequest** | **UpdateEmailCampaignRequest**|  | |
| **emailCampaignId** | [**string**] |  | defaults to undefined|
| **contentType** | [**string**] |  | (optional) defaults to undefined|


### Return type

**UpdateEmailCampaign**

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

# **updateEmailDeliveryReceiptRule**
> UpdateEmailDeliveryReceiptRule updateEmailDeliveryReceiptRule()

_Update email delivery receipt automation_  Update email delivery receipt automation  ### Parameters  | Parameter | In | Type | Required | Description | | --- | --- | --- | --- | --- | | receipt_rule_id | path | integer(int32) | true | Receipt rule id |  ### Properties  | Name | Type | Required | Restrictions | Description | | --- | --- | --- | --- | --- | | rule_name | string | true | none | Rule Name. | | match_type | number | true | none | Match Type. 0=All reports. | | action | string | true | none | Action to be taken (AUTO_REPLY, EMAIL_USER, EMAIL_FIXED, URL, SMS, POLL, GROUP_SMS, MOVE_CONTACT, CREATE_CONTACT, CREATE_CONTACT_PLUS_EMAIL, CREATE_CONTACT_PLUS_NAME_EMAIL CREATE_CONTACT_PLUS_NAME, SMPP, NONE). | | action_address | string | true | none | Action address. | | enabled | number | true | none | Enabled: Disabled=0 or Enabled=1. |  Refer to [Status Codes](/#status-codes) for definitions of HTTP status code responses.  <div style=\"background-color: #FF6A4B; padding: 10px; border-radius: 8px;\">   <span style=\"color: white;\">This endpoint requires authentication,</span>    <a href=\"/docs/#authentication\" style=\"color: white; text-decoration: underline;\">more info...</a> </div>

### Example

```typescript
import {
    EmailApi,
    Configuration,
    CreateSmsDeliveryReceiptRuleRequest
} from 'clicksend';

const configuration = new Configuration();
const apiInstance = new EmailApi(configuration);

let receiptRuleId: string; // (default to undefined)
let contentType: string; // (optional) (default to undefined)
let createSmsDeliveryReceiptRuleRequest: CreateSmsDeliveryReceiptRuleRequest; // (optional)

const { status, data } = await apiInstance.updateEmailDeliveryReceiptRule(
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

**UpdateEmailDeliveryReceiptRule**

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

# **updateEmailTemplate**
> UpdateEmailTemplate updateEmailTemplate()

_Update email template_  Update email template  ### Parameters  | Parameter | In | Type | Required | Description | | --- | --- | --- | --- | --- | | template_id | path | integer(int32) | true | Email template id |  ### Properties  | Name | Type | Required | Restrictions | Description | | --- | --- | --- | --- | --- | | template_name | string | false | none | The intended name for the template. | | body | string | true | none | Your template body. |   Refer to [Status Codes](/#status-codes) for definitions of HTTP status code responses.   <div style=\"background-color: #FF6A4B; padding: 10px; border-radius: 8px;\">   <span style=\"color: white;\">This endpoint requires authentication,</span>    <a href=\"/docs/#authentication\" style=\"color: white; text-decoration: underline;\">more info...</a> </div>

### Example

```typescript
import {
    EmailApi,
    Configuration,
    UpdateEmailTemplateRequest
} from 'clicksend';

const configuration = new Configuration();
const apiInstance = new EmailApi(configuration);

let templateId: string; // (default to undefined)
let contentType: string; // (optional) (default to undefined)
let updateEmailTemplateRequest: UpdateEmailTemplateRequest; // (optional)

const { status, data } = await apiInstance.updateEmailTemplate(
    templateId,
    contentType,
    updateEmailTemplateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateEmailTemplateRequest** | **UpdateEmailTemplateRequest**|  | |
| **templateId** | [**string**] |  | defaults to undefined|
| **contentType** | [**string**] |  | (optional) defaults to undefined|


### Return type

**UpdateEmailTemplate**

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

# **verifyAllowedEmailAddress**
> VerifyAllowedEmailAddress verifyAllowedEmailAddress()

_Verify email address using verification token_  Verify email address using verification token  ### Parameters  | Parameter | In | Type | Required | Description | | --- | --- | --- | --- | --- | | email_address_id | path | integer(int32) | true | Allowed email address id | | activation_token | path | string | true | Your activation token. |  Refer to [Status Codes](/#status-codes) for definitions of HTTP status code responses.  <div style=\"background-color: #FF6A4B; padding: 10px; border-radius: 8px;\">   <span style=\"color: white;\">This endpoint requires authentication,</span>    <a href=\"/docs/#authentication\" style=\"color: white; text-decoration: underline;\">more info...</a> </div>

### Example

```typescript
import {
    EmailApi,
    Configuration,
    VerifyAllowedEmailAddressRequest
} from 'clicksend';

const configuration = new Configuration();
const apiInstance = new EmailApi(configuration);

let emailAddressId: string; // (default to undefined)
let activationToken: string; // (default to undefined)
let contentType: string; // (optional) (default to undefined)
let verifyAllowedEmailAddressRequest: VerifyAllowedEmailAddressRequest; // (optional)

const { status, data } = await apiInstance.verifyAllowedEmailAddress(
    emailAddressId,
    activationToken,
    contentType,
    verifyAllowedEmailAddressRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **verifyAllowedEmailAddressRequest** | **VerifyAllowedEmailAddressRequest**|  | |
| **emailAddressId** | [**string**] |  | defaults to undefined|
| **activationToken** | [**string**] |  | defaults to undefined|
| **contentType** | [**string**] |  | (optional) defaults to undefined|


### Return type

**VerifyAllowedEmailAddress**

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

# **viewAllEmailCampaigns**
> ViewAllEmailCampaigns viewAllEmailCampaigns()

_Get all email campaigns_  Get all email campaigns  ### Parameters  | Parameter | In | Type | Required | Description | | --- | --- | --- | --- | --- | | page | query | integer(int32) | false | Page number | | limit | query | integer(int32) | false | Number of records per page |   Refer to [Status Codes](/#status-codes) for definitions of HTTP status code responses.   <div style=\"background-color: #FF6A4B; padding: 10px; border-radius: 8px;\">   <span style=\"color: white;\">This endpoint requires authentication,</span>    <a href=\"/docs/#authentication\" style=\"color: white; text-decoration: underline;\">more info...</a> </div>

### Example

```typescript
import {
    EmailApi,
    Configuration
} from 'clicksend';

const configuration = new Configuration();
const apiInstance = new EmailApi(configuration);

let contentType: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.viewAllEmailCampaigns(
    contentType
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **contentType** | [**string**] |  | (optional) defaults to undefined|


### Return type

**ViewAllEmailCampaigns**

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

# **viewAllowedEmailAddress**
> ViewAllowedEmailAddress viewAllowedEmailAddress()

_Get specific email address_  Get specific email address  ### Parameters  | Parameter | In | Type | Required | Description | | --- | --- | --- | --- | --- | | email_address_id | path | integer(int32) | true | Allowed email address id |  Refer to [Status Codes](/#status-codes) for definitions of HTTP status code responses.  <div style=\"background-color: #FF6A4B; padding: 10px; border-radius: 8px;\">   <span style=\"color: white;\">This endpoint requires authentication,</span>    <a href=\"/docs/#authentication\" style=\"color: white; text-decoration: underline;\">more info...</a> </div>

### Example

```typescript
import {
    EmailApi,
    Configuration
} from 'clicksend';

const configuration = new Configuration();
const apiInstance = new EmailApi(configuration);

let emailAddressId: string; // (default to undefined)
let contentType: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.viewAllowedEmailAddress(
    emailAddressId,
    contentType
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **emailAddressId** | [**string**] |  | defaults to undefined|
| **contentType** | [**string**] |  | (optional) defaults to undefined|


### Return type

**ViewAllowedEmailAddress**

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

# **viewAllowedEmailAddresses**
> ViewAllowedEmailAddresses viewAllowedEmailAddresses()

_Get all email addresses_  Get all email addresses  ### Parameters  | Parameter | In | Type | Required | Description | | --- | --- | --- | --- | --- | | page | query | integer(int32) | false | Page number | | limit | query | integer(int32) | false | Number of records per page |   Refer to [Status Codes](/#status-codes) for definitions of HTTP status code responses.   <div style=\"background-color: #FF6A4B; padding: 10px; border-radius: 8px;\">   <span style=\"color: white;\">This endpoint requires authentication,</span>    <a href=\"/docs/#authentication\" style=\"color: white; text-decoration: underline;\">more info...</a> </div>

### Example

```typescript
import {
    EmailApi,
    Configuration
} from 'clicksend';

const configuration = new Configuration();
const apiInstance = new EmailApi(configuration);

let contentType: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.viewAllowedEmailAddresses(
    contentType
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **contentType** | [**string**] |  | (optional) defaults to undefined|


### Return type

**ViewAllowedEmailAddresses**

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

# **viewEmailCampaign**
> ViewEmailCampaign viewEmailCampaign()

_Get specific email campaign_  Get specific email campaign  Refer to [Status Codes](/#status-codes) for definitions of HTTP status code responses.  <div style=\"background-color: #FF6A4B; padding: 10px; border-radius: 8px;\">   <span style=\"color: white;\">This endpoint requires authentication,</span>    <a href=\"/docs/#authentication\" style=\"color: white; text-decoration: underline;\">more info...</a> </div>

### Example

```typescript
import {
    EmailApi,
    Configuration
} from 'clicksend';

const configuration = new Configuration();
const apiInstance = new EmailApi(configuration);

let emailCampaignId: string; // (default to undefined)
let contentType: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.viewEmailCampaign(
    emailCampaignId,
    contentType
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **emailCampaignId** | [**string**] |  | defaults to undefined|
| **contentType** | [**string**] |  | (optional) defaults to undefined|


### Return type

**ViewEmailCampaign**

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

# **viewEmailCampaignHistory**
> ViewEmailCampaignHistory viewEmailCampaignHistory()

_Get specific email campaign history_  Get specific email campaign history   Refer to [Status Codes](/#status-codes) for definitions of HTTP status code responses.   <div style=\"background-color: #FF6A4B; padding: 10px; border-radius: 8px;\">   <span style=\"color: white;\">This endpoint requires authentication,</span>    <a href=\"/docs/#authentication\" style=\"color: white; text-decoration: underline;\">more info...</a> </div>

### Example

```typescript
import {
    EmailApi,
    Configuration
} from 'clicksend';

const configuration = new Configuration();
const apiInstance = new EmailApi(configuration);

let emailCampaignId: string; // (default to undefined)
let contentType: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.viewEmailCampaignHistory(
    emailCampaignId,
    contentType
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **emailCampaignId** | [**string**] |  | defaults to undefined|
| **contentType** | [**string**] |  | (optional) defaults to undefined|


### Return type

**ViewEmailCampaignHistory**

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

# **viewEmailDeliveryReceiptRule**
> ViewEmailDeliveryReceiptRule viewEmailDeliveryReceiptRule()

_Get specific email delivery receipt automation_  Get specific email delivery receipt automation  ### Parameters  | Parameter | In | Type | Required | Description | | --- | --- | --- | --- | --- | | receipt_rule_id | path | integer(int32) | true | Receipt rule id |  Refer to [Status Codes](/#status-codes) for definitions of HTTP status code responses.  <div style=\"background-color: #FF6A4B; padding: 10px; border-radius: 8px;\">   <span style=\"color: white;\">This endpoint requires authentication,</span>    <a href=\"/docs/#authentication\" style=\"color: white; text-decoration: underline;\">more info...</a> </div>

### Example

```typescript
import {
    EmailApi,
    Configuration
} from 'clicksend';

const configuration = new Configuration();
const apiInstance = new EmailApi(configuration);

let receiptRuleId: string; // (default to undefined)
let contentType: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.viewEmailDeliveryReceiptRule(
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

**ViewEmailDeliveryReceiptRule**

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

# **viewEmailDeliveryReceiptRules**
> ViewEmailDeliveryReceiptRules viewEmailDeliveryReceiptRules()

_Get all email delivery receipt automations_  Get all email delivery receipt automations  ### Parameters  | Parameter | In | Type | Required | Description | | --- | --- | --- | --- | --- | | page | query | integer(int32) | false | Page number | | limit | query | integer(int32) | false | Number of records per page |   Refer to [Status Codes](/#status-codes) for definitions of HTTP status code responses.   <div style=\"background-color: #FF6A4B; padding: 10px; border-radius: 8px;\">   <span style=\"color: white;\">This endpoint requires authentication,</span>    <a href=\"/docs/#authentication\" style=\"color: white; text-decoration: underline;\">more info...</a> </div>

### Example

```typescript
import {
    EmailApi,
    Configuration
} from 'clicksend';

const configuration = new Configuration();
const apiInstance = new EmailApi(configuration);

let contentType: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.viewEmailDeliveryReceiptRules(
    contentType
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **contentType** | [**string**] |  | (optional) defaults to undefined|


### Return type

**ViewEmailDeliveryReceiptRules**

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

# **viewEmailHistory**
> ViewEmailHistory viewEmailHistory()

_Get all transactional email history_  Get all transactional email history  ### Parameters  | Parameter | In | Type | Required | Description | | --- | --- | --- | --- | --- | | date_from | query | integer(int32) | false | Start date (Unix Timestamp e.g. 1436849372) | | date_to | query | integer(int32) | false | End date (Unix Timestamp e.g. 1436879372) | | page | query | integer(int32) | false | [Page number](/#pagination) | | limit | query | integer(int32) | false | [Number of records per page](/#pagination) |   Refer to [Status Codes](/#status-codes) for definitions of HTTP status code responses.   <div style=\"background-color: #FF6A4B; padding: 10px; border-radius: 8px;\">   <span style=\"color: white;\">This endpoint requires authentication,</span>    <a href=\"/docs/#authentication\" style=\"color: white; text-decoration: underline;\">more info...</a> </div>

### Example

```typescript
import {
    EmailApi,
    Configuration
} from 'clicksend';

const configuration = new Configuration();
const apiInstance = new EmailApi(configuration);

let contentType: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.viewEmailHistory(
    contentType
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **contentType** | [**string**] |  | (optional) defaults to undefined|


### Return type

**ViewEmailHistory**

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

# **viewEmailTemplate**
> ViewEmailTemplate viewEmailTemplate()

_Get specific user email template_  Get specific user email templates  ### Parameters  | Parameter | In | Type | Required | Description | | --- | --- | --- | --- | --- | | template_id | path | integer(int32) | true | Email template id |   Refer to [Status Codes](/#status-codes) for definitions of HTTP status code responses.   <div style=\"background-color: #FF6A4B; padding: 10px; border-radius: 8px;\">   <span style=\"color: white;\">This endpoint requires authentication,</span>    <a href=\"/docs/#authentication\" style=\"color: white; text-decoration: underline;\">more info...</a> </div>

### Example

```typescript
import {
    EmailApi,
    Configuration
} from 'clicksend';

const configuration = new Configuration();
const apiInstance = new EmailApi(configuration);

let templateId: string; // (default to undefined)
let contentType: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.viewEmailTemplate(
    templateId,
    contentType
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **templateId** | [**string**] |  | defaults to undefined|
| **contentType** | [**string**] |  | (optional) defaults to undefined|


### Return type

**ViewEmailTemplate**

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

# **viewEmailTemplates**
> ViewEmailTemplates viewEmailTemplates()

_Get all user email templates_  Get all user email templates  ### Parameters  | Parameter | In | Type | Required | Description | | --- | --- | --- | --- | --- | | page | query | integer(int32) | false | Page number | | limit | query | integer(int32) | false | Number of records per page |   Refer to [Status Codes](/#status-codes) for definitions of HTTP status code responses.   <div style=\"background-color: #FF6A4B; padding: 10px; border-radius: 8px;\">   <span style=\"color: white;\">This endpoint requires authentication,</span>    <a href=\"/docs/#authentication\" style=\"color: white; text-decoration: underline;\">more info...</a> </div>

### Example

```typescript
import {
    EmailApi,
    Configuration
} from 'clicksend';

const configuration = new Configuration();
const apiInstance = new EmailApi(configuration);

let contentType: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.viewEmailTemplates(
    contentType
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **contentType** | [**string**] |  | (optional) defaults to undefined|


### Return type

**ViewEmailTemplates**

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

# **viewMasterEmailTemplate**
> ViewMasterEmailTemplate viewMasterEmailTemplate()

_Get specific master email template_  Get specific master email template  ### Parameters  | Parameter | In | Type | Required | Description | | --- | --- | --- | --- | --- | | template_id | path | integer(int32) | true | Email template id |   Refer to [Status Codes](/#status-codes) for definitions of HTTP status code responses.   <div style=\"background-color: #FF6A4B; padding: 10px; border-radius: 8px;\">   <span style=\"color: white;\">This endpoint requires authentication,</span>    <a href=\"/docs/#authentication\" style=\"color: white; text-decoration: underline;\">more info...</a> </div>

### Example

```typescript
import {
    EmailApi,
    Configuration
} from 'clicksend';

const configuration = new Configuration();
const apiInstance = new EmailApi(configuration);

let templateId: string; // (default to undefined)
let contentType: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.viewMasterEmailTemplate(
    templateId,
    contentType
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **templateId** | [**string**] |  | defaults to undefined|
| **contentType** | [**string**] |  | (optional) defaults to undefined|


### Return type

**ViewMasterEmailTemplate**

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

# **viewMasterEmailTemplates**
> ViewMasterEmailTemplates viewMasterEmailTemplates()

_Get all master email templates._  Get all master email templates.  ### Parameters  | Parameter | In | Type | Required | Description | | --- | --- | --- | --- | --- | | page | query | integer(int32) | false | Page number | | limit | query | integer(int32) | false | Number of records per page |  Refer to [Status Codes](/#status-codes) for definitions of HTTP status code responses.  <div style=\"background-color: #FF6A4B; padding: 10px; border-radius: 8px;\">   <span style=\"color: white;\">This endpoint requires authentication,</span>    <a href=\"/docs/#authentication\" style=\"color: white; text-decoration: underline;\">more info...</a> </div>

### Example

```typescript
import {
    EmailApi,
    Configuration
} from 'clicksend';

const configuration = new Configuration();
const apiInstance = new EmailApi(configuration);

let contentType: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.viewMasterEmailTemplates(
    contentType
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **contentType** | [**string**] |  | (optional) defaults to undefined|


### Return type

**ViewMasterEmailTemplates**

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

# **viewTemplateCategories**
> ViewTemplateCategories viewTemplateCategories()

_Get all master email template categories_  Get all master email template categories  ### Parameters  | Parameter | In | Type | Required | Description | | --- | --- | --- | --- | --- | | page | query | integer(int32) | false | Page number | | limit | query | integer(int32) | false | Number of records per page |   Refer to [Status Codes](/#status-codes) for definitions of HTTP status code responses.   <div style=\"background-color: #FF6A4B; padding: 10px; border-radius: 8px;\">   <span style=\"color: white;\">This endpoint requires authentication,</span>    <a href=\"/docs/#authentication\" style=\"color: white; text-decoration: underline;\">more info...</a> </div>

### Example

```typescript
import {
    EmailApi,
    Configuration
} from 'clicksend';

const configuration = new Configuration();
const apiInstance = new EmailApi(configuration);

let contentType: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.viewTemplateCategories(
    contentType
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **contentType** | [**string**] |  | (optional) defaults to undefined|


### Return type

**ViewTemplateCategories**

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

# **viewTemplateCategory**
> ViewTemplateCategory viewTemplateCategory()

_Get specific master email template category_  Get specific master email template category  ### Parameters  | Parameter | In | Type | Required | Description | | --- | --- | --- | --- | --- | | category_id | path | integer(int32) | true | Email category id |   Refer to [Status Codes](/#status-codes) for definitions of HTTP status code responses.   <div style=\"background-color: #FF6A4B; padding: 10px; border-radius: 8px;\">   <span style=\"color: white;\">This endpoint requires authentication,</span>    <a href=\"/docs/#authentication\" style=\"color: white; text-decoration: underline;\">more info...</a> </div>

### Example

```typescript
import {
    EmailApi,
    Configuration
} from 'clicksend';

const configuration = new Configuration();
const apiInstance = new EmailApi(configuration);

let categoryId: string; // (default to undefined)
let contentType: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.viewTemplateCategory(
    categoryId,
    contentType
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **categoryId** | [**string**] |  | defaults to undefined|
| **contentType** | [**string**] |  | (optional) defaults to undefined|


### Return type

**ViewTemplateCategory**

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

# **viewTemplatesInCategory**
> ViewTemplatesInCategory viewTemplatesInCategory()

_Get all master email templates in a category_  Get all master email templates in a category  ### Parameters  | Parameter | In | Type | Required | Description | | --- | --- | --- | --- | --- | | category_id | path | integer(int32) | true | Email category id | | page | query | integer(int32) | false | Page number | | limit | query | integer(int32) | false | Number of records per page |   Refer to [Status Codes](/#status-codes) for definitions of HTTP status code responses.   <div style=\"background-color: #FF6A4B; padding: 10px; border-radius: 8px;\">   <span style=\"color: white;\">This endpoint requires authentication,</span>    <a href=\"/docs/#authentication\" style=\"color: white; text-decoration: underline;\">more info...</a> </div>

### Example

```typescript
import {
    EmailApi,
    Configuration
} from 'clicksend';

const configuration = new Configuration();
const apiInstance = new EmailApi(configuration);

let categoryId: string; // (default to undefined)
let contentType: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.viewTemplatesInCategory(
    categoryId,
    contentType
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **categoryId** | [**string**] |  | defaults to undefined|
| **contentType** | [**string**] |  | (optional) defaults to undefined|


### Return type

**ViewTemplatesInCategory**

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

