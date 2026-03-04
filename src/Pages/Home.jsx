import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "./Home.css";
import "../styles/Rafael.css";
const Home = () => {
  function asim(data) {
    console.log(data);
  }
  asim(12);

  return (
    <div>
      <Navbar></Navbar>
      <Footer asim={asim}></Footer>
    </div>
  );
};

export default Home;
