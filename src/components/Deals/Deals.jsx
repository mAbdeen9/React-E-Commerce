import React, { useEffect, useState } from "react";
import classes from "./Deals.module.css";
import fakeProduct from "../../fakeProducts.json";
import { useNavigate } from "react-router";

function Deals() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const randomproducts = () => {
      let num = 0;
      const randomIndex = [];
      const randomPro = [];
      while (num < 8) {
        const randomNumber = Math.floor(Math.random() * 20);

        if (!randomIndex.includes(randomNumber)) {
          randomPro.push(fakeProduct[randomNumber]);
          num++;
        }
        randomIndex.push(randomNumber);
      }
      setProducts(randomPro);
    };
    randomproducts();
  }, []);

  return (
    <div className={classes.deals__box}>
      <div className={`container ${classes.swiper__box}`}>
        <h4>Today's Deals</h4>
        <div className={classes.imgs__box}>
          {products.map((p, i) => (
            <div onClick={() => navigate(`/Product/${p.id}`)} key={i}>
              <img src={p.image} alt="product" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Deals;
