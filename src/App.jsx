import "./App.css";
import Categorys from "./components/Categorys/Categorys";

import Footer from "./components/Footer/Footer";
// import SignUp from "./components/Sign-up/SignUp";
import Header from "./components/Header/Header";
import Swiper from "./components/Swiper/Swiper";
// import Signin from "./components/Sign-in/Signin";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Swiper></Swiper>
      <Categorys></Categorys>
      <Footer></Footer>
    </div>
  );
}

export default App;
