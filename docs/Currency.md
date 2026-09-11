# Currency

The parameters related to currency.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**currency_name_short** | **string** | The currency used for the sender in three-letter format (e.g. USD, EUR, AUD, NZD, etc). | [optional] [default to undefined]
**currency_prefix_d** | **string** | The symbol used to indicate the currency of the sender (e.g. $ , €, etc). | [optional] [default to undefined]
**currency_prefix_c** | **string** | The currency basic unit (e.g. cents). | [optional] [default to undefined]
**currency_name_long** | **string** | The full name of the currency. | [optional] [default to undefined]
**min_recharge_amount** | **string** | The minimum amount that can be used to recharge the account, in this currency. | [optional] [default to undefined]
**max_recharge_amount** | **string** | The maximum amount that can be used to recharge the account, in this currency. | [optional] [default to undefined]

## Example

```typescript
import { Currency } from 'clicksend';

const instance: Currency = {
    currency_name_short,
    currency_prefix_d,
    currency_prefix_c,
    currency_name_long,
    min_recharge_amount,
    max_recharge_amount,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
