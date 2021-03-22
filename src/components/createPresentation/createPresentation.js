import { Button, makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import CreateSlide from "./createSlide";
import SelectTextSize from "./settings/selectTextSize";
import SetTextAlign from "./settings/setTextAlign";
import SetTextColor from "./settings/setTextColor";

const useStyles = makeStyles(
  {
    wrapper: {
      margin: "0 auto",
      width: "60%",
    },
    settingsWrapper: {
      display: "flex",
    },
    presentationWrapper: {
      display: "flex",
      alignItems: "center",
    },
    pageNumber: {
      textAlign: "center",
    },
  },
  {
    name: "createPresentations",
  }
);

export default function CreatePresentation() {
  const styles = useStyles();
  const [page, setPage] = useState(1);
  const defaultSlide = {
    page,
    textAlign: "left",
    color: "black",
    size: 10,
    text: "",
  };
  const [presentation, setPresentation] = useState([defaultSlide]);

  const currentSlide = presentation[page - 1];

  const handleNextPage = () => {
    if (page === presentation.length) {
      setPresentation([...presentation, defaultSlide]);
    }
    setPage(page + 1);
  };

  const handlePrevPage = (q) => {
    if (page > 1) setPage(page - 1);
  };

  const handleChangeText = (text) => {
    const updatedPresentations = [...presentation];
    updatedPresentations[page - 1].text = text;
    setPresentation(updatedPresentations);
  };

  const handleChangeTextAlign = (event) => {
    const updatedPresentations = [...presentation];
    updatedPresentations[page - 1].textAlign = event.target.value;
    setPresentation(updatedPresentations);
  };

  const handleChangeColor = (event) => {
    const updatedPresentations = [...presentation];
    updatedPresentations[page - 1].color = event.target.value;
    setPresentation(updatedPresentations);
  };

  const handleChangeSize = (size) => {
    const updatedPresentations = [...presentation];
    updatedPresentations[page - 1].size = size;
    setPresentation(updatedPresentations);
  };

  console.log(presentation);
  return (
    <div className={styles.wrapper}>
      <div className={styles.settingsWrapper}>
        <SetTextAlign
          onChange={handleChangeTextAlign}
          textAlign={currentSlide.textAlign}
        />
        <SetTextColor onChange={handleChangeColor} color={currentSlide.color} />
        <SelectTextSize size={currentSlide.size} onChange={handleChangeSize} />
      </div>
      <div className={styles.presentationWrapper}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => handlePrevPage()}
        >
          prev
        </Button>
        <CreateSlide slide={currentSlide} onChange={handleChangeText} />
        <Button
          variant="contained"
          color="primary"
          onClick={() => handleNextPage()}
        >
          next
        </Button>
      </div>

      <h2 className={styles.pageNumber}>{`${page}/${presentation.length}`}</h2>
    </div>
  );
}
