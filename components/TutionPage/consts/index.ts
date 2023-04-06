
export const INITIAL_VALUE = {
  customerCode: "",
  accountNo: "",
  accountName: "",
  merchant: "EPASS",
  user: "",
  clientNo: "",
  phone: "",
  fullName: "",
  narrative: "",
  balance: "",
  expire: "",
  allBill: [],
  billItems: [],
  infor: {},
  billSeries: "",
  narrativeDisplay: "",
  total: 0,
  transactionNumber: "",
  customerName: "",
  acctTypeList: "",
  note: "",
  paraoption2: "",
  licensePlates: "",
  licensePlatesType: "",
  amount: "",
  isId: false,
  reminiscentName: "",
  accountList: []
};

export const STEP = {
  stepHome: "stepHome",
  step1: "step1",
  step2: "step2",
  step3: "step3",
  step4: "step4",
  stepErrorPage: "stepErrorPage",
};

export const ROUTE_STEP = {
  stepHome: "/tution",
  stepForm: "/tution/inquiry",
  stepOtp: "/tution/otp",
  stepResult: "/tution/result",
};


export const PAGE_TITLE = {
  [ROUTE_STEP.stepHome]: "Thanh toán học phí",
  [ROUTE_STEP.stepForm]: "Thanh toán học phí",
  [ROUTE_STEP.stepOtp]: "Thanh toán học phí",
  [ROUTE_STEP.stepResult]: "Thanh toán học phí",
};
