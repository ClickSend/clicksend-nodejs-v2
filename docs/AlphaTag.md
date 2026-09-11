# AlphaTag


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | The unique identifier for the record. | [optional] [default to undefined]
**account_id** | **string** | The unique identifier for the account. | [optional] [default to undefined]
**workspace_id** | **string** | The unique identifier for the workspace. | [optional] [default to undefined]
**user_id** | **string** | The unique identifier for the user. | [optional] [default to undefined]
**alpha_tag** | **string** | The alpha tag. | [optional] [default to undefined]
**status** | **string** | The status of the record. | [optional] [default to undefined]
**reason** | **string** | The reason for the status. | [optional] [default to undefined]
**countries** | **Array&lt;string&gt;** | List of country codes where the alpha tag is requested. If not provided, it means a global alpha tag. | [optional] [default to undefined]
**created_timestamp** | **string** | The timestamp when the record was created. Usually ISO 8601 (e.g. \&quot;2021-05-11T01:00:00.123Z\&quot;), but returned as a plain string rather than a strict date-time since some older records don\&#39;t include a UTC offset (e.g. \&quot;2024-01-10T10:55:26.818097\&quot;). | [optional] [default to undefined]
**updated_timestamp** | **string** | The timestamp when the record was last updated. Usually ISO 8601 (e.g. \&quot;2021-05-11T01:05:00.123Z\&quot;), but returned as a plain string rather than a strict date-time since some older records don\&#39;t include a UTC offset. | [optional] [default to undefined]

## Example

```typescript
import { AlphaTag } from 'clicksend';

const instance: AlphaTag = {
    id,
    account_id,
    workspace_id,
    user_id,
    alpha_tag,
    status,
    reason,
    countries,
    created_timestamp,
    updated_timestamp,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
