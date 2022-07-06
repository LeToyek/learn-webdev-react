import React from "react";
import DoughnutChart from "../../Chart/DoughnutChart";
import Assets from "../../components/Beranda/Assets";
import History from "../../components/Beranda/History";

const Beranda = () => {
  return (
    <div className="beranda">
      <div className="stats">
        <h1>Overview</h1>
      </div>
      <div className="balance">
        <div className="wallet">
          <div className="card">
            <h4>Current Ballance</h4>
            <h2 className="amount">1,203,301,209 IDR</h2>
            <div className="detail-balance">
              <h6 className="b-last-up">Last Updated : 07-6-2022</h6>
              <button>Manage</button>
            </div>
          </div>
        </div>
        <div className="totalBuy">
          <div className="card">
            <h4>Profit</h4>
            <h2 className="amount">1,300,000 IDR</h2>
            <div className="b-last-up">
              <h6>Last Updated : 07-6-2022</h6>
              <button>Detail</button>
            </div>
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
