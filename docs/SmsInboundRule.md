# SmsInboundRule


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**inbound_rule_id** | **number** | The ID of the inbound rule. | [optional] [default to undefined]
**dedicated_number** | **string** | The number to be used in the inbound rule. | [optional] [default to undefined]
**rule_name** | **string** | The name of the inbound rule. | [optional] [default to undefined]
**message_search_type** | **number** | The type of message search to be used in the inbound rule. | [optional] [default to undefined]
**message_search_term** | **string** | The message search term to be used in the inbound rule. | [optional] [default to undefined]
**action** | **string** | The action to be taken in the inbound rule. | [optional] [default to undefined]
**action_address** | **string** | The action address to be used in the inbound rule. | [optional] [default to undefined]
**body** | **string** | The body of the inbound rule. | [optional] [default to undefined]
**enabled** | **number** | The status of the inbound rule. | [optional] [default to undefined]
**webhook_type** | **string** | The format used when calling the webhook (e.g. post, json). | [optional] [default to undefined]

## Example

```typescript
import { SmsInboundRule } from 'clicksend';

const instance: SmsInboundRule = {
    inbound_rule_id,
    dedicated_number,
    rule_name,
    message_search_type,
    message_search_term,
    action,
    action_address,
    body,
    enabled,
    webhook_type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
