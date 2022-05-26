import React from 'react'
import './Card.scss'

const Card = () => {
  return (
    <div className='wrapper-card'>
      <div className="image-card">
        <img src="https://play-lh.googleusercontent.com/5e7z5YCt7fplN4qndpYzpJjYmuzM2WSrfs35KxnEw-Ku1sClHRWHoIDSw3a3YS5WpGcI" alt="" />
      </div>
      <div className="description-card">
          <h3 className="title-card">Title</h3>
          <p className="description-content">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam cum, laborum libero tempore iure laudantium pariatur reiciendis ducimus repellat quo, magni ex neque est nulla voluptates praesentium veritatis nostrum at.</p>
        </div>
    </div>
  )
}

export default Card