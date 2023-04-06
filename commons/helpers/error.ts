import { ResponseData } from "interfaces/ICommon";
import { NextRouter } from "next/router";
import _get from "lodash/get";
import {
  ERROR_CODE_WITH_MESSAGE, ERROR_CODE_WITH_MESSAGE_INQUIRY,
} from "commons/constants";

export const ERROR_CODE = {
  Success: "00000",
  InvalidCustomerCode: "00042" || "00043",
  InvalidInfo: "10017",
  BillNotFound: "00210",
  NotEnoughMoney: "99212",
  SystemError: "99"
};


export function getStatusResponse(
  code: string,
  language: string
): {
  code: string;
  success: boolean;
  msg: string;
} {
  if (code === ERROR_CODE.Success) {
    return {
      code: ERROR_CODE.Success,
      success: true,
      msg: "Success",
    };
  }

  return {
    code,
    success: false,
    msg: _get(
      ERROR_CODE_WITH_MESSAGE,
      [language, code],
      "Kết nối bị gián đoạn, quý khách vui lòng thử lại sau"
    ),
  };
}
