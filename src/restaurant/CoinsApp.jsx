import React from "react";
import Main from "./components/Main";
import Navbar from "./components/Navbar"
import useFetch from "./custom_hook";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./style.scss";
import Daftar from "./components/Daftar";
const RestaurantApp = () => {
  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=1&sparkline=false";
  const { data: coins, isPending, err } = useFetch(url);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              {err && <div>{err}</div>}
              {isPending && <div>Loading.....</div>}
              <Main coins={coins} />
            </Route>
            <Route path="/daftar">
              <Daftar/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default RestaurantApp;
