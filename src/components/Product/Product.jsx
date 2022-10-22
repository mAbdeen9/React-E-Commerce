import React from "react";
import classes from "./Product.module.css";
const data = {
  id: 6,
  title: "Solid Gold Petite Micropave , mythical water dragon  ",
  price: 168,
  description:
    "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
  category: "jewelery",
  image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
  rating: {
    rate: 3.9,
    count: 70,
  },
};
function Product() {
  return (
    <div className={`container ${classes.product__box}`}>
      <img src={data.image} alt="Product img" />
      <div className={classes.product__info}>
        <h3>{data.title}</h3>
        <div className={classes.stars}>
          <span
            className={
              data.rating.rate >= 1 ? "fa fa-star checkedStar" : "fa fa-star"
            }
          ></span>
          <span
            className={
              data.rating.rate >= 2 ? "fa fa-star checkedStar" : "fa fa-star"
            }
          ></span>
          <span
            className={
              data.rating.rate >= 3 ? "fa fa-star checkedStar" : "fa fa-star"
            }
          ></span>
          <span
            className={
              data.rating.rate >= 4 ? "fa fa-star checkedStar" : "fa fa-star"
            }
          ></span>
          <span
            className={
              data.rating.rate >= 5 ? "fa fa-star checkedStar" : "fa fa-star"
            }
          ></span>
        </div>
        <div className={classes.line}></div>
        <div className={classes.card__dollar}>{data.price}</div>
        <h5>About this item</h5>
        <div className={classes.about}>{data.description}</div>
      </div>
      <div className={classes.addToCart}>
        <div>In Stock.</div>
        <form>
          <select name="quantity">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          <div className={classes.btn}>
            <button>Add to Cart</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Product;
