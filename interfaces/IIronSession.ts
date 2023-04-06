export interface GetIronSessionRequest {
    requestId: string;
    requestTime: string;
    serviceCode: string;
    data: {
        key: string;
    };
    channel: string;
  }
export interface GetIronSessionParams {
    key: string;
}

export interface SaveIronSessionRequest {
    requestId: string;
    requestTime: string;
    serviceCode: string;
    data: {
        key: string;
        value: string;
    };
    channel: string;
  }
export interface SaveIronSessionParams {
    key: string;
    value: string;
}