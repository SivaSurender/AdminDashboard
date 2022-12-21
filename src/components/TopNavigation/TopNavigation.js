import React from "react";
import SearchBar from "../SearchBar/Searcbar";
import classes from "./TopNavigation.module.css";

function TopNavigation() {
  return (
    <nav className={classes.topnav}>
      <h5 className={classes.brand}>Dashy Dashboard</h5>
      <SearchBar />
    </nav>
  );
}

export default TopNavigation;
