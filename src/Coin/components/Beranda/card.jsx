import React from 'react'

const Card = ({url,name,price,change}) => {
  return (
      <div className="body-a">
        <div className="idc">
          <img src={url} alt="as" />
          <h5>{name.toUpperCase()}</h5>
        </div>
        <h5 className="coin-price">{price}IDR</h5>
        <h5 className="coin-change">{change}%</h5>
      </div>
  )
}

export default Card