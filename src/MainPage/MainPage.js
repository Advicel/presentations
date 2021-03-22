import React, { useEffect, useState } from "react";

export default function MainPage() {
  const [presentations, setPresentations] = useState([]);
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    getPresentations().then((data) => setPresentations(data));
    getSlides().then((data) => setSlides(data));
  }, []);

  console.log(presentations);
  return (
    <div>
      {presentations.map((pres, index) => (
        <h2 key={index}>
          {index + " " + pres.name + " " + pres.slides.length}
        </h2>
      ))}
      слайды
      {slides.map((slide, index) => (
        <h2 key={index}>{index + " " + slide.text}</h2>
      ))}
    </div>
  );
}

async function getPresentations() {
  const url = "https://vladimir256.pythonanywhere.com/presentations/";
  const response = await fetch(url).then((response) => response.json());
  return response;
}
async function getSlides() {
  const url = "https://vladimir256.pythonanywhere.com/slides/";
  const response = await fetch(url).then((response) => response.json());
  return response;
}
