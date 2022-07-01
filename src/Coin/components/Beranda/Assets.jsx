import React from "react";

const Assets = () => {
  return (
    <div className="assets-coin">
      <div className="head-a">
        <h5 className="currency">Currency</h5>
        <h5 className="cr-price">Current Price</h5>
        <h5 className="change">Change </h5>
        
      </div>
      <hr />
      <div className="body-a">
        <div className="idc">
          <img src="" alt="as" />
          <h5>Bitcoin</h5>
        </div>
        <h5 className="coin-price">400000IDR</h5>
        <h5 className="coin-change">5.1%</h5>
        
      </div>
    </div>
  );
};

export default Assets;
