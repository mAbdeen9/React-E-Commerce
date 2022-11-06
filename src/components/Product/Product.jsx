import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import classes from "./Product.module.css";
import fakeProduct from "../../fakeProducts.json";
import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";
import { cartActions } from "../../store/CartSlice";
import Modal from "../Modal/Modal";
import httpRequest from "../../helpers/httpRequest";

function Product() {
  //
  const { id } = useParams();
  const [data, setData] = useState();
  const [showModal, setShowModal] = useState(false);
  const selectRef = useRef();
  const { username, token, id: userID } = useSelector((state) => state.Auth);
  const updatedCart = useSelector((state) => state.Cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (username && updatedCart.items !== 0) {
      const syncCart = async () => {
        try {
          await httpRequest("POST", "/cart/update-cart", token, {
            userID,
            updatedCart,
          });
        } catch (err) {
          console.log(err);
        }
      };
      syncCart();
    }
  }, [updatedCart, username, token, userID]);

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
      setShowModal(true);
      dispatch(cartActions.addToCart(order));
    }
  };

  return (
    <div className={`container ${classes.product__box}`}>
      {showModal && (
        <Modal>
          <div className={classes.modal__box}>
            <div>
              <div>
                <img src={data?.image} alt="Product img" />
              </div>
            </div>
            <div className={classes.modal__info}>
              <div> ✅ Added to Cart</div>
              <div>
                <button onClick={() => setShowModal(false)}>
                  Continue shopping
                </button>
                <button onClick={() => navigate("/user-cart")}>
                  Go to Cart
                </button>
              </div>
            </div>
          </div>
        </Modal>
      )}

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
