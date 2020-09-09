import React from "react";
import Carousel from "react-material-ui-carousel";

import "./imageslider.css";

export const ImageSlider = (props) => {
  // put here images here or pass it via props above
  const [imgData, setImageDate] = React.useState([
    "https://picsum.photos/seed/picsum/200/200",
    "https://picsum.photos/seed/picsum/200/200",
    "https://picsum.photos/seed/picsum/200/200",
    "https://picsum.photos/seed/picsum/200/200",
    "https://picsum.photos/seed/picsum/200/200",
    "https://picsum.photos/seed/picsum/200/200",
    "https://picsum.photos/seed/picsum/200/200",
  ]);

  return (
    <Carousel
      className="myCarousel"
      autoPlay={true}
      animation={"fade"}
      indicators={true}
    >
      {imgData.map((item, i) => (
        <img key={i} className="myImages" src={item} />
      ))}
    </Carousel>
  );
};
