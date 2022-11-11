import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import httpRequest from "../../helpers/httpRequest";
import useInputChecker from "../../hooks/useInputChecker";
import classes from "./ResetPassword.module.css";

function NewPassword() {
  //
  const passwordRef = useRef();
  const otpRef = useRef();
  const { checkPassword } = useInputChecker();
  const [isVaild, setIsVaild] = useState(true);
  const [passwordError, setPasswordError] = useState(null);
  const [tokenError, setTokenError] = useState(null);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const data = {
      otp: otpRef.current?.value,
      password: passwordRef.current?.value,
    };
    const vaildForm = () => {
      if (!checkPassword(data.password, setPasswordError, setIsVaild)) return;
      return true;
    };
    const valid = vaildForm();
    if (!valid) {
      return setIsLoading(false);
    }
    try {
      await httpRequest("PATCH", "/login/resetPassword", "", data);
      navigate("/sign-in", { replace: true });
    } catch (err) {
      setTokenError(err?.response?.data?.message);
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
              <h5>There was a problem</h5>
              <p>Please enter vaild password , {passwordError}</p>
            </div>
          )}
          <div className={classes.header__tag}>
            Password assistance <br />
            Check your email for the token
            <p>We'll ask for this password whenever you Sign-In.</p>
          </div>

          <div className={classes.form}>
            <form onSubmit={submitHandler}>
              <div className={classes.input__box}>
                <label htmlFor="otp">OTP :</label>
                <input
                  placeholder="Enter OTP"
                  ref={otpRef}
                  id="otp"
                  type="text"
                />
                <p style={{ color: "red" }}>{tokenError}</p>
              </div>
              <div className={classes.input__box}>
                <label htmlFor="otp">New Password :</label>
                <input
                  placeholder="Enter new password"
                  ref={passwordRef}
                  id="password"
                  type="password"
                  minLength={8}
                />
              </div>

              <div className={classes.btn}>
                <button>{isLoading ? "Loading ..." : "Save changes"} </button>
              </div>
            </form>
          </div>
          <div className={classes.tips}>Secure password tips:</div>
          <ul>
            <li>
              Use at least 8 characters, a combination of numbers and letters is
              best.
            </li>
            <li>
              Do not use the same password you have used with us previously.
            </li>
            <li>
              Do not use dictionary words, your name, e-mail address, mobile
              phone number or other personal information that can be easily
              obtained.
            </li>
            <li>Do not use the same password for multiple online accounts.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NewPassword;
