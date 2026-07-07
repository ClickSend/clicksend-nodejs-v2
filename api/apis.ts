export * from './addressesOtherApi';
import { AddressesOtherApi } from './addressesOtherApi';
export * from './alphaTagsOtherApi';
import { AlphaTagsOtherApi } from './alphaTagsOtherApi';
export * from './contactsOtherApi';
import { ContactsOtherApi } from './contactsOtherApi';
export * from './defaultSendersOtherApi';
import { DefaultSendersOtherApi } from './defaultSendersOtherApi';
export * from './emailOtherApi';
import { EmailOtherApi } from './emailOtherApi';
export * from './emailToSmsOtherApi';
import { EmailToSmsOtherApi } from './emailToSmsOtherApi';
export * from './faxOtherApi';
import { FaxOtherApi } from './faxOtherApi';
export * from './internationalMessagingOtherApi';
import { InternationalMessagingOtherApi } from './internationalMessagingOtherApi';
export * from './lettersOtherApi';
import { LettersOtherApi } from './lettersOtherApi';
export * from './listsOtherApi';
import { ListsOtherApi } from './listsOtherApi';
export * from './managementOtherApi';
import { ManagementOtherApi } from './managementOtherApi';
export * from './messageDeliveryOtherApi';
import { MessageDeliveryOtherApi } from './messageDeliveryOtherApi';
export * from './mmsCampaignsOtherApi';
import { MmsCampaignsOtherApi } from './mmsCampaignsOtherApi';
export * from './mmsOtherApi';
import { MmsOtherApi } from './mmsOtherApi';
export * from './numbersOtherApi';
import { NumbersOtherApi } from './numbersOtherApi';
export * from './ownNumbersOtherApi';
import { OwnNumbersOtherApi } from './ownNumbersOtherApi';
export * from './postcardsOtherApi';
import { PostcardsOtherApi } from './postcardsOtherApi';
export * from './referralsOtherApi';
import { ReferralsOtherApi } from './referralsOtherApi';
export * from './resellerOtherApi';
import { ResellerOtherApi } from './resellerOtherApi';
export * from './smsCampaignsOtherApi';
import { SmsCampaignsOtherApi } from './smsCampaignsOtherApi';
export * from './smsOtherApi';
import { SmsOtherApi } from './smsOtherApi';
export * from './statisticsOtherApi';
import { StatisticsOtherApi } from './statisticsOtherApi';
export * from './subaccountsOtherApi';
import { SubaccountsOtherApi } from './subaccountsOtherApi';
export * from './transactionsOtherApi';
import { TransactionsOtherApi } from './transactionsOtherApi';
export * from './uploadsOtherApi';
import { UploadsOtherApi } from './uploadsOtherApi';
export * from './urlShorteningOtherApi';
import { UrlShorteningOtherApi } from './urlShorteningOtherApi';
export * from './verificationOtherApi';
import { VerificationOtherApi } from './verificationOtherApi';
export * from './voiceMessagingOtherApi';
import { VoiceMessagingOtherApi } from './voiceMessagingOtherApi';
export * from './voiceOtherApi';
import { VoiceOtherApi } from './voiceOtherApi';
import * as http from 'http';

export class HttpError extends Error {
    constructor (public response: http.IncomingMessage, public body: any, public statusCode?: number) {
        super('HTTP request failed');
        this.name = 'HttpError';
    }
}

export { RequestFile } from '../model/models';

export const APIS = [AddressesOtherApi, AlphaTagsOtherApi, ContactsOtherApi, DefaultSendersOtherApi, EmailOtherApi, EmailToSmsOtherApi, FaxOtherApi, InternationalMessagingOtherApi, LettersOtherApi, ListsOtherApi, ManagementOtherApi, MessageDeliveryOtherApi, MmsCampaignsOtherApi, MmsOtherApi, NumbersOtherApi, OwnNumbersOtherApi, PostcardsOtherApi, ReferralsOtherApi, ResellerOtherApi, SmsCampaignsOtherApi, SmsOtherApi, StatisticsOtherApi, SubaccountsOtherApi, TransactionsOtherApi, UploadsOtherApi, UrlShorteningOtherApi, VerificationOtherApi, VoiceMessagingOtherApi, VoiceOtherApi];
