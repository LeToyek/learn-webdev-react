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
        <h1>{coin.symbol}</h1>
      ) }
    </div>
  );
};

export default CoinDetail;
