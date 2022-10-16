import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./SignUp.module.css";

function SignUp() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const nameRef = useRef();
  const navigate = useNavigate();
  const [isVaild, setIsVaild] = useState(false);

  const signUpHandler = (e) => {};

  return (
    <div className={classes.sign__box}>
      <div onClick={() => navigate("/")} className={classes.sign__head}>
        <span className={classes.logo}>
          Shop<span style={{ color: "#ff9900" }}>zon</span>
        </span>
      </div>
      <div className={classes.header__tag}>Create account</div>
      <div className={classes.sign__flex}>
        <div className={classes.sign__main}>
          {!isVaild && (
            <div className={classes.error__box}>
              <h5> There was a problem</h5>
              <p>
                Please enter your full name Missing e-mail or mobile phone
                number. Please correct and try again. Please create a password
              </p>
            </div>
          )}

          <div className={classes.form}>
            <form onSubmit={signUpHandler}>
              <div className={classes.input__box}>
                <div>
                  <label htmlFor="name">Name</label>
                </div>
                <input ref={nameRef} id="name" type="text" />
              </div>

              <div className={classes.input__box}>
                <div>
                  <label htmlFor="email">Email</label>
                </div>
                <input ref={emailRef} id="email" type="email" />
              </div>

              <div className={classes.input__box}>
                <div>
                  <label htmlFor="password">Create a password</label>
                </div>
                <input
                  minLength={6}
                  ref={passwordRef}
                  id="password"
                  type="password"
                />
                <span>Passwords must be at least 6 characters.</span>
              </div>

              <div className={classes.btn}>
                <button>Continue</button>
              </div>
            </form>
          </div>
          <div className={classes.tow_lines}>
            <span>Shopzon </span>
          </div>
        </div>
      </div>
      <div className={classes.hava__acc}>
        Already have an account?{" "}
        <span onClick={() => navigate("/sign-in")} style={{ color: "#0065C0" }}>
          Sign in
        </span>
      </div>
    </div>
  );
}

export default SignUp;
