import type { NextApiResponse } from "next";
import axiosWrapper from "commons/helpers/axios/axios-instance";
import { getTodayWithFormat } from "commons/helpers/date";
import { AxiosResponse } from "axios";
import { API_DOMAIN } from "commons/constants";
import { writeLog } from "commons/helpers/logger";
import ip from "ip";
import _get from "lodash/get";
async function handler(req: any, res: NextApiResponse<any>) {
    writeLog(
      ip.address(),
      getTodayWithFormat(),
      `get acct type request `,
      JSON.stringify(req.body)
    );
    try {
      const url = `${API_DOMAIN}/GetConfig`;
      const resp: AxiosResponse<any> = await axiosWrapper.post(url, req.body);
      writeLog(
        ip.address(),
        getTodayWithFormat(),
        `get acct type response `,
        JSON.stringify(resp.data)
      );
      res.status(200).json(resp.data);
    } catch (e) {
      res.status(200).json({
        resultCode: "99",
        resultMessage: _get(e, "message"),
        request: req.body,
      });
      writeLog(
        ip.address(),
        getTodayWithFormat(),
        `get acct type catched err: ${_get(e, "message")}`
      );
    }
    return;
}
export default handler;