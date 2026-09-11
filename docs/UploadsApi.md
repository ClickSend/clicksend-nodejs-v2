# UploadsApi

All URIs are relative to *https://rest.clicksend.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**uploadAMediaFile**](#uploadamediafile) | **POST** /v3/uploads | Upload Media File|

# **uploadAMediaFile**
> uploadAMediaFile()

The `upload` endpoint provides a method for converting files from an unsupported format to a format that one of our endpoints can handle.  Files can be submitted two ways: 1. Using `base64` encoding in an `application/json` request. In this case, submit the `base64`\\-encoded file contents in the `content` field of the request body, and `convert` can be specified either also in the body or as part of the query string. 2. Using `multipart/form-data` encoding, in the same way it would be submitted using a HTML form. You may find cURL useful for this. For an example of how to do this, see one of our [SDKs](https://dashboard.clicksend.com/#/libraries-sdk/main). In this case, specify `convert` in the query string.  Note that `convert` specifies the conversion to take place. That is, what the result should be compatible with and can be any of the following:  - `fax` - `mms` - `csv` - `post` - `postcard`       All files will expire 10 minutes after being uploaded.  ### Parameters  | Parameter | In | Type | Required | Description | | --- | --- | --- | --- | --- | | convert | query | string | true | none | | content | body | string | true | Base64-encoded file contents |  Refer to [Status Codes](/#status-codes) for definitions of HTTP status code responses.  This endpoint requires authentication, [more info...](/#authentication)

### Example

```typescript
import {
    UploadsApi,
    Configuration
} from 'clicksend';

const configuration = new Configuration();
const apiInstance = new UploadsApi(configuration);

let contentType: string; // (optional) (default to undefined)
let body: object; // (optional)

const { status, data } = await apiInstance.uploadAMediaFile(
    contentType,
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **object**|  | |
| **contentType** | [**string**] |  | (optional) defaults to undefined|


### Return type

void (empty response body)

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

