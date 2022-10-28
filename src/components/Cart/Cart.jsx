import React from "react";
import classes from "./Cart.module.css";
import EmptyImgae from "../../assets/empty-cart.png";
import { useNavigate } from "react-router";
function Cart() {
  const navigate = useNavigate();

  return (
    <div className={classes.main__box}>
      <div className={`container ${classes.flex__box}`}>
        <img src={EmptyImgae} alt="empty cart" />
        <div className={classes.text__box}>
          <div>Your Amazon Cart is empty</div>
          <div style={{ color: "#a3a5a5" }}>Good stuff goes in here</div>
          <div onClick={() => navigate("/")}>See recommendations</div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
