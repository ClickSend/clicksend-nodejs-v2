# CreateSmsInboundAutomationRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dedicated_number** | **string** |  | [optional] [default to undefined]
**rule_name** | **string** |  | [optional] [default to undefined]
**message_search_type** | **number** |  | [optional] [default to undefined]
**message_search_term** | **string** |  | [optional] [default to undefined]
**action** | **string** |  | [optional] [default to undefined]
**action_address** | **string** |  | [optional] [default to undefined]
**body** | **string** |  | [optional] [default to undefined]
**enabled** | **number** |  | [optional] [default to undefined]

## Example

```typescript
import { CreateSmsInboundAutomationRequest } from 'clicksend';

const instance: CreateSmsInboundAutomationRequest = {
    dedicated_number,
    rule_name,
    message_search_type,
    message_search_term,
    action,
    action_address,
    body,
    enabled,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
