import React from "react";
import cssClass from "./Navbar.css";
import NavItems from "./NavItems/NavItems";
import Logo from "../Logo/Logo";

const navbar = props => {
  return (
    <div className={cssClass.Nav}>
      <Logo />
      <div className={cssClass.NavItems}>
        <NavItems />
      </div>
      <div className={cssClass.Hamburger}>
        <span className="fa fa-bars fa-2x" onClick={props.sidebarToggler}> </span>
      </div>
    </div>
  );
};

export default navbar;
