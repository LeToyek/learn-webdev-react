import React from 'react'

const Card = ({url,name,price,change}) => {
  return (
      <div className="body-a">
        <div className="idc">
          <img src={url} alt="as" />
          <h5>{name.toUpperCase()}</h5>
        </div>
        <h5 className="coin-price">{price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')} IDR</h5>
        {change > 0 ?<h5 className="c-green">{change.toFixed(2)} %</h5> :<h5 className="c-red">{change.toFixed(2)} %</h5> }
        
      </div>
  )
}

export default Card