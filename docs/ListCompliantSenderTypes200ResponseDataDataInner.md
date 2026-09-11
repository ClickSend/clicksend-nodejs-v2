# ListCompliantSenderTypes200ResponseDataDataInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**recipient_country_code** | **string** | ISO 3166-1 alpha-2 formatted country code | [default to undefined]
**blocked_sender_types** | **Array&lt;string&gt;** | List of blocked sender types in recipient country | [default to undefined]
**allowed_sender_types** | [**Array&lt;ListCompliantSenderTypes200ResponseDataDataInnerAllowedSenderTypesInner&gt;**](ListCompliantSenderTypes200ResponseDataDataInnerAllowedSenderTypesInner.md) |  | [default to undefined]

## Example

```typescript
import { ListCompliantSenderTypes200ResponseDataDataInner } from 'clicksend';

const instance: ListCompliantSenderTypes200ResponseDataDataInner = {
    recipient_country_code,
    blocked_sender_types,
    allowed_sender_types,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
