import Head from "next/head";
import styles from "./infor.module.css";
import React, { ChangeEvent, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { blue, yellow } from "@mui/material/colors";
import { TextField } from "@mui/material";
import { height } from "@mui/system";
import { Grid } from "@mui/material";

export default function InforCustomer(props) {
  const { data } = props;
  return (
    <div className={styles.div_information}>
      <div className={styles.div_head}>
        <div className={styles.div_head1}>
          <div className={styles.div_head1_left}>
            <img src="/thuho/asset/images/avatar.png"></img>
          </div>
          <div className={styles.div_head1_right}>
            <div className={styles.div_head1_right_name}>{data.name}</div>
            <div className={styles.div_under_name}>
              <div className={styles.div_makh}>{data.maKH}</div>
              <div className={styles.div_actives}>Active</div>
              <div className={styles.div_ad}>A.D</div>
            </div>
          </div>
        </div>
        <div className={styles.div_head2}>
          <div className={styles.div_head2_top}>
            <img
              className={styles.image_rank}
              src="/thuho/asset/images/badge.png"
            ></img>
            <div className={styles.div_head2_top_center}>
              <label className={styles.text_rank_left}>Ruby</label>
              <img
                src="/thuho/asset/images/thanhRank.png"
                style={{ height: "6px", width: "200px" }}
              ></img>

              <label className={styles.text_rank_right}>Diamond</label>
            </div>
            <img
              className={styles.image_rank}
              src="/thuho/asset/images/Ellipse.png"
            ></img>
          </div>
          <div className={styles.div_head2_bottom}>
            <label className={styles.div_head2_bottom_lable}>
              Tích lũy tài sản 850.000.000 VND thăng hạng Diamond
            </label>
            <a className={styles.div_head2_bottom_a}>Hủy</a>
            <button className={styles.div_head2_bottom_button}>
              Nâng hạng
            </button>
          </div>
        </div>
      </div>
      <div className={styles.div_body}>
        <div className={styles.div_body1}>
          <p>Điểm XHTD:</p>
          <p>Số GTTT:</p>
          <p>Ngày sinh:</p>
          <p>Tuổi - Gioi Tính:</p>
          <p>Chổ ở hiện tại:</p>
          <p>Số điện thoại:</p>
          <p>Email:</p>
          <p>Trình độ học vấn: </p>
          <p>Nghệ nghiệp:</p>
          <p>Tình Trạng hôn nhân:</p>
          <p>Đơn vị mở CIF:</p>
          <p>Ngày mở CIF:</p>
          <p>CN QL KH ưu tiên:</p>
          <p>NV quản lý KH:</p>
        </div>
        <div className={styles.div_body2}>
          <p>{data.diemXHTD}</p>
          <p className={styles.p_data_soGTTT}>
            {data.soGTTT}
            {data.typeGTTT}
          </p>
          <p>{data.ngaySinh}</p>
          <p>{data.age}</p>
          <p>{data.address}</p>
          <p>{data.phone}</p>
          <p>{data.email}</p>
          <p>{data.trinhDo}</p>
          <p>{data.ngheNghiep}</p>
          <p>{data.tinhtrangHonNhan}</p>
          <p>{data.donViMoCIF}</p>
          <p>{data.ngayMoCIF}</p>
          <p>{data.CNQLKHUuTien}</p>
          <p>{data.NVQuanLyKh}</p>
        </div>
      </div>
      <div className={styles.div_foot}>
        <div className={styles.section_message_in_form_infor}>
          <div>
            <img src="/thuho/asset/images/xacThuc.png" alt="" />
          </div>
        </div>
        <div>
          <button className={styles.button_in_form_infor}>
            Yêu cầu xử lý dữ liệu (02)
          </button>
        </div>
      </div>
    </div>
  );
}
