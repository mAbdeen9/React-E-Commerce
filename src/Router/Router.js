import React, { Fragment, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import PagesLoading from "../components/Loading/PagesLoading";

const Home = React.lazy(() => import("../pages/Home/Home"));
const SignIn = React.lazy(() => import("../pages/SignIn/SignIn-page"));
const SignUp = React.lazy(() => import("../pages/SignUp/SignUp-page"));

function Router() {
  return (
    <Fragment>
      <Suspense fallback={<PagesLoading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </Suspense>
    </Fragment>
  );
}

export default Router;
