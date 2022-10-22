import React, { Fragment } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Products from "../../components/Products/Products";
import classes from "./ProductsPage.module.css";
function ProductsPage() {
  return (
    <Fragment>
      <Header />
      <div className={classes.main}>
        <Products />
      </div>
      <Footer />
    </Fragment>
  );
}

export default ProductsPage;
