import { makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

const useStyles = makeStyles(
  {
    wrapper: {
      display: "flex",
    },
    h2: {
      color: "red",
    },
    input: {
      height: 500,
      width: 500,
      border: "1px solid black",
      textAlign: (props) => props.textAlign,
    },
    center: {
      textAlign: "center",
    },
  },
  {
    name: "presentation",
  }
);

export default function CreatePresentation() {
  const [value, setValue] = React.useState("left");

  const handleChangeTextAlign = (event) => {
    setValue(event.target.value);
  };

  const props = { textAlign: value };
  console.log(props);
  const styles = useStyles(props);

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.h2}>presentation</h2>
      <FormControl component="fieldset">
        <FormLabel component="legend">textAlign</FormLabel>
        <RadioGroup
          aria-label="textAlign"
          name="textAlign"
          value={value}
          onChange={handleChangeTextAlign}
        >
          <FormControlLabel value="left" control={<Radio />} label="Left" />
          <FormControlLabel value="center" control={<Radio />} label="Center" />
          <FormControlLabel value="right" control={<Radio />} label="Right" />
        </RadioGroup>
      </FormControl>
      <textarea className={styles.input}></textarea>
    </div>
  );
}
