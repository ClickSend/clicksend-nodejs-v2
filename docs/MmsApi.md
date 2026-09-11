# MmsApi

All URIs are relative to *https://rest.clicksend.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**calculateMmsPrice**](#calculatemmsprice) | **POST** /v3/mms/price | Calculate MMS Price|
|[**exportMmsHistory**](#exportmmshistory) | **GET** /v3/mms/history/export | Export MMS History|
|[**sendMms**](#sendmms) | **POST** /v3/mms/send | Send MMS|
|[**viewMmsHistory**](#viewmmshistory) | **GET** /v3/mms/history | View MMS History|

# **calculateMmsPrice**
> CalculateMmsPrice calculateMmsPrice()

_Get Price for MMS sent_  ### Properties  | Name | Type | Required | Restrictions | Description | | --- | --- | --- | --- | --- | | media_file | string | true | none | Media file you want to send | | to | string | true | none | Recipient phone number in [E.164](https://en.wikipedia.org/wiki/E.164) format | | body | string | true | none | Your message | | subject | string | true | none | Subject line (max 20 characters) | | from | string | true | [yes](http://help.clicksend.com/SMS/what-is-a-sender-id-or-sender-number) | Your sender id |   Refer to [Status Codes](/#status-codes) for definitions of HTTP status code responses.   <div style=\"background-color: #FF6A4B; padding: 10px; border-radius: 8px;\">   <span style=\"color: white;\">This endpoint requires authentication,</span>    <a href=\"/docs/#authentication\" style=\"color: white; text-decoration: underline;\">more info...</a> </div>

### Example

```typescript
import {
    MmsApi,
    Configuration,
    CalculateMmsPriceRequest
} from 'clicksend';

const configuration = new Configuration();
const apiInstance = new MmsApi(configuration);

let contentType: string; // (optional) (default to undefined)
let calculateMmsPriceRequest: CalculateMmsPriceRequest; // (optional)

const { status, data } = await apiInstance.calculateMmsPrice(
    contentType,
    calculateMmsPriceRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **calculateMmsPriceRequest** | **CalculateMmsPriceRequest**|  | |
| **contentType** | [**string**] |  | (optional) defaults to undefined|


### Return type

**CalculateMmsPrice**

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

# **exportMmsHistory**
> ExportMmsHistory exportMmsHistory()

_Export all mms history_  ### Parameters  | Parameter | In | Type | Required | Description | | --- | --- | --- | --- | --- | | filename | query | string | true | Filename to download history as |   Refer to [Status Codes](/#status-codes) for definitions of HTTP status code responses.   <div style=\"background-color: #FF6A4B; padding: 10px; border-radius: 8px;\">   <span style=\"color: white;\">This endpoint requires authentication,</span>    <a href=\"/docs/#authentication\" style=\"color: white; text-decoration: underline;\">more info...</a> </div>

### Example

```typescript
import {
    MmsApi,
    Configuration
} from 'clicksend';

const configuration = new Configuration();
const apiInstance = new MmsApi(configuration);

let contentType: string; // (optional) (default to undefined)
let filename: string; // (optional) (default to undefined)
let q: string; // (optional) (default to undefined)
let orderBy: string; // (optional) (default to undefined)
let dateFrom: string; // (optional) (default to undefined)
let dateTo: string; // (optional) (default to undefined)
let limit: number; // (optional) (default to undefined)

const { status, data } = await apiInstance.exportMmsHistory(
    contentType,
    filename,
    q,
    orderBy,
    dateFrom,
    dateTo,
    limit
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **contentType** | [**string**] |  | (optional) defaults to undefined|
| **filename** | [**string**] |  | (optional) defaults to undefined|
| **q** | [**string**] |  | (optional) defaults to undefined|
| **orderBy** | [**string**] |  | (optional) defaults to undefined|
| **dateFrom** | [**string**] |  | (optional) defaults to undefined|
| **dateTo** | [**string**] |  | (optional) defaults to undefined|
| **limit** | [**number**] |  | (optional) defaults to undefined|


### Return type

**ExportMmsHistory**

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

# **sendMms**
> SendMms sendMms()

_Send MMS_  You can post **up to 1000 messages** with each API call. You can send to a mix of contacts and contact lists, as long as the total number of recipients is up to 1000. The response contains a status and details for each recipient.  Refer to [<b>Application Status Codes</b>](/#application-status-codes) for the possible response message status strings.  ### **How many characters can I send in a message?**  ### Standard MMS Message  1500 characters  ### Unicode MMS Message  500 characters  If a message is longer the allowed number of characters it will be truncated. If a message contains any characters that aren\'t in the GSM 03.38 character set, the message type will be treated as unicode. ([https://en.wikipedia.org/wiki/GSM_03.38](https://en.wikipedia.org/wiki/GSM_03.38))  ### Maximum File Size  You can send a single attachment with a size of up to 250 kB. Some older devices can only accept attachments with up to 30 kB.  ### Supported File Types  - Supported file types are listed below. If you need to convert a file to a supported format, it can be first passed to our uploads endpoint: `/uploads?convert=mms` - This will return a URL to the converted image file that can be used in the /mms/send endpoint. - Contact us to add support for any other file type.       ### Images  | File type | Required to be passed to uploads endpoint first? | | --- | --- | | `jpg` | No | | `gif` | No | | `jpeg` | Yes | | `png` | Yes | | `bmp` | Yes |  ### Properties  | Name | Type | Required | Restrictions | Description | | --- | --- | --- | --- | --- | | media_file | string | true | none | Media file you want to send | | to | string | true | none | Recipient phone number in [E.164](https://en.wikipedia.org/wiki/E.164) format | | body | string | true | none | Your message | | subject | string | true | none | Subject line (max 20 characters) | | from | string | true | [yes](http://help.clicksend.com/SMS/what-is-a-sender-id-or-sender-number) | Your sender id |  Refer to [Status Codes](/#status-codes) for definitions of HTTP status code responses.  <div style=\"background-color: #FF6A4B; padding: 10px; border-radius: 8px;\">   <span style=\"color: white;\">This endpoint requires authentication,</span>    <a href=\"/docs/#authentication\" style=\"color: white; text-decoration: underline;\">more info...</a> </div>

### Example

```typescript
import {
    MmsApi,
    Configuration,
    SendMmsRequest
} from 'clicksend';

const configuration = new Configuration();
const apiInstance = new MmsApi(configuration);

let contentType: string; // (optional) (default to undefined)
let sendMmsRequest: SendMmsRequest; // (optional)

const { status, data } = await apiInstance.sendMms(
    contentType,
    sendMmsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **sendMmsRequest** | **SendMmsRequest**|  | |
| **contentType** | [**string**] |  | (optional) defaults to undefined|


### Return type

**SendMms**

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

# **viewMmsHistory**
> ViewMmsHistory viewMmsHistory()

_Get all mms history_  ### Parameters  | Parameter | In | Type | Required | Description | | --- | --- | --- | --- | --- | | date_from | query | integer(int32) | false | Start date (Unix Timestamp e.g. 1436849372) | | date_to | query | integer(int32) | false | End date (Unix Timestamp e.g. 1436879372) | | page | query | integer(int32) | false | [Page number](/#pagination) | | limit | query | integer(int32) | false | [Number of records per page](/#pagination) |   Refer to [Status Codes](/#status-codes) for definitions of HTTP status code responses.   <div style=\"background-color: #FF6A4B; padding: 10px; border-radius: 8px;\">   <span style=\"color: white;\">This endpoint requires authentication,</span>    <a href=\"/docs/#authentication\" style=\"color: white; text-decoration: underline;\">more info...</a> </div>

### Example

```typescript
import {
    MmsApi,
    Configuration
} from 'clicksend';

const configuration = new Configuration();
const apiInstance = new MmsApi(configuration);

let contentType: string; // (optional) (default to undefined)
let limit: number; // (optional) (default to undefined)

const { status, data } = await apiInstance.viewMmsHistory(
    contentType,
    limit
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **contentType** | [**string**] |  | (optional) defaults to undefined|
| **limit** | [**number**] |  | (optional) defaults to undefined|


### Return type

**ViewMmsHistory**

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

