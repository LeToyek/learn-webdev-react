import React from 'react'
import './Navbar.scss'

const Navbar = () => {
  return (
    <div className='wrapper'>
      <div className="container">
        <div className="left-section">
          <h1 className="title">Toyek Ges</h1>
        </div>
        <div className="right-section">
          <ul className="menu">
            <li className="item"><a href='#menu1'>menu1</a></li>
            <li className="item"><a href='#menu1'>menu2</a></li>
            <li className="item"><a href='#menu1'>menu3</a></li>
            <li className="item"><a href='#menu1'>menu4</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar