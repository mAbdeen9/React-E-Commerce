import React, { Fragment, useEffect, useState } from "react";
import classes from "./Header.module.css";

import { List, Cart, Person, Search, GeoAlt } from "react-bootstrap-icons";
import axios from "axios";

function Header() {
  const [country, setCountry] = useState();

  useEffect(() => {
    const getGeoInfo = async () => {
      const data = await axios.get("https://ipapi.co/json/");
      setCountry(data.data.city);
    };
    getGeoInfo();
  });

  return (
    <Fragment>
      {/* -- Start Mobile -- */}
      <div className={classes.header__mobile}>
        <div>
          <span className={classes.mobile__burger}>
            <List color="white" size={"35px"} />
          </span>
          <span className={classes.logo}>
            Shop<span style={{ color: "#ff9900" }}>zon</span>
          </span>
        </div>
        <div className={classes.mobile__right}>
          <div className={classes.mobile__sign}>
            <span>Sign in ›</span>
            <Person color="white" size={"25px"} />
          </div>
          <span className={classes.mobile__cart}>
            <Cart color="white" size={"24px"} />
          </span>
        </div>
      </div>

      <form className={classes.mobile__form}>
        <div className={classes.mobile__serachbar}>
          <input type="text" placeholder="Search Shopzon" />
          <button>
            <Search color="black" size={"25px"} fontWeight="bold" />
          </button>
        </div>
      </form>

      <div className={classes.mobile__location}>
        <GeoAlt color="white" /> <span> Deliver to {country}</span>
      </div>

      <div className={classes.mobile__sidenav}></div>
      {/* -- END Mobile -- */}
    </Fragment>
  );
}

export default Header;
