import React from "react";
import cssClass from "./Spinner.css";

const spinner = () => {
  return (
    <div className={cssClass.container}>
      <div className={[cssClass.item, cssClass.item1].join(" ")}> </div>
      <div className={[cssClass.item, cssClass.item2].join(" ")}> </div>
      <div className={[cssClass.item, cssClass.item3].join(" ")}> </div>
      <div className={[cssClass.item, cssClass.item4].join(" ")}> </div>
    </div>
  );
};

export default spinner;
