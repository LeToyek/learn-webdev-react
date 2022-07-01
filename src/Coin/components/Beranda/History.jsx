import React from "react";

const History = () => {
  let isBuy = true
  return (
    <div className="History">
      <div className="head-a">
        <h5 className="currency">Currency</h5>
        <h5 className="cr-price">Price</h5>
        <h5 className="change">Actvity</h5>
        
      </div>
      <hr />
      <div className="body-a">
        <div className="idc">
          <img src="" alt="as" />
          <h5>Bitcoin</h5>
        </div>
        <h5 className="price">3000000000IDR</h5>
        <div className="act">{
          isBuy? <h5 className="act-buy">BUY</h5> : <h5 className="act-sell">SELL</h5>
        }</div>
      </div>
    </div>
  );
};

export default History;
