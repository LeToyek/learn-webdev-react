import React from "react";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import useFetch from "./custom_hook";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./style.scss";

import CoinDetail from "./components/CoinDetail";
import Register from "./components/Register";

const RestaurantApp = () => {
  const baseUrl = "https://api.coingecko.com/api/v3/coins";
  const url =
    baseUrl +
    "/markets?vs_currency=INR&order=market_cap_desc&per_page=10&page=1&sparkline=false";
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
            <Route path="/register">
              {" "}
              <Register />
            </Route>

            <Route path="/coins/:id">
              <CoinDetail url={baseUrl} />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default RestaurantApp;
