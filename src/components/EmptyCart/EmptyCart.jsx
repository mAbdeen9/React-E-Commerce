import React, { Fragment } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import classes from "./EmptyCart.module.css";
import eCart from "./../../assets/EmptyCart.png";
import { useNavigate } from "react-router-dom";
function EmptyCart() {
  const navigate = useNavigate();

  return (
    <Fragment>
      <Header />
      <div className={classes.empty__cart}>
        <div className={classes.flex__box}>
          <img src={eCart} alt="empty cart" />
          <div>
            <div className={classes.head__Text}>Your Shopzon Cart is empty</div>
            <div>Nothing in here. Only possibilities</div>
          </div>

          <div onClick={() => navigate("/sign-in")} className={classes.btn__in}>
            <button>Sign in to your account</button>
          </div>
          <div
            onClick={() => navigate("/sign-out")}
            className={classes.btn__out}
          >
            <button>Sign up now</button>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
}

export default EmptyCart;
