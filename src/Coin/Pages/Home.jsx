import React from "react";
import homeImg from "../assets/home.png";

const Home = () => {
  return (
    <div className="homepage">
      <div className="left">
        <h1>Invest your crypto easily</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta eaque eum consequuntur. Unde incidunt vel, hic nobis cumque rerum corporis reiciendis dolores maiores facilis labore excepturi impedit esse eius accusantium.</p>
        <button>Get Started</button>
      </div>
      <div className="right">
        <img src={homeImg} alt="asdasd" />
      </div>
    </div>
  );
};

export default Home;
