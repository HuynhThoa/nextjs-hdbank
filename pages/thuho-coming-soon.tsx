import { Box, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { getLanguage } from "commons/helpers";
import _get from "lodash/get";
import Head from "next/head";
import { useRouter } from "next/router";
import resources from "pages/assets/translate.json";
import React from "react";

const useStyles = makeStyles(() => ({
  rootPage: {
    background: "#F2F2F4",
    minHeight: "100vh",
    position: "relative",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  root: {
    border: "1px solid #ffa50075",
    borderRadius: 10,
    padding: 20,
  },
}));

const ComingSoonPage = () => {
  const classes = useStyles();
  const router = useRouter();
  const query = router.query;
  const lang = getLanguage(router);
  const t = _get(resources, [lang, "homePage"]);

  const _redirectDetail = () => {
    router.push({
      pathname: "/hdbs/ComingSoonDetail",
    });
  };
  return (
    <>
      <Head>
        <title>Thanh toán học phí</title>
      </Head>
      <div className={classes.rootPage}>
        <div className={classes.root}>
          <Grid>
            <Typography>{t.textDescription1}</Typography>
          </Grid>
        </div>
      </div>
    </>
  );
};

export default ComingSoonPage;
