import React, { Fragment } from "react";
import Construction from "../../components/Construction/Construction";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

function UnderConstruction() {
  return (
    <Fragment>
      <Header />
      <Construction />
      <Footer />
    </Fragment>
  );
}

export default UnderConstruction;
