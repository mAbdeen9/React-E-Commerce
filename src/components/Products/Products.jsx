import React, { Fragment, useEffect, useState } from "react";
import fakeProduct from "../../fakeProducts.json";
import ProductsCard from "../Card/ProductsCard";
import classes from "./Products.module.css";
import { ArrowDownShort } from "react-bootstrap-icons";
function Products(props) {
  const [active, setActive] = useState(false);
  let data = fakeProduct.filter((p) => p.category === props.cat);

  const mobileFilterNavHandler = () => {
    setActive((prev) => !prev);
    const status = document.body.style.overflow;
    document.body.style.overflow = status === "hidden" ? "unset" : "hidden";
  };

  return (
    <Fragment>
      <div className={`${classes.mobile__nav}`}>
        <div onClick={mobileFilterNavHandler}>
          <p>
            Filters <ArrowDownShort fontSize="18px" fontWeight="bold" />
          </p>
        </div>
      </div>
      <div className={`container ${classes.flex__box}`}>
        <div className={classes.left__side}>
          <div className={classes.head__text}>Free Shipping by Shopzon</div>
          <div className={classes.second__text}>Search Products by </div>
          <div className={classes.second__text}>Avg. Customer Review</div>
          <div className={classes.stars__box}>
            <div className={classes.stars}>
              <span className="fa fa-star checkedStar"></span>
              <span className="fa fa-star checkedStar"></span>
              <span className="fa fa-star checkedStar"></span>
              <span className="fa fa-star checkedStar"></span>
              <span className="fa fa-star checkedStar"></span>
            </div>
            <div className={classes.stars}>
              <span className="fa fa-star checkedStar"></span>
              <span className="fa fa-star checkedStar"></span>
              <span className="fa fa-star checkedStar"></span>
              <span className="fa fa-star checkedStar"></span>
              <span className="fa fa-star "></span>
            </div>
            <div className={classes.stars}>
              <span className="fa fa-star checkedStar"></span>
              <span className="fa fa-star checkedStar"></span>
              <span className="fa fa-star checkedStar"></span>
              <span className="fa fa-star "></span>
              <span className="fa fa-star "></span>
            </div>
            <div className={classes.stars}>
              <span className="fa fa-star checkedStar"></span>
              <span className="fa fa-star checkedStar"></span>
              <span className="fa fa-star "></span>
              <span className="fa fa-star "></span>
              <span className="fa fa-star "></span>
            </div>
            <div className={classes.stars}>
              <span className="fa fa-star checkedStar"></span>
              <span className="fa fa-star "></span>
              <span className="fa fa-star "></span>
              <span className="fa fa-star "></span>
              <span className="fa fa-star "></span>
            </div>
          </div>
          <div className={classes.second__text}>Price</div>
          <div className={classes.prices}>
            <div>Under $5 </div>
            <div>$15 to $50</div>
            <div>$50 to $100</div>
            <div>$100 to $200</div>
            <div>$200 & Above</div>
          </div>
        </div>

        <div className={classes.right__side}>
          <h4>RESULTS</h4>
          <div className={classes.cards}>
            {data?.map((p) => {
              return (
                <ProductsCard
                  img={p.image}
                  title={p.title}
                  rating={p.rating.rate}
                  price={p.price}
                />
              );
            })}
          </div>
        </div>
        <div
          className={`${classes.mobile__bottomMenu} ${
            active ? classes.active : ""
          }`}
        ></div>
      </div>
    </Fragment>
  );
}

export default Products;
