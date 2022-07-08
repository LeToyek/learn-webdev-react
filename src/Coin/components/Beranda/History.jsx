import React from "react";
import useAssets from "../../UseAssets";
import HCard from "./HCard";

const History = ({fooRecAct}) => {
  const { dataAssets } = useAssets(fooRecAct);
  return (
    <div className="History">
      <div className="head-a">
        <h5 className="currency">Currency</h5>
        <h5 className="cr-price">Price</h5>
        <h5 className="change">Actvity</h5>
      </div>
      <hr />
      <div className="activities">
        {dataAssets.map((c,index) => (
          <HCard key={index} id={index} {...c} />
        ))}
      </div>
    </div>
  );
};

export default History;
