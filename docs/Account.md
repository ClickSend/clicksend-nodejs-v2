# Account


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**user_id** | **number** | The unique identifier for the user. | [optional] [default to undefined]
**username** | **string** | The username of the user. | [optional] [default to undefined]
**user_email** | **string** | The email address of the user. | [optional] [default to undefined]
**active** | **number** | Flag indicating if the user account is active. | [optional] [default to undefined]
**banned** | **number** | Flag indicating if the user account is banned. | [optional] [default to undefined]
**date_sign_up** | **number** | The Unix timestamp of when the account was created. | [optional] [default to undefined]
**balance** | **string** | The balance of the user\&#39;s account. | [optional] [default to undefined]
**user_phone** | **string** | The phone number of the user. | [optional] [default to undefined]
**reply_to** | **string** | The email address to reply to. | [optional] [default to undefined]
**delivery_to** | **string** | The delivery email address. | [optional] [default to undefined]
**user_first_name** | **string** | The first name of the user. | [optional] [default to undefined]
**user_last_name** | **string** | The last name of the user. | [optional] [default to undefined]
**account** | **number** | The account number. | [optional] [default to undefined]
**account_name** | **string** | The name of the account. | [optional] [default to undefined]
**account_billing_email** | **string** | The billing email address of the account. | [optional] [default to undefined]
**account_billing_mobile** | **string** | The billing mobile number of the account. | [optional] [default to undefined]
**priority** | **number** | The account\&#39;s priority tier. | [optional] [default to undefined]
**country** | **string** | The country of the user. | [optional] [default to undefined]
**country_ip** | **string** | The country the user is currently connecting from, based on IP address. | [optional] [default to undefined]
**default_country_sms** | **string** | The default country for SMS. | [optional] [default to undefined]
**auto_recharge** | **number** | Flag indicating if auto-recharge is enabled. | [optional] [default to undefined]
**auto_recharge_amount** | **string** | The auto-recharge amount. | [optional] [default to undefined]
**low_credit_amount** | **string** | The low credit amount. | [optional] [default to undefined]
**setting_unicode_sms** | **number** | Flag indicating if unicode SMS is enabled. | [optional] [default to undefined]
**setting_email_sms_subject** | **number** | Flag indicating if email SMS subject is enabled. | [optional] [default to undefined]
**setting_fix_sender_id** | **number** | Flag indicating if fixing sender ID is enabled. | [optional] [default to undefined]
**setting_sms_message_char_limit** | **number** | The SMS message character limit. | [optional] [default to undefined]
**old_dashboard** | **number** | Flag indicating if old dashboard is enabled. | [optional] [default to undefined]
**balance_commission** | **string** | The balance commission. | [optional] [default to undefined]
**timezone** | **string** | The timezone of the user. | [optional] [default to undefined]
**price_rate** | **number** | The pricing tier used to determine the cost per message. | [optional] [default to undefined]
**private_uploads** | **number** | Flag indicating if uploaded media is kept private. | [optional] [default to undefined]
**fax_quality** | **number** | The quality setting used for outgoing faxes. | [optional] [default to undefined]
**setting_sms_hide_your_number** | **number** | Flag indicating if your number is hidden on outgoing SMS. | [optional] [default to undefined]
**setting_sms_hide_business_name** | **number** | Flag indicating if the business name is hidden on outgoing SMS. | [optional] [default to undefined]
**pricing_variant** | **number** | The pricing variant applied to the account. | [optional] [default to undefined]
**on_trial** | **number** | Flag indicating if the account is currently on a trial. | [optional] [default to undefined]
**trial_expiry** | **string** | The date the trial expires, if the account is on a trial. | [optional] [default to undefined]
**_currency** | [**Currency**](Currency.md) |  | [optional] [default to undefined]
**_subaccount** | [**Subaccount**](Subaccount.md) |  | [optional] [default to undefined]
**_referrer_chosen** | [**AccountReferrerChosen**](AccountReferrerChosen.md) |  | [optional] [default to undefined]

## Example

```typescript
import { Account } from 'clicksend';

const instance: Account = {
    user_id,
    username,
    user_email,
    active,
    banned,
    date_sign_up,
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
    priority,
    country,
    country_ip,
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
    price_rate,
    private_uploads,
    fax_quality,
    setting_sms_hide_your_number,
    setting_sms_hide_business_name,
    pricing_variant,
    on_trial,
    trial_expiry,
    _currency,
    _subaccount,
    _referrer_chosen,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
