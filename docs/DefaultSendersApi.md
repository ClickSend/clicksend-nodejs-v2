# DefaultSendersApi

All URIs are relative to *https://rest.clicksend.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createDefaultSender**](#createdefaultsender) | **POST** /v3/senders/default-senders | Create Default Sender|
|[**deleteDefaultSender**](#deletedefaultsender) | **DELETE** /v3/senders/default-senders/{default_sender_id} | Delete Default Sender|
|[**getDefaultSenderDetails**](#getdefaultsenderdetails) | **GET** /v3/senders/default-senders/{default_sender_id} | Get Default Sender Details|
|[**getDefaultSendersList**](#getdefaultsenderslist) | **GET** /v3/senders/default-senders | Get List of Default Senders|
|[**listCompliantSenderTypes**](#listcompliantsendertypes) | **GET** /v3/senders/compliant-sender-types | List Compliant Sender Types|
|[**updateDefaultSender**](#updatedefaultsender) | **PATCH** /v3/senders/default-senders/{default_sender_id} | Update Default Sender|

# **createDefaultSender**
> CreateDefaultSender createDefaultSender()

Creates a new default sender configuration to automate the selection of compliant SenderIDs. By configuring a default sender you no longer need to define the `sender_id` string when sending SMS messages. The default sender will be picked up automatically.  For more information on Sender IDs, please refer to [What is a Sender ID or Sender Number?](https://help.clicksend.com/article/4kgj7krx00-what-is-a-sender-id-or-sender-number)

### Example

```typescript
import {
    DefaultSendersApi,
    Configuration,
    CreateDefaultSenderRequest
} from 'clicksend';

const configuration = new Configuration();
const apiInstance = new DefaultSendersApi(configuration);

let contentType: string; // (optional) (default to undefined)
let createDefaultSenderRequest: CreateDefaultSenderRequest; // (optional)

const { status, data } = await apiInstance.createDefaultSender(
    contentType,
    createDefaultSenderRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createDefaultSenderRequest** | **CreateDefaultSenderRequest**|  | |
| **contentType** | [**string**] |  | (optional) defaults to undefined|


### Return type

**CreateDefaultSender**

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful response |  -  |
|**400** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteDefaultSender**
> deleteDefaultSender()

Removes a specified default sender setting.  If you don\'t configure a default sender and leave the `sender_id` string blank when sending an SMS, Smart Assign will pick the best suitable, compliant, available SenderID for you.

### Example

```typescript
import {
    DefaultSendersApi,
    Configuration
} from 'clicksend';

const configuration = new Configuration();
const apiInstance = new DefaultSendersApi(configuration);

let defaultSenderId: string; //The ID of the default sender to delete (default to undefined)
let contentType: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.deleteDefaultSender(
    defaultSenderId,
    contentType
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **defaultSenderId** | [**string**] | The ID of the default sender to delete | defaults to undefined|
| **contentType** | [**string**] |  | (optional) defaults to undefined|


### Return type

void (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | Successful response (No Content) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getDefaultSenderDetails**
> GetDefaultSenderDetails getDefaultSenderDetails()

Retrieve detailed information about a specific default sender configuration

### Example

```typescript
import {
    DefaultSendersApi,
    Configuration
} from 'clicksend';

const configuration = new Configuration();
const apiInstance = new DefaultSendersApi(configuration);

let defaultSenderId: string; //The ID of the default sender to retrieve (default to undefined)
let contentType: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.getDefaultSenderDetails(
    defaultSenderId,
    contentType
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **defaultSenderId** | [**string**] | The ID of the default sender to retrieve | defaults to undefined|
| **contentType** | [**string**] |  | (optional) defaults to undefined|


### Return type

**GetDefaultSenderDetails**

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

# **getDefaultSendersList**
> GetDefaultSendersList getDefaultSendersList()

Retrieve a list of default senders for the current user

### Example

```typescript
import {
    DefaultSendersApi,
    Configuration
} from 'clicksend';

const configuration = new Configuration();
const apiInstance = new DefaultSendersApi(configuration);

let contentType: string; // (optional) (default to undefined)
let offset: string; //Page (offset) to be used for pagination (optional) (default to undefined)
let perPage: number; //Size of the page in pagination (optional) (default to 10)
let sortBy: string; //Parameter to sort the results by (optional) (default to 'created_timestamp')
let sortDirection: 'asc' | 'desc'; //Direction of sorting (optional) (default to 'desc')

const { status, data } = await apiInstance.getDefaultSendersList(
    contentType,
    offset,
    perPage,
    sortBy,
    sortDirection
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **contentType** | [**string**] |  | (optional) defaults to undefined|
| **offset** | [**string**] | Page (offset) to be used for pagination | (optional) defaults to undefined|
| **perPage** | [**number**] | Size of the page in pagination | (optional) defaults to 10|
| **sortBy** | [**string**] | Parameter to sort the results by | (optional) defaults to 'created_timestamp'|
| **sortDirection** | [**&#39;asc&#39; | &#39;desc&#39;**]**Array<&#39;asc&#39; &#124; &#39;desc&#39;>** | Direction of sorting | (optional) defaults to 'desc'|


### Return type

**GetDefaultSendersList**

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

# **listCompliantSenderTypes**
> ListCompliantSenderTypes200Response listCompliantSenderTypes()

Retrieves the list of compliant sender types for specific countries

### Example

```typescript
import {
    DefaultSendersApi,
    Configuration
} from 'clicksend';

const configuration = new Configuration();
const apiInstance = new DefaultSendersApi(configuration);

let filterProductType: 'SMS'; //Type of the product (default to undefined)
let filterCountryCodeIndex: Array<string>; //Array of recipient country codes (ISO 3166-1 alpha-2). If not specified, will get all compliant sender types for all countries. Replace `{index}` with the appropriate index value.  <small>Example:</small> <small><code style=\"color: #424242;\">filter[country_code][0]=US&filter[country_code][1]=AU</code></small>  (optional) (default to undefined)

const { status, data } = await apiInstance.listCompliantSenderTypes(
    filterProductType,
    filterCountryCodeIndex
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **filterProductType** | [**&#39;SMS&#39;**]**Array<&#39;SMS&#39;>** | Type of the product | defaults to undefined|
| **filterCountryCodeIndex** | **Array&lt;string&gt;** | Array of recipient country codes (ISO 3166-1 alpha-2). If not specified, will get all compliant sender types for all countries. Replace &#x60;{index}&#x60; with the appropriate index value.  &lt;small&gt;Example:&lt;/small&gt; &lt;small&gt;&lt;code style&#x3D;\&quot;color: #424242;\&quot;&gt;filter[country_code][0]&#x3D;US&amp;filter[country_code][1]&#x3D;AU&lt;/code&gt;&lt;/small&gt;  | (optional) defaults to undefined|


### Return type

**ListCompliantSenderTypes200Response**

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

# **updateDefaultSender**
> UpdateDefaultSender updateDefaultSender()

Updates the details of an existing default sender configuration.  For more information on Sender IDs, please refer to [What is a Sender ID or Sender Number?](https://help.clicksend.com/article/4kgj7krx00-what-is-a-sender-id-or-sender-number)

### Example

```typescript
import {
    DefaultSendersApi,
    Configuration,
    UpdateDefaultSenderRequest
} from 'clicksend';

const configuration = new Configuration();
const apiInstance = new DefaultSendersApi(configuration);

let defaultSenderId: string; //The ID of the default sender to update (default to undefined)
let contentType: string; // (optional) (default to undefined)
let updateDefaultSenderRequest: UpdateDefaultSenderRequest; // (optional)

const { status, data } = await apiInstance.updateDefaultSender(
    defaultSenderId,
    contentType,
    updateDefaultSenderRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateDefaultSenderRequest** | **UpdateDefaultSenderRequest**|  | |
| **defaultSenderId** | [**string**] | The ID of the default sender to update | defaults to undefined|
| **contentType** | [**string**] |  | (optional) defaults to undefined|


### Return type

**UpdateDefaultSender**

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful response |  -  |
|**400** | Bad request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

