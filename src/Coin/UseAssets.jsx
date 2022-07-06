import { useEffect } from 'react'
import { useState } from 'react';
import useFetch from './custom_hook';

const useAssets = (fooAssets) => {
  const { data } = useFetch("https://api.coingecko.com/api/v3/coins");
  const [dataAssets, setDataAssets] = useState([]);
  useEffect(() => {
    if (data) {
      const result = fooAssets.map((foo) => {
        const d = data.find((el) => el.symbol === foo.symbol);

        return {
          price: foo.price,
          url: d.image.small,
          name: d.symbol,
          change: d.market_data.price_change_percentage_24h,
          activity: foo.activity,
        };
      });
      setDataAssets(result);
    }
  }, [data]);
  return {dataAssets}
}

export default useAssets