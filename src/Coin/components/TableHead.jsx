import React from 'react'

const TableHead = () => {
  return (
    <div className="head">
        <div className="wrapper">
          <h5 className="name">Coin</h5>
          <div className="detail">
            <h5 className="price">Harga terkini</h5>
            <h5 className="percentage">Persentase 24h</h5>
            <h5 className="marketcap">Market Cap</h5>
            <h5 className="rank">1</h5>
          </div>
        </div>
    </div>
  )
}

export default TableHead