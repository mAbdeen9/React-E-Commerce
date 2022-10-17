import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./ResetPassword.module.css";

function OTPinput() {
  //
  const otpRef = useRef();

  const [isVaild, setIsVaild] = useState(true);
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    const data = {
      otp: otpRef.current?.value,
    };
    if (!data.otp) {
      setIsVaild(false);
      return;
    }

    console.log(data);
    navigate("/new-password");
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
          <div className={classes.header__tag}>
            Verification required
            <p>
              To continue, complete this verification step. We've sent a One
              Time Password (OTP) to the email. Please enter it below.
            </p>
          </div>

          <div className={classes.form}>
            <form onSubmit={submitHandler}>
              <div className={classes.input__box}>
                <input
                  placeholder="Enter OTP"
                  ref={otpRef}
                  id="otp"
                  type="text"
                />
                {!isVaild && (
                  <span>
                    Invalid OTP. Please check your code and try again.
                  </span>
                )}
              </div>

              <div className={classes.btn}>
                <button>Continue</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OTPinput;
