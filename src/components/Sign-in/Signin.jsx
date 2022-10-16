import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./Signin.module.css";
function Signin() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [isVaild, setIsVaild] = useState(true);
  const navigate = useNavigate();

  const signHandler = (e) => {
    e.preventDefault();
    const data = {
      email: emailRef.current?.value,
      password: passwordRef.current?.value,
    };
    if (!data.email || !data.password) {
      setIsVaild(false);
      return;
    }

    console.log(data);
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
                  <span>Forgot your password?</span>
                </div>
                <input ref={passwordRef} id="password" type="password" />
              </div>

              <div className={classes.btn}>
                <button>Continue</button>
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
