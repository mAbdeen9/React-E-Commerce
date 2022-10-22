import React from "react";
import { Carousel } from "react-bootstrap";
import s2 from "./../../assets/swiper/s2.png";
import s3 from "./../../assets/swiper/s3.png";
import classes from "./Swiper.module.css";

function Swiper() {
  return (
    <div className={`container-fluid ${classes.swiper__wide} `}>
      <div className={`container ${classes.swiper} `}>
        <Carousel>
          <Carousel.Item>
            <img
              className={`d-block ${classes.swiper__img}`}
              src={s3}
              alt="50% sales"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className={`d-block ${classes.swiper__img}`}
              src={s2}
              alt="sales"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default Swiper;
