import React from "react";
import Main from "./Pages/Main";
import Navbar from "./components/Navbar";
import useFetch from "./custom_hook";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./style.scss";

import CoinDetail from "./Pages/CoinDetail";
import Register from "./Pages/Register";
import { useState } from "react";
import Dashboard from "./Pages/Dashboard";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import UseToken from "./UseToken";


const RestaurantApp = () => {
  const baseUrl = "https://api.coingecko.com/api/v3/coins";
  const url =
    baseUrl +
    "/markets?vs_currency=IDR&order=market_cap_desc&per_page=100&page=1&sparkline=false";
  const { data: coins, isPending, err } = useFetch(url);
  const [searchResult, setSearchResult] = useState([]);
  const {token,setToken} = UseToken()
  

  const searchCoin = (value) => {
    console.log(value);
    if (value !== null) {
      const result = coins.filter(
        (c) => c.name.toLowerCase() === value.toLowerCase()
      );
      setSearchResult(result);
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
            <Route path="/login">
              <Login setToken={setToken}/>
            </Route>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/market" >
                <Main
                  coins={coins && searchResult.length > 0 ? searchResult : coins}
                  slideCoin={coins && coins.slice(0, 10)}
                  onSearch={searchCoin}
                  err={err}
                  isPending={isPending}
                />
            </Route>
            <Route path="/coins/:id">
              <CoinDetail url={baseUrl} />
            </Route>
            <Route path="/dashboard">
              <Dashboard token={token}/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

// const PrivateRoute = ({token, path, children}) => {

//   return <Route path={path}>
//     {token ? children : <h1>Gabole masuk glob</h1>}
//   </Route>

// }

export default RestaurantApp;
