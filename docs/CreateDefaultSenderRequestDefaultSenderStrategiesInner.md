# CreateDefaultSenderRequestDefaultSenderStrategiesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sender_type** | **string** | The type of sender for this strategy. | [default to undefined]
**sender_id** | **string** | Unique identifier for the sender. Format varies based on &#x60;sender_type&#x60;: - &#x60;shortcode&#x60;: Numeric, 3-8 digits. - &#x60;longcode&#x60;, &#x60;tollfree&#x60;, &#x60;10DLC&#x60;, &#x60;own_number&#x60;: 2-15 digits, may include &#x60;+&#x60; prefix. - &#x60;alpha_tag&#x60;: 3-11 alphanumeric characters, must include at least one letter or &#x60;+&#x60;. - &#x60;shared_longcode&#x60;: Can be null or empty string.  &gt; **Important:** The &#x60;sender_id&#x60; must be in valid format, owned, and has ready to use status for the corresponding &#x60;sender_type&#x60;.  | [default to undefined]
**sender_country_code** | **string** | The country code of the sender, using the ISO 3166-1 alpha-2 format (e.g., \&quot;US\&quot;).  This field is required in the following cases: - When &#x60;sender_type&#x60; is &#x60;own_number&#x60;, &#x60;longcode&#x60;, &#x60;tollfree&#x60;, or &#x60;10DLC&#x60; - When the &#x60;sender_id&#x60; follows the US/Canada number format (starts with &#x60;+1&#x60;)  For all other cases, this field is optional.  | [optional] [default to undefined]
**note** | **string** | Optional note providing additional context about the sender strategy. | [optional] [default to undefined]

## Example

```typescript
import { CreateDefaultSenderRequestDefaultSenderStrategiesInner } from 'clicksend';

const instance: CreateDefaultSenderRequestDefaultSenderStrategiesInner = {
    sender_type,
    sender_id,
    sender_country_code,
    note,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
