import React from "react";
import useFetch from "../custom_hook";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import LineChart from "../Chart/LineChart";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
const Jumbotron = ({
  id,
  symbol,
  name,
  image,
  current_price,
  price_change_percentage_24h,
}) => {
  const { data: chartData } = useFetch(
    `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=IDR&days=1`
  );
  return (
      <div className="card">
        <div className="title">
          <div className="left">
            <img src={image} alt="" />
            <div className="text">
              <h2>{symbol}</h2>
              <h5>{name}</h5>
            </div>
          </div>
          <div className="right">
            {current_price < 0 ? (
              <h2>Rp{-1 * current_price.toFixed(2)}</h2>
            ) : (
              <h2>Rp{current_price.toFixed(2)}</h2>
            )}
            {price_change_percentage_24h < 0 ? (
              <h5 className="down">{price_change_percentage_24h.toFixed(2)}%</h5>
              
            ) : (
              <h5 className="up">{price_change_percentage_24h.toFixed(2)}%</h5>
            )}
          </div>
        </div>
        {chartData && (
          <LineChart
            chartData={chartData}
            day={365}
            isShow={false}
            height={200}
            isDown={price_change_percentage_24h < 0 ? true : false}
          />
        )}
      </div>
  );
};

export default Jumbotron;
