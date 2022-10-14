import React from "react";
import classes from "./Card.module.css";

function Card(props) {
  return (
    <div className={classes.card}>
      <h5>{props.header}</h5>
      <img src={props.img} alt="product" />
      <p onClick={props.onClick}>Shop now </p>
    </div>
  );
}

export default Card;
