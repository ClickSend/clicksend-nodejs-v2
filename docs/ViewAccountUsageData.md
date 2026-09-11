# ViewAccountUsageData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sms** | [**Array&lt;ViewAccountUsageDataSmsInner&gt;**](ViewAccountUsageDataSmsInner.md) |  | [optional] [default to undefined]
**mms** | [**Array&lt;ViewAccountUsageDataSmsInner&gt;**](ViewAccountUsageDataSmsInner.md) |  | [optional] [default to undefined]
**voice** | [**Array&lt;ViewAccountUsageDataSmsInner&gt;**](ViewAccountUsageDataSmsInner.md) |  | [optional] [default to undefined]
**fax** | [**Array&lt;ViewAccountUsageDataSmsInner&gt;**](ViewAccountUsageDataSmsInner.md) |  | [optional] [default to undefined]
**post** | [**Array&lt;ViewAccountUsageDataSmsInner&gt;**](ViewAccountUsageDataSmsInner.md) |  | [optional] [default to undefined]
**email** | [**Array&lt;ViewAccountUsageDataEmailInner&gt;**](ViewAccountUsageDataEmailInner.md) |  | [optional] [default to undefined]
**email_transactional** | [**Array&lt;ViewAccountUsageDataEmailInner&gt;**](ViewAccountUsageDataEmailInner.md) |  | [optional] [default to undefined]
**postcards** | [**Array&lt;ViewAccountUsageDataSmsInner&gt;**](ViewAccountUsageDataSmsInner.md) |  | [optional] [default to undefined]
**sms_total** | [**ViewVoiceStatisticsDataTotalOutbound**](ViewVoiceStatisticsDataTotalOutbound.md) |  | [optional] [default to undefined]
**voice_total** | [**ViewVoiceStatisticsDataTotalOutbound**](ViewVoiceStatisticsDataTotalOutbound.md) |  | [optional] [default to undefined]
**fax_total** | [**ViewVoiceStatisticsDataTotalOutbound**](ViewVoiceStatisticsDataTotalOutbound.md) |  | [optional] [default to undefined]
**post_total** | [**ViewVoiceStatisticsDataTotalOutbound**](ViewVoiceStatisticsDataTotalOutbound.md) |  | [optional] [default to undefined]
**email_total** | [**ViewVoiceStatisticsDataTotalOutbound**](ViewVoiceStatisticsDataTotalOutbound.md) |  | [optional] [default to undefined]
**mms_total** | [**ViewVoiceStatisticsDataTotalOutbound**](ViewVoiceStatisticsDataTotalOutbound.md) |  | [optional] [default to undefined]
**email_transactional_total** | [**ViewVoiceStatisticsDataTotalOutbound**](ViewVoiceStatisticsDataTotalOutbound.md) |  | [optional] [default to undefined]
**postcards_total** | [**ViewVoiceStatisticsDataTotalOutbound**](ViewVoiceStatisticsDataTotalOutbound.md) |  | [optional] [default to undefined]
**_currency** | [**Currency**](Currency.md) |  | [optional] [default to undefined]

## Example

```typescript
import { ViewAccountUsageData } from 'clicksend';

const instance: ViewAccountUsageData = {
    sms,
    mms,
    voice,
    fax,
    post,
    email,
    email_transactional,
    postcards,
    sms_total,
    voice_total,
    fax_total,
    post_total,
    email_total,
    mms_total,
    email_transactional_total,
    postcards_total,
    _currency,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
