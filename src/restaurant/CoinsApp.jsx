import React, { useEffect } from 'react'
import { useState } from 'react'
import Main from './components/Main'
import './style.scss'
const RestaurantApp = () => {
  const [coins, setCoins] = useState(null)

  useEffect(()=>{
    fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=1&sparkline=false')
      .then(res => {
        return res.json()
        
      })
      .then(c => {
        setCoins(c)
        
      }).catch(
        err => console.log(err)
      )
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  return (
    <div>
        <Main coins={coins}/>
    </div>
  )
}

export default RestaurantApp