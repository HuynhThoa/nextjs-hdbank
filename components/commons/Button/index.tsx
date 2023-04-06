import React from "react";
import Button, { ButtonProps } from "@mui/material/Button";
import { makeStyles } from "@mui/styles";
import cn from "classnames";
import LoadingIcon from "../LoadingIcon";


export interface Props extends ButtonProps {
  loading?: boolean;
  className?: string;
}

const useStyles = makeStyles(() => ({
  root: {
    color: "rgba(0, 0, 0, 0.5)",
    background: "linear-gradient(rgb(255, 222, 1) 0%, rgb(250, 167, 26) 100%)",
    fontWeight: 550,
    borderRadius: 8,
    boxShadow: "none !important",
    height: "40px !important",
    textTransform: "inherit",
    fontSize: "15",
  },
}));

const ButtonCustom = (props: Props) => {
  const { fullWidth, loading, className, children, ...rest } = props;
  const classes = useStyles();

  return (
    <>
      {loading ? (
        <Button
          variant="contained"
          fullWidth={fullWidth}
          className={cn(classes.root, className)}
          disabled
        >
          <LoadingIcon />
        </Button>
      ) : (
        <Button
          fullWidth={fullWidth}
          className={cn(classes.root, className)}
          {...rest}
        >
          {children}
        </Button>
      )}
    </>
  );
};

export default ButtonCustom;
