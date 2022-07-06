import React from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ReportGmailerrorredOutlinedIcon from "@mui/icons-material/ReportGmailerrorredOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import SettingsIcon from '@mui/icons-material/Settings';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import SummarizeOutlinedIcon from '@mui/icons-material/SummarizeOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
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
              <h4>Overview</h4>
            </NavLink>
          </li>
          <li>
            <NavLink exact to={realURL("messages")} activeStyle={{color:"rgba(14, 174, 87, 1)",borderColor: "rgba(14, 174, 87, 1)"}}>
              <EmailOutlinedIcon />
              <h4>Messages</h4>
            </NavLink>
          </li>
          <li>
            <NavLink exact to={realURL("sumarize")} activeStyle={{color:"rgba(14, 174, 87, 1)",borderColor: "rgba(14, 174, 87, 1)"}}>
              <SummarizeOutlinedIcon />
              <h4>Sumarize</h4>
            </NavLink>
          </li>
          <li>
            <NavLink exact to={realURL("security")} activeStyle={{color:"rgba(14, 174, 87, 1)",borderColor: "rgba(14, 174, 87, 1)"}}>
              <SecurityOutlinedIcon />
              <h4>Security</h4>
            </NavLink>
          </li>
          <li>
            <NavLink to={realURL("setting")} activeStyle={{color:"rgba(14, 174, 87, 1)",borderColor: "rgba(14, 174, 87, 1)"}}>
              <SettingsIcon />
              <h4>Setting</h4>
            </NavLink>
          </li>
          
        </div>

        <div className="bottom">
          <hr />
         
          <li>
            <NavLink to={realURL("report")} activeStyle={{color:"rgba(14, 174, 87, 1)",borderColor: "rgba(14, 174, 87, 1)"}}>
              <ReportGmailerrorredOutlinedIcon />
              <h4>Report</h4>
            </NavLink>
          </li>
          
          <li>
            <NavLink to={realURL('help')} activeStyle={{color:"rgba(14, 174, 87, 1)",borderColor: "rgba(14, 174, 87, 1)"}}>
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
