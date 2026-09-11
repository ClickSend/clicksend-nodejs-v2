# CalculateSmsPriceDataSummaryCountriesInnerCountryRegulation

The parameters related to the country guidelines on the user level.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**country_user_id** | **number** | Your identifier for the country regulation. | [optional] [default to undefined]
**sms_registration_type** | **number** | The global sending requirement for this country. It can be one of the following:  - **0:** No number or account registration required.      - **1:** Number registration required. You can purchase a registered number from ClickSend. Examples: US and CA.      - **2:** Account registration required. You can register your company details or business details to register your account. Examples: NZ, SG and UAE.  This parameter is a duplicate of registration_type.  &lt;div class&#x3D;\&quot;info-box\&quot;&gt;   &lt;h4&gt;&lt;i class&#x3D;\&quot;fas fa-info-circle\&quot;&gt;&lt;/i&gt; Note:&lt;/h4&gt;   &lt;p&gt;This parameter is fixed and can\&#39;t be changed based on your settings.&lt;/p&gt; &lt;/div&gt; | [optional] [default to undefined]
**restricted_sending** | **boolean** | Indicates whether you have any restriction for sending the message to this country:  - **True:** You\&#39;re restricted from sending messages to this country, possibly due to not having a registered number.      - **False:** You\&#39;re not restricted from sending messages to this country. | [optional] [default to undefined]
**trial_sending** | **boolean** | Indicates whether the country supports trial sending or not:  - **True:** This country supports trial sending      - **False:** This country doesn’t support trial sending  Countries with restricted sending typically offers trial sending. With trial sending, you can send messages to the country without registering your number or account.  &lt;div class&#x3D;\&quot;info-box\&quot;&gt;   &lt;h4&gt;&lt;i class&#x3D;\&quot;fas fa-info-circle\&quot;&gt;&lt;/i&gt; Note:&lt;/h4&gt;   &lt;p&gt;Trial sending has limitations, such as a daily limit of 200 messages in some countries. The limitations vary by country. &lt;br/&gt;&lt;br/&gt; This parameter is fixed and can\&#39;t be changed based on your settings.&lt;/p&gt; &lt;/div&gt; | [optional] [default to undefined]
**regulation_requirements_description** | **string** | The text description of the regulatory requirements. | [optional] [default to undefined]
**created_at** | [**CalculateSmsPriceDataSummaryCountriesInnerCountryRegulationCreatedAt**](CalculateSmsPriceDataSummaryCountriesInnerCountryRegulationCreatedAt.md) |  | [optional] [default to undefined]
**updated_at** | [**CalculateSmsPriceDataSummaryCountriesInnerCountryRegulationCreatedAt**](CalculateSmsPriceDataSummaryCountriesInnerCountryRegulationCreatedAt.md) |  | [optional] [default to undefined]

## Example

```typescript
import { CalculateSmsPriceDataSummaryCountriesInnerCountryRegulation } from 'clicksend';

const instance: CalculateSmsPriceDataSummaryCountriesInnerCountryRegulation = {
    country_user_id,
    sms_registration_type,
    restricted_sending,
    trial_sending,
    regulation_requirements_description,
    created_at,
    updated_at,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
