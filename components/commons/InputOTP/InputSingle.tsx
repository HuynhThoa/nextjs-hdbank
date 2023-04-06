import React, { ChangeEvent, useState } from "react";
import InputCustom from "../Input";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  customInput: {
    "& input": {
      textAlign: "center",
    },
  },
}));

interface Props {
  onChange?: (otp: string) => void;
  disabled?: boolean;
}

const InputSingle = (props: Props) => {
  const classes = useStyles();
  const { onChange, disabled } = props;
  const [value, setValue] = useState("");
  const _handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (typeof value === "string" && Number.isNaN(Number(value))) {
      return;
    }
    setValue(value);
    onChange && onChange(value);
  };
  return (
    <InputCustom
      disabled={disabled}
      className={classes.customInput}
      value={value}
      type="tel"
      onChange={_handleChangeInput}
	    maxLength= {6}
    />
  );
};

export default InputSingle;
