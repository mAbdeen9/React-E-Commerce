import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import truck__img from "./../../assets//truck_shiping.jpg";
import mens__col from "./../../assets//mens__col.jpeg";
import womens__col from "./../../assets//women__col.jpeg";
import electronics__col from "./../../assets//pexels-element-digital-1470167.jpg";
import Jewellery from "./../../assets//Jewellery.jpeg";
import classes from "./Category.module.css";
import axios from "axios";
function Categorys() {
  const [country, setCountry] = useState("");

  const clickHadnler = () => {
    console.log("123");
  };

  useEffect(() => {
    const getGeoInfo = async () => {
      try {
        const data = await axios.get("https://ipapi.co/json/");
        setCountry(data.data.city);
      } catch (err) {
        alert(err);
      }
    };
    getGeoInfo();
  }, []);

  return (
    <div className={classes.flex__box}>
      <Card
        header={"FREE Shipping to " + country}
        img={truck__img}
        onClick={() => clickHadnler()}
      />
      <Card
        header="Men's clothing"
        img={mens__col}
        onClick={() => clickHadnler()}
      />
      <Card
        header="Women's clothing"
        img={womens__col}
        onClick={() => clickHadnler()}
      />
      <Card
        header="Electronics"
        img={electronics__col}
        onClick={() => clickHadnler()}
      />
      <Card header="Jewellery" img={Jewellery} onClick={() => clickHadnler()} />
    </div>
  );
}

export default Categorys;
