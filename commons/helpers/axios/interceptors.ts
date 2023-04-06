import { AxiosRequestConfig, AxiosInstance } from "axios";
import _set from "lodash/set";
import * as Cookies from "commons/helpers/cookies";

async function appendAuthHeader(config: AxiosRequestConfig) {
  _set(config, "config.headers.Authorization", Cookies.get("sad"));
}

export function injectRefreshTokenInterceptor(ins: AxiosInstance) {
  ins.interceptors.response.use(
    async (response) => {
      await appendAuthHeader(response.config);
      return ins(response.config);
    },
    (error) => {
      throw error;
    }
  );
}
