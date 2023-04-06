export interface ListAccountResponse {
  resultCode: string;
  resultMessage: string;
  request: {
    requestId: string;
    requestTime: string;
    channel: string;
    data: string;
    serviceCode: string;
  }
  data: string;
}
export interface AccountItem {
  AcctType: string;
  accountNo: string;
  accountName: string;
  balance: string;
  Ccy: string;
  Branchname: string;
  AcctTypeName: string;
  clientInd: string;
  acctStatus?: string;
}

export interface ListAccountRequest {
  requestId: string;
  requestTime: string;
  channel: string;
  serviceCode: string;
  data: {
    clientNo: string;
  } | string;
}
