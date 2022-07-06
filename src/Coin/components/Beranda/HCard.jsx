import React from 'react'

const HCard = ({price,url,activity,name}) => {
  
  let isBuy = true
  if (activity === "SELL") {
    isBuy = false
  }
  return (
    <div className="body-a">
        <div className="idc">
          <img src={url} alt="as" />
          <h5>{name.toUpperCase()}</h5>
        </div>
        <h5 className="price">{price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')} IDR</h5>
        <div className="act">{
          isBuy? <h5 className="act-buy">{activity}</h5> : <h5 className="act-sell">{activity}</h5>
        }</div>
        
      </div>
  )
}

export default HCard