# SmsCampaignsApi

All URIs are relative to *https://rest.clicksend.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**calculateSmsCampaignPrice**](#calculatesmscampaignprice) | **POST** /v3/sms-campaigns/price | Calculate SMS Campaign Price|
|[**cancelSmsCampaign**](#cancelsmscampaign) | **PUT** /v3/sms-campaigns/{sms_campaign_id}/cancel | Cancel SMS Campaign|
|[**sendSmsCampaign**](#sendsmscampaign) | **POST** /v3/sms-campaigns/send | Send SMS Campaign|
|[**updateSmsCampaign**](#updatesmscampaign) | **PUT** /v3/sms-campaigns/{sms_campaign_id} | Update SMS Campaign|
|[**viewSmsCampaigns**](#viewsmscampaigns) | **GET** /v3/sms-campaigns | View SMS Campaigns|
|[**viewSpecificSmsCampaign**](#viewspecificsmscampaign) | **GET** /v3/sms-campaigns/{sms_campaign_id} | View Specific SMS Campaign|

# **calculateSmsCampaignPrice**
> CalculateSmsCampaignPrice calculateSmsCampaignPrice()

_Calculate price for sms campaign_  ### Properties  | Name | Type | Required | Restrictions | Description | | --- | --- | --- | --- | --- | | list_id | integer(int32) | true | none | Your list id. | | name | string | true | none | Your campaign name. | | body | string | true | none | Your campaign message. | | from | string | true | [yes](http://help.clicksend.com/SMS/what-is-a-sender-id-or-sender-number) | Your sender id | | schedule | integer(int32) | false | none | Your schedule timestamp. |   Refer to [Status Codes](/#status-codes) for definitions of HTTP status code responses.   <div style=\"background-color: #FF6A4B; padding: 10px; border-radius: 8px;\">   <span style=\"color: white;\">This endpoint requires authentication,</span>    <a href=\"/docs/#authentication\" style=\"color: white; text-decoration: underline;\">more info...</a> </div>

### Example

```typescript
import {
    SmsCampaignsApi,
    Configuration,
    CalculateSmsCampaignPriceRequest
} from 'clicksend';

const configuration = new Configuration();
const apiInstance = new SmsCampaignsApi(configuration);

let contentType: string; // (optional) (default to undefined)
let calculateSmsCampaignPriceRequest: CalculateSmsCampaignPriceRequest; // (optional)

const { status, data } = await apiInstance.calculateSmsCampaignPrice(
    contentType,
    calculateSmsCampaignPriceRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **calculateSmsCampaignPriceRequest** | **CalculateSmsCampaignPriceRequest**|  | |
| **contentType** | [**string**] |  | (optional) defaults to undefined|


### Return type

**CalculateSmsCampaignPrice**

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

# **cancelSmsCampaign**
> CancelSmsCampaign cancelSmsCampaign()

Use this endpoint to cancel a scheduled SMS campaign.

### Example

```typescript
import {
    SmsCampaignsApi,
    Configuration
} from 'clicksend';

const configuration = new Configuration();
const apiInstance = new SmsCampaignsApi(configuration);

let smsCampaignId: string; //ID of the scheduled SMS campaign to cancel. (default to undefined)
let contentType: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.cancelSmsCampaign(
    smsCampaignId,
    contentType
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **smsCampaignId** | [**string**] | ID of the scheduled SMS campaign to cancel. | defaults to undefined|
| **contentType** | [**string**] |  | (optional) defaults to undefined|


### Return type

**CancelSmsCampaign**

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

# **sendSmsCampaign**
> SendSmsCampaign sendSmsCampaign()

### _SMS Campaign Endpoint_  You can post to a list with `up to 20000 recipients` with each API call. You can only send to a single list containing up to 20,000 recipients. The response is far less detailed than the normal Send SMS endpoint. Use the [SMS Send](/#send-sms) endpoint if you would like to send to less than 1000 recipients at once. You are required to add an opt-out message to the end of your message body if you are sending marketing message. This can be in the form of asking users to reply STOP to opt-out or by including `StopMsg.me/xxxxx` which is a placeholder that will add a link that can be clicked to out-out. Refer to [Status Codes](/#status-codes) for definitions of HTTP status code responses. <div style=\"background-color: #FF6A4B; padding: 10px; border-radius: 8px;\">   <span style=\"color: white;\">This endpoint requires authentication,</span>    <a href=\"/docs/#authentication\" style=\"color: white; text-decoration: underline;\">more info...</a> </div>

### Example

```typescript
import {
    SmsCampaignsApi,
    Configuration,
    SendSmsCampaignRequest
} from 'clicksend';

const configuration = new Configuration();
const apiInstance = new SmsCampaignsApi(configuration);

let contentType: string; // (optional) (default to undefined)
let sendSmsCampaignRequest: SendSmsCampaignRequest; // (optional)

const { status, data } = await apiInstance.sendSmsCampaign(
    contentType,
    sendSmsCampaignRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **sendSmsCampaignRequest** | **SendSmsCampaignRequest**|  | |
| **contentType** | [**string**] |  | (optional) defaults to undefined|


### Return type

**SendSmsCampaign**

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

# **updateSmsCampaign**
> UpdateSmsCampaign updateSmsCampaign()

_Update sms campaign_  ### Parameters  | Parameter | In | Type | Required | Description | | --- | --- | --- | --- | --- | | sms_campaign_id | path | integer(int32) | true | ID of SMS campaign to update |  ### Properties  | Name | Type | Required | Restrictions | Description | | --- | --- | --- | --- | --- | | list_id | integer(int32) | true | none | Your list id. | | name | string | true | none | Your campaign name. | | body | string | true | none | Your campaign message. | | from | string | true | [yes](http://help.clicksend.com/SMS/what-is-a-sender-id-or-sender-number) | Your sender id | | schedule | integer(int32) | false | none | Your schedule timestamp. |  Refer to [Status Codes](/#status-codes) for definitions of HTTP status code responses.  <div style=\"background-color: #FF6A4B; padding: 10px; border-radius: 8px;\">   <span style=\"color: white;\">This endpoint requires authentication,</span>    <a href=\"/docs/#authentication\" style=\"color: white; text-decoration: underline;\">more info...</a> </div>

### Example

```typescript
import {
    SmsCampaignsApi,
    Configuration,
    CalculateSmsCampaignPriceRequest
} from 'clicksend';

const configuration = new Configuration();
const apiInstance = new SmsCampaignsApi(configuration);

let smsCampaignId: string; // (default to undefined)
let contentType: string; // (optional) (default to undefined)
let calculateSmsCampaignPriceRequest: CalculateSmsCampaignPriceRequest; // (optional)

const { status, data } = await apiInstance.updateSmsCampaign(
    smsCampaignId,
    contentType,
    calculateSmsCampaignPriceRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **calculateSmsCampaignPriceRequest** | **CalculateSmsCampaignPriceRequest**|  | |
| **smsCampaignId** | [**string**] |  | defaults to undefined|
| **contentType** | [**string**] |  | (optional) defaults to undefined|


### Return type

**UpdateSmsCampaign**

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

# **viewSmsCampaigns**
> ViewSmsCampaigns viewSmsCampaigns()

Use this endpoint to view SMS campaigns.

### Example

```typescript
import {
    SmsCampaignsApi,
    Configuration
} from 'clicksend';

const configuration = new Configuration();
const apiInstance = new SmsCampaignsApi(configuration);

let contentType: string; // (optional) (default to undefined)
let page: number; //The page number to retrieve. Use this parameter to navigate through the [pagination]/#pagination) results. The default value is 1. (optional) (default to 1)
let limit: number; //The number of items to return per page. This parameter controls the size of each page of results. The default value is 15. (optional) (default to 15)
let q: string; //Allows filtering of results based on your search criteria. The query should be in the format `field_name:value`.  1. **Field Name**: The field within the SMS campaign you want to filter by. You can use the following fields:      - sms_campaign_id,name,user_id,subaccount_id,list_id,from,body,schedule,status,date_added,custom_string,url_to_shorten,unsubscribe_link,source   2. **Value**: The text or keyword you\'re searching for within the specified field. If left empty after the colon, the filter will look for all templates with any value in the **Field Name**.  For example, if you are searching for a SMS campaign with the status of _Scheduled_, the final query would look like this:    - `q=status:Scheduled`  <div class=\"info-box\">   <h4><i class=\"fas fa-info-circle\"></i> Note:</h4>   <p>   Some characters have to be encoded. For example, if you are searching for SMS sent from the phone number +61437085284, your search query q would be:<br/>    <ul>     <li>q=from:%2B61437085284</li>   </ul>    You can use the <a href=\"https://www.urlencoder.org/\" target=\"_blank\">URL encoder</a> to encode the text. If a character is not an alphanumeric character (A-Z, a-z, 0-9), it is typically either reserved or unsafe and should be encoded.      </p> </div> (optional) (default to undefined)
let orderBy: string; //Specifies the field and order to sort the results by. The value is composed of the field name followed by a colon and the sort direction (_asc_ for ascending or _desc_ for descending).  The default sort order is by _date_added_ in ascending order. You can use the following fields:    - _name_: The name of the SMS campaign.   - _status_: The status of the SMS campaign.   - _schedule_: The schedule send date of the SMS campaign in the <a href=\"http://help.clicksend.com/what-is-a-unix-timestamp\" target=\"_blank\">Unix format</a>.   - _from_: The sender of the SMS campaign.   - _date_added_: This is the date you created or updated the SMS campaign in the <a href=\"http://help.clicksend.com/what-is-a-unix-timestamp\" target=\"_blank\">Unix format</a>.  For example, if you want to order by the most recently sent or scheduled SMS, you should sort by date in descending order. The query would look like this:    - `order_by=schedule:desc`  <div class=\"info-box\">   <h4><i class=\"fas fa-info-circle\"></i> Note:</h4>   <p>     You can also sort by these fields: <br/>     <ul>     <li>sms_campaign_id,user_id,subaccount_id,list_id,body,custom_string,url_to_shorten,unsubscribe_link, and source.</li>   </ul>   <br/>   But this is less common in practice.   </p> </div> (optional) (default to undefined)
let dateFrom: number; //Start date to filter results. It should be in <a href=\"http://help.clicksend.com/what-is-a-unix-timestamp\" target=\"_blank\">Unix format</a>. (optional) (default to undefined)
let dateTo: number; //End date to filter results. It should be in <a href=\"http://help.clicksend.com/what-is-a-unix-timestamp\" target=\"_blank\">Unix format</a>. (optional) (default to undefined)

const { status, data } = await apiInstance.viewSmsCampaigns(
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
| **page** | [**number**] | The page number to retrieve. Use this parameter to navigate through the [pagination]/#pagination) results. The default value is 1. | (optional) defaults to 1|
| **limit** | [**number**] | The number of items to return per page. This parameter controls the size of each page of results. The default value is 15. | (optional) defaults to 15|
| **q** | [**string**] | Allows filtering of results based on your search criteria. The query should be in the format &#x60;field_name:value&#x60;.  1. **Field Name**: The field within the SMS campaign you want to filter by. You can use the following fields:      - sms_campaign_id,name,user_id,subaccount_id,list_id,from,body,schedule,status,date_added,custom_string,url_to_shorten,unsubscribe_link,source   2. **Value**: The text or keyword you\&#39;re searching for within the specified field. If left empty after the colon, the filter will look for all templates with any value in the **Field Name**.  For example, if you are searching for a SMS campaign with the status of _Scheduled_, the final query would look like this:    - &#x60;q&#x3D;status:Scheduled&#x60;  &lt;div class&#x3D;\&quot;info-box\&quot;&gt;   &lt;h4&gt;&lt;i class&#x3D;\&quot;fas fa-info-circle\&quot;&gt;&lt;/i&gt; Note:&lt;/h4&gt;   &lt;p&gt;   Some characters have to be encoded. For example, if you are searching for SMS sent from the phone number +61437085284, your search query q would be:&lt;br/&gt;    &lt;ul&gt;     &lt;li&gt;q&#x3D;from:%2B61437085284&lt;/li&gt;   &lt;/ul&gt;    You can use the &lt;a href&#x3D;\&quot;https://www.urlencoder.org/\&quot; target&#x3D;\&quot;_blank\&quot;&gt;URL encoder&lt;/a&gt; to encode the text. If a character is not an alphanumeric character (A-Z, a-z, 0-9), it is typically either reserved or unsafe and should be encoded.      &lt;/p&gt; &lt;/div&gt; | (optional) defaults to undefined|
| **orderBy** | [**string**] | Specifies the field and order to sort the results by. The value is composed of the field name followed by a colon and the sort direction (_asc_ for ascending or _desc_ for descending).  The default sort order is by _date_added_ in ascending order. You can use the following fields:    - _name_: The name of the SMS campaign.   - _status_: The status of the SMS campaign.   - _schedule_: The schedule send date of the SMS campaign in the &lt;a href&#x3D;\&quot;http://help.clicksend.com/what-is-a-unix-timestamp\&quot; target&#x3D;\&quot;_blank\&quot;&gt;Unix format&lt;/a&gt;.   - _from_: The sender of the SMS campaign.   - _date_added_: This is the date you created or updated the SMS campaign in the &lt;a href&#x3D;\&quot;http://help.clicksend.com/what-is-a-unix-timestamp\&quot; target&#x3D;\&quot;_blank\&quot;&gt;Unix format&lt;/a&gt;.  For example, if you want to order by the most recently sent or scheduled SMS, you should sort by date in descending order. The query would look like this:    - &#x60;order_by&#x3D;schedule:desc&#x60;  &lt;div class&#x3D;\&quot;info-box\&quot;&gt;   &lt;h4&gt;&lt;i class&#x3D;\&quot;fas fa-info-circle\&quot;&gt;&lt;/i&gt; Note:&lt;/h4&gt;   &lt;p&gt;     You can also sort by these fields: &lt;br/&gt;     &lt;ul&gt;     &lt;li&gt;sms_campaign_id,user_id,subaccount_id,list_id,body,custom_string,url_to_shorten,unsubscribe_link, and source.&lt;/li&gt;   &lt;/ul&gt;   &lt;br/&gt;   But this is less common in practice.   &lt;/p&gt; &lt;/div&gt; | (optional) defaults to undefined|
| **dateFrom** | [**number**] | Start date to filter results. It should be in &lt;a href&#x3D;\&quot;http://help.clicksend.com/what-is-a-unix-timestamp\&quot; target&#x3D;\&quot;_blank\&quot;&gt;Unix format&lt;/a&gt;. | (optional) defaults to undefined|
| **dateTo** | [**number**] | End date to filter results. It should be in &lt;a href&#x3D;\&quot;http://help.clicksend.com/what-is-a-unix-timestamp\&quot; target&#x3D;\&quot;_blank\&quot;&gt;Unix format&lt;/a&gt;. | (optional) defaults to undefined|


### Return type

**ViewSmsCampaigns**

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

# **viewSpecificSmsCampaign**
> ViewSpecificSmsCampaign viewSpecificSmsCampaign()

Use this endpoint to view a specific SMS campaign.

### Example

```typescript
import {
    SmsCampaignsApi,
    Configuration
} from 'clicksend';

const configuration = new Configuration();
const apiInstance = new SmsCampaignsApi(configuration);

let smsCampaignId: string; //ID of SMS campaign to get (default to undefined)
let contentType: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.viewSpecificSmsCampaign(
    smsCampaignId,
    contentType
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **smsCampaignId** | [**string**] | ID of SMS campaign to get | defaults to undefined|
| **contentType** | [**string**] |  | (optional) defaults to undefined|


### Return type

**ViewSpecificSmsCampaign**

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

