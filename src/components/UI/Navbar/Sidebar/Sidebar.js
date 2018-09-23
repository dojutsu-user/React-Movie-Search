import React from "react";
import cssClass from "./Sidebar.css";
import NavItems from "../NavItems/NavItems";
import Logo from "../../Logo/Logo";

const sidebar = props => {
  let classes = [cssClass.Sidebar];
  if (props.open) {
    classes = classes.concat(cssClass.Open);
  } else {
    classes = classes.concat(cssClass.Close);
  }
  return (
    <div className={classes.join(" ")}>
      <div className={cssClass.SidebarLogo}>
        <Logo />
      </div>
      <div className={cssClass.SidebarNavItems}>
        <NavItems />
      </div>
    </div>
  );
};

export default sidebar;
