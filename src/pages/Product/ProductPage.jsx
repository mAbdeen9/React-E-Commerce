import React, { Fragment } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Product from "../../components/Product/Product";

function ProductPage() {
  return (
    <Fragment>
      <Header />
      <Product />
      <Footer />
    </Fragment>
  );
}

export default ProductPage;
