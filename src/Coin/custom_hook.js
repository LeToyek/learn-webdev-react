import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [err, setErr] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const fetchCoinData = async () => {
      if (!url){
        return Promise.reject("endi url e blok? :)")
      }
      const raw = await fetch(url,{signal: controller.signal});
      if (!raw.ok) {
        throw new Error('fetch error')
      }
      const data = await raw.json();
      return data;
    };
    const populateData = async () => {
      const result = await fetchCoinData();
      setData(result);
      
    };
    try {
      setTimeout(()=> {
        populateData();
        setIsPending(false);
      }, 1500);
    } catch (e) {
      if (e.name === "AbortError") {
        console.log("fetch aborted");
      } else {
        console.log(e);
        setIsPending(false);
        setErr(e);
        return ()=> controller.abort()
      }
    }
  }, [url]);
  return { data, isPending, err };
};
export default useFetch;
