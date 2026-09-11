# RegisterNumbersRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**full_name** | **string** | Legal full name of the individual registering the number. Must be a personal name, not a business name. | [default to undefined]
**company_name** | **string** | Legal business name of the organization requesting registration | [default to undefined]
**email** | **string** | Contact email address for registration communications and notifications | [default to undefined]
**website_url** | **string** | Official business website URL | [default to undefined]
**sample_message** | **string** | Representative example of messages that will be sent using this number | [default to undefined]
**primary_use_case** | **string** | Primary intended purpose for the registered number (e.g., Marketing, Notifications, Authentication) | [default to undefined]
**company_number** | **string** | Official support phone number of the organization requesting registration | [default to undefined]
**area_code** | **string** | Your area codes, please provide your top 3 area codes in case your 1st choice is not available | [default to undefined]

## Example

```typescript
import { RegisterNumbersRequest } from 'clicksend';

const instance: RegisterNumbersRequest = {
    full_name,
    company_name,
    email,
    website_url,
    sample_message,
    primary_use_case,
    company_number,
    area_code,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
