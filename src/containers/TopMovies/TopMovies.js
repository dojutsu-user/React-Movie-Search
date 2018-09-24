import React, { Component } from "react";
import cssClass from "./TopMovies.css";
import Card from "../../components/UI/Card/Card";

class TopMovies extends Component {
  render() {
    return (
      <div>
        <h2 className={cssClass.title}>Top Movies</h2>
        <div className={cssClass.container}>
          <div className={cssClass.block}>
            <Card name="ABCD" />
          </div>
          <div className={cssClass.block}>
            <Card name="ABCD" />
          </div>
          <div className={cssClass.block}>
            <Card name="ABCD" />
          </div>
          <div className={cssClass.block}>
            <Card name="ABCD" />
          </div>
          <div className={cssClass.block}>
            <Card name="ABCD" />
          </div>
          <div className={cssClass.block}>
            <Card name="ABCD" />
          </div>
        </div>
      </div>
    );
  }
}

export default TopMovies;