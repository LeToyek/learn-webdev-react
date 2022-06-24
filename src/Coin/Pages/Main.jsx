
import React from "react";
import Coin from "../components/Coin";
import TableHead from "../components/TableHead";
const Main = ({ coins }) => {
  return (
    <div className="main">
      <TableHead/>
      {coins && coins.map((c) => <Coin key={c.id} id={c.id} {...c} />)}
    </div>
  );
};

export default Main;
