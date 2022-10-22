import React from "react";
import classes from "./Card.module.css";

function Card(props) {
  return (
    <div onClick={props.onClick} className={classes.card}>
      <h5>{props.header}</h5>
      <img src={props.img} alt="product" />
      <p>Shop now </p>
    </div>
  );
}

export default Card;
