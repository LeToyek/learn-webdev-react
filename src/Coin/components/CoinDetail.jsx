import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../custom_hook";

const CoinDetail = ({url}) => {
  const { id } = useParams();
  const {data: coin,isPending,err} = useFetch(url+`/${id}`)

  return (
    <div>
      { isPending && <div>Loading....</div>}
      { err && <div>{err}</div>}
      { coin && (
        <div className="detail">
          <h1>{coin.name}</h1>
          <img src={coin.image.large} alt="asas" />
          <h2>Current Price : {coin.market_data.current_price.idr}</h2>
          <h2>Market Cap : {coin.market_data.market_cap.idr}</h2>
        </div>
      ) }
    </div>
  );
};

export default CoinDetail;
