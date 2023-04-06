export interface ContactRequest {
  requestId: string;
  requestTime: string;
  channel: string;
  serviceCode: string;
  data: string;
}

export interface SaveContactParams {
    licensePlate: string;
  contractNo: string;
  customerName: string;
  reminiscentName: string;
  currency: string;
}

export interface DeleteContactParams {
  contractNo?: string;
  licensePlate?: string;
}

export interface DeleteContactRequest {
  requestId: string;
  requestTime: string;
  channel: string;
  serviceCode: string;
  data: string;
}

export interface GetContactParams {
  type: string;
}

// export interface CreateOTPResponse {
//   data: {
//     customerName: string;
//     address: string;
//     merchantID: string;
//     mediaType: string;
//   };
// }
