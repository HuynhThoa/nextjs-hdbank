import { INITIAL_VALUE } from "components/TutionPage/consts";
import { FormDataFinal } from "components/TutionPage/interfaces";
import { AccountItem } from "interfaces/IListAccount";
import {
  AppActions,
  SET_FORM_DATA,
  SET_LIST_ACCOUNT,
  SET_ALLOW_SEND_OTP,
  SET_TOGGLE_LOADING,
  SET_STEP,
} from "./actions";
import _get from "lodash/get";

export interface LoadingState {
  loadingBtnSubmit: boolean;
  loadingBtnConfirmOTP: boolean;
  loadingMasterData: boolean;
}

export interface AppState {
  listAccount: AccountItem[];
  openVerifyOTP: boolean;
  dataForm: FormDataFinal;
  loading: LoadingState;
  statusModalNotify: {
    open: boolean;
    desc: string;
    onClose: () => void;
  };
  step: number;
}

export const initialState: AppState = {
  listAccount: [],
  dataForm: INITIAL_VALUE,
  openVerifyOTP: false,
  statusModalNotify: {
    open: false,
    desc: "",
    onClose: () => null,
  },
  loading: {
    loadingBtnSubmit: false,
    loadingBtnConfirmOTP: false,
    loadingMasterData: false,
  },
  step: 0,
};


function reducer(
  state: AppState = initialState,
  action: AppActions
): AppState {
  switch (action.type) {
    case SET_TOGGLE_LOADING: {
      const loadingStatus = _get(state, `loading.${action.payload}`);
      const newData = {
        ...state,
        loading: {
          ...state.loading,
          [action.payload]: loadingStatus ? false : true,
        },
      };
      // storeDataToLocalStorage(newData);
      return newData;
    }
    case SET_STEP: {
      if(action.payload != 99){
        return {
          ...state,
          step: action.payload,
        }
      }
      const newData = {
        ...state,
        step: state.step + 1,
      };
      // storeDataToLocalStorage(newData);
      return newData;
    }
    case SET_ALLOW_SEND_OTP: {
      const newData = {
        ...state,
        allowSendOTP: action.payload,
      };
      // storeDataToLocalStorage(newData);
      return newData;
    }
    case SET_LIST_ACCOUNT: {
      const newData = {
        ...state,
        listAccount: action.payload,
      };
      // storeDataToLocalStorage(newData);
      return newData;
    }
    case SET_FORM_DATA: {
      const newData = {
        ...state,
        dataForm: action.payload,
      };
      // storeDataToLocalStorage(newData);
      return newData;
    }
    default:
      return state;
  }
}

export default reducer;
