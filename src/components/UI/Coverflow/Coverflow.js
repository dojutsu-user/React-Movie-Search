import React, { Component } from "react";
import CoverFlow from "coverflow-react";
import cssClass from "./Coverflow.css";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

class coverflow extends Component {
  state = {
    selectedMovieIndex: 5
  };
  render() {
    let imagesArr = null;
    let coverFlow = <div> </div>;
    if (this.props.posters.length > 0) {
      imagesArr = this.props.posters.map(
        poster => `http://image.tmdb.org/t/p/w500${poster}`
      );
      coverFlow = (
        <CoverFlow
          imagesArr={imagesArr}
          labelsArr={this.props.labels}
          width={1430}
          height={335}
          itemRatio="4:6"
          background="rgb(236, 236, 235)"
          emptyMessage="Loading"
          handleSelect={index => this.setState({ selectedMovieIndex: index })}
        />
      );
    }
    return (
      <React.Fragment>
        <h2 className={cssClass.title}>Upcoming Movies</h2>
        <div className={cssClass.Coverflow}>{coverFlow}</div>
        {this.state.selectedMovieIndex >= 0 ? (
          <div className={cssClass.MovieName}>
          <button className={cssClass.Name}>{this.props.labels[this.state.selectedMovieIndex]}</button>
            <Link
              to={
                "/movie/" + this.props.movieIds[this.state.selectedMovieIndex]
              }
            >
              <button className={cssClass.ReadMore}>Read More</button>
            </Link>
          </div>
        ) : null}
      </React.Fragment>
    );
  }
}

export default withRouter(coverflow);
