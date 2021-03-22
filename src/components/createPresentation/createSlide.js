import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(
  {
    wrapper: {
      display: "flex",
    },
    h2: {
      color: "red",
    },
    input: {
      margin: "0 auto",
      height: 500,
      width: 500,
      border: "1px solid black",
      textAlign: (props) => props.textAlign,
      color: (props) => props.color,
      fontSize: (props) => props.size,
    },
    center: {
      textAlign: "center",
    },
  },
  {
    name: "presentation",
  }
);

export default function CreateSlide({ slide, onChange }) {
  const props = slide;
  const styles = useStyles(props);
  const handleChangeText = (event) => {
    onChange(event.target.value);
  };
  return (
    <textarea
      className={styles.input}
      onChange={handleChangeText}
      value={props.text}
    ></textarea>
  );
}
