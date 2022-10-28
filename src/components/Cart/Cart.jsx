import React from "react";
import classes from "./Cart.module.css";
import EmptyImgae from "../../assets/empty-cart.png";
import { useNavigate } from "react-router";
function Cart() {
  const navigate = useNavigate();

  const product = {
    id: 2,
    title: "Mens Casual Premium Slim Fit T-Shirts ",
    price: 22.3,
    description:
      "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    category: "mens clothing",
    image:
      "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    rating: { rate: 4.1, count: 259 },
  };

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
              <span className={classes.qty}>Qty: 1</span>
              <div className={classes.card__delete__Btn}>Delete </div>
            </div>
            <div className={classes.card__price}>${product.price}</div>
          </div>
          <div className={classes.line}></div>
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
              <span className={classes.qty}>Qty: 1</span>
              <div className={classes.card__delete__Btn}>Delete </div>
            </div>
            <div className={classes.card__price}>${product.price}</div>
          </div>
          <div className={classes.line}></div>
          <div className={classes.subtotal}>
            Subtotal (1 item): <span>$15.99</span>
          </div>
        </div>
        <div className={classes.checkout}>
          <div className={classes.subtotalCheck}>
            Subtotal (1 item): <span>$15.99</span>
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
