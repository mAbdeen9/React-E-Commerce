import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import classes from "./Product.module.css";
import fakeProduct from "../../fakeProducts.json";
import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";
import { cartActions } from "../../store/CartSlice";
function Product() {
  //
  const { id } = useParams();
  const [data, setData] = useState();
  const selectRef = useRef();
  const { username } = useSelector((state) => state.Auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    setData(() => {
      // eslint-disable-next-line
      return fakeProduct.find((p) => p.id == id);
    });
    window.scrollTo(0, 0);
  }, [id]);

  const addToCartHandler = (e) => {
    e.preventDefault();
    if (!username) {
      navigate("/sign-in");
    } else {
      const order = {
        id: data.id,
        title: data.title,
        image: data.image,
        price: data.price,
        count: selectRef.current.value,
      };

      dispatch(cartActions.addToCart(order));
    }
  };

  return (
    <div className={`container ${classes.product__box}`}>
      <img src={data?.image} alt="Product img" />
      <div className={classes.product__info}>
        <h3>{data?.title}</h3>
        <div className={classes.stars}>
          <span
            className={
              data?.rating.rate >= 1 ? "fa fa-star checkedStar" : "fa fa-star"
            }
          ></span>
          <span
            className={
              data?.rating.rate >= 2 ? "fa fa-star checkedStar" : "fa fa-star"
            }
          ></span>
          <span
            className={
              data?.rating.rate >= 3 ? "fa fa-star checkedStar" : "fa fa-star"
            }
          ></span>
          <span
            className={
              data?.rating.rate >= 4 ? "fa fa-star checkedStar" : "fa fa-star"
            }
          ></span>
          <span
            className={
              data?.rating.rate >= 5 ? "fa fa-star checkedStar" : "fa fa-star"
            }
          ></span>
        </div>
        <div className={classes.line}></div>
        <div className={classes.card__dollar}>{data?.price}</div>
        <h5>About this item</h5>
        <div className={classes.about}>{data?.description}</div>
      </div>
      <div className={classes.addToCart}>
        <div>In Stock.</div>
        <form onSubmit={addToCartHandler}>
          <select ref={selectRef} name="quantity">
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
