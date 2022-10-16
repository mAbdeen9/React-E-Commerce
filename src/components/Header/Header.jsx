import React, { Fragment, useEffect, useState } from "react";
import {
  List,
  Cart,
  Person,
  Search,
  GeoAlt,
  HouseDoor,
  XLg,
  ArrowDownShort,
} from "react-bootstrap-icons";
import classes from "./Header.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Header() {
  const [country, setCountry] = useState();
  const [mobileNavClass, setMobileNavClass] = useState("none");
  const navigate = useNavigate();

  const mobileNavHandler = () => {
    setMobileNavClass((state) => {
      document.body.style.overflow = "hidden";
      window.scrollTo(0, 0);
      state = "";
      return state;
    });
  };

  const mobileCloseNavHandler = () => {
    setMobileNavClass((state) => {
      document.body.style.overflow = "unset";
      state = "none";
      return state;
    });
  };

  useEffect(() => {
    const getGeoInfo = async () => {
      try {
        const data = await axios.get("https://ipapi.co/json/");
        setCountry(data.data.city);
      } catch (err) {
        alert(err);
      }
    };
    getGeoInfo();
  }, []);

  return (
    <Fragment>
      {/* -- Start Mobile -- */}
      <div
        style={{ display: mobileNavClass }}
        className={classes.mobile__sidenav}
      >
        <div className={classes.rightbar}>
          <div className={classes.rightbar__top}>
            <div
              onClick={() => navigate("/sign-in")}
              className={classes.mobile__sign}
            >
              <span>Sign in </span>
              <Person color="white" size={"25px"} />
            </div>
            <div className={classes.rightbar__head}>
              <div>Browse</div>
              <div>Shopzon</div>
            </div>
          </div>
          <div className={classes.rightbar__rest}>
            <div className={classes.flex__list}>
              <div>Shopzon Home</div>
              <div>
                <HouseDoor fontWeight="bold" size="24px" />
              </div>
            </div>
            <div className={classes.line}></div>
            <div className={classes.flex__listY}>
              <div>Trending</div>
              <p>Best Sellers</p>
              <p>New Releases</p>
            </div>
            <div className={classes.line}></div>
            <div className={classes.flex__listY}>
              <div>About us </div>
              <p>Team</p>
              <p>Technologies</p>
            </div>
          </div>
        </div>
        <div onClick={mobileCloseNavHandler} className={classes.leftbar}>
          <XLg color="white" fontWeight="bold" size="30px" />
        </div>
      </div>
      <div className={classes.mobile__header}>
        <div className={classes.header__mobile}>
          <div>
            <span onClick={mobileNavHandler} className={classes.mobile__burger}>
              <List color="white" size={"35px"} />
            </span>
            <span className={classes.logo}>
              Shop<span style={{ color: "#ff9900" }}>zon</span>
            </span>
          </div>
          <div className={classes.mobile__right}>
            <div
              onClick={() => navigate("/sign-in")}
              className={classes.mobile__sign}
            >
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
      </div>
      {/* -- END Mobile -- */}
      {/* Start Big Screens Header */}
      <div className={classes.bg__header}>
        <div className={classes.bg__top}>
          <div className={classes.bg__logo}>
            <span className={classes.logo}>
              Shop<span style={{ color: "#ff9900" }}>zon</span>
            </span>
          </div>
          <div className={classes.bg__deliver}>
            <div>
              <GeoAlt fontWeight="bold" fontSize="20px" />
            </div>
            <div>
              <span className={classes.bg__deliver__hello}>Hello</span>
              <div>
                <span>Deliver to {country}</span>
              </div>
            </div>
          </div>
          <div className={classes.bg__search}>
            <form>
              <div className={classes.bg__serachbar}>
                <input type="text" />
                <button>
                  <Search color="black" size={"20px"} fontWeight="bold" />
                </button>
              </div>
            </form>
          </div>
          <div
            onClick={() => navigate("/sign-in")}
            className={classes.bg__hello}
          >
            <div className={classes.bg__deliver__hello}>Hello, sign in</div>
            <div>
              Account & Lists <ArrowDownShort />
            </div>
          </div>
          <div className={classes.bg__cart}>
            <Cart color="white" fontSize="30px" /> <span>Cart</span>
          </div>
        </div>
        <div className={classes.bg__down}>
          <div>
            <span onClick={mobileNavHandler} className={classes.mobile__burger}>
              <List color="white" size={"28px"} />
            </span>
          </div>
          <div>
            <ul>
              <li>Today's Deals</li>
              <li>Customer Service</li>
            </ul>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Header;
