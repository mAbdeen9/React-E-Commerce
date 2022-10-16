import React, { Fragment } from "react";
import Categorys from "../../components/Categorys/Categorys";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Swiper from "../../components/Swiper/Swiper";

function Home() {
  return (
    <Fragment>
      <Header />
      <Swiper />
      <Categorys />
      <Footer />
    </Fragment>
  );
}

export default Home;
