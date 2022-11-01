import React, { Fragment } from "react";
import classes from "./Cart.module.css";
import EmptyImgae from "../../assets/empty-cart.png";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/CartSlice";
function Cart() {
  const navigate = useNavigate();
  const { cart, items, subtotal } = useSelector((state) => state.Cart);
  const dispatch = useDispatch();
  return (
    <div className={classes.main__box}>
      {/* <div className={`container ${classes.flex__box}`}>
        <img src={EmptyImgae} alt="empty cart" />
        <div className={classes.text__box}>
          <div>Your Amazon Cart is empty</div>
          <div style={{ color: "#a3a5a5" }}>Good stuff goes in here</div>
          <div onClick={() => navigate("/")}>See recommendations</div>
        </div>
      </div> */}
      <div className={`container ${classes.cart__check}`}>
        <div className={classes.orders}>
          <div className={classes.orders__title}>
            <div>
              <h3>Shopping Cart</h3>
              <span>all items</span>
            </div>
            <div className={classes.price}>Price</div>
          </div>
          <div className={classes.line}></div>
          {cart?.map((product, i) => {
            return (
              <Fragment key={i}>
                <div className={classes.product__card}>
                  <img src={product.image} alt="product" />
                  <div className={classes.product__des}>
                    <div className={classes.card__title}>
                      <div>{product.title}</div>
                      <div style={{ color: "#007600", fontSize: "14px" }}>
                        in Stock
                      </div>
                      <div>Free Shipping</div>
                    </div>
                    <span className={classes.qty}>Qty: {product.count}</span>
                    <div
                      onClick={() =>
                        dispatch(cartActions.deleteOrderFromCart(product))
                      }
                      className={classes.card__delete__Btn}
                    >
                      Delete
                    </div>
                  </div>
                  <div className={classes.card__price}>${product.price}</div>
                </div>
                <div className={classes.line}></div>
              </Fragment>
            );
          })}
          <div className={classes.subtotal}>
            Subtotal ({items} items):
            <span> ${subtotal.toFixed(2)}</span>
          </div>
        </div>
        <div className={classes.checkout}>
          <div className={classes.subtotalCheck}>
            Subtotal ({items} items): <span> ${subtotal.toFixed(2)}</span>
          </div>
          <div className={classes.checkout__btn}>
            <button>Proceed to checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
