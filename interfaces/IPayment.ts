export interface PaymentRequest {
    requestId: string;
    requestTime: string;
    channel: string;
    serviceCode: string;
    data: string;
  }
  
  export interface PaymentParams {
    challengeCode: string,
    customerCode: string,
    customerName: string,
    merchant: string,
    billItems: any[],
    accountOtp: string,
    narrative: string,
    accountName: string,
    requestId: string,
    // licensePlate: string,
  }

  