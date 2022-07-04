import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left">
        <h1>Coin Batam</h1>
      </div>
      <div className="mid">
        <ul className="menu">
          <li>
            <NavLink exact to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/market">Market</NavLink>
          </li>
          <li>
            <Link to="/dashboard">
              <div>Dashboard</div>
            </Link>
          </li>
          <li></li>
        </ul>
      </div>
      <div className="right">
        <NavLink to="/login" className="login">Login</NavLink>
        <NavLink to="/register" className= "register">Register</NavLink>
      </div>
    </div>
  );
};

export default Navbar;
