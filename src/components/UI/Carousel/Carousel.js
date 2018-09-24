import React, { Component } from "react";
import CoverFlow from "coverflow-react";
import cssClass from "./Carousel.css";

class Carousel extends Component {
  render() {
    const imagesArr = [
      "http://image.tmdb.org/t/p/original/87hTDiay2N2qWyX4Ds7ybXi9h8I.jpg",
      "http://image.tmdb.org/t/p/original/87hTDiay2N2qWyX4Ds7ybXi9h8I.jpg",
      "http://image.tmdb.org/t/p/original/87hTDiay2N2qWyX4Ds7ybXi9h8I.jpg",
      "http://image.tmdb.org/t/p/original/87hTDiay2N2qWyX4Ds7ybXi9h8I.jpg",
      "http://image.tmdb.org/t/p/original/87hTDiay2N2qWyX4Ds7ybXi9h8I.jpg"
    ];
    let labelsArr = ["1", "2", "3", "4", "5"];
    return (
      <div className={cssClass.Carousel}>
        <CoverFlow
          imagesArr={imagesArr}
          labelsArr={labelsArr}
          height="300"
          background="#aaaaaa"
        />
      </div>
    );
  }
}

export default Carousel;
