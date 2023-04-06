export interface CreateOTPRequest {
  requestId: string;
  requestTime: string;
  channel: string;
  serviceCode: string;
  data: string;
  // accountNumber: string;
  total: string;
}

export interface CreateOtpParams {
  accountNumber: string;
  total: string;
}
// export interface CreateOTPResponse {
//   data: {
//     customerName: string;
//     address: string;
//     merchantID: string;
//     mediaType: string;
//   };
// }
