import React, { Fragment } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Products from "../../components/Products/Products";

function ProductsPage(props) {
  return (
    <Fragment>
      <Header />
      <Products cat={"men's clothing"} />
      <Footer />
    </Fragment>
  );
}

export default ProductsPage;
