# GetStatisticsDataInnerLinks

Link statistics

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**total** | **number** | Total number of recipients | [optional] [default to undefined]
**opened_unique** | **number** | Total number of recipients that clicked the short URL | [optional] [default to undefined]
**opened_total** | **number** | Total number of clicks on the short URL (e.g. when a recipient clicked the short URL twice, then it will add 2 here) | [optional] [default to undefined]
**unopened** | **number** | Total number of recipients that did not click the short URL (i.e. &#x60;total&#x60; - &#x60;opened_unique&#x60;) | [optional] [default to undefined]

## Example

```typescript
import { GetStatisticsDataInnerLinks } from 'clicksend';

const instance: GetStatisticsDataInnerLinks = {
    total,
    opened_unique,
    opened_total,
    unopened,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
