import React from "react";
import cssClass from "./ButtonStyle2.css";

const buttonStyle2 = props => {
  return <button className={cssClass.Style2}>{props.children}</button>;
};

export default buttonStyle2;
