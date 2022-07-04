import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import LineChart from "../Chart/LineChart";
import ButtonTime from "../components/ButtonTime";
import Loading from "../components/Loading";
import useFetch from "../custom_hook";

const CoinDetail = ({ url }) => {
  const { id } = useParams();
  const [day, setDay] = useState(30);
  const { data: chartData } = useFetch(
    url + `/${id}/market_chart?vs_currency=IDR&days=${day}`
  );
  const { data: coin, isPending, err } = useFetch(url + `/${id}`);
  const detail = coin && coin.market_data;
  const percentage =
    detail &&
    Math.round(
      (detail.price_change_percentage_24h_in_currency.idr + Number.EPSILON) *
        100
    ) / 100;
  const setToYear = () => {
    setDay(365);
  };
  const setToMonth = () => {
    setDay(30);
  };
  const setToDay = () => {
    setDay(1);
  };
  return (
    <div className="coin-detail">
      {isPending && <Loading />}
      {err && <div>{err}</div>}
      {coin && (
        <div className="c-coin">
          <div className="detail">
            <div className="wrapper">
              <div className="left">
                <img src={coin.image.large} alt="coin-img" />
              </div>
              <div className="right">
                <div className="title">
                  <h1 className="name">{coin.name}</h1>
                  <h1 className="symbol"> {"(" + coin.symbol + ")"}</h1>
                </div>
                <div className="price">
                  <h2>
                    Rp{" "}
                    {detail.current_price.idr
                      .toFixed(2)
                      .replace(/\d(?=(\d{3})+\.)/g, "$&,")}
                  </h2>
                  <div className="detail">
                    {percentage > 0 ? (
                      <h3 className="up">+{percentage}%</h3>
                    ) : (
                      <h3 className="down">{percentage}%</h3>
                    )}
                  </div>
                </div>
                <div className="lastupdate">
                  <h4>Last Updated:</h4>
                  <h4 className="date">{coin.last_updated}</h4>
                </div>
                {/* <div className="buttons">
                  <button className="buy">Buy</button>
                  <button className="sell">Sell</button>
                </div> */}
              </div>
            </div>
            {chartData && (
              <LineChart
                chartData={chartData}
                day={day}
                isDown={percentage < 0 ? true : false}
              />
            )}
            <ButtonTime
              setToYear={setToYear}
              setToMonth={setToMonth}
              setToDay={setToDay}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default CoinDetail;
