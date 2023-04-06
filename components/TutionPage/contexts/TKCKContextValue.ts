import React from "react";
import { AccountItem } from "interfaces/IListAccount";
interface TKCKContextValue {
  loadingBtnSubmit?: boolean;
  loadingBtnConfirmOTP?: boolean;
  listAccount: AccountItem[];
  toggleNotify: ( isSuccess?: any, desc?: string, onClose?: any) => void;
}

const TKCKContext = React.createContext<TKCKContextValue>({
  loadingBtnSubmit: false,
  loadingBtnConfirmOTP: false,
  listAccount: [],
  toggleNotify: () => null,
});
export default TKCKContext;
