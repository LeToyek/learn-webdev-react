import React from "react";
import DashboardNav from "../components/DashboardNav";
import Beranda from "./Dashboard/Beranda";
import { useRouteMatch } from "react-router";
import { Switch, Route } from "react-router-dom";
import Report from "./Dashboard/Report";
import UseData from "../UseData"

const Dashboard = () => {
  const { path, url } = useRouteMatch()
  const {userData} = UseData()
  const name =  userData && `${userData.first_name} ${userData.last_name}`
  return (
    <div className="dashboard">
      <DashboardNav url={url} />
      <Switch>
        <Route path={`${path}/beranda`}>
          <Beranda userName={name}/>
        </Route>
        <Route path={`${path}/report`}>
          <Report />
        </Route>
      </Switch>
    </div>
  );
};

export default Dashboard;
