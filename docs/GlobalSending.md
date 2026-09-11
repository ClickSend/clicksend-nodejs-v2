# GlobalSending


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** | The ID of the country. | [optional] [default to undefined]
**name** | **string** | The name of the country. | [optional] [default to undefined]
**code** | **string** | The country code. | [optional] [default to undefined]
**region** | **string** | The region of the country. | [optional] [default to undefined]
**agreed_at** | **number** | The date when the country was agreed upon. | [optional] [default to undefined]
**registration_entity** | [**AccountReferrerChosen**](AccountReferrerChosen.md) |  | [optional] [default to undefined]
**registration_status** | [**GlobalSendingRegistrationStatus**](GlobalSendingRegistrationStatus.md) |  | [optional] [default to undefined]
**jotform_id** | **string** | The ID of the country in JotForm. | [optional] [default to undefined]
**sms_registration_type** | **number** | The type of SMS registration. | [optional] [default to undefined]
**block_registration** | **boolean** | Indicates if registration is blocked. | [optional] [default to undefined]
**block_leads** | **boolean** | Indicates if leads are blocked. | [optional] [default to undefined]
**trial_from_address** | **string** | The trial from address. | [optional] [default to undefined]
**restricted_sending** | **boolean** | Indicates if sending is restricted. | [optional] [default to undefined]
**trial_sending** | **number** | Indicates if trial sending is allowed. | [optional] [default to undefined]
**trial_sending_description** | **string** | Description of trial sending. | [optional] [default to undefined]
**has_regulation_requirements** | **number** | Indicates if there are regulation requirements. | [optional] [default to undefined]
**registration_steps_url** | **string** | URL for registration steps. | [optional] [default to undefined]
**regulation_requirements_description** | **string** | Description of regulation requirements. | [optional] [default to undefined]

## Example

```typescript
import { GlobalSending } from 'clicksend';

const instance: GlobalSending = {
    id,
    name,
    code,
    region,
    agreed_at,
    registration_entity,
    registration_status,
    jotform_id,
    sms_registration_type,
    block_registration,
    block_leads,
    trial_from_address,
    restricted_sending,
    trial_sending,
    trial_sending_description,
    has_regulation_requirements,
    registration_steps_url,
    regulation_requirements_description,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
