import axios, { AxiosResponse } from "axios";
import { v4 as uuidv4 } from "uuid";
import { MasterData } from "components/ThuhoPage/interfaces";
import { getTodayWithFormat } from "commons/helpers/date";
import { SERVICE_CODE, CHANNEL } from "commons/constants";
import _omit from "lodash/omit";
import _get from "lodash/get";

let userId: string;
let clientNo: string;
let language: string = "VI";
let phone: string;

// let userId: string = "0915423641";
// let clientNo: string = "02887123";
// let userId: string = "0903092112";
// let clientNo: string = "05961710";

export const updateMasterData = (data: MasterData) => {
  userId = data.userId;
  clientNo = data.clientNo;
  language = "VI";
  phone = data.phone;
};

const generateCommonBodyRequest = () => {
  return {
    requestId: uuidv4() as string,
    language,
    transactionTime: getTodayWithFormat(),
  };
};

export const getAcountTypeList = async () => {
  const { requestId } = generateCommonBodyRequest();
  const body = {
    requestId,
    requestTime: getTodayWithFormat(),
    channel: CHANNEL as string,
    serviceCode: SERVICE_CODE as string,
    data: JSON.stringify({
      providerId: "EPASS",
    }),
  };
  const resp: AxiosResponse<any> = await axios.post(
    "/thuho/api/tution/getAcctType",
    body
  );
  return resp;
};
/*
// viet service all api get info

export const getInfo = async (data: any) => {
  const body = {

  }

  const resp: AxiosResponse<any> = await axios.post(
    "",
    body
  );
  return resp;

}*/
