import React from "react";
import cssClass from "./Backdrop.css";

const backdrop = props => {
  let drop = null;
  if (props.open) {
    drop = (
      <div className={cssClass.Backdrop} onClick={props.clicked}>
        {" "}
      </div>
    );
  } else {
    drop = <div> </div>;
  }
  return drop;
};

export default backdrop;
