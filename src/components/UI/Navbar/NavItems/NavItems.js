import React from "react";
import SearchBox from "../../../../containers/SearchBox/SearchBox";
import {Link} from "react-router-dom";

const navItems = () => {
  return (
    <ul>
      <Link to="/"><li>
        <span className="fa fa-home"> </span> Home
      </li>
      </Link>
      <li>
        <span className="fa fa-envelope-square"> </span> Contact Us
      </li>
      <SearchBox />
    </ul>
  );
};

export default navItems;
