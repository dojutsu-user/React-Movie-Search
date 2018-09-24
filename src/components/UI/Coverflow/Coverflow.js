import React, { Component } from "react";
import CoverFlow from "coverflow-react";
import cssClass from "./Coverflow.css";

class coverflow extends Component {
  render() {
    let imagesArr = this.props.posters.map(
      poster => `http://image.tmdb.org/t/p/w500${poster}`
    );
    return (
      <React.Fragment>
        <h2 className={cssClass.title}>Upcoming Movies</h2>
        <div className={cssClass.Coverflow}>
          <CoverFlow
            imagesArr={imagesArr}
            labelsArr={this.props.labels}
            width={1430}
            height={335}
            itemRatio="4:6"
            background="rgb(236, 236, 235)"
            emptyMessage="Loading"
          />
        </div>
      </React.Fragment>
    );
  }
}

export default coverflow;
