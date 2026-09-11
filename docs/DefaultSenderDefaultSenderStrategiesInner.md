# DefaultSenderDefaultSenderStrategiesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sender_type** | **string** | Type of the sender. | [default to undefined]
**sender_id** | **string** | Identifier for the sender. Must be between 3-20 characters. | [default to undefined]
**sender_country_code** | **string** | ISO 3166-1 alpha-2 formatted country code. | [optional] [default to undefined]
**priority** | **number** | Priority level of the sender in the strategy. Must be a positive integer. | [default to undefined]
**status** | **string** | Status of the sender in the strategy. | [default to undefined]
**note** | **string** | Note providing additional context about the sender. Maximum length of 200 characters. Optional. | [optional] [default to undefined]

## Example

```typescript
import { DefaultSenderDefaultSenderStrategiesInner } from 'clicksend';

const instance: DefaultSenderDefaultSenderStrategiesInner = {
    sender_type,
    sender_id,
    sender_country_code,
    priority,
    status,
    note,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
