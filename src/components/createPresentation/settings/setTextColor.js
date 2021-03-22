import React from "react";
import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@material-ui/core";

export default function SetTextColor({ onChange, color }) {
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">color</FormLabel>
      <RadioGroup
        aria-label="color"
        name="color"
        value={color}
        onChange={onChange}
      >
        <FormControlLabel value="black" control={<Radio />} label="Black" />
        <FormControlLabel value="red" control={<Radio />} label="Red" />
        <FormControlLabel value="blue" control={<Radio />} label="Blue" />
      </RadioGroup>
    </FormControl>
  );
}
