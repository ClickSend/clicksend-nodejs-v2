# ViewMmsHistoryDataAllOfDataInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**direction** | **string** | The direction of the message (in or out). | [optional] [default to undefined]
**date** | **string** | The date of the message. | [optional] [default to undefined]
**to** | **string** | The recipient of the message. | [optional] [default to undefined]
**body** | **string** | The body of the message. | [optional] [default to undefined]
**subject** | **string** | The subject of the message. | [optional] [default to undefined]
**priority** | **number** | The priority of the message. | [optional] [default to undefined]
**_media_file_url** | **string** | A temporary, signed URL to download the message\&#39;s media attachment. | [optional] [default to undefined]
**status** | **string** | The status of the message. | [optional] [default to undefined]
**from** | **string** | The sender of the message. | [optional] [default to undefined]
**schedule** | **string** | The schedule time of the message. | [optional] [default to undefined]
**date_added** | **number** | The Unix timestamp when the message was added. | [optional] [default to undefined]
**status_code** | **string** | The status code (if applicable). | [optional] [default to undefined]
**status_text** | **string** | The status text (if applicable). | [optional] [default to undefined]
**error_code** | **string** | The error code (if applicable). | [optional] [default to undefined]
**error_text** | **string** | The error text (if applicable). | [optional] [default to undefined]
**message_id** | **string** | The ID of the message. | [optional] [default to undefined]
**message_parts** | **string** | The number of parts the message was split into. | [optional] [default to undefined]
**message_price** | **string** | The price of the message. | [optional] [default to undefined]
**from_email** | **string** | The email of the sender (if applicable). | [optional] [default to undefined]
**list_id** | **string** | The ID of the list (if applicable). | [optional] [default to undefined]
**custom_string** | **string** | Custom string associated with the message. | [optional] [default to undefined]
**contact_id** | **number** | The ID of the contact. | [optional] [default to undefined]
**user_id** | **number** | The ID of the user. | [optional] [default to undefined]
**subaccount_id** | **number** | The ID of the subaccount. | [optional] [default to undefined]
**country** | **string** | The country code. | [optional] [default to undefined]
**carrier** | **string** | The carrier information. | [optional] [default to undefined]
**first_name** | **string** | The first name of the sender. | [optional] [default to undefined]
**last_name** | **string** | The last name of the sender. | [optional] [default to undefined]
**_api_username** | **string** | The API username associated with the message. | [optional] [default to undefined]

## Example

```typescript
import { ViewMmsHistoryDataAllOfDataInner } from 'clicksend';

const instance: ViewMmsHistoryDataAllOfDataInner = {
    direction,
    date,
    to,
    body,
    subject,
    priority,
    _media_file_url,
    status,
    from,
    schedule,
    date_added,
    status_code,
    status_text,
    error_code,
    error_text,
    message_id,
    message_parts,
    message_price,
    from_email,
    list_id,
    custom_string,
    contact_id,
    user_id,
    subaccount_id,
    country,
    carrier,
    first_name,
    last_name,
    _api_username,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
