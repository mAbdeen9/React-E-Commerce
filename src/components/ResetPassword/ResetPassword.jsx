import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./ResetPassword.module.css";

function ResetPassword() {
  //
  const emailRef = useRef();

  const [isVaild, setIsVaild] = useState(true);
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    const data = {
      email: emailRef.current?.value,
    };
    if (!data.email) {
      setIsVaild(false);
      return;
    }

    console.log(data);
    navigate("/OTP", { replace: true });
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
              <h5>There was a problem</h5>
              <p>
                We're sorry. We weren't able to identify you given the
                information provided.
              </p>
            </div>
          )}
          <div className={classes.header__tag}>
            Password assistance
            <p>Enter the email address associated with your Amazon account.</p>
          </div>

          <div className={classes.form}>
            <form onSubmit={submitHandler}>
              <div className={classes.input__box}>
                <div>
                  <label htmlFor="email">Email</label>
                </div>
                <input
                  placeholder="Your email"
                  ref={emailRef}
                  id="email"
                  type="email"
                />
              </div>

              <div className={classes.btn}>
                <button>Continue</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default ResetPassword;
