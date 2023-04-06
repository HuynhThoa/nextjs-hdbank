import { AccountItem } from "interfaces";

export interface FormDataFinal {
  accountNo: string;
  accountName: string;
  phone: string;
  user: string;
  merchant: string;
  customerCode: string;
  billSeries: string;
  fullName: string;
  narrative: string;
  balance: string;
  allBill: any;
  billItems: any;
  infor: any;
  total: number;
  expire: string;
  narrativeDisplay: string;
  customerName: string;
  transactionNumber: string;
  acctTypeList: string;
  note: string;
  paraoption2: string;
  licensePlates: string;
  licensePlatesType: string;
  amount: string;
  isId: boolean;
  reminiscentName: string;
  accountList: AccountItem[]
}

export interface MasterData {
  userId: string;
  clientNo: string;
  language: string;
  accessToken?: string;
  expireIn?: number;
  phone: string;
}
