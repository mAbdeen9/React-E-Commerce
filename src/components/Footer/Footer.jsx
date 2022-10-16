import React from "react";
import classes from "./Footer.module.css";
function Footer() {
  return (
    <div className={classes.footer__box}>
      <div onClick={() => window.scrollTo(0, 0)} className={classes.nav__top}>
        Back to top
      </div>
      <div className={classes.footer__info}>
        <div>
          <span className={classes.logo}>
            Shop<span style={{ color: "#ff9900" }}>zon</span>
          </span>{" "}
          dummy e-commerce web app
        </div>
        <div>Built with ❤️ Mohamed Abdeen</div>
        <div> All rights reserved © 2022 </div>
      </div>
    </div>
  );
}

export default Footer;
