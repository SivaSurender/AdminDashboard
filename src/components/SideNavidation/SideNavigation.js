import React from "react";
import classes from "./SideNavigation.module.css";

function SideNavigation() {
  return (
    <aside className={classes.sidenav}>
      <div className={classes.image}></div>
      <div className={classes.panel}>
        <div className={classes.icon}></div>
        <div className={classes.icon}></div>
        <div className={classes.icon}></div>
        <div className={classes.icon}></div>
        <div className={classes.icon}></div>
        <div className={classes.icon}></div>
        <div className={classes.icon}></div>
        <div className={classes.icon}></div>
        <div className={classes.icon}></div>
      </div>
      <div className={classes.icon}></div>
    </aside>
  );
}

export default SideNavigation;
