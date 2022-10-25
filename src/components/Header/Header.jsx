import React, { Fragment, useEffect, useRef, useState } from "react";
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
import fakeProduct from "../../fakeProducts.json";

function Header() {
  //
  const navigate = useNavigate();
  const [country, setCountry] = useState();
  const [mobileNavClass, setMobileNavClass] = useState("none");
  const [cartNum, setCartNum] = useState(0);
  const [showSearch, setShowSearch] = useState(false);
  const [searchResuls, setSearchResults] = useState([]);
  const inputRef = useRef();
  const inputMobileRef = useRef();

  useEffect(() => {
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  const searchHandler = () => {
    if (!showSearch) setShowSearch(true);
    const inputValue = inputRef.current.value;
    const data = [];
    for (let p of fakeProduct) {
      if (
        p.title.toLowerCase().trim().includes(inputValue.toLowerCase().trim())
      ) {
        data.push(p);
      }
    }
    setSearchResults(data);
  };

  const searchHandlerMobile = () => {
    if (!showSearch) setShowSearch(true);
    const inputValue = inputMobileRef.current.value;
    const data = [];
    for (let p of fakeProduct) {
      if (
        p.title.toLowerCase().trim().includes(inputValue.toLowerCase().trim())
      ) {
        data.push(p);
      }
    }
    setSearchResults(data);
  };

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
        // alert(err);
        console.log(err);
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
            <div onClick={() => navigate("/")} className={classes.flex__list}>
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
              <div
                style={{ cursor: "pointer" }}
                onClick={() => navigate("/about")}
              >
                About
              </div>
              <p onClick={() => navigate("/about")}>Technologies</p>
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
            <span onClick={() => navigate("/")} className={classes.logo}>
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
            <span
              onClick={() => navigate("/empty-cart")}
              className={classes.mobile__cart}
            >
              <Cart color="white" size={"24px"} />
              <span className={classes.bg__cartnumber}> {cartNum} </span>
            </span>
          </div>
        </div>

        <form onKeyDown={searchHandlerMobile} className={classes.mobile__form}>
          <div className={classes.mobile__serachbar}>
            <input
              ref={inputMobileRef}
              onBlur={() => setTimeout(() => setShowSearch(false), 500)}
              type="text"
              placeholder="Search Shopzon"
            />
            <button onClick={(e) => e.preventDefault()}>
              <Search color="black" size={"25px"} fontWeight="bold" />
            </button>
          </div>
        </form>
        <div
          className={`${classes.bg__serachbarText} ${
            showSearch ? classes.active_input : ""
          }`}
        >
          {searchResuls.map((p, i) => (
            <div
              className={classes.search__value}
              key={i}
              onClick={() => navigate(`/Product/${p.id}`)}
            >
              {p.title}
            </div>
          ))}
        </div>
        <div className={classes.mobile__location}>
          <GeoAlt color="white" /> <span> Deliver to {country}</span>
        </div>
      </div>
      {/* -- END Mobile -- */}
      {/* Start Big Screens Header */}
      <div className={classes.bg__header}>
        <div className={classes.bg__top}>
          <div onClick={() => navigate("/")} className={classes.bg__logo}>
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
            <form onKeyDown={searchHandler}>
              <div className={classes.bg__serachbar}>
                <input
                  ref={inputRef}
                  onBlur={(e) => setTimeout(() => setShowSearch(false), 500)}
                  type="text"
                />
                <button onClick={(e) => e.preventDefault()}>
                  <Search color="black" size={"20px"} fontWeight="bold" />
                </button>
              </div>
            </form>
            <div
              className={`${classes.bg__serachbarText} ${
                showSearch ? classes.active_input : ""
              }`}
            >
              {searchResuls.map((p, i) => (
                <div
                  className={classes.search__value}
                  key={i}
                  onClick={() => navigate(`/Product/${p.id}`)}
                >
                  {p.title}
                </div>
              ))}
            </div>
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
          <div
            onClick={() => navigate("/empty-cart")}
            className={classes.bg__cart}
          >
            <Cart color="white" fontSize="30px" /> <span> Cart </span>
            <div className={classes.bg__cartnumber}> {cartNum} </div>
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
