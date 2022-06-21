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
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <Link to="/menu">Menu</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="register">
              <div>Register</div>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
