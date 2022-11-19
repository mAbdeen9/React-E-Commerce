import React, { Fragment } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import httpRequest from "../../helpers/httpRequest";
import { authActions } from "../../store/AuthSlice";
import { Cart } from "react-bootstrap-icons";
import classes from "./AdminPanel.module.css";

function AdminPanel() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const userToken = JSON.parse(localStorage.getItem("JWT")) || null;
    const getAllCart = async () => {
      setIsLoading(true);
      try {
        const response = await httpRequest("GET", "/cart/all-carts", userToken);
        const carts = response?.data?.data.filter((e) => e !== null);
        const data = carts.map((e) => e?.cart).flat(1);

        setData(data);
      } catch (err) {
        toast(err?.message);
      }
      setIsLoading(false);
    };

    getAllCart();
  }, []);

  return (
    <Fragment>
      <div className={classes.admin__cont}>
        <div className={`container ${classes.admin__head}`}>
          <div>
            <span className={classes.logo}>
              Shop<span style={{ color: "#ff9900" }}>zon</span> Panel
            </span>
          </div>
          <div
            onClick={() => {
              navigate("/");
              dispatch(authActions.logout());
              toast("Successfully Logged out ✅ ");
              localStorage.clear();
            }}
            className={classes.logout}
          >
            Logout ➾
          </div>
        </div>
      </div>
      <div className={classes.admin__content}>
        <div className="container">
          <div>
            <h3 className={classes.cc__h}>
              All Users Cart <Cart color="#017185" fontSize="30px" />{" "}
            </h3>
            <div className={classes.orders__box}>
              <div className={classes.line}></div>
              {isLoading
                ? "Loading data ..."
                : data.map((product, i) => {
                    return (
                      <Fragment key={i}>
                        <div className={classes.product__card}>
                          <img src={product.image} alt="product" />
                          <div className={classes.product__des}>
                            <div className={classes.card__title}>
                              <div>{product.title}</div>
                              <div
                                style={{ color: "#007600", fontSize: "14px" }}
                              >
                                in Stock
                              </div>
                              <div>Free Shipping</div>
                            </div>
                            <span className={classes.qty}>
                              Qty: {product.count}
                            </span>
                            <div
                              onClick={() =>
                                toast(
                                  "Dummy panel just customers manipulate the cart ✋🏻 "
                                )
                              }
                              className={classes.card__delete__Btn}
                            >
                              Prepare Order
                            </div>
                          </div>
                          <div className={classes.card__price}>
                            ${product.price}
                          </div>
                        </div>
                        <div className={classes.line}></div>
                      </Fragment>
                    );
                  })}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default AdminPanel;
