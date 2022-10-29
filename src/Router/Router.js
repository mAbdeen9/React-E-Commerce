import React, { Fragment, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import PagesLoading from "../components/Loading/PagesLoading";
import { useSelector } from "react-redux";

const Home = React.lazy(() => import("../pages/Home/Home"));
const SignIn = React.lazy(() => import("../pages/SignIn/SignIn-page"));
const SignUp = React.lazy(() => import("../pages/SignUp/SignUp-page"));
const AboutPage = React.lazy(() => import("../pages/About/AboutPage"));
const EmptyCart = React.lazy(() => import("../components/EmptyCart/EmptyCart"));
const UserCart = React.lazy(() => import("../pages/Cart/CartPage"));
const Products = React.lazy(() => import("../pages/Products/Products-Page"));
const Product = React.lazy(() => import("../pages/Product/ProductPage"));
const ComingSoon = React.lazy(() =>
  import("../pages/UnderConstruction/UnderConstruction")
);
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
  //
  const { token, username } = useSelector((state) => state.Auth);
  console.log(token);
  return (
    <Fragment>
      <Suspense fallback={<PagesLoading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/user-cart" element={<UserCart />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/coming-soon" element={<ComingSoon />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/new-password" element={<NewPassword />} />
          <Route path="/OTP" element={<OTPpage />} />
          <Route path="/empty-cart" element={<EmptyCart />} />
          <Route path="/Products/:cat" element={<Products />} />
          <Route path="/Product/:id" element={<Product />} />
        </Routes>
      </Suspense>
    </Fragment>
  );
}

export default Router;
