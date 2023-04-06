import * as React from "react";
import Head from "next/head";
import { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider, EmotionCache } from "@emotion/react";
import createEmotionCache from "setup/material-ui/createEmotionCache";
import theme from "setup/material-ui/theme";
import "./../styles/globals.css";
import { PopupNotify } from "components/commons";
import Script from "next/script";
import _get from "lodash/get";
import { Provider } from "react-redux";
import store from "store/store";
import { useRouter } from "next/router";
// import { PAGE_TITLE } from "components/ThuhoPage/consts";
import Progress from "components/commons/Progress";
import { getWebTitle } from "commons/helpers";
import { PROJECT_NAME } from "commons/constants";
// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const router = useRouter();
  // const pathname = router.pathname;

  const [popupNotify, setPopupNotify] = React.useState({
    open: false,
    isSuccess: false,
    desc: "",
    onClose: () => null,
  });

  function toggleNotify(desc?: string, onClose?: any, isSuccess?: boolean) {
    console.log("toggleNotify running...");
    setPopupNotify((prev) => {
      if (desc && typeof desc === "string") {
        return {
          open: true,
          desc,
          onClose: onClose ? onClose : () => null,
          isSuccess: isSuccess || false,
        };
      }
      prev.onClose && prev?.onClose();
      return {
        open: false,
        desc: "",
        onClose: () => null,
        isSuccess: false,
      };
    });
  }

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        {/*<title>Nạp tiền giao thông</title> */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </Head>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          {/* {!loaded && <Progress bg="white" />} */}
          <Component toggleNotify={toggleNotify} {...pageProps} />
          <PopupNotify
            title="Thông báo"
            desc={popupNotify.desc}
            open={popupNotify.open}
            isSuccess={popupNotify.isSuccess}
            toggleModal={toggleNotify}
          />
        </ThemeProvider>
      </Provider>
    </CacheProvider>
  );
}
