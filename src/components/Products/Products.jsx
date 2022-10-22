import React, { Fragment, useEffect, useState } from "react";
import fakeProduct from "../../fakeProducts.json";
import ProductsCard from "../Card/ProductsCard";
import classes from "./Products.module.css";
import { ArrowDownShort } from "react-bootstrap-icons";
import { useParams } from "react-router";

function Products() {
  //
  const { cat } = useParams();
  const [active, setActive] = useState(false);
  const [data, setData] = useState();

  const mobileFilterNavHandler = () => {
    setActive((prev) => !prev);
    const status = document.body.style.overflow;
    document.body.style.overflow = status === "hidden" ? "unset" : "hidden";
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    setData(fakeProduct.filter((p) => p.category === cat));
  }, [cat]);

  const filterByStars = (stars) => {
    setData(
      fakeProduct.filter((p) => {
        return p.category === cat && Math.floor(p.rating.rate) === stars;
      })
    );
  };

  const filterByPrice = (fPrice, sPrice) => {
    setData(
      fakeProduct.filter((p) => {
        return (
          p.category === cat &&
          Math.ceil(p.price) >= fPrice &&
          Math.ceil(p.price) <= sPrice
        );
      })
    );
  };

  const filterByPriceMobile = (fPrice, sPrice) => {
    setData(
      fakeProduct.filter((p) => {
        return (
          p.category === cat &&
          Math.ceil(p.price) >= fPrice &&
          Math.ceil(p.price) <= sPrice
        );
      })
    );
    setActive((prev) => !prev);
    const status = document.body.style.overflow;
    document.body.style.overflow = status === "hidden" ? "unset" : "hidden";
  };

  const filterByStarsMobile = (stars) => {
    setData(
      fakeProduct.filter((p) => {
        return p.category === cat && Math.floor(p.rating.rate) === stars;
      })
    );
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
            <div onClick={() => filterByStars(5)} className={classes.stars}>
              <span className="fa fa-star checkedStar"></span>
              <span className="fa fa-star checkedStar"></span>
              <span className="fa fa-star checkedStar"></span>
              <span className="fa fa-star checkedStar"></span>
              <span className="fa fa-star checkedStar"></span>
            </div>
            <div onClick={() => filterByStars(4)} className={classes.stars}>
              <span className="fa fa-star checkedStar"></span>
              <span className="fa fa-star checkedStar"></span>
              <span className="fa fa-star checkedStar"></span>
              <span className="fa fa-star checkedStar"></span>
              <span className="fa fa-star "></span>
            </div>
            <div onClick={() => filterByStars(3)} className={classes.stars}>
              <span className="fa fa-star checkedStar"></span>
              <span className="fa fa-star checkedStar"></span>
              <span className="fa fa-star checkedStar"></span>
              <span className="fa fa-star "></span>
              <span className="fa fa-star "></span>
            </div>
            <div onClick={() => filterByStars(2)} className={classes.stars}>
              <span className="fa fa-star checkedStar"></span>
              <span className="fa fa-star checkedStar"></span>
              <span className="fa fa-star "></span>
              <span className="fa fa-star "></span>
              <span className="fa fa-star "></span>
            </div>
            <div onClick={() => filterByStars(1)} className={classes.stars}>
              <span className="fa fa-star checkedStar"></span>
              <span className="fa fa-star "></span>
              <span className="fa fa-star "></span>
              <span className="fa fa-star "></span>
              <span className="fa fa-star "></span>
            </div>
          </div>
          <div className={classes.second__text}>Price</div>
          <div className={classes.prices}>
            <div onClick={() => filterByPrice(0, 5)}>Under $5 </div>
            <div onClick={() => filterByPrice(15, 50)}>$15 to $50</div>
            <div onClick={() => filterByPrice(50, 100)}>$50 to $100</div>
            <div onClick={() => filterByPrice(100, 200)}>$100 to $200</div>
            <div onClick={() => filterByPrice(200, 100000)}>$200 & Above</div>
          </div>
        </div>

        <div className={classes.right__side}>
          <h4>RESULTS</h4>
          <div className={classes.cards}>
            {data?.length > 0 ? (
              data?.map((p) => {
                return (
                  <Fragment key={p.id}>
                    <ProductsCard
                      img={p.image}
                      title={p.title}
                      rating={p.rating.rate}
                      price={p.price}
                      onClick={() => () => console.log(p)}
                    />
                  </Fragment>
                );
              })
            ) : (
              <p
                style={{
                  fontSize: "20px",
                  fontWeight: "bolder",
                  color: "#017185",
                }}
              >
                No match results 🙁{" "}
              </p>
            )}
          </div>
        </div>
        <div
          className={`${classes.mobile__bottomMenu} ${
            active ? classes.active : ""
          }`}
        >
          <div className={classes.mobile__close}>
            Filters <span onClick={mobileFilterNavHandler}>Close</span>
          </div>

          <div className={classes.second__text}>Avg. Customer Review</div>
          <div className={classes.stars__box}>
            <div
              onClick={() => filterByStarsMobile(5)}
              className={classes.stars}
            >
              <span className="fa fa-star checkedStar"></span>
              <span className="fa fa-star checkedStar"></span>
              <span className="fa fa-star checkedStar"></span>
              <span className="fa fa-star checkedStar"></span>
              <span className="fa fa-star checkedStar"></span>
            </div>
            <div
              onClick={() => filterByStarsMobile(4)}
              className={classes.stars}
            >
              <span className="fa fa-star checkedStar"></span>
              <span className="fa fa-star checkedStar"></span>
              <span className="fa fa-star checkedStar"></span>
              <span className="fa fa-star checkedStar"></span>
              <span className="fa fa-star "></span>
            </div>
            <div
              onClick={() => filterByStarsMobile(3)}
              className={classes.stars}
            >
              <span className="fa fa-star checkedStar"></span>
              <span className="fa fa-star checkedStar"></span>
              <span className="fa fa-star checkedStar"></span>
              <span className="fa fa-star "></span>
              <span className="fa fa-star "></span>
            </div>
            <div
              onClick={() => filterByStarsMobile(2)}
              className={classes.stars}
            >
              <span className="fa fa-star checkedStar"></span>
              <span className="fa fa-star checkedStar"></span>
              <span className="fa fa-star "></span>
              <span className="fa fa-star "></span>
              <span className="fa fa-star "></span>
            </div>
            <div
              onClick={() => filterByStarsMobile(1)}
              className={classes.stars}
            >
              <span className="fa fa-star checkedStar"></span>
              <span className="fa fa-star "></span>
              <span className="fa fa-star "></span>
              <span className="fa fa-star "></span>
              <span className="fa fa-star "></span>
            </div>
          </div>
          <div className={classes.second__text}>Price</div>
          <div className={classes.prices}>
            <div onClick={() => filterByPriceMobile(0, 5)}>Under $5 </div>
            <div onClick={() => filterByPriceMobile(15, 50)}>$15 to $50</div>
            <div onClick={() => filterByPriceMobile(50, 100)}>$50 to $100</div>
            <div onClick={() => filterByPriceMobile(100, 200)}>
              $100 to $200
            </div>
            <div onClick={() => filterByPriceMobile(200, 100000)}>
              $200 & Above
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Products;
