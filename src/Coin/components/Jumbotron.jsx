import React from "react";
const Jumbotron = ({
  id,
  symbol,
  name,
  image,
  current_price,
  price_change_percentage_24h,
}) => {
  return (
    <div className="card" id={id}>
        <img src={image} alt="" />
        <div className="text">
          <h2>{symbol}</h2>
          <h5>{name}</h5>
          <h4>
            {current_price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")} IDR
          </h4>
          {price_change_percentage_24h < 0 ? (
            <h5 className="down">{price_change_percentage_24h.toFixed(2)}%</h5>
          ) : (
            <h5 className="up">{price_change_percentage_24h.toFixed(2)}%</h5>
          )}
        </div>
    </div>
  );
};

export default Jumbotron;
