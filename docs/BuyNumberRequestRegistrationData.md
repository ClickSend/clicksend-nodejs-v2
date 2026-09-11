# BuyNumberRequestRegistrationData

Optional registration data for number compliance

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**business_name** | **string** | Name of the business (2 - 100 characters) | [default to undefined]
**business_address** | **string** | Business address (5 - 150 characters) | [default to undefined]
**suburb** | **string** | Suburb/City (2 - 50 characters) | [default to undefined]
**postcode** | **string** | Postal code (2 - 20 characters) | [default to undefined]
**state** | **string** | State/Province (2 - 50 characters) | [default to undefined]
**contact_name** | **string** | Contact person name (2 - 100 characters) | [default to undefined]
**contact_number** | **string** | Contact phone number (valid local or international phone number) | [default to undefined]
**country** | **string** | Country code (ISO 3166-1 alpha-2) | [default to undefined]

## Example

```typescript
import { BuyNumberRequestRegistrationData } from 'clicksend';

const instance: BuyNumberRequestRegistrationData = {
    business_name,
    business_address,
    suburb,
    postcode,
    state,
    contact_name,
    contact_number,
    country,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
