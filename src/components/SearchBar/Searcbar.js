import React from "react";
import classes from "./SearchBar.module.css";

const SearchBar = function () {
  return (
    <div>
      <input type="search" placeholder="Search" className={classes.search} />
    </div>
  );
};

export default SearchBar;
