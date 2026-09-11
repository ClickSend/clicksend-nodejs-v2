# CreateResellerAccountData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**user_id** | **number** | The user\&#39;s ID | [optional] [default to undefined]
**username** | **string** | The username | [optional] [default to undefined]
**user_email** | **string** | The user\&#39;s email | [optional] [default to undefined]
**active** | **number** | Indicates if the user is active | [optional] [default to undefined]
**banned** | **number** | Indicates if the user is banned | [optional] [default to undefined]
**balance** | **string** | The user\&#39;s balance | [optional] [default to undefined]
**user_phone** | **string** | The user\&#39;s phone number | [optional] [default to undefined]
**reply_to** | **string** | The reply-to email address | [optional] [default to undefined]
**delivery_to** | **string** | The delivery-to email address | [optional] [default to undefined]
**user_first_name** | **string** | The user\&#39;s first name | [optional] [default to undefined]
**user_last_name** | **string** | The user\&#39;s last name | [optional] [default to undefined]
**account** | **number** | The user\&#39;s account number | [optional] [default to undefined]
**account_name** | **string** | The name of the user\&#39;s account | [optional] [default to undefined]
**account_billing_email** | **string** | The account billing email | [optional] [default to undefined]
**account_billing_mobile** | **string** | The account billing mobile number | [optional] [default to undefined]
**country** | **string** | The user\&#39;s country | [optional] [default to undefined]
**default_country_sms** | **string** | The default country for SMS | [optional] [default to undefined]
**auto_recharge** | **number** | Indicates if auto-recharge is enabled | [optional] [default to undefined]
**auto_recharge_amount** | **string** | The auto-recharge amount | [optional] [default to undefined]
**low_credit_amount** | **string** | The low credit amount | [optional] [default to undefined]
**setting_unicode_sms** | **number** | Setting for Unicode SMS | [optional] [default to undefined]
**setting_email_sms_subject** | **number** | Setting for email SMS subject | [optional] [default to undefined]
**setting_fix_sender_id** | **number** | Setting for fixed sender ID | [optional] [default to undefined]
**setting_sms_message_char_limit** | **number** | Setting for SMS message character limit | [optional] [default to undefined]
**old_dashboard** | **number** | Indicates if the user is using the old dashboard | [optional] [default to undefined]
**balance_commission** | **string** | The balance commission | [optional] [default to undefined]
**timezone** | **string** | The user\&#39;s timezone | [optional] [default to undefined]
**_currency** | [**Currency**](Currency.md) |  | [optional] [default to undefined]
**_subaccount** | [**Subaccount**](Subaccount.md) |  | [optional] [default to undefined]

## Example

```typescript
import { CreateResellerAccountData } from 'clicksend';

const instance: CreateResellerAccountData = {
    user_id,
    username,
    user_email,
    active,
    banned,
    balance,
    user_phone,
    reply_to,
    delivery_to,
    user_first_name,
    user_last_name,
    account,
    account_name,
    account_billing_email,
    account_billing_mobile,
    country,
    default_country_sms,
    auto_recharge,
    auto_recharge_amount,
    low_credit_amount,
    setting_unicode_sms,
    setting_email_sms_subject,
    setting_fix_sender_id,
    setting_sms_message_char_limit,
    old_dashboard,
    balance_commission,
    timezone,
    _currency,
    _subaccount,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
