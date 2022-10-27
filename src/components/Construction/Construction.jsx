import React from "react";
import classes from "./Construction.module.css";
import underCons from "../../assets/Underconstructionamico.png";
function Construction() {
  return (
    <div className={` ${classes.main}`}>
      <div className={`container ${classes.flex__box}`}>
        <div>Under Construction </div>
        <img src={underCons} alt="Under Construction" />
      </div>
    </div>
  );
}

export default Construction;
