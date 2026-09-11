# EmailDeliveryReceiptRule


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**receipt_rule_id** | **number** | The ID of the receipt rule. | [optional] [default to undefined]
**rule_name** | **string** | The name of the receipt rule. | [optional] [default to undefined]
**match_type** | **number** | The type of match for the rule. | [optional] [default to undefined]
**action** | **string** | The action to be taken by the rule. | [optional] [default to undefined]
**action_address** | **string** | The address associated with the action. | [optional] [default to undefined]
**enabled** | **number** | Indicates whether the rule is enabled. | [optional] [default to undefined]

## Example

```typescript
import { EmailDeliveryReceiptRule } from 'clicksend';

const instance: EmailDeliveryReceiptRule = {
    receipt_rule_id,
    rule_name,
    match_type,
    action,
    action_address,
    enabled,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
