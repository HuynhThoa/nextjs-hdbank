// import { Box, CircularProgress } from "@material-ui/core"
// import { createStyles, makeStyles } from "@material-ui/core/styles"
import { Box, CircularProgress } from "@mui/material";
import React from "react";

// const useStyles = makeStyles(() =>
//   createStyles({
//     progress: {
//       color: "#e73b40",
//       // background: "green",
//     },
//   })
// )

interface Props {
  bg?: string;
}

export default function Progress(props: Props) {
  const { bg } = props;
  return (
    <Box
      height="100%"
      width="100%"
      left={0}
      top={0}
      zIndex={1000}
      overflow="hidden"
      position="fixed"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bgcolor={bg ? bg : "rgb(0 0 0 / 16%)"}
      // className={classes.progress}
      color="primary"
    >
      <CircularProgress color="secondary" />
    </Box>
  );
}
