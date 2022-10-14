import "./App.css";
import Card from "./components/Card/Card";
// import SignUp from "./components/Sign-up/SignUp";
import Header from "./components/Header/Header";
import Swiper from "./components/Swiper/Swiper";
// import Signin from "./components/Sign-in/Signin";
import truck__img from "./assets/truck_shiping.jpg";
import mens__col from "./assets/mens__col.jpeg";
import womens__col from "./assets/women__col.jpeg";
import electronics__col from "./assets/electronics.jpeg";
import Jewellery from "./assets/Jewellery.jpeg";

function App() {
  const clickHadnler = () => {
    console.log("123");
  };
  return (
    <div className="App">
      <Header></Header>
      <Swiper></Swiper>
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
        <Card
          header="Jewellery"
          img={Jewellery}
          onClick={() => clickHadnler()}
        />
      </div>
    </div>
  );
}

export default App;
