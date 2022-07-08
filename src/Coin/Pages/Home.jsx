import React from "react";
import { Link } from "react-router-dom";
import homeImg from "../assets/home.png";

const Home = () => {
  return (
    <div className="homepage">
      <div className="left">
        <h1>Invest your <span>crypto</span>  easily</h1>
        <p>
          Buy and sell your crypto assets such as Bitcoin, Ethereum, and many more easily and safely. Join us now and achieve profit by trading with Coin Batam 
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
