import React from "react";
import { NavLink } from "react-router-dom";

const Burger = () => {
  return (
    <>
      <ul className="burgerr">
        <li>
          <NavLink exact to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/market">Market</NavLink>
        </li>
        <li>
          <NavLink to="/dashboard">
            Dashboard
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default Burger;
