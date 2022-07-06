import { useEffect, useState } from "react";

const UseData = ({url}) => {
  const [userData, setUserData] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const raw = await fetch("http://localhost:5000/dashboard", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      const data = await raw.json()
      data && setUserData(data)
    };
    try {
      setTimeout(() => {
        fetchData()
      }, 1500);
    } catch (error) {
      console.log(error)
    }
  },[]);
  return {userData}
}

export default UseData