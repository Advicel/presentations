import React from "react";
import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@material-ui/core";

export default function SetTextAlign({ onChange, textAlign }) {
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">textAlign</FormLabel>
      <RadioGroup
        aria-label="textAlign"
        name="textAlign"
        value={textAlign}
        onChange={onChange}
      >
        <FormControlLabel value="left" control={<Radio />} label="Left" />
        <FormControlLabel value="center" control={<Radio />} label="Center" />
        <FormControlLabel value="right" control={<Radio />} label="Right" />
      </RadioGroup>
    </FormControl>
  );
}
