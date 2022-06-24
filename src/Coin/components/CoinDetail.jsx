import React from "react";
import { useParams } from "react-router-dom";
import LineChart from "../Chart/LineChart";
import useFetch from "../custom_hook";

const CoinDetail = ({ url }) => {
  const { id } = useParams();
  const {data: chartData} = useFetch(url + `/${id}/market_chart?vs_currency=IDR&days=1`)
  const { data: coin, isPending, err } = useFetch(url + `/${id}`);
  const detail = coin && coin.market_data;
  const percentage =
    detail &&
    Math.round(
      (detail.price_change_percentage_24h_in_currency.idr + Number.EPSILON) *
        100
    ) / 100;
  const priceChange =
    detail &&
    Math.round(
      (detail.price_change_24h_in_currency.idr + Number.EPSILON) * 100
    ) / 100;

  return (
    <div>
      {isPending && <div>Loading....</div>}
      {err && <div>{err}</div>}
      {coin && (
        <div className="detail">
          <LineChart chartData={chartData}/>
          <div className="wrapper">
            <div className="left">
              <img src={coin.image.large} alt="coin-img" />
              <div className="title">
                <h1 className="name">{coin.name}</h1>
                <h1 className="symbol"> {"(" + coin.symbol + ")"}</h1>
              </div>
            </div>
            <div className="right">
              <div className="price">
                <h2>Rp {detail.current_price.idr}</h2>
                <div className="detail">
                  <h3>{priceChange}</h3>
                  {percentage > 0 ? (
                    <h3 className="up">+{percentage}%</h3>
                  ) : (
                    <h3 className="down">{percentage}%</h3>
                  )}
                </div>
              </div>

              <div className="buttons">
                <button className="buy">Buy</button>
                <button className="sell">Sell</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CoinDetail;
