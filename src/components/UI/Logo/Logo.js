import React from "react";
import cssClass from "./Logo.css";

const logo = () => {
  return (
    <div className={cssClass.Logo}>
      <span className="fa fa-film fa-lg"> </span> React Movie Search
    </div>
  );
};

export default logo;
