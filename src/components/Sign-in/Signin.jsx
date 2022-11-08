import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authActions } from "../../store/AuthSlice";
import classes from "./Signin.module.css";
import httpRequest from "../../helpers/httpRequest";
import jwtDecode from "jwt-decode";

function Signin() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [isVaild, setIsVaild] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const signHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const inputValues = {
      email: emailRef.current?.value,
      password: passwordRef.current?.value,
    };

    if (!inputValues.email || !inputValues.password) {
      setIsVaild(false);
      setIsLoading(false);
      return;
    }

    try {
      const res = await httpRequest("POST", "/login/sign-in", "", inputValues);
      const data = res;
      const user = jwtDecode(data.data.data.token);
      if (res.status === 200) {
        localStorage.setItem("JWT", JSON.stringify(data.data.data.token));

        dispatch(
          authActions.validator({
            token: data.data.data.token,
            id: user.payload.id,
            username: user.payload.name,
            role: user.payload.role,
          })
        );

        navigate("/", { replace: true });
        window.location.reload();
      }
    } catch (err) {
      setIsVaild(false);
    }
    setIsLoading(false);
  };

  return (
    <div className={classes.sign__box}>
      <div onClick={() => navigate("/")} className={classes.sign__head}>
        <span className={classes.logo}>
          Shop<span style={{ color: "#ff9900" }}>zon</span>
        </span>
      </div>
      <div className={classes.sign__flex}>
        <div className={classes.sign__main}>
          {!isVaild && (
            <div className={classes.error__box}>
              <h5>Incorrect password or email address</h5>
              <p>
                Please check your email address & password or click Create
                Account if you are new to Shopzon.
              </p>
            </div>
          )}
          <div className={classes.header__tag}>Sign in</div>
          <div className={classes.form}>
            <form onSubmit={signHandler}>
              <div className={classes.input__box}>
                <div>
                  <label htmlFor="email">Email</label>
                </div>
                <input ref={emailRef} id="email" type="email" />
              </div>

              <div className={classes.input__box}>
                <div>
                  <label htmlFor="password">Password</label>
                </div>
                <input ref={passwordRef} id="password" type="password" />
                <span onClick={() => navigate("/reset-password")}>
                  Forgot your password?
                </span>
              </div>

              <div className={classes.btn}>
                <button>{isLoading ? "Loading ..." : "Continue"} </button>
              </div>
            </form>
          </div>
          <div className={classes.tow_lines}>
            <span>New to Shopzon?</span>
          </div>
          <div onClick={() => navigate("/sign-up")} className={classes.btn2}>
            <button>Create your Shopzon account</button>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default Signin;
