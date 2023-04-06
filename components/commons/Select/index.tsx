import React from "react";
import {
  Grid,
  Box,
  Typography,
  FormControl,
  Select,
  MenuItem,
  TextField,
  FormControlLabel,
  Radio,
  RadioGroup,
  SelectProps,
} from "@mui/material";
import { FaChevronDown } from "react-icons/fa";
import { makeStyles } from "@mui/styles";
import { ButtonCustom } from "components/commons";

const useStyles = makeStyles(() => ({
  select: {
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      border: "1px solid silver",
      borderRadius: "5px 5px 0 0",
    },
    "& .MuiSelect-icon": {
      color: "#c52626e0",
      background: "#ff00000f",
      marginRight: 5,
      width: 19,
      height: 18,
      padding: 4,
    },
    "& .MuiSelect-select:focus": {
      background: "white!important",
    },
  },
  formControl: {
    position: "relative",
    minWidth: 120,
    background: "transparent",
    "& .MuiInputBase-root": {
      fontWeight: 550,
    },
    "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
      border: "1px solid silver",
    },
  },
 

}));

interface Props extends SelectProps {
  placeholder: string;
  value: string;
  option: any[];
}

const SelectCustom = (props: Props) => {
  const classes = useStyles();
  const { onChange, placeholder, value, option, ...rest } = props;
  return (
    <>
      <FormControl
        fullWidth={true}
        size="small"
        className={classes.formControl}
      >
        <Select
          {...rest}
          IconComponent={FaChevronDown}
          onChange={onChange}
          className={classes.select}
          variant="outlined"
          displayEmpty
          renderValue={
            value !== ""
              ? undefined
              : () => <div>{placeholder}</div>
          }
          value={value}
        >
          {option.map((item: any) => (
            <MenuItem value={item.value}>{item.label}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
};

export default SelectCustom;
