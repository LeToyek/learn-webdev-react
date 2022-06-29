import React from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ReportGmailerrorredOutlinedIcon from "@mui/icons-material/ReportGmailerrorredOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { NavLink } from "react-router-dom";

const DashboardNav = ({url}) => {
  const realURL = (destination) =>{
    return `${url}/${destination}`
  }
  return (
    <div className="Nav">
      <div className="left">
        <div className="top">
          <li>
            <NavLink exact to={realURL("beranda")} activeStyle={{color:"rgba(14, 174, 87, 1)",borderColor: "rgba(14, 174, 87, 1)"}}>
              <HomeOutlinedIcon />
              <h4>Beranda</h4>
            </NavLink>
          </li>
        </div>

        <div className="bottom">
          <hr />
          <li>
            <NavLink to={realURL("report")}>
              <ReportGmailerrorredOutlinedIcon />
              <h4>Report</h4>
            </NavLink>
          </li>

          <li>
            <NavLink to={realURL('help')}>
              <HelpOutlineOutlinedIcon />
              <h4>Help</h4>
            </NavLink>
          </li>
          <li className="logout">
            <NavLink to={realURL('Logout')}>
              <LogoutOutlinedIcon />
              <h4>Logout</h4>
            </NavLink>
          </li>
        </div>
      </div>
    </div>
  );
};

export default DashboardNav;
