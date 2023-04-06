import type { NextApiResponse } from "next";
import axiosWrapper from "commons/helpers/axios/axios-instance";
import { getTodayWithFormat } from "commons/helpers/date";
import { AxiosResponse } from "axios";
import { API_DOMAIN } from "commons/constants";
import { writeLog } from "commons/helpers/logger";
import ip from "ip";
import _get from "lodash/get";
async function handler(req: any, res: NextApiResponse<any>) {

    try {
    //   const url = `${API_DOMAIN}/GetConfig`;
    //   const resp: AxiosResponse<any> = await axiosWrapper.post(url, req.body);
     const data = { 
        maKH : "12345",
        name : "Nguyen Van A",
        diemXHTD : "100",
        soGTTT : "12345567",
        email : "abc@.com",
        typeGTTT :"(CMND)",
        ngaySinh: "1/1/2000",
        age : "22",
        address : "Linh Chieu, Thu Duc",
        phone : "0987654321",
        trinhDo : "Dai hoc",
        ngheNghiep : "Thuc Tap HDBank",
        tinhtrangHonNhan : "Da Ket Hon",
        donViMoCIF : "--",
        ngayMoCIF : "12/11/2000",
        CNQLKHUuTien : "001 - Hoi so",
        NVQuanLyKh : "HD 017777 - Le Hoai An"
     }
      res.status(200).json(data);
    } catch (e) {
      res.status(200).json({
        resultCode: "99",
        resultMessage: _get(e, "message"),
        request: req.body,
      });
    }
    return;
}
export default handler;