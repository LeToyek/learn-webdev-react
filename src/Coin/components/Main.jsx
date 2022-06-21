import React from 'react'
import Coin from './Coin'
const Main = ({coins}) => {
  return (
    <div className='main'>
      {coins && coins.map(c => <Coin key={c.id} id={c.id} {...c} />)}
    </div>
  )
}

export default Main