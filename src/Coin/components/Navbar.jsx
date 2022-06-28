import React from "react";
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left">
        <h1>Beli Coin</h1>
      </div>
      <div className="right">
        <ul className="menu">
          <li>
            <NavLink 
            activeStyle={{backgroundColor: '#3a4750'}}
            exact to="/">Home</NavLink>
          </li>
          <li>
            <NavLink 
              activeStyle={{backgroundColor: '#3a4750'}}
              to="/market">Market</NavLink>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/register">
              <div>Register</div>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
