import React from 'react'
import './navbar.css'

export default function Navbar() {
  return (
    <>
          <nav className='wrapper'>
            <div className='brand'>
              <div className='firstName'>mataram</div>
              <div className='lastName'>barat</div>
            </div>
            <ul className='navigation'>
              <li><a href="#sejarah">Sejarah</a></li>
              <li><a href="#geografis">Geografis</a></li>
              <li><a href="#wisata">Wisata</a></li>
            </ul>
          </nav>
    </>
    
  )
}
