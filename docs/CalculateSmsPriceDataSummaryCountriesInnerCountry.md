# CalculateSmsPriceDataSummaryCountriesInnerCountry

The country of the receipient in two-letter format (e.g. US, UK, AU, NZ, etc).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**registration_type** | **number** | The global sending requirement for this country. It can be one of the following:  - **0:** No number or account registration required.      - **1:** Number registration required. You can purchase a registered number from ClickSend. Examples: US and CA.      - **2:** Account registration required. You can register your company details or business details to register your account. Examples: NZ, SG and UAE.  &lt;div class&#x3D;\&quot;info-box\&quot;&gt;   &lt;h4&gt;&lt;i class&#x3D;\&quot;fas fa-info-circle\&quot;&gt;&lt;/i&gt; Note:&lt;/h4&gt;   &lt;p&gt;This parameter is fixed and can\&#39;t be changed based on your settings.&lt;/p&gt; &lt;/div&gt; | [optional] [default to undefined]
**receipient_count** | **number** | The number of messages you are sending to this country. The system can count up to 1000 messages. | [optional] [default to undefined]
**usable_sender_id** | **boolean** | Indicates whether you have a usable ***Sender ID** for this country:  - **True:** A **Sender ID** is available for you to use.      - **False:** No **Sender ID** is available for you to use.  &lt;div class&#x3D;\&quot;info-box\&quot;&gt;     &lt;h4&gt;&lt;i class&#x3D;\&quot;fas fa-info-circle\&quot;&gt;&lt;/i&gt; Note:&lt;/h4&gt;     &lt;p&gt;Countries with &lt;em&gt;registration_type&lt;/em&gt; set to &lt;strong&gt;0&lt;/strong&gt; will have the &lt;em&gt;usable_sender_id&lt;/em&gt; set as &lt;strong&gt;True&lt;/strong&gt;, and messages will be sent from shared numbers.&lt;/p&gt; &lt;/div&gt; | [optional] [default to undefined]
**selected** | **boolean** | Indicates whether you have enabled the global sending for this country:  - **True:** You have selected this country for global sending and can send messages here.      - **False:** You haven’t selected this country for global sending and can’t send messages here. | [optional] [default to undefined]
**name** | **string** | The name of the country. | [optional] [default to undefined]
**regulation** | [**CalculateSmsPriceDataSummaryCountriesInnerCountryRegulation**](CalculateSmsPriceDataSummaryCountriesInnerCountryRegulation.md) |  | [optional] [default to undefined]
**registration_status_id** | **number** | Your current registration status for this country. This parameter is used by the internal team to track the status of your registration. | [optional] [default to undefined]
**registration_entity_id** | **number** | The global sending requirement for this country. It can be one of the following:  - **0:** No number or account registration required.      - **1:** Number registration required. You can purchase a registered number from ClickSend. Examples: US and CA.      - **2:** Account registration required. You can register your company details or business details to register your account. Examples: NZ, SG and UAE.    This parameter is a duplicate of registration_type. It determines which form you need for the global sending registration process.  &lt;div class&#x3D;\&quot;info-box\&quot;&gt;   &lt;h4&gt;&lt;i class&#x3D;\&quot;fas fa-info-circle\&quot;&gt;&lt;/i&gt; Note:&lt;/h4&gt;   &lt;p&gt;This parameter is static. Its value can’t change based on your settings.&lt;/p&gt; &lt;/div&gt; | [optional] [default to undefined]
**jotform_id** | **number** | The Jotform identifier for your account. It’s used to track the global sending registration form. If it is **null**, no Jotform is assigned to you. It is used only for number and account registration. | [optional] [default to undefined]

## Example

```typescript
import { CalculateSmsPriceDataSummaryCountriesInnerCountry } from 'clicksend';

const instance: CalculateSmsPriceDataSummaryCountriesInnerCountry = {
    registration_type,
    receipient_count,
    usable_sender_id,
    selected,
    name,
    regulation,
    registration_status_id,
    registration_entity_id,
    jotform_id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
