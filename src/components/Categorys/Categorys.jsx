import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import truck__img from "./../../assets//truck_shiping.jpg";
import mens__col from "./../../assets//mens__col.jpeg";
import womens__col from "./../../assets//women__col.jpeg";
import electronics__col from "./../../assets//pexels-element-digital-1470167.jpg";
import Jewellery from "./../../assets//Jewellery.jpeg";
import classes from "./Category.module.css";
import axios from "axios";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

function Categorys() {
  const [country, setCountry] = useState("");
  const navigate = useNavigate();

  const clickHandler = (link) => {
    navigate(`/Products/${link}`);
  };

  useEffect(() => {
    const getGeoInfo = async () => {
      try {
        const data = await axios.get("https://ipapi.co/json/");
        setCountry(data.data.city);
      } catch (err) {
        toast(err);
      }
    };
    getGeoInfo();
  }, []);

  return (
    <div className={classes.flex__box}>
      <Card header={"FREE Shipping to " + country} img={truck__img} />
      <Card
        header="Men's clothing"
        img={mens__col}
        onClick={() => clickHandler("mens clothing")}
      />
      <Card
        header="Women's clothing"
        img={womens__col}
        onClick={() => clickHandler("womens clothing")}
      />
      <Card
        header="Electronics"
        img={electronics__col}
        onClick={() => clickHandler("electronics")}
      />
      <Card
        header="Jewellery"
        img={Jewellery}
        onClick={() => clickHandler("jewelery")}
      />
    </div>
  );
}

export default Categorys;
