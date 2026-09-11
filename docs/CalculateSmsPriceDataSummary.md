# CalculateSmsPriceDataSummary

The parameters for additional summary. It shows the guidelines for each country you have selected.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**test_message** | **string** | This parameter is used for internal developers. This is used when your account is in trial period. | [optional] [default to undefined]
**countries** | [**Array&lt;CalculateSmsPriceDataSummaryCountriesInner&gt;**](CalculateSmsPriceDataSummaryCountriesInner.md) | The list of countries of the receipients in two-letter format (e.g. US, UK, AU, NZ, etc). | [optional] [default to undefined]

## Example

```typescript
import { CalculateSmsPriceDataSummary } from 'clicksend';

const instance: CalculateSmsPriceDataSummary = {
    test_message,
    countries,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
