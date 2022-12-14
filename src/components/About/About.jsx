import React from "react";
import classes from "./About.module.css";
import aboutImg from "../../assets/aboutImg.png";
function About() {
  return (
    <div className={classes.about__box}>
      <div className={`container ${classes.cont}`}>
        <div>
          <h1>About</h1>
          <p>
            Shop
            <span style={{ color: "#ff9900", fontWeight: "bold" }}>zon</span> is
            a dummy Full-Stack E-commerce web app built with MongoDB, Express,
            Redux , React, and Node.js , this app implement all the CRUD
            operations , manipulate the cart , sign in / up , reset password ,
            search section, filter items, and more.
          </p>
        </div>
        <img src={aboutImg} alt="about" />
      </div>
    </div>
  );
}

export default About;
