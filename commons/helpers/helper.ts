import axios from "axios";
import React from "react";
import { LANGUAGE, PARTNER } from "commons/constants";
import { v4 as uuidv4 } from "uuid";
import { NextRouter } from "next/router";
import _get from "lodash/get";
import * as qs from "query-string";
import { generateKeyPairSync } from "crypto";
import { AccountItem } from "interfaces";

export const mappingLicensePlates = (value: string) => {
  switch (value) {
    case "1":
      return "Biển trắng";
    case "2":
      return "Biển xanh";
    case "3":
      return "Biển đỏ";
    case "4":
      return "Biển ngoại giao";
    case "5":
      return "Biển nước ngoài";
    case "6":
      return "Biển vàng";
    default:
      return ""
  }
};

// export const AccountType = [
//   "708",
//   "719",
//   "770",
//   "704",
//   "7CO",
//   "750",
//   "702",
//   "7AA",
//   "70A",
//   "707",
//   "7HS",
//   "718",
//   "714",
//   "724",
//   "7BV",
//   "726",
//   "700",
//   "7OD",
//   "705",
//   "7SV",
//   "7ZR",
//   "7PR",
//   "7PL",
//   "70G",
//   "70M",
//   "70L",
// ];

//getWebTitle
export const getWebTitle = (url: string, project: string) => {
  return url.indexOf(project);
};

export const getPartner = (partner: string) => {
  switch (partner) {
    case PARTNER.GC:
      return "gói cước";
    case PARTNER.BH:
      return "bảo hiểm";
    default:
      return "";
  }
};

//
export function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = React.useState({
    width: 0,
    height: 0,
  });

  React.useEffect(() => {
    // only execute all the code below in client side
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}
//
//filter account list
export function filterAccountList(
  data: AccountItem[],
  acctTypes: string
): AccountItem[] {
  if (data && data.length) {
    return data.filter((item) => {
      if (
        acctTypes.indexOf(item.AcctType) != -1 &&
        !(item.clientInd === "S") &&
        item.Ccy === "VND"
      ) {
        return item;
      }
    });
  }
  return [];
}

export const formatMoney = (money: number) => {
  return money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " VND";
};

export const formatMoneNoVND = (money: number) => {
  return money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

//remove accents
export const removeAccents = (str: string) => {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D");
};

// Get bill total
export const getTotal = (bill: any) => {
  let total = 0;
  for (const i of bill) {
    total += Number(i.billValue);
  }
  return total;
};

export const genKey = () => {
  const { publicKey, privateKey } = generateKeyPairSync("rsa", {
    modulusLength: 4096, // the length of your key in bits
    publicKeyEncoding: {
      type: "spki", // recommended to be 'spki' by the Node.js docs
      format: "pem",
    },
    privateKeyEncoding: {
      type: "pkcs8", // recommended to be 'pkcs8' by the Node.js docs
      format: "pem",
      cipher: "aes-256-cbc", // *optional*
      passphrase: "top secret", // *optional*
    },
  });
  return { publicKey, privateKey };
};

export const generateRequestBody = () => {
  return {
    request: {
      requestId: uuidv4(),
      requestTime: "",
      signature: "",
    },
  };
};

export const isNumber = (val: number): boolean => {
  return !isNaN(val);
};

export const startTimer = async (
  duration: number = 59,
  elementDisplay: HTMLElement
) => {
  return new Promise((resolve) => {
    let timer: number = duration;
    let minutes: number | string;
    let seconds: number | string;
    const x = setInterval(() => {
      minutes = parseInt((timer / 60).toString(), 10);
      seconds = parseInt((timer % 60).toString(), 10);

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;
      if (+minutes) {
        elementDisplay.textContent = `${minutes}:${seconds}`;
      } else {
        elementDisplay.textContent = `${seconds}`;
      }
      timer--;
      if (timer < 0) {
        elementDisplay.textContent = "";
        resolve(true);
        clearInterval(x);
      }
    }, 1000);
  });
};

export function parseJwt(token: string) {
  var base64Url = token.split(".")[1];
  var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  var jsonPayload = decodeURIComponent(
    atob(base64)
      .split("")
      .map(function (c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join("")
  );

  return JSON.parse(jsonPayload);
}

export function getLanguage(router: NextRouter): string {
  const lang = _get(router, "query.language");
  const listLanguage = Object.values(LANGUAGE);
  if (!listLanguage.find((_lang) => _lang === lang)) {
    return LANGUAGE.VI;
  }

  return lang;
}

export async function writeLogToServer(body: any) {
  await axios.post("/api/writeLog", body);
}

export async function reloadToPage(page: string, query: any) {
  window.location.href = `${page}?${qs.stringify(query)}`;
}
