import React, { Fragment } from "react";
import data from "../../fakeProducts.json";
import ProductsCard from "../Card/ProductsCard";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import classes from "./Products.module.css";

function Products() {
  console.log(data);
  return (
    <Fragment>
      <Header></Header>
      <div className={`container ${classes.flex__box}`}>
        <div className={classes.left__side}>
          <div className={classes.head__text}>Free Shipping by Shopzon</div>
          <div className={classes.second__text}>Sort products </div>
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
            {data.map((p) => {
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
      </div>
      <Footer></Footer>
    </Fragment>
  );
}

export default Products;
