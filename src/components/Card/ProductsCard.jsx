import React from "react";
import classes from "./Card.module.css";

function ProductsCard(props) {
  return (
    <div className={classes.p__card}>
      <img src={props.img} alt="product" />
      <div>
        <div className={classes.card__title}>{props.title}</div>
        <div>
          <span
            className={
              props.rating >= 1 ? "fa fa-star checkedStar" : "fa fa-star"
            }
          ></span>
          <span
            className={
              props.rating >= 2 ? "fa fa-star checkedStar" : "fa fa-star"
            }
          ></span>
          <span
            className={
              props.rating >= 3 ? "fa fa-star checkedStar" : "fa fa-star"
            }
          ></span>
          <span
            className={
              props.rating >= 4 ? "fa fa-star checkedStar" : "fa fa-star"
            }
          ></span>
          <span
            className={
              props.rating.rate >= 5 ? "fa fa-star checkedStar" : "fa fa-star"
            }
          ></span>
        </div>
        <div className={classes.card__dollar}>{props.price}</div>
        <div className={classes.card__free}>FREE Shipping</div>
      </div>
    </div>
  );
}

export default ProductsCard;
