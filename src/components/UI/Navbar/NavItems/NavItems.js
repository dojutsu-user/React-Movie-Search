import React from "react";
import SearchBox from "../../../../containers/SearchBox/SearchBox";

const navItems = () => {
  return (
    <ul>
      <li>
        <span className="fa fa-home"> </span> Home
      </li>
      <li>
        <span className="fa fa-envelope-square"> </span> Contact Us
      </li>
      <SearchBox />
    </ul>
  );
};

export default navItems;
