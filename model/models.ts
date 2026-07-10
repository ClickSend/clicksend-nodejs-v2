import localVarRequest from 'request';

export * from './account';
export * from './addAllowedEmail';
export * from './addAllowedEmailRequest';
export * from './agreeToRulesAndRegulation';
export * from './alphaTag';
export * from './attachment';
export * from './buyNumberRequest';
export * from './buyNumberRequestRegistrationData';
export * from './calculateEmailCampaignPrice';
export * from './calculateEmailCampaignPriceData';
export * from './calculateEmailCampaignPriceDataData';
export * from './calculateEmailCampaignPriceRequest';
export * from './calculateEmailPrice';
export * from './calculateEmailPriceData';
export * from './calculateEmailPriceRequest';
export * from './calculateFaxPrice';
export * from './calculateFaxPriceRequest';
export * from './calculateFaxPriceRequestMessagesInner';
export * from './calculateLetterPrice';
export * from './calculateLetterPriceData';
export * from './calculateLetterPriceRequest';
export * from './calculateMmsCampaignPrice';
export * from './calculateMmsCampaignPriceData';
export * from './calculateMmsCampaignPriceDataData';
export * from './calculateMmsPrice';
export * from './calculateMmsPriceRequest';
export * from './calculateMmsPriceRequestMessagesInner';
export * from './calculatePostcardPrice';
export * from './calculateSmsCampaignPrice';
export * from './calculateSmsCampaignPriceData';
export * from './calculateSmsCampaignPriceDataData';
export * from './calculateSmsCampaignPriceRequest';
export * from './calculateSmsPrice';
export * from './calculateSmsPriceData';
export * from './calculateSmsPriceDataSummary';
export * from './calculateSmsPriceDataSummaryCountriesInner';
export * from './calculateSmsPriceDataSummaryCountriesInnerCountry';
export * from './calculateSmsPriceDataSummaryCountriesInnerCountryRegulation';
export * from './calculateSmsPriceDataSummaryCountriesInnerCountryRegulationCreatedAt';
export * from './calculateSmsPriceRequest';
export * from './calculateSmsPriceRequestMessagesInner';
export * from './calculateVoicePrice';
export * from './calculateVoicePriceRequest';
export * from './calculateVoicePriceRequestMessagesInner';
export * from './cancelAllSms';
export * from './cancelAllSmsData';
export * from './cancelAllSmsRequest';
export * from './cancelAllVoiceMessages';
export * from './cancelEmailCampaign';
export * from './cancelEmailCampaignRequest';
export * from './cancelMmsCampaign';
export * from './cancelScheduledLetter';
export * from './cancelScheduledPostcard';
export * from './cancelSms';
export * from './cancelSmsCampaign';
export * from './cancelVoiceMessage';
export * from './contact';
export * from './contactList';
export * from './copyContactToList';
export * from './country';
export * from './createAllowedEmailAddress';
export * from './createAllowedEmailAddressRequest';
export * from './createDefaultSender';
export * from './createDefaultSenderRequest';
export * from './createDefaultSenderRequestDefaultSenderStrategiesInner';
export * from './createDeliveryIssue';
export * from './createDeliveryIssueData';
export * from './createDeliveryIssueRequest';
export * from './createEmailDeliveryReceiptRule';
export * from './createEmailTemplate';
export * from './createEmailTemplateRequest';
export * from './createFaxDeliveryReceiptRule';
export * from './createFaxDeliveryReceiptRuleRequest';
export * from './createFaxInboundRule';
export * from './createFaxInboundRuleRequest';
export * from './createList';
export * from './createListRequest';
export * from './createNewContact';
export * from './createNewContactRequest';
export * from './createResellerAccount';
export * from './createResellerAccountData';
export * from './createResellerAccountRequest';
export * from './createReturnAddress';
export * from './createReturnAddressRequest';
export * from './createSmsDeliveryReceiptRule';
export * from './createSmsDeliveryReceiptRuleRequest';
export * from './createSmsInboundAutomation';
export * from './createSmsInboundAutomationRequest';
export * from './createSmsTemplate';
export * from './createSmsTemplateRequest';
export * from './createStrippedStringRule';
export * from './createStrippedStringRuleRequest';
export * from './createSubaccount';
export * from './createSubaccountRequest';
export * from './createTestInboundSms';
export * from './createTestInboundSmsRequest';
export * from './createTestSmsReceipt';
export * from './createTestSmsReceiptData';
export * from './createTestSmsReceiptRequest';
export * from './createVoiceDeliveryReceiptRule';
export * from './currency';
export * from './currentPaymentInfo';
export * from './currentPaymentInfoData';
export * from './defaultSender';
export * from './defaultSenderDefaultSenderStrategiesInner';
export * from './defaultSenderError';
export * from './defaultSenderErrorDetailsInner';
export * from './deleteAllowedEmailAddress';
export * from './deleteContact';
export * from './deleteEmailDeliveryReceiptRule';
export * from './deleteEmailTemplate';
export * from './deleteFaxDeliveryReceiptRule';
export * from './deleteFaxInboundRule';
export * from './deleteList';
export * from './deleteReturnAddress';
export * from './deleteSmsDeliveryReceiptRule';
export * from './deleteSmsInboundAutomation';
export * from './deleteSmsTemplate';
export * from './deleteStrippedStringRule';
export * from './deleteSubaccount';
export * from './deleteVoiceDeliveryReceiptRule';
export * from './deliveryIssue';
export * from './detectAddress';
export * from './detectAddressData';
export * from './emailAddress';
export * from './emailCampaign';
export * from './emailCampaignHistory';
export * from './emailDeliveryReceiptRule';
export * from './exportEmailHistory';
export * from './exportLetterHistory';
export * from './exportMmsHistory';
export * from './exportPostcardHistory';
export * from './exportSmsHistory';
export * from './exportSmsHistoryData';
export * from './exportVoiceHistory';
export * from './fax';
export * from './faxDeliveryReceiptRule';
export * from './faxReceipt';
export * from './forgotPassword';
export * from './forgotPasswordRequest';
export * from './forgotUsername';
export * from './forgotUsernameRequest';
export * from './generateNewApiKey';
export * from './generateNewApiKeyData';
export * from './generateNewApiKeyRequest';
export * from './getAllDeliveryIssues';
export * from './getCountriesForGlobalSending';
export * from './getDefaultSenderDetails';
export * from './getDefaultSendersList';
export * from './getDefaultSendersListData';
export * from './getSpecificContact';
export * from './getStatistics';
export * from './getStatisticsDataInner';
export * from './getStatisticsDataInnerDeviceInner';
export * from './getStatisticsDataInnerLinks';
export * from './getTracking';
export * from './getTrackingDataInner';
export * from './getTrackingDataInnerContact';
export * from './getVoiceHistory';
export * from './getVoiceHistoryData';
export * from './globalSending';
export * from './globalSendingRegistrationStatus';
export * from './importContacts';
export * from './importContactsData';
export * from './importContactsRequest';
export * from './inboundFaxRule';
export * from './inboundSms';
export * from './inboundSmsTest';
export * from './listAlphaTags';
export * from './listCompliantSenderTypes200Response';
export * from './listCompliantSenderTypes200ResponseData';
export * from './listCompliantSenderTypes200ResponseDataDataInner';
export * from './listCompliantSenderTypes200ResponseDataDataInnerAllowedSenderTypesInner';
export * from './listCompliantSenderTypes200ResponseDataDataInnerAllowedSenderTypesInnerAllowedSenderCountries';
export * from './listCountries';
export * from './listCountriesDataInner';
export * from './listOwnNumbers';
export * from './listOwnNumbersMetadata';
export * from './listOwnNumbersMetadataPagination';
export * from './markInboundSmsAsRead';
export * from './markSmsReceiptAsRead';
export * from './markSmsReceiptAsReadRequest';
export * from './markSpecificInboundSmsMessageAsRead';
export * from './masterEmailTemplate';
export * from './masterEmailTemplateThumbnail';
export * from './mms';
export * from './mmsCampaign';
export * from './model400Error';
export * from './ownNumber';
export * from './pagination';
export * from './postReturnAddress';
export * from './postcardRecipient';
export * from './postcardRecipientReturnAddress';
export * from './purchaseDedicatedNumber';
export * from './purchaseDedicatedNumberData';
export * from './purchaseRechargePackage';
export * from './purchaseRechargePackageData';
export * from './recipient';
export * from './registerNumbers';
export * from './registerNumbersRequest';
export * from './removeDuplicateContacts';
export * from './removeDuplicateContactsRequest';
export * from './removeDuplicateContactsRequestFields';
export * from './removeOptedOutContacts';
export * from './removeOptedOutContactsData';
export * from './requestAlphaTagRequest';
export * from './requestAlphaTagRequestBusinessesInner';
export * from './requestAlphaTagRequestBusinessesInnerBusinessAddress';
export * from './requestAlphaTagRequestBusinessesInnerBusinessInfo';
export * from './requestAlphaTagRequestBusinessesInnerPartnerRepresentative';
export * from './requestAlphaTagRequestBusinessesInnerRepresentative';
export * from './requestOwnNumberVerificationOtp';
export * from './requestOwnNumberVerificationOtpRequest';
export * from './resellerAccount';
export * from './resellerTransferCredit';
export * from './selectCountriesForGlobalSending';
export * from './selectCountriesForGlobalSendingRequest';
export * from './sendEmail';
export * from './sendEmailCampaign';
export * from './sendEmailCampaignData';
export * from './sendEmailCampaignRequest';
export * from './sendEmailRequest';
export * from './sendEmailRequestAttachmentsInner';
export * from './sendEmailRequestFrom';
export * from './sendEmailRequestToInner';
export * from './sendEmailVerificationToken';
export * from './sendEmailVerificationTokenRequest';
export * from './sendEmailVerificationTokenRequestFrom';
export * from './sendEmailVerificationTokenRequestToInner';
export * from './sendFax';
export * from './sendFaxData';
export * from './sendFaxRequest';
export * from './sendFaxRequestMessagesInner';
export * from './sendLetter';
export * from './sendLetterData';
export * from './sendLetterRequest';
export * from './sendMms';
export * from './sendMmsCampaign';
export * from './sendMmsCampaignRequest';
export * from './sendMmsData';
export * from './sendMmsRequest';
export * from './sendMmsRequestMessagesInner';
export * from './sendPostcard';
export * from './sendPostcardData';
export * from './sendPostcardRequest';
export * from './sendPostcardRequestRecipientsInner';
export * from './sendSms';
export * from './sendSmsCampaign';
export * from './sendSmsCampaignRequest';
export * from './sendSmsData';
export * from './sendSmsRequest';
export * from './sendSmsRequestMessagesInner';
export * from './sendVoiceMessage';
export * from './sendVoiceMessageData';
export * from './sendVoiceMessageRequest';
export * from './sendVoiceMessageRequestMessagesInner';
export * from './sendersInner';
export * from './sms';
export * from './smsCampaign';
export * from './smsCampaignSendersInner';
export * from './smsDeliveryReceiptRule';
export * from './smsInboundRule';
export * from './smsReceipt';
export * from './smsSendSms';
export * from './smsTemplate';
export * from './smsTemplateUpdate';
export * from './subaccount';
export * from './timezones';
export * from './transactionalEmail';
export * from './transferContactToList';
export * from './updateClientAccount';
export * from './updateContact';
export * from './updateDefaultSender';
export * from './updateDefaultSenderRequest';
export * from './updateEmailCampaign';
export * from './updateEmailCampaignRequest';
export * from './updateEmailDeliveryReceiptRule';
export * from './updateEmailTemplate';
export * from './updateEmailTemplateRequest';
export * from './updateFaxDeliveryReceiptRule';
export * from './updateFaxDeliveryReceiptRuleRequest';
export * from './updateFaxInboundRule';
export * from './updateList';
export * from './updateMmsCampaign';
export * from './updatePaymentInfo';
export * from './updatePaymentInfoData';
export * from './updatePaymentInfoRequest';
export * from './updateReturnAddress';
export * from './updateReturnAddressRequest';
export * from './updateSmsCampaign';
export * from './updateSmsDeliveryReceiptRule';
export * from './updateSmsInboundAutomation';
export * from './updateSmsInboundAutomationRequest';
export * from './updateSmsTemplate';
export * from './updateStrippedStringRule';
export * from './updateSubaccount';
export * from './updateSubaccountRequest';
export * from './updateVoiceDeliveryReceiptRule';
export * from './userEmailTemplate';
export * from './verifyAllowedEmailAddress';
export * from './verifyAllowedEmailAddressRequest';
export * from './verifyOwnNumberOtp';
export * from './verifyOwnNumberOtpRequest';
export * from './viewASpecificInboundSmsMessage';
export * from './viewASpecificSmsTemplate';
export * from './viewASpecificSmsTemplateData';
export * from './viewAccountDetails';
export * from './viewAccountUsage';
export * from './viewAccountUsageData';
export * from './viewAccountUsageDataEmailInner';
export * from './viewAccountUsageDataEmailTotal';
export * from './viewAccountUsageDataSmsInner';
export * from './viewAccountUsageDataSmsTotal';
export * from './viewAccountUsageDataVoiceInner';
export * from './viewAllEmailCampaigns';
export * from './viewAllEmailCampaignsData';
export * from './viewAllMmsCampaigns';
export * from './viewAllMmsCampaignsData';
export * from './viewAllTransactions';
export * from './viewAllTransactionsData';
export * from './viewAllTransactionsDataAllOfDataInner';
export * from './viewAllowedEmailAddress';
export * from './viewAllowedEmailAddresses';
export * from './viewAllowedEmailAddressesData';
export * from './viewAllowedEmails';
export * from './viewAllowedEmailsDataInner';
export * from './viewAvailableNumbers';
export * from './viewAvailableNumbersData';
export * from './viewAvailableNumbersDataAllOfDataInner';
export * from './viewClientAccounts';
export * from './viewClientAccountsData';
export * from './viewCountries';
export * from './viewEmailCampaign';
export * from './viewEmailCampaignHistory';
export * from './viewEmailCampaignHistoryData';
export * from './viewEmailDeliveryReceiptRule';
export * from './viewEmailDeliveryReceiptRules';
export * from './viewEmailDeliveryReceiptRulesData';
export * from './viewEmailHistory';
export * from './viewEmailTemplate';
export * from './viewEmailTemplates';
export * from './viewEmailTemplatesData';
export * from './viewEmailTemplatesDataDataInner';
export * from './viewFaxDeliveryReceiptRule';
export * from './viewFaxDeliveryReceiptRules';
export * from './viewFaxDeliveryReceiptRulesData';
export * from './viewFaxHistory';
export * from './viewFaxHistoryData';
export * from './viewFaxInboundRule';
export * from './viewFaxInboundRules';
export * from './viewFaxInboundRulesData';
export * from './viewFaxReceipts';
export * from './viewFaxReceiptsData';
export * from './viewInboundSms';
export * from './viewInboundSmsData';
export * from './viewLetterHistory';
export * from './viewLetterHistoryData';
export * from './viewListContacts';
export * from './viewListContactsData';
export * from './viewLists';
export * from './viewListsData';
export * from './viewMasterEmailTemplate';
export * from './viewMasterEmailTemplates';
export * from './viewMmsCampaign';
export * from './viewMmsHistory';
export * from './viewMmsHistoryData';
export * from './viewMmsHistoryDataAllOfDataInner';
export * from './viewPostcardHistory';
export * from './viewPostcardHistoryData';
export * from './viewRechargePackages';
export * from './viewRechargePackagesData';
export * from './viewRechargePackagesDataPackagesInner';
export * from './viewReferralAccounts';
export * from './viewReferralAccountsData';
export * from './viewReferralAccountsDataAllOfDataInner';
export * from './viewSmsCampaigns';
export * from './viewSmsCampaignsData';
export * from './viewSmsDeliveryReceiptRule';
export * from './viewSmsDeliveryReceiptRules';
export * from './viewSmsDeliveryReceiptRulesData';
export * from './viewSmsHistory';
export * from './viewSmsHistoryData';
export * from './viewSmsHistoryDataAllOfDataInner';
export * from './viewSmsInboundAutomation';
export * from './viewSmsInboundAutomations';
export * from './viewSmsInboundAutomationsData';
export * from './viewSmsReceipts';
export * from './viewSmsReceiptsData';
export * from './viewSmsStatistics';
export * from './viewSmsStatisticsData';
export * from './viewSmsStatisticsDataStatInner';
export * from './viewSmsStatisticsDataTotal';
export * from './viewSmsTemplates';
export * from './viewSmsTemplatesData';
export * from './viewSpecificClientAccount';
export * from './viewSpecificFaxReceipt';
export * from './viewSpecificList';
export * from './viewSpecificReturnAddress';
export * from './viewSpecificSmsCampaign';
export * from './viewSpecificSmsReceipt';
export * from './viewSpecificSubaccount';
export * from './viewSpecificTransaction';
export * from './viewStrippedStringRule';
export * from './viewStrippedStringRuleData';
export * from './viewStrippedStringRules';
export * from './viewStrippedStringRulesData';
export * from './viewStrippedStringRulesDataDataInner';
export * from './viewSubaccounts';
export * from './viewSubaccountsData';
export * from './viewTemplateCategories';
export * from './viewTemplateCategoriesDataInner';
export * from './viewTemplateCategory';
export * from './viewTemplateCategoryData';
export * from './viewTemplatesInCategory';
export * from './viewVoiceDeliveryReceiptRule';
export * from './viewVoiceDeliveryReceiptRules';
export * from './viewVoiceDeliveryReceiptRulesData';
export * from './viewVoiceLanguages';
export * from './viewVoiceLanguagesDataInner';
export * from './viewVoiceReceipts';
export * from './viewVoiceReceiptsData';
export * from './viewVoiceStatistics';
export * from './viewVoiceStatisticsData';
export * from './viewVoiceStatisticsDataStatsInner';
export * from './viewVoiceStatisticsDataTotal';
export * from './viewVoiceStatisticsDataTotalOutbound';
export * from './viewYourNumbers';
export * from './viewYourNumbersData';
export * from './viewYourNumbersDataAllOfDataInner';
export * from './viewYourNumbersDataAllOfDataInnerStatus';
export * from './viewYourReturnAddresses';
export * from './viewYourReturnAddressesData';
export * from './voiceDeliveryReceiptRule';
export * from './voiceMessage';
export * from './voiceReceipt';

import * as fs from 'fs';

export interface RequestDetailedFile {
    value: Buffer;
    options?: {
        filename?: string;
        contentType?: string;
    }
}

export type RequestFile = string | Buffer | fs.ReadStream | RequestDetailedFile;


import { Account } from './account';
import { AddAllowedEmail } from './addAllowedEmail';
import { AddAllowedEmailRequest } from './addAllowedEmailRequest';
import { AgreeToRulesAndRegulation } from './agreeToRulesAndRegulation';
import { AlphaTag } from './alphaTag';
import { Attachment } from './attachment';
import { BuyNumberRequest } from './buyNumberRequest';
import { BuyNumberRequestRegistrationData } from './buyNumberRequestRegistrationData';
import { CalculateEmailCampaignPrice } from './calculateEmailCampaignPrice';
import { CalculateEmailCampaignPriceData } from './calculateEmailCampaignPriceData';
import { CalculateEmailCampaignPriceDataData } from './calculateEmailCampaignPriceDataData';
import { CalculateEmailCampaignPriceRequest } from './calculateEmailCampaignPriceRequest';
import { CalculateEmailPrice } from './calculateEmailPrice';
import { CalculateEmailPriceData } from './calculateEmailPriceData';
import { CalculateEmailPriceRequest } from './calculateEmailPriceRequest';
import { CalculateFaxPrice } from './calculateFaxPrice';
import { CalculateFaxPriceRequest } from './calculateFaxPriceRequest';
import { CalculateFaxPriceRequestMessagesInner } from './calculateFaxPriceRequestMessagesInner';
import { CalculateLetterPrice } from './calculateLetterPrice';
import { CalculateLetterPriceData } from './calculateLetterPriceData';
import { CalculateLetterPriceRequest } from './calculateLetterPriceRequest';
import { CalculateMmsCampaignPrice } from './calculateMmsCampaignPrice';
import { CalculateMmsCampaignPriceData } from './calculateMmsCampaignPriceData';
import { CalculateMmsCampaignPriceDataData } from './calculateMmsCampaignPriceDataData';
import { CalculateMmsPrice } from './calculateMmsPrice';
import { CalculateMmsPriceRequest } from './calculateMmsPriceRequest';
import { CalculateMmsPriceRequestMessagesInner } from './calculateMmsPriceRequestMessagesInner';
import { CalculatePostcardPrice } from './calculatePostcardPrice';
import { CalculateSmsCampaignPrice } from './calculateSmsCampaignPrice';
import { CalculateSmsCampaignPriceData } from './calculateSmsCampaignPriceData';
import { CalculateSmsCampaignPriceDataData } from './calculateSmsCampaignPriceDataData';
import { CalculateSmsCampaignPriceRequest } from './calculateSmsCampaignPriceRequest';
import { CalculateSmsPrice } from './calculateSmsPrice';
import { CalculateSmsPriceData } from './calculateSmsPriceData';
import { CalculateSmsPriceDataSummary } from './calculateSmsPriceDataSummary';
import { CalculateSmsPriceDataSummaryCountriesInner } from './calculateSmsPriceDataSummaryCountriesInner';
import { CalculateSmsPriceDataSummaryCountriesInnerCountry } from './calculateSmsPriceDataSummaryCountriesInnerCountry';
import { CalculateSmsPriceDataSummaryCountriesInnerCountryRegulation } from './calculateSmsPriceDataSummaryCountriesInnerCountryRegulation';
import { CalculateSmsPriceDataSummaryCountriesInnerCountryRegulationCreatedAt } from './calculateSmsPriceDataSummaryCountriesInnerCountryRegulationCreatedAt';
import { CalculateSmsPriceRequest } from './calculateSmsPriceRequest';
import { CalculateSmsPriceRequestMessagesInner } from './calculateSmsPriceRequestMessagesInner';
import { CalculateVoicePrice } from './calculateVoicePrice';
import { CalculateVoicePriceRequest } from './calculateVoicePriceRequest';
import { CalculateVoicePriceRequestMessagesInner } from './calculateVoicePriceRequestMessagesInner';
import { CancelAllSms } from './cancelAllSms';
import { CancelAllSmsData } from './cancelAllSmsData';
import { CancelAllSmsRequest } from './cancelAllSmsRequest';
import { CancelAllVoiceMessages } from './cancelAllVoiceMessages';
import { CancelEmailCampaign } from './cancelEmailCampaign';
import { CancelEmailCampaignRequest } from './cancelEmailCampaignRequest';
import { CancelMmsCampaign } from './cancelMmsCampaign';
import { CancelScheduledLetter } from './cancelScheduledLetter';
import { CancelScheduledPostcard } from './cancelScheduledPostcard';
import { CancelSms } from './cancelSms';
import { CancelSmsCampaign } from './cancelSmsCampaign';
import { CancelVoiceMessage } from './cancelVoiceMessage';
import { Contact } from './contact';
import { ContactList } from './contactList';
import { CopyContactToList } from './copyContactToList';
import { Country } from './country';
import { CreateAllowedEmailAddress } from './createAllowedEmailAddress';
import { CreateAllowedEmailAddressRequest } from './createAllowedEmailAddressRequest';
import { CreateDefaultSender } from './createDefaultSender';
import { CreateDefaultSenderRequest } from './createDefaultSenderRequest';
import { CreateDefaultSenderRequestDefaultSenderStrategiesInner } from './createDefaultSenderRequestDefaultSenderStrategiesInner';
import { CreateDeliveryIssue } from './createDeliveryIssue';
import { CreateDeliveryIssueData } from './createDeliveryIssueData';
import { CreateDeliveryIssueRequest } from './createDeliveryIssueRequest';
import { CreateEmailDeliveryReceiptRule } from './createEmailDeliveryReceiptRule';
import { CreateEmailTemplate } from './createEmailTemplate';
import { CreateEmailTemplateRequest } from './createEmailTemplateRequest';
import { CreateFaxDeliveryReceiptRule } from './createFaxDeliveryReceiptRule';
import { CreateFaxDeliveryReceiptRuleRequest } from './createFaxDeliveryReceiptRuleRequest';
import { CreateFaxInboundRule } from './createFaxInboundRule';
import { CreateFaxInboundRuleRequest } from './createFaxInboundRuleRequest';
import { CreateList } from './createList';
import { CreateListRequest } from './createListRequest';
import { CreateNewContact } from './createNewContact';
import { CreateNewContactRequest } from './createNewContactRequest';
import { CreateResellerAccount } from './createResellerAccount';
import { CreateResellerAccountData } from './createResellerAccountData';
import { CreateResellerAccountRequest } from './createResellerAccountRequest';
import { CreateReturnAddress } from './createReturnAddress';
import { CreateReturnAddressRequest } from './createReturnAddressRequest';
import { CreateSmsDeliveryReceiptRule } from './createSmsDeliveryReceiptRule';
import { CreateSmsDeliveryReceiptRuleRequest } from './createSmsDeliveryReceiptRuleRequest';
import { CreateSmsInboundAutomation } from './createSmsInboundAutomation';
import { CreateSmsInboundAutomationRequest } from './createSmsInboundAutomationRequest';
import { CreateSmsTemplate } from './createSmsTemplate';
import { CreateSmsTemplateRequest } from './createSmsTemplateRequest';
import { CreateStrippedStringRule } from './createStrippedStringRule';
import { CreateStrippedStringRuleRequest } from './createStrippedStringRuleRequest';
import { CreateSubaccount } from './createSubaccount';
import { CreateSubaccountRequest } from './createSubaccountRequest';
import { CreateTestInboundSms } from './createTestInboundSms';
import { CreateTestInboundSmsRequest } from './createTestInboundSmsRequest';
import { CreateTestSmsReceipt } from './createTestSmsReceipt';
import { CreateTestSmsReceiptData } from './createTestSmsReceiptData';
import { CreateTestSmsReceiptRequest } from './createTestSmsReceiptRequest';
import { CreateVoiceDeliveryReceiptRule } from './createVoiceDeliveryReceiptRule';
import { Currency } from './currency';
import { CurrentPaymentInfo } from './currentPaymentInfo';
import { CurrentPaymentInfoData } from './currentPaymentInfoData';
import { DefaultSender } from './defaultSender';
import { DefaultSenderDefaultSenderStrategiesInner } from './defaultSenderDefaultSenderStrategiesInner';
import { DefaultSenderError } from './defaultSenderError';
import { DefaultSenderErrorDetailsInner } from './defaultSenderErrorDetailsInner';
import { DeleteAllowedEmailAddress } from './deleteAllowedEmailAddress';
import { DeleteContact } from './deleteContact';
import { DeleteEmailDeliveryReceiptRule } from './deleteEmailDeliveryReceiptRule';
import { DeleteEmailTemplate } from './deleteEmailTemplate';
import { DeleteFaxDeliveryReceiptRule } from './deleteFaxDeliveryReceiptRule';
import { DeleteFaxInboundRule } from './deleteFaxInboundRule';
import { DeleteList } from './deleteList';
import { DeleteReturnAddress } from './deleteReturnAddress';
import { DeleteSmsDeliveryReceiptRule } from './deleteSmsDeliveryReceiptRule';
import { DeleteSmsInboundAutomation } from './deleteSmsInboundAutomation';
import { DeleteSmsTemplate } from './deleteSmsTemplate';
import { DeleteStrippedStringRule } from './deleteStrippedStringRule';
import { DeleteSubaccount } from './deleteSubaccount';
import { DeleteVoiceDeliveryReceiptRule } from './deleteVoiceDeliveryReceiptRule';
import { DeliveryIssue } from './deliveryIssue';
import { DetectAddress } from './detectAddress';
import { DetectAddressData } from './detectAddressData';
import { EmailAddress } from './emailAddress';
import { EmailCampaign } from './emailCampaign';
import { EmailCampaignHistory } from './emailCampaignHistory';
import { EmailDeliveryReceiptRule } from './emailDeliveryReceiptRule';
import { ExportEmailHistory } from './exportEmailHistory';
import { ExportLetterHistory } from './exportLetterHistory';
import { ExportMmsHistory } from './exportMmsHistory';
import { ExportPostcardHistory } from './exportPostcardHistory';
import { ExportSmsHistory } from './exportSmsHistory';
import { ExportSmsHistoryData } from './exportSmsHistoryData';
import { ExportVoiceHistory } from './exportVoiceHistory';
import { Fax } from './fax';
import { FaxDeliveryReceiptRule } from './faxDeliveryReceiptRule';
import { FaxReceipt } from './faxReceipt';
import { ForgotPassword } from './forgotPassword';
import { ForgotPasswordRequest } from './forgotPasswordRequest';
import { ForgotUsername } from './forgotUsername';
import { ForgotUsernameRequest } from './forgotUsernameRequest';
import { GenerateNewApiKey } from './generateNewApiKey';
import { GenerateNewApiKeyData } from './generateNewApiKeyData';
import { GenerateNewApiKeyRequest } from './generateNewApiKeyRequest';
import { GetAllDeliveryIssues } from './getAllDeliveryIssues';
import { GetCountriesForGlobalSending } from './getCountriesForGlobalSending';
import { GetDefaultSenderDetails } from './getDefaultSenderDetails';
import { GetDefaultSendersList } from './getDefaultSendersList';
import { GetDefaultSendersListData } from './getDefaultSendersListData';
import { GetSpecificContact } from './getSpecificContact';
import { GetStatistics } from './getStatistics';
import { GetStatisticsDataInner } from './getStatisticsDataInner';
import { GetStatisticsDataInnerDeviceInner } from './getStatisticsDataInnerDeviceInner';
import { GetStatisticsDataInnerLinks } from './getStatisticsDataInnerLinks';
import { GetTracking } from './getTracking';
import { GetTrackingDataInner } from './getTrackingDataInner';
import { GetTrackingDataInnerContact } from './getTrackingDataInnerContact';
import { GetVoiceHistory } from './getVoiceHistory';
import { GetVoiceHistoryData } from './getVoiceHistoryData';
import { GlobalSending } from './globalSending';
import { GlobalSendingRegistrationStatus } from './globalSendingRegistrationStatus';
import { ImportContacts } from './importContacts';
import { ImportContactsData } from './importContactsData';
import { ImportContactsRequest } from './importContactsRequest';
import { InboundFaxRule } from './inboundFaxRule';
import { InboundSms } from './inboundSms';
import { InboundSmsTest } from './inboundSmsTest';
import { ListAlphaTags } from './listAlphaTags';
import { ListCompliantSenderTypes200Response } from './listCompliantSenderTypes200Response';
import { ListCompliantSenderTypes200ResponseData } from './listCompliantSenderTypes200ResponseData';
import { ListCompliantSenderTypes200ResponseDataDataInner } from './listCompliantSenderTypes200ResponseDataDataInner';
import { ListCompliantSenderTypes200ResponseDataDataInnerAllowedSenderTypesInner } from './listCompliantSenderTypes200ResponseDataDataInnerAllowedSenderTypesInner';
import { ListCompliantSenderTypes200ResponseDataDataInnerAllowedSenderTypesInnerAllowedSenderCountries } from './listCompliantSenderTypes200ResponseDataDataInnerAllowedSenderTypesInnerAllowedSenderCountries';
import { ListCountries } from './listCountries';
import { ListCountriesDataInner } from './listCountriesDataInner';
import { ListOwnNumbers } from './listOwnNumbers';
import { ListOwnNumbersMetadata } from './listOwnNumbersMetadata';
import { ListOwnNumbersMetadataPagination } from './listOwnNumbersMetadataPagination';
import { MarkInboundSmsAsRead } from './markInboundSmsAsRead';
import { MarkSmsReceiptAsRead } from './markSmsReceiptAsRead';
import { MarkSmsReceiptAsReadRequest } from './markSmsReceiptAsReadRequest';
import { MarkSpecificInboundSmsMessageAsRead } from './markSpecificInboundSmsMessageAsRead';
import { MasterEmailTemplate } from './masterEmailTemplate';
import { MasterEmailTemplateThumbnail } from './masterEmailTemplateThumbnail';
import { Mms } from './mms';
import { MmsCampaign } from './mmsCampaign';
import { Model400Error } from './model400Error';
import { OwnNumber } from './ownNumber';
import { Pagination } from './pagination';
import { PostReturnAddress } from './postReturnAddress';
import { PostcardRecipient } from './postcardRecipient';
import { PostcardRecipientReturnAddress } from './postcardRecipientReturnAddress';
import { PurchaseDedicatedNumber } from './purchaseDedicatedNumber';
import { PurchaseDedicatedNumberData } from './purchaseDedicatedNumberData';
import { PurchaseRechargePackage } from './purchaseRechargePackage';
import { PurchaseRechargePackageData } from './purchaseRechargePackageData';
import { Recipient } from './recipient';
import { RegisterNumbers } from './registerNumbers';
import { RegisterNumbersRequest } from './registerNumbersRequest';
import { RemoveDuplicateContacts } from './removeDuplicateContacts';
import { RemoveDuplicateContactsRequest } from './removeDuplicateContactsRequest';
import { RemoveDuplicateContactsRequestFields } from './removeDuplicateContactsRequestFields';
import { RemoveOptedOutContacts } from './removeOptedOutContacts';
import { RemoveOptedOutContactsData } from './removeOptedOutContactsData';
import { RequestAlphaTagRequest } from './requestAlphaTagRequest';
import { RequestAlphaTagRequestBusinessesInner } from './requestAlphaTagRequestBusinessesInner';
import { RequestAlphaTagRequestBusinessesInnerBusinessAddress } from './requestAlphaTagRequestBusinessesInnerBusinessAddress';
import { RequestAlphaTagRequestBusinessesInnerBusinessInfo } from './requestAlphaTagRequestBusinessesInnerBusinessInfo';
import { RequestAlphaTagRequestBusinessesInnerPartnerRepresentative } from './requestAlphaTagRequestBusinessesInnerPartnerRepresentative';
import { RequestAlphaTagRequestBusinessesInnerRepresentative } from './requestAlphaTagRequestBusinessesInnerRepresentative';
import { RequestOwnNumberVerificationOtp } from './requestOwnNumberVerificationOtp';
import { RequestOwnNumberVerificationOtpRequest } from './requestOwnNumberVerificationOtpRequest';
import { ResellerAccount } from './resellerAccount';
import { ResellerTransferCredit } from './resellerTransferCredit';
import { SelectCountriesForGlobalSending } from './selectCountriesForGlobalSending';
import { SelectCountriesForGlobalSendingRequest } from './selectCountriesForGlobalSendingRequest';
import { SendEmail } from './sendEmail';
import { SendEmailCampaign } from './sendEmailCampaign';
import { SendEmailCampaignData } from './sendEmailCampaignData';
import { SendEmailCampaignRequest } from './sendEmailCampaignRequest';
import { SendEmailRequest } from './sendEmailRequest';
import { SendEmailRequestAttachmentsInner } from './sendEmailRequestAttachmentsInner';
import { SendEmailRequestFrom } from './sendEmailRequestFrom';
import { SendEmailRequestToInner } from './sendEmailRequestToInner';
import { SendEmailVerificationToken } from './sendEmailVerificationToken';
import { SendEmailVerificationTokenRequest } from './sendEmailVerificationTokenRequest';
import { SendEmailVerificationTokenRequestFrom } from './sendEmailVerificationTokenRequestFrom';
import { SendEmailVerificationTokenRequestToInner } from './sendEmailVerificationTokenRequestToInner';
import { SendFax } from './sendFax';
import { SendFaxData } from './sendFaxData';
import { SendFaxRequest } from './sendFaxRequest';
import { SendFaxRequestMessagesInner } from './sendFaxRequestMessagesInner';
import { SendLetter } from './sendLetter';
import { SendLetterData } from './sendLetterData';
import { SendLetterRequest } from './sendLetterRequest';
import { SendMms } from './sendMms';
import { SendMmsCampaign } from './sendMmsCampaign';
import { SendMmsCampaignRequest } from './sendMmsCampaignRequest';
import { SendMmsData } from './sendMmsData';
import { SendMmsRequest } from './sendMmsRequest';
import { SendMmsRequestMessagesInner } from './sendMmsRequestMessagesInner';
import { SendPostcard } from './sendPostcard';
import { SendPostcardData } from './sendPostcardData';
import { SendPostcardRequest } from './sendPostcardRequest';
import { SendPostcardRequestRecipientsInner } from './sendPostcardRequestRecipientsInner';
import { SendSms } from './sendSms';
import { SendSmsCampaign } from './sendSmsCampaign';
import { SendSmsCampaignRequest } from './sendSmsCampaignRequest';
import { SendSmsData } from './sendSmsData';
import { SendSmsRequest } from './sendSmsRequest';
import { SendSmsRequestMessagesInner } from './sendSmsRequestMessagesInner';
import { SendVoiceMessage } from './sendVoiceMessage';
import { SendVoiceMessageData } from './sendVoiceMessageData';
import { SendVoiceMessageRequest } from './sendVoiceMessageRequest';
import { SendVoiceMessageRequestMessagesInner } from './sendVoiceMessageRequestMessagesInner';
import { SendersInner } from './sendersInner';
import { Sms } from './sms';
import { SmsCampaign } from './smsCampaign';
import { SmsCampaignSendersInner } from './smsCampaignSendersInner';
import { SmsDeliveryReceiptRule } from './smsDeliveryReceiptRule';
import { SmsInboundRule } from './smsInboundRule';
import { SmsReceipt } from './smsReceipt';
import { SmsSendSms } from './smsSendSms';
import { SmsTemplate } from './smsTemplate';
import { SmsTemplateUpdate } from './smsTemplateUpdate';
import { Subaccount } from './subaccount';
import { Timezones } from './timezones';
import { TransactionalEmail } from './transactionalEmail';
import { TransferContactToList } from './transferContactToList';
import { UpdateClientAccount } from './updateClientAccount';
import { UpdateContact } from './updateContact';
import { UpdateDefaultSender } from './updateDefaultSender';
import { UpdateDefaultSenderRequest } from './updateDefaultSenderRequest';
import { UpdateEmailCampaign } from './updateEmailCampaign';
import { UpdateEmailCampaignRequest } from './updateEmailCampaignRequest';
import { UpdateEmailDeliveryReceiptRule } from './updateEmailDeliveryReceiptRule';
import { UpdateEmailTemplate } from './updateEmailTemplate';
import { UpdateEmailTemplateRequest } from './updateEmailTemplateRequest';
import { UpdateFaxDeliveryReceiptRule } from './updateFaxDeliveryReceiptRule';
import { UpdateFaxDeliveryReceiptRuleRequest } from './updateFaxDeliveryReceiptRuleRequest';
import { UpdateFaxInboundRule } from './updateFaxInboundRule';
import { UpdateList } from './updateList';
import { UpdateMmsCampaign } from './updateMmsCampaign';
import { UpdatePaymentInfo } from './updatePaymentInfo';
import { UpdatePaymentInfoData } from './updatePaymentInfoData';
import { UpdatePaymentInfoRequest } from './updatePaymentInfoRequest';
import { UpdateReturnAddress } from './updateReturnAddress';
import { UpdateReturnAddressRequest } from './updateReturnAddressRequest';
import { UpdateSmsCampaign } from './updateSmsCampaign';
import { UpdateSmsDeliveryReceiptRule } from './updateSmsDeliveryReceiptRule';
import { UpdateSmsInboundAutomation } from './updateSmsInboundAutomation';
import { UpdateSmsInboundAutomationRequest } from './updateSmsInboundAutomationRequest';
import { UpdateSmsTemplate } from './updateSmsTemplate';
import { UpdateStrippedStringRule } from './updateStrippedStringRule';
import { UpdateSubaccount } from './updateSubaccount';
import { UpdateSubaccountRequest } from './updateSubaccountRequest';
import { UpdateVoiceDeliveryReceiptRule } from './updateVoiceDeliveryReceiptRule';
import { UserEmailTemplate } from './userEmailTemplate';
import { VerifyAllowedEmailAddress } from './verifyAllowedEmailAddress';
import { VerifyAllowedEmailAddressRequest } from './verifyAllowedEmailAddressRequest';
import { VerifyOwnNumberOtp } from './verifyOwnNumberOtp';
import { VerifyOwnNumberOtpRequest } from './verifyOwnNumberOtpRequest';
import { ViewASpecificInboundSmsMessage } from './viewASpecificInboundSmsMessage';
import { ViewASpecificSmsTemplate } from './viewASpecificSmsTemplate';
import { ViewASpecificSmsTemplateData } from './viewASpecificSmsTemplateData';
import { ViewAccountDetails } from './viewAccountDetails';
import { ViewAccountUsage } from './viewAccountUsage';
import { ViewAccountUsageData } from './viewAccountUsageData';
import { ViewAccountUsageDataEmailInner } from './viewAccountUsageDataEmailInner';
import { ViewAccountUsageDataEmailTotal } from './viewAccountUsageDataEmailTotal';
import { ViewAccountUsageDataSmsInner } from './viewAccountUsageDataSmsInner';
import { ViewAccountUsageDataSmsTotal } from './viewAccountUsageDataSmsTotal';
import { ViewAccountUsageDataVoiceInner } from './viewAccountUsageDataVoiceInner';
import { ViewAllEmailCampaigns } from './viewAllEmailCampaigns';
import { ViewAllEmailCampaignsData } from './viewAllEmailCampaignsData';
import { ViewAllMmsCampaigns } from './viewAllMmsCampaigns';
import { ViewAllMmsCampaignsData } from './viewAllMmsCampaignsData';
import { ViewAllTransactions } from './viewAllTransactions';
import { ViewAllTransactionsData } from './viewAllTransactionsData';
import { ViewAllTransactionsDataAllOfDataInner } from './viewAllTransactionsDataAllOfDataInner';
import { ViewAllowedEmailAddress } from './viewAllowedEmailAddress';
import { ViewAllowedEmailAddresses } from './viewAllowedEmailAddresses';
import { ViewAllowedEmailAddressesData } from './viewAllowedEmailAddressesData';
import { ViewAllowedEmails } from './viewAllowedEmails';
import { ViewAllowedEmailsDataInner } from './viewAllowedEmailsDataInner';
import { ViewAvailableNumbers } from './viewAvailableNumbers';
import { ViewAvailableNumbersData } from './viewAvailableNumbersData';
import { ViewAvailableNumbersDataAllOfDataInner } from './viewAvailableNumbersDataAllOfDataInner';
import { ViewClientAccounts } from './viewClientAccounts';
import { ViewClientAccountsData } from './viewClientAccountsData';
import { ViewCountries } from './viewCountries';
import { ViewEmailCampaign } from './viewEmailCampaign';
import { ViewEmailCampaignHistory } from './viewEmailCampaignHistory';
import { ViewEmailCampaignHistoryData } from './viewEmailCampaignHistoryData';
import { ViewEmailDeliveryReceiptRule } from './viewEmailDeliveryReceiptRule';
import { ViewEmailDeliveryReceiptRules } from './viewEmailDeliveryReceiptRules';
import { ViewEmailDeliveryReceiptRulesData } from './viewEmailDeliveryReceiptRulesData';
import { ViewEmailHistory } from './viewEmailHistory';
import { ViewEmailTemplate } from './viewEmailTemplate';
import { ViewEmailTemplates } from './viewEmailTemplates';
import { ViewEmailTemplatesData } from './viewEmailTemplatesData';
import { ViewEmailTemplatesDataDataInner } from './viewEmailTemplatesDataDataInner';
import { ViewFaxDeliveryReceiptRule } from './viewFaxDeliveryReceiptRule';
import { ViewFaxDeliveryReceiptRules } from './viewFaxDeliveryReceiptRules';
import { ViewFaxDeliveryReceiptRulesData } from './viewFaxDeliveryReceiptRulesData';
import { ViewFaxHistory } from './viewFaxHistory';
import { ViewFaxHistoryData } from './viewFaxHistoryData';
import { ViewFaxInboundRule } from './viewFaxInboundRule';
import { ViewFaxInboundRules } from './viewFaxInboundRules';
import { ViewFaxInboundRulesData } from './viewFaxInboundRulesData';
import { ViewFaxReceipts } from './viewFaxReceipts';
import { ViewFaxReceiptsData } from './viewFaxReceiptsData';
import { ViewInboundSms } from './viewInboundSms';
import { ViewInboundSmsData } from './viewInboundSmsData';
import { ViewLetterHistory } from './viewLetterHistory';
import { ViewLetterHistoryData } from './viewLetterHistoryData';
import { ViewListContacts } from './viewListContacts';
import { ViewListContactsData } from './viewListContactsData';
import { ViewLists } from './viewLists';
import { ViewListsData } from './viewListsData';
import { ViewMasterEmailTemplate } from './viewMasterEmailTemplate';
import { ViewMasterEmailTemplates } from './viewMasterEmailTemplates';
import { ViewMmsCampaign } from './viewMmsCampaign';
import { ViewMmsHistory } from './viewMmsHistory';
import { ViewMmsHistoryData } from './viewMmsHistoryData';
import { ViewMmsHistoryDataAllOfDataInner } from './viewMmsHistoryDataAllOfDataInner';
import { ViewPostcardHistory } from './viewPostcardHistory';
import { ViewPostcardHistoryData } from './viewPostcardHistoryData';
import { ViewRechargePackages } from './viewRechargePackages';
import { ViewRechargePackagesData } from './viewRechargePackagesData';
import { ViewRechargePackagesDataPackagesInner } from './viewRechargePackagesDataPackagesInner';
import { ViewReferralAccounts } from './viewReferralAccounts';
import { ViewReferralAccountsData } from './viewReferralAccountsData';
import { ViewReferralAccountsDataAllOfDataInner } from './viewReferralAccountsDataAllOfDataInner';
import { ViewSmsCampaigns } from './viewSmsCampaigns';
import { ViewSmsCampaignsData } from './viewSmsCampaignsData';
import { ViewSmsDeliveryReceiptRule } from './viewSmsDeliveryReceiptRule';
import { ViewSmsDeliveryReceiptRules } from './viewSmsDeliveryReceiptRules';
import { ViewSmsDeliveryReceiptRulesData } from './viewSmsDeliveryReceiptRulesData';
import { ViewSmsHistory } from './viewSmsHistory';
import { ViewSmsHistoryData } from './viewSmsHistoryData';
import { ViewSmsHistoryDataAllOfDataInner } from './viewSmsHistoryDataAllOfDataInner';
import { ViewSmsInboundAutomation } from './viewSmsInboundAutomation';
import { ViewSmsInboundAutomations } from './viewSmsInboundAutomations';
import { ViewSmsInboundAutomationsData } from './viewSmsInboundAutomationsData';
import { ViewSmsReceipts } from './viewSmsReceipts';
import { ViewSmsReceiptsData } from './viewSmsReceiptsData';
import { ViewSmsStatistics } from './viewSmsStatistics';
import { ViewSmsStatisticsData } from './viewSmsStatisticsData';
import { ViewSmsStatisticsDataStatInner } from './viewSmsStatisticsDataStatInner';
import { ViewSmsStatisticsDataTotal } from './viewSmsStatisticsDataTotal';
import { ViewSmsTemplates } from './viewSmsTemplates';
import { ViewSmsTemplatesData } from './viewSmsTemplatesData';
import { ViewSpecificClientAccount } from './viewSpecificClientAccount';
import { ViewSpecificFaxReceipt } from './viewSpecificFaxReceipt';
import { ViewSpecificList } from './viewSpecificList';
import { ViewSpecificReturnAddress } from './viewSpecificReturnAddress';
import { ViewSpecificSmsCampaign } from './viewSpecificSmsCampaign';
import { ViewSpecificSmsReceipt } from './viewSpecificSmsReceipt';
import { ViewSpecificSubaccount } from './viewSpecificSubaccount';
import { ViewSpecificTransaction } from './viewSpecificTransaction';
import { ViewStrippedStringRule } from './viewStrippedStringRule';
import { ViewStrippedStringRuleData } from './viewStrippedStringRuleData';
import { ViewStrippedStringRules } from './viewStrippedStringRules';
import { ViewStrippedStringRulesData } from './viewStrippedStringRulesData';
import { ViewStrippedStringRulesDataDataInner } from './viewStrippedStringRulesDataDataInner';
import { ViewSubaccounts } from './viewSubaccounts';
import { ViewSubaccountsData } from './viewSubaccountsData';
import { ViewTemplateCategories } from './viewTemplateCategories';
import { ViewTemplateCategoriesDataInner } from './viewTemplateCategoriesDataInner';
import { ViewTemplateCategory } from './viewTemplateCategory';
import { ViewTemplateCategoryData } from './viewTemplateCategoryData';
import { ViewTemplatesInCategory } from './viewTemplatesInCategory';
import { ViewVoiceDeliveryReceiptRule } from './viewVoiceDeliveryReceiptRule';
import { ViewVoiceDeliveryReceiptRules } from './viewVoiceDeliveryReceiptRules';
import { ViewVoiceDeliveryReceiptRulesData } from './viewVoiceDeliveryReceiptRulesData';
import { ViewVoiceLanguages } from './viewVoiceLanguages';
import { ViewVoiceLanguagesDataInner } from './viewVoiceLanguagesDataInner';
import { ViewVoiceReceipts } from './viewVoiceReceipts';
import { ViewVoiceReceiptsData } from './viewVoiceReceiptsData';
import { ViewVoiceStatistics } from './viewVoiceStatistics';
import { ViewVoiceStatisticsData } from './viewVoiceStatisticsData';
import { ViewVoiceStatisticsDataStatsInner } from './viewVoiceStatisticsDataStatsInner';
import { ViewVoiceStatisticsDataTotal } from './viewVoiceStatisticsDataTotal';
import { ViewVoiceStatisticsDataTotalOutbound } from './viewVoiceStatisticsDataTotalOutbound';
import { ViewYourNumbers } from './viewYourNumbers';
import { ViewYourNumbersData } from './viewYourNumbersData';
import { ViewYourNumbersDataAllOfDataInner } from './viewYourNumbersDataAllOfDataInner';
import { ViewYourNumbersDataAllOfDataInnerStatus } from './viewYourNumbersDataAllOfDataInnerStatus';
import { ViewYourReturnAddresses } from './viewYourReturnAddresses';
import { ViewYourReturnAddressesData } from './viewYourReturnAddressesData';
import { VoiceDeliveryReceiptRule } from './voiceDeliveryReceiptRule';
import { VoiceMessage } from './voiceMessage';
import { VoiceReceipt } from './voiceReceipt';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

let enumsMap: {[index: string]: any} = {
        "BuyNumberRequest.TypeEnum": BuyNumberRequest.TypeEnum,
        "CreateDefaultSenderRequest.ProductTypeEnum": CreateDefaultSenderRequest.ProductTypeEnum,
        "CreateDefaultSenderRequestDefaultSenderStrategiesInner.SenderTypeEnum": CreateDefaultSenderRequestDefaultSenderStrategiesInner.SenderTypeEnum,
        "DefaultSender.ProductTypeEnum": DefaultSender.ProductTypeEnum,
        "DefaultSender.StatusEnum": DefaultSender.StatusEnum,
        "DefaultSenderDefaultSenderStrategiesInner.SenderTypeEnum": DefaultSenderDefaultSenderStrategiesInner.SenderTypeEnum,
        "DefaultSenderDefaultSenderStrategiesInner.StatusEnum": DefaultSenderDefaultSenderStrategiesInner.StatusEnum,
        "ListCompliantSenderTypes200ResponseDataDataInnerAllowedSenderTypesInner.SenderTypeEnum": ListCompliantSenderTypes200ResponseDataDataInnerAllowedSenderTypesInner.SenderTypeEnum,
        "RequestAlphaTagRequest.CountriesEnum": RequestAlphaTagRequest.CountriesEnum,
        "RequestAlphaTagRequestBusinessesInner.CountryEnum": RequestAlphaTagRequestBusinessesInner.CountryEnum,
        "RequestAlphaTagRequestBusinessesInner.BusinessRelationshipEnum": RequestAlphaTagRequestBusinessesInner.BusinessRelationshipEnum,
        "SendersInner.SenderTypeEnum": SendersInner.SenderTypeEnum,
        "ViewYourNumbersDataAllOfDataInnerStatus.ValueEnum": ViewYourNumbersDataAllOfDataInnerStatus.ValueEnum,
        "ViewYourNumbersDataAllOfDataInnerStatus.LabelEnum": ViewYourNumbersDataAllOfDataInnerStatus.LabelEnum,
        "ViewYourNumbersDataAllOfDataInnerStatus.NameEnum": ViewYourNumbersDataAllOfDataInnerStatus.NameEnum,
}

let typeMap: {[index: string]: any} = {
    "Account": Account,
    "AddAllowedEmail": AddAllowedEmail,
    "AddAllowedEmailRequest": AddAllowedEmailRequest,
    "AgreeToRulesAndRegulation": AgreeToRulesAndRegulation,
    "AlphaTag": AlphaTag,
    "Attachment": Attachment,
    "BuyNumberRequest": BuyNumberRequest,
    "BuyNumberRequestRegistrationData": BuyNumberRequestRegistrationData,
    "CalculateEmailCampaignPrice": CalculateEmailCampaignPrice,
    "CalculateEmailCampaignPriceData": CalculateEmailCampaignPriceData,
    "CalculateEmailCampaignPriceDataData": CalculateEmailCampaignPriceDataData,
    "CalculateEmailCampaignPriceRequest": CalculateEmailCampaignPriceRequest,
    "CalculateEmailPrice": CalculateEmailPrice,
    "CalculateEmailPriceData": CalculateEmailPriceData,
    "CalculateEmailPriceRequest": CalculateEmailPriceRequest,
    "CalculateFaxPrice": CalculateFaxPrice,
    "CalculateFaxPriceRequest": CalculateFaxPriceRequest,
    "CalculateFaxPriceRequestMessagesInner": CalculateFaxPriceRequestMessagesInner,
    "CalculateLetterPrice": CalculateLetterPrice,
    "CalculateLetterPriceData": CalculateLetterPriceData,
    "CalculateLetterPriceRequest": CalculateLetterPriceRequest,
    "CalculateMmsCampaignPrice": CalculateMmsCampaignPrice,
    "CalculateMmsCampaignPriceData": CalculateMmsCampaignPriceData,
    "CalculateMmsCampaignPriceDataData": CalculateMmsCampaignPriceDataData,
    "CalculateMmsPrice": CalculateMmsPrice,
    "CalculateMmsPriceRequest": CalculateMmsPriceRequest,
    "CalculateMmsPriceRequestMessagesInner": CalculateMmsPriceRequestMessagesInner,
    "CalculatePostcardPrice": CalculatePostcardPrice,
    "CalculateSmsCampaignPrice": CalculateSmsCampaignPrice,
    "CalculateSmsCampaignPriceData": CalculateSmsCampaignPriceData,
    "CalculateSmsCampaignPriceDataData": CalculateSmsCampaignPriceDataData,
    "CalculateSmsCampaignPriceRequest": CalculateSmsCampaignPriceRequest,
    "CalculateSmsPrice": CalculateSmsPrice,
    "CalculateSmsPriceData": CalculateSmsPriceData,
    "CalculateSmsPriceDataSummary": CalculateSmsPriceDataSummary,
    "CalculateSmsPriceDataSummaryCountriesInner": CalculateSmsPriceDataSummaryCountriesInner,
    "CalculateSmsPriceDataSummaryCountriesInnerCountry": CalculateSmsPriceDataSummaryCountriesInnerCountry,
    "CalculateSmsPriceDataSummaryCountriesInnerCountryRegulation": CalculateSmsPriceDataSummaryCountriesInnerCountryRegulation,
    "CalculateSmsPriceDataSummaryCountriesInnerCountryRegulationCreatedAt": CalculateSmsPriceDataSummaryCountriesInnerCountryRegulationCreatedAt,
    "CalculateSmsPriceRequest": CalculateSmsPriceRequest,
    "CalculateSmsPriceRequestMessagesInner": CalculateSmsPriceRequestMessagesInner,
    "CalculateVoicePrice": CalculateVoicePrice,
    "CalculateVoicePriceRequest": CalculateVoicePriceRequest,
    "CalculateVoicePriceRequestMessagesInner": CalculateVoicePriceRequestMessagesInner,
    "CancelAllSms": CancelAllSms,
    "CancelAllSmsData": CancelAllSmsData,
    "CancelAllSmsRequest": CancelAllSmsRequest,
    "CancelAllVoiceMessages": CancelAllVoiceMessages,
    "CancelEmailCampaign": CancelEmailCampaign,
    "CancelEmailCampaignRequest": CancelEmailCampaignRequest,
    "CancelMmsCampaign": CancelMmsCampaign,
    "CancelScheduledLetter": CancelScheduledLetter,
    "CancelScheduledPostcard": CancelScheduledPostcard,
    "CancelSms": CancelSms,
    "CancelSmsCampaign": CancelSmsCampaign,
    "CancelVoiceMessage": CancelVoiceMessage,
    "Contact": Contact,
    "ContactList": ContactList,
    "CopyContactToList": CopyContactToList,
    "Country": Country,
    "CreateAllowedEmailAddress": CreateAllowedEmailAddress,
    "CreateAllowedEmailAddressRequest": CreateAllowedEmailAddressRequest,
    "CreateDefaultSender": CreateDefaultSender,
    "CreateDefaultSenderRequest": CreateDefaultSenderRequest,
    "CreateDefaultSenderRequestDefaultSenderStrategiesInner": CreateDefaultSenderRequestDefaultSenderStrategiesInner,
    "CreateDeliveryIssue": CreateDeliveryIssue,
    "CreateDeliveryIssueData": CreateDeliveryIssueData,
    "CreateDeliveryIssueRequest": CreateDeliveryIssueRequest,
    "CreateEmailDeliveryReceiptRule": CreateEmailDeliveryReceiptRule,
    "CreateEmailTemplate": CreateEmailTemplate,
    "CreateEmailTemplateRequest": CreateEmailTemplateRequest,
    "CreateFaxDeliveryReceiptRule": CreateFaxDeliveryReceiptRule,
    "CreateFaxDeliveryReceiptRuleRequest": CreateFaxDeliveryReceiptRuleRequest,
    "CreateFaxInboundRule": CreateFaxInboundRule,
    "CreateFaxInboundRuleRequest": CreateFaxInboundRuleRequest,
    "CreateList": CreateList,
    "CreateListRequest": CreateListRequest,
    "CreateNewContact": CreateNewContact,
    "CreateNewContactRequest": CreateNewContactRequest,
    "CreateResellerAccount": CreateResellerAccount,
    "CreateResellerAccountData": CreateResellerAccountData,
    "CreateResellerAccountRequest": CreateResellerAccountRequest,
    "CreateReturnAddress": CreateReturnAddress,
    "CreateReturnAddressRequest": CreateReturnAddressRequest,
    "CreateSmsDeliveryReceiptRule": CreateSmsDeliveryReceiptRule,
    "CreateSmsDeliveryReceiptRuleRequest": CreateSmsDeliveryReceiptRuleRequest,
    "CreateSmsInboundAutomation": CreateSmsInboundAutomation,
    "CreateSmsInboundAutomationRequest": CreateSmsInboundAutomationRequest,
    "CreateSmsTemplate": CreateSmsTemplate,
    "CreateSmsTemplateRequest": CreateSmsTemplateRequest,
    "CreateStrippedStringRule": CreateStrippedStringRule,
    "CreateStrippedStringRuleRequest": CreateStrippedStringRuleRequest,
    "CreateSubaccount": CreateSubaccount,
    "CreateSubaccountRequest": CreateSubaccountRequest,
    "CreateTestInboundSms": CreateTestInboundSms,
    "CreateTestInboundSmsRequest": CreateTestInboundSmsRequest,
    "CreateTestSmsReceipt": CreateTestSmsReceipt,
    "CreateTestSmsReceiptData": CreateTestSmsReceiptData,
    "CreateTestSmsReceiptRequest": CreateTestSmsReceiptRequest,
    "CreateVoiceDeliveryReceiptRule": CreateVoiceDeliveryReceiptRule,
    "Currency": Currency,
    "CurrentPaymentInfo": CurrentPaymentInfo,
    "CurrentPaymentInfoData": CurrentPaymentInfoData,
    "DefaultSender": DefaultSender,
    "DefaultSenderDefaultSenderStrategiesInner": DefaultSenderDefaultSenderStrategiesInner,
    "DefaultSenderError": DefaultSenderError,
    "DefaultSenderErrorDetailsInner": DefaultSenderErrorDetailsInner,
    "DeleteAllowedEmailAddress": DeleteAllowedEmailAddress,
    "DeleteContact": DeleteContact,
    "DeleteEmailDeliveryReceiptRule": DeleteEmailDeliveryReceiptRule,
    "DeleteEmailTemplate": DeleteEmailTemplate,
    "DeleteFaxDeliveryReceiptRule": DeleteFaxDeliveryReceiptRule,
    "DeleteFaxInboundRule": DeleteFaxInboundRule,
    "DeleteList": DeleteList,
    "DeleteReturnAddress": DeleteReturnAddress,
    "DeleteSmsDeliveryReceiptRule": DeleteSmsDeliveryReceiptRule,
    "DeleteSmsInboundAutomation": DeleteSmsInboundAutomation,
    "DeleteSmsTemplate": DeleteSmsTemplate,
    "DeleteStrippedStringRule": DeleteStrippedStringRule,
    "DeleteSubaccount": DeleteSubaccount,
    "DeleteVoiceDeliveryReceiptRule": DeleteVoiceDeliveryReceiptRule,
    "DeliveryIssue": DeliveryIssue,
    "DetectAddress": DetectAddress,
    "DetectAddressData": DetectAddressData,
    "EmailAddress": EmailAddress,
    "EmailCampaign": EmailCampaign,
    "EmailCampaignHistory": EmailCampaignHistory,
    "EmailDeliveryReceiptRule": EmailDeliveryReceiptRule,
    "ExportEmailHistory": ExportEmailHistory,
    "ExportLetterHistory": ExportLetterHistory,
    "ExportMmsHistory": ExportMmsHistory,
    "ExportPostcardHistory": ExportPostcardHistory,
    "ExportSmsHistory": ExportSmsHistory,
    "ExportSmsHistoryData": ExportSmsHistoryData,
    "ExportVoiceHistory": ExportVoiceHistory,
    "Fax": Fax,
    "FaxDeliveryReceiptRule": FaxDeliveryReceiptRule,
    "FaxReceipt": FaxReceipt,
    "ForgotPassword": ForgotPassword,
    "ForgotPasswordRequest": ForgotPasswordRequest,
    "ForgotUsername": ForgotUsername,
    "ForgotUsernameRequest": ForgotUsernameRequest,
    "GenerateNewApiKey": GenerateNewApiKey,
    "GenerateNewApiKeyData": GenerateNewApiKeyData,
    "GenerateNewApiKeyRequest": GenerateNewApiKeyRequest,
    "GetAllDeliveryIssues": GetAllDeliveryIssues,
    "GetCountriesForGlobalSending": GetCountriesForGlobalSending,
    "GetDefaultSenderDetails": GetDefaultSenderDetails,
    "GetDefaultSendersList": GetDefaultSendersList,
    "GetDefaultSendersListData": GetDefaultSendersListData,
    "GetSpecificContact": GetSpecificContact,
    "GetStatistics": GetStatistics,
    "GetStatisticsDataInner": GetStatisticsDataInner,
    "GetStatisticsDataInnerDeviceInner": GetStatisticsDataInnerDeviceInner,
    "GetStatisticsDataInnerLinks": GetStatisticsDataInnerLinks,
    "GetTracking": GetTracking,
    "GetTrackingDataInner": GetTrackingDataInner,
    "GetTrackingDataInnerContact": GetTrackingDataInnerContact,
    "GetVoiceHistory": GetVoiceHistory,
    "GetVoiceHistoryData": GetVoiceHistoryData,
    "GlobalSending": GlobalSending,
    "GlobalSendingRegistrationStatus": GlobalSendingRegistrationStatus,
    "ImportContacts": ImportContacts,
    "ImportContactsData": ImportContactsData,
    "ImportContactsRequest": ImportContactsRequest,
    "InboundFaxRule": InboundFaxRule,
    "InboundSms": InboundSms,
    "InboundSmsTest": InboundSmsTest,
    "ListAlphaTags": ListAlphaTags,
    "ListCompliantSenderTypes200Response": ListCompliantSenderTypes200Response,
    "ListCompliantSenderTypes200ResponseData": ListCompliantSenderTypes200ResponseData,
    "ListCompliantSenderTypes200ResponseDataDataInner": ListCompliantSenderTypes200ResponseDataDataInner,
    "ListCompliantSenderTypes200ResponseDataDataInnerAllowedSenderTypesInner": ListCompliantSenderTypes200ResponseDataDataInnerAllowedSenderTypesInner,
    "ListCompliantSenderTypes200ResponseDataDataInnerAllowedSenderTypesInnerAllowedSenderCountries": ListCompliantSenderTypes200ResponseDataDataInnerAllowedSenderTypesInnerAllowedSenderCountries,
    "ListCountries": ListCountries,
    "ListCountriesDataInner": ListCountriesDataInner,
    "ListOwnNumbers": ListOwnNumbers,
    "ListOwnNumbersMetadata": ListOwnNumbersMetadata,
    "ListOwnNumbersMetadataPagination": ListOwnNumbersMetadataPagination,
    "MarkInboundSmsAsRead": MarkInboundSmsAsRead,
    "MarkSmsReceiptAsRead": MarkSmsReceiptAsRead,
    "MarkSmsReceiptAsReadRequest": MarkSmsReceiptAsReadRequest,
    "MarkSpecificInboundSmsMessageAsRead": MarkSpecificInboundSmsMessageAsRead,
    "MasterEmailTemplate": MasterEmailTemplate,
    "MasterEmailTemplateThumbnail": MasterEmailTemplateThumbnail,
    "Mms": Mms,
    "MmsCampaign": MmsCampaign,
    "Model400Error": Model400Error,
    "OwnNumber": OwnNumber,
    "Pagination": Pagination,
    "PostReturnAddress": PostReturnAddress,
    "PostcardRecipient": PostcardRecipient,
    "PostcardRecipientReturnAddress": PostcardRecipientReturnAddress,
    "PurchaseDedicatedNumber": PurchaseDedicatedNumber,
    "PurchaseDedicatedNumberData": PurchaseDedicatedNumberData,
    "PurchaseRechargePackage": PurchaseRechargePackage,
    "PurchaseRechargePackageData": PurchaseRechargePackageData,
    "Recipient": Recipient,
    "RegisterNumbers": RegisterNumbers,
    "RegisterNumbersRequest": RegisterNumbersRequest,
    "RemoveDuplicateContacts": RemoveDuplicateContacts,
    "RemoveDuplicateContactsRequest": RemoveDuplicateContactsRequest,
    "RemoveDuplicateContactsRequestFields": RemoveDuplicateContactsRequestFields,
    "RemoveOptedOutContacts": RemoveOptedOutContacts,
    "RemoveOptedOutContactsData": RemoveOptedOutContactsData,
    "RequestAlphaTagRequest": RequestAlphaTagRequest,
    "RequestAlphaTagRequestBusinessesInner": RequestAlphaTagRequestBusinessesInner,
    "RequestAlphaTagRequestBusinessesInnerBusinessAddress": RequestAlphaTagRequestBusinessesInnerBusinessAddress,
    "RequestAlphaTagRequestBusinessesInnerBusinessInfo": RequestAlphaTagRequestBusinessesInnerBusinessInfo,
    "RequestAlphaTagRequestBusinessesInnerPartnerRepresentative": RequestAlphaTagRequestBusinessesInnerPartnerRepresentative,
    "RequestAlphaTagRequestBusinessesInnerRepresentative": RequestAlphaTagRequestBusinessesInnerRepresentative,
    "RequestOwnNumberVerificationOtp": RequestOwnNumberVerificationOtp,
    "RequestOwnNumberVerificationOtpRequest": RequestOwnNumberVerificationOtpRequest,
    "ResellerAccount": ResellerAccount,
    "ResellerTransferCredit": ResellerTransferCredit,
    "SelectCountriesForGlobalSending": SelectCountriesForGlobalSending,
    "SelectCountriesForGlobalSendingRequest": SelectCountriesForGlobalSendingRequest,
    "SendEmail": SendEmail,
    "SendEmailCampaign": SendEmailCampaign,
    "SendEmailCampaignData": SendEmailCampaignData,
    "SendEmailCampaignRequest": SendEmailCampaignRequest,
    "SendEmailRequest": SendEmailRequest,
    "SendEmailRequestAttachmentsInner": SendEmailRequestAttachmentsInner,
    "SendEmailRequestFrom": SendEmailRequestFrom,
    "SendEmailRequestToInner": SendEmailRequestToInner,
    "SendEmailVerificationToken": SendEmailVerificationToken,
    "SendEmailVerificationTokenRequest": SendEmailVerificationTokenRequest,
    "SendEmailVerificationTokenRequestFrom": SendEmailVerificationTokenRequestFrom,
    "SendEmailVerificationTokenRequestToInner": SendEmailVerificationTokenRequestToInner,
    "SendFax": SendFax,
    "SendFaxData": SendFaxData,
    "SendFaxRequest": SendFaxRequest,
    "SendFaxRequestMessagesInner": SendFaxRequestMessagesInner,
    "SendLetter": SendLetter,
    "SendLetterData": SendLetterData,
    "SendLetterRequest": SendLetterRequest,
    "SendMms": SendMms,
    "SendMmsCampaign": SendMmsCampaign,
    "SendMmsCampaignRequest": SendMmsCampaignRequest,
    "SendMmsData": SendMmsData,
    "SendMmsRequest": SendMmsRequest,
    "SendMmsRequestMessagesInner": SendMmsRequestMessagesInner,
    "SendPostcard": SendPostcard,
    "SendPostcardData": SendPostcardData,
    "SendPostcardRequest": SendPostcardRequest,
    "SendPostcardRequestRecipientsInner": SendPostcardRequestRecipientsInner,
    "SendSms": SendSms,
    "SendSmsCampaign": SendSmsCampaign,
    "SendSmsCampaignRequest": SendSmsCampaignRequest,
    "SendSmsData": SendSmsData,
    "SendSmsRequest": SendSmsRequest,
    "SendSmsRequestMessagesInner": SendSmsRequestMessagesInner,
    "SendVoiceMessage": SendVoiceMessage,
    "SendVoiceMessageData": SendVoiceMessageData,
    "SendVoiceMessageRequest": SendVoiceMessageRequest,
    "SendVoiceMessageRequestMessagesInner": SendVoiceMessageRequestMessagesInner,
    "SendersInner": SendersInner,
    "Sms": Sms,
    "SmsCampaign": SmsCampaign,
    "SmsCampaignSendersInner": SmsCampaignSendersInner,
    "SmsDeliveryReceiptRule": SmsDeliveryReceiptRule,
    "SmsInboundRule": SmsInboundRule,
    "SmsReceipt": SmsReceipt,
    "SmsSendSms": SmsSendSms,
    "SmsTemplate": SmsTemplate,
    "SmsTemplateUpdate": SmsTemplateUpdate,
    "Subaccount": Subaccount,
    "Timezones": Timezones,
    "TransactionalEmail": TransactionalEmail,
    "TransferContactToList": TransferContactToList,
    "UpdateClientAccount": UpdateClientAccount,
    "UpdateContact": UpdateContact,
    "UpdateDefaultSender": UpdateDefaultSender,
    "UpdateDefaultSenderRequest": UpdateDefaultSenderRequest,
    "UpdateEmailCampaign": UpdateEmailCampaign,
    "UpdateEmailCampaignRequest": UpdateEmailCampaignRequest,
    "UpdateEmailDeliveryReceiptRule": UpdateEmailDeliveryReceiptRule,
    "UpdateEmailTemplate": UpdateEmailTemplate,
    "UpdateEmailTemplateRequest": UpdateEmailTemplateRequest,
    "UpdateFaxDeliveryReceiptRule": UpdateFaxDeliveryReceiptRule,
    "UpdateFaxDeliveryReceiptRuleRequest": UpdateFaxDeliveryReceiptRuleRequest,
    "UpdateFaxInboundRule": UpdateFaxInboundRule,
    "UpdateList": UpdateList,
    "UpdateMmsCampaign": UpdateMmsCampaign,
    "UpdatePaymentInfo": UpdatePaymentInfo,
    "UpdatePaymentInfoData": UpdatePaymentInfoData,
    "UpdatePaymentInfoRequest": UpdatePaymentInfoRequest,
    "UpdateReturnAddress": UpdateReturnAddress,
    "UpdateReturnAddressRequest": UpdateReturnAddressRequest,
    "UpdateSmsCampaign": UpdateSmsCampaign,
    "UpdateSmsDeliveryReceiptRule": UpdateSmsDeliveryReceiptRule,
    "UpdateSmsInboundAutomation": UpdateSmsInboundAutomation,
    "UpdateSmsInboundAutomationRequest": UpdateSmsInboundAutomationRequest,
    "UpdateSmsTemplate": UpdateSmsTemplate,
    "UpdateStrippedStringRule": UpdateStrippedStringRule,
    "UpdateSubaccount": UpdateSubaccount,
    "UpdateSubaccountRequest": UpdateSubaccountRequest,
    "UpdateVoiceDeliveryReceiptRule": UpdateVoiceDeliveryReceiptRule,
    "UserEmailTemplate": UserEmailTemplate,
    "VerifyAllowedEmailAddress": VerifyAllowedEmailAddress,
    "VerifyAllowedEmailAddressRequest": VerifyAllowedEmailAddressRequest,
    "VerifyOwnNumberOtp": VerifyOwnNumberOtp,
    "VerifyOwnNumberOtpRequest": VerifyOwnNumberOtpRequest,
    "ViewASpecificInboundSmsMessage": ViewASpecificInboundSmsMessage,
    "ViewASpecificSmsTemplate": ViewASpecificSmsTemplate,
    "ViewASpecificSmsTemplateData": ViewASpecificSmsTemplateData,
    "ViewAccountDetails": ViewAccountDetails,
    "ViewAccountUsage": ViewAccountUsage,
    "ViewAccountUsageData": ViewAccountUsageData,
    "ViewAccountUsageDataEmailInner": ViewAccountUsageDataEmailInner,
    "ViewAccountUsageDataEmailTotal": ViewAccountUsageDataEmailTotal,
    "ViewAccountUsageDataSmsInner": ViewAccountUsageDataSmsInner,
    "ViewAccountUsageDataSmsTotal": ViewAccountUsageDataSmsTotal,
    "ViewAccountUsageDataVoiceInner": ViewAccountUsageDataVoiceInner,
    "ViewAllEmailCampaigns": ViewAllEmailCampaigns,
    "ViewAllEmailCampaignsData": ViewAllEmailCampaignsData,
    "ViewAllMmsCampaigns": ViewAllMmsCampaigns,
    "ViewAllMmsCampaignsData": ViewAllMmsCampaignsData,
    "ViewAllTransactions": ViewAllTransactions,
    "ViewAllTransactionsData": ViewAllTransactionsData,
    "ViewAllTransactionsDataAllOfDataInner": ViewAllTransactionsDataAllOfDataInner,
    "ViewAllowedEmailAddress": ViewAllowedEmailAddress,
    "ViewAllowedEmailAddresses": ViewAllowedEmailAddresses,
    "ViewAllowedEmailAddressesData": ViewAllowedEmailAddressesData,
    "ViewAllowedEmails": ViewAllowedEmails,
    "ViewAllowedEmailsDataInner": ViewAllowedEmailsDataInner,
    "ViewAvailableNumbers": ViewAvailableNumbers,
    "ViewAvailableNumbersData": ViewAvailableNumbersData,
    "ViewAvailableNumbersDataAllOfDataInner": ViewAvailableNumbersDataAllOfDataInner,
    "ViewClientAccounts": ViewClientAccounts,
    "ViewClientAccountsData": ViewClientAccountsData,
    "ViewCountries": ViewCountries,
    "ViewEmailCampaign": ViewEmailCampaign,
    "ViewEmailCampaignHistory": ViewEmailCampaignHistory,
    "ViewEmailCampaignHistoryData": ViewEmailCampaignHistoryData,
    "ViewEmailDeliveryReceiptRule": ViewEmailDeliveryReceiptRule,
    "ViewEmailDeliveryReceiptRules": ViewEmailDeliveryReceiptRules,
    "ViewEmailDeliveryReceiptRulesData": ViewEmailDeliveryReceiptRulesData,
    "ViewEmailHistory": ViewEmailHistory,
    "ViewEmailTemplate": ViewEmailTemplate,
    "ViewEmailTemplates": ViewEmailTemplates,
    "ViewEmailTemplatesData": ViewEmailTemplatesData,
    "ViewEmailTemplatesDataDataInner": ViewEmailTemplatesDataDataInner,
    "ViewFaxDeliveryReceiptRule": ViewFaxDeliveryReceiptRule,
    "ViewFaxDeliveryReceiptRules": ViewFaxDeliveryReceiptRules,
    "ViewFaxDeliveryReceiptRulesData": ViewFaxDeliveryReceiptRulesData,
    "ViewFaxHistory": ViewFaxHistory,
    "ViewFaxHistoryData": ViewFaxHistoryData,
    "ViewFaxInboundRule": ViewFaxInboundRule,
    "ViewFaxInboundRules": ViewFaxInboundRules,
    "ViewFaxInboundRulesData": ViewFaxInboundRulesData,
    "ViewFaxReceipts": ViewFaxReceipts,
    "ViewFaxReceiptsData": ViewFaxReceiptsData,
    "ViewInboundSms": ViewInboundSms,
    "ViewInboundSmsData": ViewInboundSmsData,
    "ViewLetterHistory": ViewLetterHistory,
    "ViewLetterHistoryData": ViewLetterHistoryData,
    "ViewListContacts": ViewListContacts,
    "ViewListContactsData": ViewListContactsData,
    "ViewLists": ViewLists,
    "ViewListsData": ViewListsData,
    "ViewMasterEmailTemplate": ViewMasterEmailTemplate,
    "ViewMasterEmailTemplates": ViewMasterEmailTemplates,
    "ViewMmsCampaign": ViewMmsCampaign,
    "ViewMmsHistory": ViewMmsHistory,
    "ViewMmsHistoryData": ViewMmsHistoryData,
    "ViewMmsHistoryDataAllOfDataInner": ViewMmsHistoryDataAllOfDataInner,
    "ViewPostcardHistory": ViewPostcardHistory,
    "ViewPostcardHistoryData": ViewPostcardHistoryData,
    "ViewRechargePackages": ViewRechargePackages,
    "ViewRechargePackagesData": ViewRechargePackagesData,
    "ViewRechargePackagesDataPackagesInner": ViewRechargePackagesDataPackagesInner,
    "ViewReferralAccounts": ViewReferralAccounts,
    "ViewReferralAccountsData": ViewReferralAccountsData,
    "ViewReferralAccountsDataAllOfDataInner": ViewReferralAccountsDataAllOfDataInner,
    "ViewSmsCampaigns": ViewSmsCampaigns,
    "ViewSmsCampaignsData": ViewSmsCampaignsData,
    "ViewSmsDeliveryReceiptRule": ViewSmsDeliveryReceiptRule,
    "ViewSmsDeliveryReceiptRules": ViewSmsDeliveryReceiptRules,
    "ViewSmsDeliveryReceiptRulesData": ViewSmsDeliveryReceiptRulesData,
    "ViewSmsHistory": ViewSmsHistory,
    "ViewSmsHistoryData": ViewSmsHistoryData,
    "ViewSmsHistoryDataAllOfDataInner": ViewSmsHistoryDataAllOfDataInner,
    "ViewSmsInboundAutomation": ViewSmsInboundAutomation,
    "ViewSmsInboundAutomations": ViewSmsInboundAutomations,
    "ViewSmsInboundAutomationsData": ViewSmsInboundAutomationsData,
    "ViewSmsReceipts": ViewSmsReceipts,
    "ViewSmsReceiptsData": ViewSmsReceiptsData,
    "ViewSmsStatistics": ViewSmsStatistics,
    "ViewSmsStatisticsData": ViewSmsStatisticsData,
    "ViewSmsStatisticsDataStatInner": ViewSmsStatisticsDataStatInner,
    "ViewSmsStatisticsDataTotal": ViewSmsStatisticsDataTotal,
    "ViewSmsTemplates": ViewSmsTemplates,
    "ViewSmsTemplatesData": ViewSmsTemplatesData,
    "ViewSpecificClientAccount": ViewSpecificClientAccount,
    "ViewSpecificFaxReceipt": ViewSpecificFaxReceipt,
    "ViewSpecificList": ViewSpecificList,
    "ViewSpecificReturnAddress": ViewSpecificReturnAddress,
    "ViewSpecificSmsCampaign": ViewSpecificSmsCampaign,
    "ViewSpecificSmsReceipt": ViewSpecificSmsReceipt,
    "ViewSpecificSubaccount": ViewSpecificSubaccount,
    "ViewSpecificTransaction": ViewSpecificTransaction,
    "ViewStrippedStringRule": ViewStrippedStringRule,
    "ViewStrippedStringRuleData": ViewStrippedStringRuleData,
    "ViewStrippedStringRules": ViewStrippedStringRules,
    "ViewStrippedStringRulesData": ViewStrippedStringRulesData,
    "ViewStrippedStringRulesDataDataInner": ViewStrippedStringRulesDataDataInner,
    "ViewSubaccounts": ViewSubaccounts,
    "ViewSubaccountsData": ViewSubaccountsData,
    "ViewTemplateCategories": ViewTemplateCategories,
    "ViewTemplateCategoriesDataInner": ViewTemplateCategoriesDataInner,
    "ViewTemplateCategory": ViewTemplateCategory,
    "ViewTemplateCategoryData": ViewTemplateCategoryData,
    "ViewTemplatesInCategory": ViewTemplatesInCategory,
    "ViewVoiceDeliveryReceiptRule": ViewVoiceDeliveryReceiptRule,
    "ViewVoiceDeliveryReceiptRules": ViewVoiceDeliveryReceiptRules,
    "ViewVoiceDeliveryReceiptRulesData": ViewVoiceDeliveryReceiptRulesData,
    "ViewVoiceLanguages": ViewVoiceLanguages,
    "ViewVoiceLanguagesDataInner": ViewVoiceLanguagesDataInner,
    "ViewVoiceReceipts": ViewVoiceReceipts,
    "ViewVoiceReceiptsData": ViewVoiceReceiptsData,
    "ViewVoiceStatistics": ViewVoiceStatistics,
    "ViewVoiceStatisticsData": ViewVoiceStatisticsData,
    "ViewVoiceStatisticsDataStatsInner": ViewVoiceStatisticsDataStatsInner,
    "ViewVoiceStatisticsDataTotal": ViewVoiceStatisticsDataTotal,
    "ViewVoiceStatisticsDataTotalOutbound": ViewVoiceStatisticsDataTotalOutbound,
    "ViewYourNumbers": ViewYourNumbers,
    "ViewYourNumbersData": ViewYourNumbersData,
    "ViewYourNumbersDataAllOfDataInner": ViewYourNumbersDataAllOfDataInner,
    "ViewYourNumbersDataAllOfDataInnerStatus": ViewYourNumbersDataAllOfDataInnerStatus,
    "ViewYourReturnAddresses": ViewYourReturnAddresses,
    "ViewYourReturnAddressesData": ViewYourReturnAddressesData,
    "VoiceDeliveryReceiptRule": VoiceDeliveryReceiptRule,
    "VoiceMessage": VoiceMessage,
    "VoiceReceipt": VoiceReceipt,
}

// Check if a string starts with another string without using es6 features
function startsWith(str: string, match: string): boolean {
    return str.substring(0, match.length) === match;
}

// Check if a string ends with another string without using es6 features
function endsWith(str: string, match: string): boolean {
    return str.length >= match.length && str.substring(str.length - match.length) === match;
}

const nullableSuffix = " | null";
const optionalSuffix = " | undefined";
const arrayPrefix = "Array<";
const arraySuffix = ">";
const mapPrefix = "{ [key: string]: ";
const mapSuffix = "; }";

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap[expectedType]) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(typeMap[discriminatorType]){
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string): any {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (endsWith(type, nullableSuffix)) {
            let subType: string = type.slice(0, -nullableSuffix.length); // Type | null => Type
            return ObjectSerializer.serialize(data, subType);
        } else if (endsWith(type, optionalSuffix)) {
            let subType: string = type.slice(0, -optionalSuffix.length); // Type | undefined => Type
            return ObjectSerializer.serialize(data, subType);
        } else if (startsWith(type, arrayPrefix)) {
            let subType: string = type.slice(arrayPrefix.length, -arraySuffix.length); // Array<Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.serialize(datum, subType));
            }
            return transformedData;
        } else if (startsWith(type, mapPrefix)) {
            let subType: string = type.slice(mapPrefix.length, -mapSuffix.length); // { [key: string]: Type; } => Type
            let transformedData: { [key: string]: any } = {};
            for (let key in data) {
                transformedData[key] = ObjectSerializer.serialize(
                    data[key],
                    subType,
                );
            }
            return transformedData;
        } else if (type === "Date") {
            return data.toISOString();
        } else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string): any {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (endsWith(type, nullableSuffix)) {
            let subType: string = type.slice(0, -nullableSuffix.length); // Type | null => Type
            return ObjectSerializer.deserialize(data, subType);
        } else if (endsWith(type, optionalSuffix)) {
            let subType: string = type.slice(0, -optionalSuffix.length); // Type | undefined => Type
            return ObjectSerializer.deserialize(data, subType);
        } else if (startsWith(type, arrayPrefix)) {
            let subType: string = type.slice(arrayPrefix.length, -arraySuffix.length); // Array<Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.deserialize(datum, subType));
            }
            return transformedData;
        } else if (startsWith(type, mapPrefix)) {
            let subType: string = type.slice(mapPrefix.length, -mapSuffix.length); // { [key: string]: Type; } => Type
            let transformedData: { [key: string]: any } = {};
            for (let key in data) {
                transformedData[key] = ObjectSerializer.deserialize(
                    data[key],
                    subType,
                );
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap[type]) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    }
}

export interface Authentication {
    /**
    * Apply authentication settings to header and query params.
    */
    applyToRequest(requestOptions: localVarRequest.Options): Promise<void> | void;
}

export class HttpBasicAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        requestOptions.auth = {
            username: this.username, password: this.password
        }
    }
}

export class HttpBearerAuth implements Authentication {
    public accessToken: string | (() => string) = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            const accessToken = typeof this.accessToken === 'function'
                            ? this.accessToken()
                            : this.accessToken;
            requestOptions.headers["Authorization"] = "Bearer " + accessToken;
        }
    }
}

export class ApiKeyAuth implements Authentication {
    public apiKey: string = '';

    constructor(private location: string, private paramName: string) {
    }

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (this.location == "query") {
            (<any>requestOptions.qs)[this.paramName] = this.apiKey;
        } else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        } else if (this.location == 'cookie' && requestOptions && requestOptions.headers) {
            if (requestOptions.headers['Cookie']) {
                requestOptions.headers['Cookie'] += '; ' + this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
            else {
                requestOptions.headers['Cookie'] = this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
        }
    }
}

export class OAuth implements Authentication {
    public accessToken: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    }
}

export class VoidAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(_: localVarRequest.Options): void {
        // Do nothing
    }
}

export type Interceptor = (requestOptions: localVarRequest.Options) => (Promise<void> | void);
