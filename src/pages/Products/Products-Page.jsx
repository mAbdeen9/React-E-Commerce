import React, { Fragment } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Product from "../../components/Product/Product";
import Products from "../../components/Products/Products";
import classes from "./ProductsPage.module.css";

function ProductsPage() {
  return (
    <Fragment>
      <Header />
      <div className={classes.main}>
        <Product />
      </div>
      <Footer />
    </Fragment>
  );
}

export default ProductsPage;
