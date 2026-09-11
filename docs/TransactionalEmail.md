# TransactionalEmail


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**user_id** | **number** | The ID of the user. | [optional] [default to undefined]
**subaccount_id** | **number** | The ID of the subaccount. | [optional] [default to undefined]
**from_email_address_id** | **number** | The ID of the from email address. | [optional] [default to undefined]
**from_name** | **string** | The name of the sender. | [optional] [default to undefined]
**to** | [**Array&lt;SendEmailRequestToInner&gt;**](SendEmailRequestToInner.md) |  | [optional] [default to undefined]
**cc** | [**Array&lt;SendEmailRequestToInner&gt;**](SendEmailRequestToInner.md) |  | [optional] [default to undefined]
**bcc** | [**Array&lt;SendEmailRequestToInner&gt;**](SendEmailRequestToInner.md) |  | [optional] [default to undefined]
**subject** | **string** | The subject of the email. | [optional] [default to undefined]
**body** | **string** | The HTML body of the email. | [optional] [default to undefined]
**body_plain_text** | **string** | The plain text body of the email. | [optional] [default to undefined]
**schedule** | **number** | The timestamp indicating the scheduled time of the email. | [optional] [default to undefined]
**message_id** | **string** | The ID of the email message. | [optional] [default to undefined]
**status** | **string** | The status of the email. | [optional] [default to undefined]
**status_text** | **string** | The text description of the email status. | [optional] [default to undefined]
**soft_bounce_count** | **number** | The count of soft bounces. | [optional] [default to undefined]
**hard_bounce_count** | **number** | The count of hard bounces. | [optional] [default to undefined]
**price** | **string** | The price of the email. | [optional] [default to undefined]
**date_added** | **number** | The timestamp indicating when the email was added. | [optional] [default to undefined]
**custom_string** | **string** | A custom string. | [optional] [default to undefined]
**_attachments** | [**Array&lt;Attachment&gt;**](Attachment.md) |  | [optional] [default to undefined]
**_currency** | [**Currency**](Currency.md) |  | [optional] [default to undefined]

## Example

```typescript
import { TransactionalEmail } from 'clicksend';

const instance: TransactionalEmail = {
    user_id,
    subaccount_id,
    from_email_address_id,
    from_name,
    to,
    cc,
    bcc,
    subject,
    body,
    body_plain_text,
    schedule,
    message_id,
    status,
    status_text,
    soft_bounce_count,
    hard_bounce_count,
    price,
    date_added,
    custom_string,
    _attachments,
    _currency,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
