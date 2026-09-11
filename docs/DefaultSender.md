# DefaultSender


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | ID of the default sender. | [default to undefined]
**user_id** | **number** | User ID from the version 3 system. | [default to undefined]
**subaccount_id** | **number** | Subaccount ID from version 3. | [default to undefined]
**country_code** | **string** | ISO 3166-1 alpha-2 formatted country code. | [default to undefined]
**product_type** | **string** | Type of product for which the setting is applied. | [default to undefined]
**default_sender_strategies** | [**Array&lt;DefaultSenderDefaultSenderStrategiesInner&gt;**](DefaultSenderDefaultSenderStrategiesInner.md) | Default sender strategies. Must contain 1 or more objects. | [default to undefined]
**status** | **string** | Overall status of the default sender. | [default to undefined]
**created_timestamp** | **string** | Timestamp of when the default sender was created. Must be in ISO 8601 format. | [default to undefined]
**updated_timestamp** | **string** | Timestamp of the last update to the default sender. Must be in ISO 8601 format. | [default to undefined]

## Example

```typescript
import { DefaultSender } from 'clicksend';

const instance: DefaultSender = {
    id,
    user_id,
    subaccount_id,
    country_code,
    product_type,
    default_sender_strategies,
    status,
    created_timestamp,
    updated_timestamp,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
