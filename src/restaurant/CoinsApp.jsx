import React, { useEffect } from 'react'
import { useState } from 'react'
import Main from './components/Main'
import './style.scss'
const RestaurantApp = () => {
  const [coins, setCoins] = useState(null)

  const fetchCoinData = async ()=>{
    const raw = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=10&page=1&sparkline=false')
    const data = await raw.json()

    return data
  }

  useEffect(()=>{
    const populateData = async ()  => {
      const result = await fetchCoinData()
      setCoins(result)
    }
    
    populateData()

    window.addEventListener('scroll', e => {
      console.log(window.scrollY)
    })
    
    // fetchData()
    // fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    //   .then(res => {
    //     return res.json()
        
    //   })
    //   .then(c => {
    //     setCoins(c)
        
    //   }).catch(
    //     err => console.log(err)
    //   )
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  return (
    <div>
        <Main coins={coins}/>
    </div>
  )
}

export default RestaurantApp