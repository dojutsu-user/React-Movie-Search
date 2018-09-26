import React from "react";
import SearchBox from "../../../../containers/SearchBox/SearchBox";
import { Link } from "react-router-dom";

const navItems = () => {
  return (
    <ul>
      <Link to="/">
        <li>
          <span className="fa fa-home"> </span> Home
        </li>
      </Link>
      <SearchBox />
    </ul>
  );
};

export default navItems;
