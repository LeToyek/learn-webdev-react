import React from 'react'
import './navbar.css'

export default function Navbar() {
    return (
    <div>
        <nav className='wrapper'>
            <div className='title'>
                toyek
            </div>
            <ul className='navigation'>
                <li><a href='#home'>Home</a></li>
                <li><a href='#about'>About</a></li>
                <li><a href='#service'>service</a></li>
                <li><a href='#design'>design</a></li>
                <li><a href='#contact'>contact</a></li>
            </ul>
            <div className='searchBar'>
                <input type='search' className='search' placeholder='Type to search'/>
                <button className='btnSearch' type='button'>Search</button> 
            </div>
        </nav>
    </div>
    )
}
