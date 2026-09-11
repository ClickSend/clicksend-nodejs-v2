# RequestAlphaTagRequestBusinessesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**country** | **string** |  | [default to undefined]
**business_name** | **string** |  | [default to undefined]
**business_relationship** | **string** | Indicates your relationship to the business being registered.  - **PRIMARY**: Your primary business (linked to your ClickSend account). - **ENTITY_ASSOCIATE**: Sending on behalf of another business you represent or own.  | [default to undefined]
**business_info** | [**RequestAlphaTagRequestBusinessesInnerBusinessInfo**](RequestAlphaTagRequestBusinessesInnerBusinessInfo.md) |  | [default to undefined]
**business_address** | [**RequestAlphaTagRequestBusinessesInnerBusinessAddress**](RequestAlphaTagRequestBusinessesInnerBusinessAddress.md) |  | [default to undefined]
**representative** | [**RequestAlphaTagRequestBusinessesInnerRepresentative**](RequestAlphaTagRequestBusinessesInnerRepresentative.md) |  | [default to undefined]
**abn** | **string** | Australian Business Number (ABN), 11 digits | [default to undefined]
**partner_business_name** | **string** | Partner\&#39;s business name. **Required** when &#x60;business_relationship&#x60; is &#x60;ENTITY_ASSOCIATE&#x60;. **Forbidden** otherwise.  | [optional] [default to undefined]
**partner_abn** | **string** | Partner\&#39;s Australian Business Number (ABN). Must contain only digits. **Required** when &#x60;business_relationship&#x60; is &#x60;ENTITY_ASSOCIATE&#x60;. **Forbidden** otherwise.  | [optional] [default to undefined]
**partner_business_info** | [**RequestAlphaTagRequestBusinessesInnerBusinessInfo**](RequestAlphaTagRequestBusinessesInnerBusinessInfo.md) |  | [optional] [default to undefined]
**partner_business_address** | [**RequestAlphaTagRequestBusinessesInnerBusinessAddress**](RequestAlphaTagRequestBusinessesInnerBusinessAddress.md) |  | [optional] [default to undefined]
**partner_representative** | [**RequestAlphaTagRequestBusinessesInnerPartnerRepresentative**](RequestAlphaTagRequestBusinessesInnerPartnerRepresentative.md) |  | [optional] [default to undefined]

## Example

```typescript
import { RequestAlphaTagRequestBusinessesInner } from 'clicksend';

const instance: RequestAlphaTagRequestBusinessesInner = {
    country,
    business_name,
    business_relationship,
    business_info,
    business_address,
    representative,
    abn,
    partner_business_name,
    partner_abn,
    partner_business_info,
    partner_business_address,
    partner_representative,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
