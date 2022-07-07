import React from "react";
import UseAssets from "../../UseAssets";
import Card from "./card";



const Assets = ({fooAssets}) => {
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
