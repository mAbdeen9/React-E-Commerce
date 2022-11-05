import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import httpRequest from "../../helpers/httpRequest";
import useInputChecker from "../../hooks/useInputChecker";

import classes from "./SignUp.module.css";

function SignUp() {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();
  const { checkName, checkEmail, checkPassword } = useInputChecker();
  const [nameError, setNameError] = useState(null);
  const [emailError, setEmailError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  const [serverMessage, setServerMessage] = useState(null);
  const [isVaild, setIsVaild] = useState(true);

  const signUpHandler = async (e) => {
    e.preventDefault();
    const formValues = {
      name: nameRef.current?.value,
      email: emailRef.current?.value,
      password: passwordRef.current?.value,
    };

    const vaildForm = () => {
      if (!checkName(formValues.name, setNameError, setIsVaild)) return;
      if (!checkEmail(formValues.email, setEmailError, setIsVaild)) return;
      if (!checkPassword(formValues.password, setPasswordError, setIsVaild))
        return;
      return true;
    };
    const valid = vaildForm();
    if (!valid) return;

    try {
      const res = await httpRequest("POST", "/login/sign-up", "", formValues);
      const serverMessage = res.data.message;

      toast.success(serverMessage, {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setTimeout(() => {
        navigate("/sign-in");
      }, 4000);
    } catch (err) {
      setServerMessage(err?.response?.data?.message);
      setIsVaild((state) => !state);
    }
  };

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
                {serverMessage} {nameError} {emailError} {passwordError} .
                Please correct and try again.
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
                  minLength={8}
                  ref={passwordRef}
                  id="password"
                  type="password"
                />
                <span>Passwords length must be at least 8 .</span>
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
