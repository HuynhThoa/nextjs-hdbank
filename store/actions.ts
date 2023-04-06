import { FormDataFinal } from "components/ThuhoPage/interfaces";
import { AccountItem } from "interfaces/IListAccount";

export const SET_TOGGLE_LOADING = "SET_TOGGLE_LOADING";
export interface SetToggleLoadingAction {
  type: typeof SET_TOGGLE_LOADING;
  payload: string;
}
export function setToggleLoading(fieldLoading: string): SetToggleLoadingAction {
  return {
    type: SET_TOGGLE_LOADING,
    payload: fieldLoading,
  };
}

export const SET_ALLOW_SEND_OTP = "SET_ALLOW_SEND_OTP";
export interface SetAllowSendOTPAction {
  type: typeof SET_ALLOW_SEND_OTP;
  payload: boolean;
}

export function setAllowSendOTP(allowSendOTP: boolean): SetAllowSendOTPAction {
  return {
    type: SET_ALLOW_SEND_OTP,
    payload: allowSendOTP,
  };
}

export const SET_STEP = "SET_STEP";
export interface SetStep {
  type: typeof SET_STEP;
  payload: number;
}

export function setStep(step: number): SetStep {
  return {
    type: SET_STEP,
    payload: step,
  };
}

export const SET_TYPE_CUSTOMER = "SET_TYPE_CUSTOMER";



export const SET_FORM_DATA = "SET_FORM_DATA";
export interface SeFormDataAction {
  type: typeof SET_FORM_DATA;
  payload: FormDataFinal;
}
export function setFormData(formData: FormDataFinal): SeFormDataAction {
  return {
    type: SET_FORM_DATA,
    payload: formData,
  };
}

export const SET_LIST_ACCOUNT = "SET_LIST_ACCOUNT";
export interface SetListAccountAction {
  type: typeof SET_LIST_ACCOUNT;
  payload: AccountItem[];
}
export function setListAccount(accounts: AccountItem[]): SetListAccountAction {
  return {
    type: SET_LIST_ACCOUNT,
    payload: accounts,
  };
}

export type AppActions =
  | SeFormDataAction
  | SetListAccountAction
  | SetAllowSendOTPAction
  | SetStep
  | SetToggleLoadingAction;
