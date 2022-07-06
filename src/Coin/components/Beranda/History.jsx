import React from "react";
import useAssets from "../../UseAssets";
import HCard from "./HCard";
const fooAssets = [
  { symbol: "btc", price: 300000, activity: "BUY" },
  { symbol: "eth", price: 400000, activity: "SELL" },
  { symbol: "usdt", price: 500000, activity: "SELL" },
  { symbol: "btc", price: 600000, activity: "BUY" },
  { symbol: "bnb", price: 700000, activity: "BUY" },
  { symbol: "btc", price: 800000, activity: "BUY" },
  { symbol: "xrp", price: 900000, activity: "SELL" },
  { symbol: "ada", price: 1000000, activity: "BUY" },
];
const History = () => {
  const { dataAssets } = useAssets(fooAssets);
  return (
    <div className="History">
      <div className="head-a">
        <h5 className="currency">Currency</h5>
        <h5 className="cr-price">Price</h5>
        <h5 className="change">Actvity</h5>
      </div>
      <hr />
      <div className="activities">
        {dataAssets.map((c) => (
          <HCard key={c.id} id={c.id} {...c} />
        ))}
      </div>
    </div>
  );
};

export default History;
