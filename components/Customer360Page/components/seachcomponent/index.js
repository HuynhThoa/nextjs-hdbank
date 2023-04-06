import Head from "next/head";
import styles from "./index.module.css";
import React, { ChangeEvent, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { blue, yellow } from "@mui/material/colors";
import { TextField } from "@mui/material";

export default function SearchCustomers(props) {
  const {
    setSearchValues,
    searchValues,
    setData,
    handleSearchClick,
    handleInputChange,
  } = props;

  return (
    <div>
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Seach</title>
      </Head>
      <body>
        <div
          classname={styles.div_seach}
          style={{
            width: "1762px",
            height: "132px",
            backgroundColor: "white",
            border: "1px solid #D3D8DE",
            borderRadius: "8px",
          }}
        >
          <h1 className={styles.h1_seach}>Tìm kiếm khách hàng</h1>
          <form>
            <div className={styles.form_seach}>
              <div>
                <TextField
                  className={styles.input}
                  id="filled-helperText"
                  label="Mã khách hàng"
                  size="small"
                  name="id"
                  value={props.code}
                  onChange={handleInputChange}
                  inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                />
              </div>
              <div>
                <TextField
                  className={styles.input}
                  id="filled-helperText"
                  label="CMND/CCCD/MST"
                  size="small"
                  name="cmnd"
                  value={searchValues.cmnd}
                  onChange={handleInputChange}
                  inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                />
              </div>
              <div>
                <TextField
                  className={styles.input}
                  id="filled-helperText"
                  label="Số tài khoản"
                  size="small"
                  name="accountNumber"
                  value={searchValues.accountNumber}
                  onChange={handleInputChange}
                  inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                />
              </div>
              <div className={styles.listButton}>
                <div>
                  <button
                    type="submit"
                    class="btn btn-primary"
                    onClick={handleSearchClick}
                    className={styles.button_seach}
                  >
                    <img src="/thuho/asset/images/Vector.png"></img>
                  </button>
                </div>
                <div>
                  <button
                    type="submit"
                    onClick={handleSearchClick}
                    className={styles.button_van_tay}
                  >
                    <img src="/thuho/asset/images/vanTay.png"></img>
                  </button>
                </div>
                <div>
                  <button
                    type="submit"
                    onClick={handleSearchClick}
                    className={styles.button_qr}
                  >
                    <img src="/thuho/asset/images/nhanDienKhuonMat.png"></img>
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div>
          <div></div>
        </div>
      </body>
    </div>
  );
}
