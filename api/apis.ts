export * from './addressesApi';
import { AddressesApi } from './addressesApi';
export * from './alphaTagsApi';
import { AlphaTagsApi } from './alphaTagsApi';
export * from './contactsApi';
import { ContactsApi } from './contactsApi';
export * from './defaultSendersApi';
import { DefaultSendersApi } from './defaultSendersApi';
export * from './emailApi';
import { EmailApi } from './emailApi';
export * from './emailToSmsApi';
import { EmailToSmsApi } from './emailToSmsApi';
export * from './faxApi';
import { FaxApi } from './faxApi';
export * from './internationalMessagingApi';
import { InternationalMessagingApi } from './internationalMessagingApi';
export * from './lettersApi';
import { LettersApi } from './lettersApi';
export * from './listsApi';
import { ListsApi } from './listsApi';
export * from './managementApi';
import { ManagementApi } from './managementApi';
export * from './messageDeliveryApi';
import { MessageDeliveryApi } from './messageDeliveryApi';
export * from './mmsApi';
import { MmsApi } from './mmsApi';
export * from './mmsCampaignsApi';
import { MmsCampaignsApi } from './mmsCampaignsApi';
export * from './numbersApi';
import { NumbersApi } from './numbersApi';
export * from './ownNumbersApi';
import { OwnNumbersApi } from './ownNumbersApi';
export * from './postcardsApi';
import { PostcardsApi } from './postcardsApi';
export * from './referralsApi';
import { ReferralsApi } from './referralsApi';
export * from './resellerApi';
import { ResellerApi } from './resellerApi';
export * from './smsApi';
import { SmsApi } from './smsApi';
export * from './smsCampaignsApi';
import { SmsCampaignsApi } from './smsCampaignsApi';
export * from './statisticsApi';
import { StatisticsApi } from './statisticsApi';
export * from './subaccountsApi';
import { SubaccountsApi } from './subaccountsApi';
export * from './transactionsApi';
import { TransactionsApi } from './transactionsApi';
export * from './uploadsApi';
import { UploadsApi } from './uploadsApi';
export * from './urlShorteningApi';
import { UrlShorteningApi } from './urlShorteningApi';
export * from './verificationApi';
import { VerificationApi } from './verificationApi';
export * from './voiceApi';
import { VoiceApi } from './voiceApi';
export * from './voiceMessagingApi';
import { VoiceMessagingApi } from './voiceMessagingApi';
import * as http from 'http';

export class HttpError extends Error {
    constructor (public response: http.IncomingMessage, public body: any, public statusCode?: number) {
        super('HTTP request failed');
        this.name = 'HttpError';
    }
}

export { RequestFile } from '../model/models';

export const APIS = [AddressesApi, AlphaTagsApi, ContactsApi, DefaultSendersApi, EmailApi, EmailToSmsApi, FaxApi, InternationalMessagingApi, LettersApi, ListsApi, ManagementApi, MessageDeliveryApi, MmsApi, MmsCampaignsApi, NumbersApi, OwnNumbersApi, PostcardsApi, ReferralsApi, ResellerApi, SmsApi, SmsCampaignsApi, StatisticsApi, SubaccountsApi, TransactionsApi, UploadsApi, UrlShorteningApi, VerificationApi, VoiceApi, VoiceMessagingApi];
