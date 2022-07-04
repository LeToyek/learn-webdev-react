import React from "react";
import { Link } from "react-router-dom";
import homeImg from "../assets/home.png";

const Home = () => {
  return (
    <div className="homepage">
      <div className="left">
        <h1>Invest your <span>crypto</span>  easily</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta eaque
          eum consequuntur. Unde incidunt vel, hic nobis cumque rerum corporis
          reiciendis dolores maiores facilis labore excepturi impedit esse eius
          accusantium.
        </p>
        <Link to="/register">
          <button>Get Started</button>
        </Link>
      </div>
      <div className="right">
        <img src={homeImg} alt="asdasd" />
      </div>
    </div>
  );
};

export default Home;
