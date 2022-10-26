import React, { Fragment } from "react";
import Categorys from "../../components/Categorys/Categorys";
import Deals from "../../components/Deals/Deals";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Swiper from "../../components/Swiper/Swiper";

function Home() {
  return (
    <Fragment>
      <Header />
      <Swiper />
      <Deals />
      <Categorys />
      <Footer />
    </Fragment>
  );
}

export default Home;
