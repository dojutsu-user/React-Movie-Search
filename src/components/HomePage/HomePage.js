import React from "react";
import Coverflow from "../UI/Coverflow/Coverflow";
import TopMovies from "../../containers/TopMovies/TopMovies";
import HR from "../UI/HR/HR";

const homepage = () => {
  return (
    <React.Fragment>
      <Coverflow />
      <HR />
      <TopMovies />
    </React.Fragment>
  );
};

export default homepage;
