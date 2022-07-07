import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import Burger from "./Burger";

const Navbar = () => {
  const [isClicked, setisClicked] = useState(false);

  return (
    <>
    <div className="navbar">
      <div className="left">
        <h1>Coin Batam</h1>
      </div>

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
      </ul>
      <button
        onClick={() => {
          setisClicked(!isClicked);
        }}
      >
        <MenuOutlinedIcon className="hamburger" />
      </button>
      

      <div className="right">
        <NotificationsNoneOutlinedIcon
          className="notification"
          fontSize="large"
        />

        <NavLink to="/login" className="login">
          Login
        </NavLink>
        <NavLink to="/register" className="register">
          Register
        </NavLink>
      </div>
      
    </div>
    {isClicked ? <Burger/> : null}
    </>
    
  );
};

export default Navbar;
