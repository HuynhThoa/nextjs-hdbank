import React from "react";
import Image from "next/image";

import { makeStyles } from "@mui/styles";
import Dialog, { DialogProps } from "@mui/material/Dialog";
import Grid from "@mui/material/Grid";
import Box from "@mui/system/Box";
import { Theme } from "@mui/system/createTheme";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

import ButtonCustom from "../Button";
import notifyError from "public/images/notifyError.png";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import CountDownTimer, { TimerInput } from "../CountDownTimer";
import cn from "classnames";
import { Button } from "@mui/material";

interface Props extends DialogProps {
  toggleModal: () => void;
  iconNotify?: React.ReactNode;
  title?: string;
  desc?: string;
  hoursMinSecs?: TimerInput;
  isSuccess?: boolean;
}

const useStyles = makeStyles((theme: Theme) => ({
  rootDialog: {
    "& .MuiPaper-root": {
      width: "20vw",
      borderRadius: "15px",
      // [theme.breakpoints?.down("sm")]: {
      //   width: "90vw",
      // },
    },
  },
  rootDialogMobile: {
    "& .MuiPaper-root": {
      width: "90vw",
    },
  },
  title: {
    fontSize: 20,
    fontWeight: 600,
    textAlign: "center",
  },
  desc: {
    fontWeight: 400,
    fontSize: 16,
    textAlign: "center",    
  },
  btn: {
    color: "#0095ff",
    background: "none",
    height: 45
  }
}));

const PopupNotify = (props: Props) => {
  const {
    title = "Thông báo",
    desc = "",
    toggleModal,
    open,
    hoursMinSecs,
    isSuccess,
    ...rest
  } = props;
  const classes = useStyles();
  const theme = useTheme();
  // const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Dialog
      open={open}
      className={cn(classes.rootDialog, classes.rootDialogMobile)}
      {...rest}
    >
      <Box overflow={"hidden"} pt={1}>
        <Box>
          <Grid spacing={2}>
            <Grid pt={1.5} item className={classes.title}>
              {title}
            </Grid>
            <Grid dangerouslySetInnerHTML={{__html: desc}} p={2} pt={1} item className={classes.desc}>
              {/* {desc} */}
            </Grid>
            <Grid item>
              <Button
                color="info"
                fullWidth
                onClick={toggleModal}
                variant="contained"
                className={classes.btn}
              >
                Đóng
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Dialog>
  );
};

export default PopupNotify;
