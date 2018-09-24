import React, { Component } from "react";
import CoverFlow from "coverflow-react";
import cssClass from "./Coverflow.css";

class coverflow extends Component {
  render() {
    const imagesArr = [
      "http://image.tmdb.org/t/p/original/87hTDiay2N2qWyX4Ds7ybXi9h8I.jpg",
      "http://image.tmdb.org/t/p/original/AuXC0SsPZaAfddtSMnxSnbEeEjR.jpg",
      "http://image.tmdb.org/t/p/original/xwEtJVliloiuICXoyqjyTZM9qRc.jpg",
      "http://image.tmdb.org/t/p/original/rp3LMR79zulTXmZ4LUSH2daNWR.jpg",
      "http://image.tmdb.org/t/p/original/voaEWm1rFZ5lDL1E8NUpQRP4inc.jpg"
    ];
    let labelsArr = ["1", "2", "3", "4", "5"];
    return (
      <React.Fragment>
        <h2 className={cssClass.title}>Upcoming Movies</h2>
        <div className={cssClass.Coverflow}>
          <CoverFlow
            imagesArr={imagesArr}
            labelsArr={labelsArr}
            height={400}
            background="#aaaaaa"
            emptyMessage="Loading"
          />
        </div>
      </React.Fragment>
    );
  }
}

export default coverflow;
