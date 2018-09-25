import React from "react";
import cssClass from "./Logo.css";
import { Link } from "react-router-dom";

const logo = () => {
  return (
    <div className={cssClass.Logo}>
      <Link to="/">
        <span className="fa fa-film fa-lg"> </span> React Movie Search
      </Link>
    </div>
  );
};

export default logo;
