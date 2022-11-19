import React, { Fragment } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import httpRequest from "../../helpers/httpRequest";
import { authActions } from "../../store/AuthSlice";

import classes from "./AdminPanel.module.css";

function AdminPanel() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const userToken = JSON.parse(localStorage.getItem("JWT")) || null;
    const getAllCart = async () => {
      try {
        const response = await httpRequest("GET", "/cart/all-carts", userToken);
        console.log(response);
      } catch (err) {
        console.log(err);
      }
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
          <h3>Customers Cart</h3>
        </div>
      </div>
    </Fragment>
  );
}

export default AdminPanel;
