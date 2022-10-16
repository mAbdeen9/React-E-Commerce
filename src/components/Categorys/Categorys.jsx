import React from "react";
import Card from "../Card/Card";
import truck__img from "./../../assets//truck_shiping.jpg";
import mens__col from "./../../assets//mens__col.jpeg";
import womens__col from "./../../assets//women__col.jpeg";
import electronics__col from "./../../assets//pexels-element-digital-1470167.jpg";
import Jewellery from "./../../assets//Jewellery.jpeg";

function Categorys() {
  const clickHadnler = () => {
    console.log("123");
  };

  return (
    <div className="flex__box">
      <Card
        header="FREE Shipping to Country"
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
