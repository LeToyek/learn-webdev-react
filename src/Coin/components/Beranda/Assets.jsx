import React from "react";
import UseAssets from "../../UseAssets";
import Card from "./card";

const fooAssets = [
  { symbol: "btc", price: 3000000 },
  { symbol: "eth", price: 4000000 },
  { symbol: "usdt", price: 5000000 },
  { symbol: "usdc", price: 6000000 },
  { symbol: "bnb", price: 7000000 },
  { symbol: "busd", price: 8000000 },
  { symbol: "xrp", price: 9000000 },
  { symbol: "ada", price: 10000000 },
];

const Assets = () => {
  const {dataAssets} = UseAssets(fooAssets)
  return (
    <div className="assets-coin">
      <div className="head-a">
        <h5 className="currency">Currency</h5>
        <h5 className="cr-price">Current Price</h5>
        <h5 className="change">Change </h5>
      </div>
      <hr />
      <div className="coinsss">
        {dataAssets &&
          dataAssets.map((a) => <Card key={a.name} id={a.name} {...a} />)}
      </div>
    </div>
  );
};

export default Assets;
