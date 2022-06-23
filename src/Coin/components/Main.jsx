import React from "react";
import Coin from "./Coin";
const Main = ({ coins }) => {
  return (
    <div className="main">
      <div className="head">
        <div className="wrapper">
          <h5 className="name">Coin</h5>
          <div className="detail">
            <h5 className="price">Harga terkini</h5>
            <h5 className="percentage">Persentase 24h</h5>
            <h5 className="marketcap">Market Cap</h5>
            <h5 className="rank">1</h5>
          </div>
        </div>
      </div>
      {coins && coins.map((c) => <Coin key={c.id} id={c.id} {...c} />)}
    </div>
  );
};

export default Main;
