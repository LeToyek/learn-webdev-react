import React from "react";
import DoughnutChart from "../../Chart/DoughnutChart";

const Beranda = () => {
  return (
    <div className="beranda">
      <div className="stats">
        <h1>Crypto</h1>
      </div>
      <div className="balance">
        <div className="wallet">
          <h4>Ballance</h4>
          <div className="card">asdasd</div>
        </div>
        <div className="totalBuy">
          <h4>Total buy</h4>
          <div className="card">asdasd</div>
        </div>
        <div className="totalSell">
          <h4>Total Sell</h4>
          <div className="card">asdasd</div>
        </div>
      </div>
      <div className="assets">
        <div className="pie">
          <h4>Stats</h4>
          <div className="card">
            <DoughnutChart/>
          </div>
        </div>
        <div className="details">
          <h4>Assets</h4>
          <div className="card">asdasd</div>
        </div>
      </div>
    </div>
  );
};

export default Beranda;
