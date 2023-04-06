export interface InquiryRequest {
    requestId: string;
    requestTime: string;
    serviceCode: string;
    data: string;
    channel: string;
  }
export interface InquiryParams {
    accountNumber: string;
    merchant: string;
    customerCode: string;
    paraOption2: string;
}