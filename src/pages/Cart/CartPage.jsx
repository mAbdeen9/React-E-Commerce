import React, { Fragment } from "react";
import Cart from "../../components/Cart/Cart";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

function CartPage() {
  return (
    <Fragment>
      <Header />
      <Cart />
      <Footer />
    </Fragment>
  );
}

export default CartPage;
