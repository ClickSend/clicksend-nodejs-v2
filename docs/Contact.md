# Contact


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contact_id** | **number** | The unique identifier for the contact. | [optional] [default to undefined]
**list_id** | **number** | The identifier of the list the contact belongs to. | [optional] [default to undefined]
**phone_number** | **string** | The phone number of the contact. | [optional] [default to undefined]
**first_name** | **string** | The first name of the contact. | [optional] [default to undefined]
**last_name** | **string** | The last name of the contact. | [optional] [default to undefined]
**custom_1** | **string** | Custom field 1. | [optional] [default to undefined]
**custom_2** | **string** | Custom field 2. | [optional] [default to undefined]
**custom_3** | **string** | Custom field 3. | [optional] [default to undefined]
**custom_4** | **string** | Custom field 4. | [optional] [default to undefined]
**date_added** | **number** | The date when the contact was added, as a &lt;a href&#x3D;\&quot;http://help.clicksend.com/what-is-a-unix-timestamp\&quot; target&#x3D;\&quot;_blank\&quot;&gt;Unix timestamp&lt;/a&gt;. | [optional] [default to undefined]
**date_updated** | **number** | The date when the contact was last updated, as a &lt;a href&#x3D;\&quot;http://help.clicksend.com/what-is-a-unix-timestamp\&quot; target&#x3D;\&quot;_blank\&quot;&gt;Unix timestamp&lt;/a&gt;. | [optional] [default to undefined]
**fax_number** | **string** | The fax number of the contact. | [optional] [default to undefined]
**organization_name** | **string** | The organization name of the contact. | [optional] [default to undefined]
**email** | **string** | The email address of the contact. | [optional] [default to undefined]
**address_line_1** | **string** | The address line 1 of the contact. | [optional] [default to undefined]
**address_line_2** | **string** | The address line 2 of the contact. | [optional] [default to undefined]
**address_city** | **string** | The address city of the contact. | [optional] [default to undefined]
**address_state** | **string** | The address state of the contact. | [optional] [default to undefined]
**address_postal_code** | **string** | The address postal code of the contact. | [optional] [default to undefined]
**address_country** | **string** | The address country of the contact. | [optional] [default to undefined]
**_list_name** | **string** | The name of the list the contact belongs to. | [optional] [default to undefined]

## Example

```typescript
import { Contact } from 'clicksend';

const instance: Contact = {
    contact_id,
    list_id,
    phone_number,
    first_name,
    last_name,
    custom_1,
    custom_2,
    custom_3,
    custom_4,
    date_added,
    date_updated,
    fax_number,
    organization_name,
    email,
    address_line_1,
    address_line_2,
    address_city,
    address_state,
    address_postal_code,
    address_country,
    _list_name,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
