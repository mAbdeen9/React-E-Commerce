import React, { Fragment, useEffect, useRef, useState } from "react";
import classes from "./Header.module.css";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import fakeProduct from "../../fakeProducts.json";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../store/AuthSlice";
import { toast } from "react-toastify";
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
import { cartActions } from "../../store/CartSlice";

function Header() {
  const [country, setCountry] = useState();
  const [mobileNavClass, setMobileNavClass] = useState("none");
  const [showSearch, setShowSearch] = useState(false);
  const [searchResuls, setSearchResults] = useState([]);
  const { username } = useSelector((state) => state.Auth);
  const { items: cartNum } = useSelector((state) => state.Cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const inputRef = useRef();
  const inputMobileRef = useRef();
  const location = useLocation();

  useEffect(() => {
    const getGeoInfo = async () => {
      try {
        const data = await axios.get("https://ipapi.co/json/");
        setCountry(data.data.city);
      } catch (err) {
        toast(err);
      }
    };
    getGeoInfo();
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

  const logInLogOut = () => {
    if (!username) {
      navigate("/sign-in");
    } else {
      setMobileNavClass((state) => {
        document.body.style.overflow = "unset";
        state = "none";
        return state;
      });
      navigate("/");
      dispatch(authActions.logout());
      dispatch(cartActions.removeAll());
      toast.info("logout successfully", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      localStorage.clear();
    }
  };

  const mobileCloseNavHandler = () => {
    setMobileNavClass((state) => {
      document.body.style.overflow = "unset";
      state = "none";
      return state;
    });
  };

  return (
    <Fragment>
      {/* -- Start Mobile -- */}
      <div
        style={{ display: mobileNavClass }}
        className={classes.mobile__sidenav}
      >
        <div className={classes.rightbar}>
          <div className={classes.rightbar__top}>
            <div onClick={() => logInLogOut()} className={classes.mobile__sign}>
              <span>
                {username ? `${username.split(" ")[0]} ` : `Sign in `}
              </span>
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
            <div
              onClick={() => navigate("/coming-soon")}
              className={classes.flex__listY}
            >
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
            <div onClick={() => logInLogOut()} className={classes.mobile__sign}>
              <span>
                {username ? `${username.split(" ")[0]}` : `Sign in ›`}
              </span>
              <Person color="white" size={"25px"} />
            </div>
            <span
              onClick={() => {
                if (!username) {
                  navigate("/empty-cart");
                } else {
                  navigate("/user-cart");
                }
              }}
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
              placeholder=" Search Shopzon"
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
          <div onClick={() => logInLogOut()} className={classes.bg__hello}>
            <div className={classes.bg__deliver__hello}>
              {username ? `Hello, ${username.split(" ")[0]}` : `Hello, sign in`}
            </div>
            <div>
              Account & Lists <ArrowDownShort />
            </div>
          </div>
          <div
            onClick={() => {
              if (!username) {
                navigate("/empty-cart");
              } else {
                navigate("/user-cart");
              }
            }}
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
              <li
                onClick={() => {
                  if (location.pathname === "/") {
                    window.scrollTo(700, 700);
                  } else {
                    navigate("/");
                    window.scrollTo(700, 700);
                  }
                }}
              >
                Today's Deals
              </li>
              <li onClick={() => navigate("/coming-soon")}>Customer Service</li>
            </ul>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Header;
