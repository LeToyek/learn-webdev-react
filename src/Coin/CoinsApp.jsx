import React from "react";
import Main from "./Pages/Main";
import Navbar from "./components/Navbar";
import useFetch from "./custom_hook";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./style.scss";

import CoinDetail from "./Pages/CoinDetail";
import Register from "./Pages/Register";
import { useState } from "react";

const RestaurantApp = () => {
  const baseUrl = "https://api.coingecko.com/api/v3/coins";
  const url =
    baseUrl +
    "/markets?vs_currency=IDR&order=market_cap_desc&per_page=100&page=1&sparkline=false";
  const { data: coins, isPending, err } = useFetch(url);
  const [searchResult, setSearchResult] = useState([]);
  const searchCoin = (value) => {
    console.log(value);
    if (value !== null) {
      const result = coins.filter((c) => c.name.toLowerCase() === value.toLowerCase());
      console.log(result)
      setSearchResult(result);
      console.log("first")
    }
  };
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route path="/register">
              <Register />
            </Route>
            <Route exact path="/"></Route>
            <Route path="/market">
              {err && <div>{err}</div>}
              {isPending && <div>Loading.....</div>}
              <Main coins={searchResult.length > 0 ? searchResult :coins} onSearch={searchCoin} />
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
