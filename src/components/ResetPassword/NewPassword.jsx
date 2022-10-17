import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import useInputChecker from "../../hooks/useInputChecker";
import classes from "./ResetPassword.module.css";

function NewPassword() {
  //
  const passwordRef = useRef();
  const { checkPassword } = useInputChecker();
  const [isVaild, setIsVaild] = useState(true);
  const [passwordError, setPasswordError] = useState(null);
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    const data = {
      password: passwordRef.current?.value,
    };
    const vaildForm = () => {
      if (!checkPassword(data.password, setPasswordError, setIsVaild)) return;
      return true;
    };
    const valid = vaildForm();
    if (!valid) return;
    console.log(data);
    navigate("/sign-in", { replace: true });
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
            Password assistance
            <p>We'll ask for this password whenever you Sign-In.</p>
          </div>

          <div className={classes.form}>
            <form onSubmit={submitHandler}>
              <div className={classes.input__box}>
                <input
                  placeholder="Enter new password"
                  ref={passwordRef}
                  id="password"
                  type="password"
                  minLength={8}
                />
              </div>

              <div className={classes.btn}>
                <button>Save changes</button>
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
