import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import LineChart from "../Chart/LineChart";
import ButtonTime from "../components/ButtonTime";
import useFetch from "../custom_hook";

const CoinDetail = ({ url }) => {
  const { id } = useParams();
  const [day, setDay] = useState(30)
  const {data: chartData} = useFetch(url + `/${id}/market_chart?vs_currency=IDR&days=${day}`)
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
  const setToYear = () => {
    setDay(365)
  }
  const setToMonth = () => {
    setDay(30)
  }
  const setToDay = () => {
    setDay(1)
  }
  return (
    <div className="coin-detail">
      {isPending && <div>Loading....</div>}
      {err && <div>{err}</div>}
      {coin && (
        <div className="detail">
          {chartData && <LineChart chartData={chartData} day={day} isShow={true} height={400} isDown={percentage < 0 ? true : false}/>}
          <ButtonTime 
              setToYear={setToYear}
              setToMonth={setToMonth}
              setToDay={setToDay}/>
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
