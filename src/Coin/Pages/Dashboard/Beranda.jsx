import React from "react";
import DoughnutChart from "../../Chart/DoughnutChart";
import Assets from "../../components/Beranda/Assets";
import History from "../../components/Beranda/History";

const Beranda = ({userName}) => {
  return (
    <div className="beranda">
      <div className="stats">
        <h1>{userName}</h1>
      </div>
      <div className="balance">
        <div className="wallet">
          <div className="card">
            <h4>Current Ballance</h4>
            <h1>1,203,301,209 IDR</h1>
          </div>
        </div>
        <div className="totalBuy">
          <div className="card">
            <h4>Pofit</h4>
            <h2>1,203,301,209 IDR</h2>
          </div>
        </div>
      </div>
      <div className="assets">
        <div className="pie">
          <h4>Stats</h4>
          <div className="card">
            <DoughnutChart />
          </div>
        </div>
        <div className="details">
          <h4>Assets</h4>
          <div className="card">
            <Assets />
          </div>
        </div>
        <div className="recent-act">
          <h4>Recent Activity</h4>
          <div className="card">
            <History />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Beranda;
