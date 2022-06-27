import React from "react";
import Coin from "../components/Coin";
import Jumbotron from "../components/Jumbotron";
import TableHead from "../components/TableHead";
const Main = ({ coins }) => {
  return (
    <div className="main">
      <div className="jumbotron">
        {coins && coins.map((c) => <Jumbotron key={c.id} id={c.id} {...c} />)}
      </div>

      <TableHead />
      {coins && coins.map((c) => <Coin key={c.id} id={c.id} {...c} />)}
    </div>
  );
};

export default Main;
