import { Fragment, useEffect } from "react";
import { authActions } from "./store/AuthSlice";
import { ToastContainer } from "react-toastify";
import { useDispatch } from "react-redux";
import Router from "./Router/Router";
import httpRequest from "./helpers/httpRequest";
import jwtDecode from "jwt-decode";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const userToken = JSON.parse(localStorage.getItem("JWT")) || null;

    if (userToken) {
      const user = jwtDecode(userToken);
      const checkValidToken = async () => {
        try {
          await httpRequest("POST", "/login/checkValidToken", userToken);
          dispatch(
            authActions.validator({
              username: user.payload.name,
              id: user.payload.id,
              token: userToken,
              role: user.payload.role,
            })
          );
        } catch (error) {
          dispatch(authActions.logout());
        }
      };
      checkValidToken();
    }
    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Router />
    </Fragment>
  );
}

export default App;
