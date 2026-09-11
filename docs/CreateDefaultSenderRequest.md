# CreateDefaultSenderRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**country_code** | **string** | The country code of the recipient. Must be a valid ISO 3166-1 alpha-2 country code. | [default to undefined]
**product_type** | **string** | The type of product for the assignment. Support for additional types coming soon. | [default to undefined]
**default_sender_strategies** | [**Array&lt;CreateDefaultSenderRequestDefaultSenderStrategiesInner&gt;**](CreateDefaultSenderRequestDefaultSenderStrategiesInner.md) | Array detailing sender strategies. Must contain exactly 1 element. Multiple strategies support coming soon. | [default to undefined]

## Example

```typescript
import { CreateDefaultSenderRequest } from 'clicksend';

const instance: CreateDefaultSenderRequest = {
    country_code,
    product_type,
    default_sender_strategies,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
