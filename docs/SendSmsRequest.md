# SendSmsRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**senders** | [**Array&lt;SendersInner&gt;**](SendersInner.md) | The &#x60;senders&#x60; property specifies sender IDs for each recipient country. - **Want to leverage the default sender settings:**   - If the &#x60;senders&#x60; property is missing or left empty, the system uses the default sender settings configured for each recipient country.  - **Want to override the default sender settings:**   - When the &#x60;senders&#x60; property is provided, it should contain valid sender IDs for each recipient country listed under recipients. These IDs will override the default sender settings for the specified countries.   - If an invalid sender ID is provided, or a sender ID for a specific recipient country is missing, the system will revert to using the default sender settings for that country.  | [optional] [default to undefined]
**shorten_urls** | **boolean** | This controls whether URLs are automatically shortened. This affects all messages in the request. You can either specify:  - **True** - Automatically detects and shortens one URL on each message. - **False** - Leaves all URLs in their original form. This is the default value.  You will be able to retrieve the open rates and statistics for the link from this &lt;a href&#x3D;\&quot;/messaging/url-shortening/other/short-url-get-statistics\&quot;&gt;link&lt;/a&gt;.  More info about shortening URLs &lt;a href&#x3D;\&quot;/messaging/url-shortening/\&quot;&gt; here&lt;/a&gt;.  | [optional] [default to undefined]
**messages** | [**Array&lt;SendSmsRequestMessagesInner&gt;**](SendSmsRequestMessagesInner.md) | Messages to send to customers. | [optional] [default to undefined]

## Example

```typescript
import { SendSmsRequest } from 'clicksend';

const instance: SendSmsRequest = {
    senders,
    shorten_urls,
    messages,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
