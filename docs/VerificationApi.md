# VerificationApi

All URIs are relative to *https://rest.clicksend.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**forgotPassword**](#forgotpassword) | **PUT** /v3/forgot-password | Forgot Password|
|[**forgotUsername**](#forgotusername) | **PUT** /v3/forgot-username | Forgot Username|

# **forgotPassword**
> ForgotPassword forgotPassword()

_Forgot password_  A user can send their username to this endpoint to be sent an email with their registered email address that will have a verification code.  Once you have this verification email containing the code you can send it to the [forgotten-password/verify](/#verify-forgot-password) endpoint along with a new password and the ID of that subaccount.  _Ask your administrator if you do not know your subaccount id._  ### Properties  | **Name** | **Type** | **Required** | **Restrictions** | **Description** | | --- | --- | --- | --- | --- | | username | string | true | none | Username belonging to account |  Refer to [Status Codes](/#status-codes) for definitions of HTTP status code responses.  <div style=\"background-color: #6BBD5B; padding: 10px; border-radius: 8px;\">   <span style=\"color: white;\">This endpoint does not require authentication</span>  </div>

### Example

```typescript
import {
    VerificationApi,
    Configuration,
    ForgotPasswordRequest
} from 'clicksend';

const configuration = new Configuration();
const apiInstance = new VerificationApi(configuration);

let contentType: string; // (optional) (default to undefined)
let forgotPasswordRequest: ForgotPasswordRequest; // (optional)

const { status, data } = await apiInstance.forgotPassword(
    contentType,
    forgotPasswordRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **forgotPasswordRequest** | **ForgotPasswordRequest**|  | |
| **contentType** | [**string**] |  | (optional) defaults to undefined|


### Return type

**ForgotPassword**

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

# **forgotUsername**
> ForgotUsername forgotUsername()

_Forgot username_  Requires the user to pass either the email registered to an account or the phone number, **not** both  ### Properties  | **Name** | **Type** | **Required** | **Restrictions** | **Description** | | --- | --- | --- | --- | --- | | email | string | true | none | Email belonging to account | | phone_number | string | true | none | Phone belonging to account |  Refer to [Status Codes](/#status-codes) for definitions of HTTP status code responses.  <div style=\"background-color: #6BBD5B; padding: 10px; border-radius: 8px;\">   <span style=\"color: white;\">This endpoint does not require authentication</span>  </div>   

### Example

```typescript
import {
    VerificationApi,
    Configuration,
    ForgotUsernameRequest
} from 'clicksend';

const configuration = new Configuration();
const apiInstance = new VerificationApi(configuration);

let contentType: string; // (optional) (default to undefined)
let forgotUsernameRequest: ForgotUsernameRequest; // (optional)

const { status, data } = await apiInstance.forgotUsername(
    contentType,
    forgotUsernameRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **forgotUsernameRequest** | **ForgotUsernameRequest**|  | |
| **contentType** | [**string**] |  | (optional) defaults to undefined|


### Return type

**ForgotUsername**

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

