import React, { Fragment, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import PagesLoading from "../components/Loading/PagesLoading";

const Home = React.lazy(() => import("../pages/Home/Home"));
const SignIn = React.lazy(() => import("../pages/SignIn/SignIn-page"));
const SignUp = React.lazy(() => import("../pages/SignUp/SignUp-page"));
const EmptyCart = React.lazy(() => import("../components/EmptyCart/EmptyCart"));

const ResetPassword = React.lazy(() =>
  import("../components/ResetPassword/ResetPassword")
);
const OTPpage = React.lazy(() =>
  import("../components/ResetPassword/OTP-input")
);

const NewPassword = React.lazy(() =>
  import("../components/ResetPassword/NewPassword")
);

function Router() {
  return (
    <Fragment>
      <Suspense fallback={<PagesLoading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/new-password" element={<NewPassword />} />
          <Route path="/OTP" element={<OTPpage />} />
          <Route path="/empty-cart" element={<EmptyCart />} />
        </Routes>
      </Suspense>
    </Fragment>
  );
}

export default Router;
