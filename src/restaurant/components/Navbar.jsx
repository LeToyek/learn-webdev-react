import React from "react";
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left"></div>
      <div className="right">
        <ul className="menu">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/menu">Menu</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="contact">Contact</Link>
          </li>
          <li>
            <Link to="daftar">
              <div>Daftar</div>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
