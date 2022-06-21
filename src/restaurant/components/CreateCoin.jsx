import React from 'react'
import { useState } from 'react'

const CreateCoin = () => {
    const [name,setName] = useState()
    const [image,setImage] = useState()
    const [price,setPrice] = useState()
    const handleSubmit = (e) =>{
        e.preventDefault()
        const data = {name,image,current_price:price}
        console.log(data);
    }
  return (
    <div className='create-coin'>
    <h2>Create a New Coin</h2>
    <form onSubmit={handleSubmit}>
        <label>
            Coin name:
        </label>
        <input type="text" required value={name} onChange={(e)=> setName(e.target.value)}/>
        <label >
            Image Url:
        </label>
        <input type="text" required value={image} onChange={(e) => setImage(e.target.value)}/>
        <label>
            Current Price:
        </label>
        <input type="text" required value={price} onChange={(e) => setPrice(e.target.value)}/>
        <button>Add Coin</button>
    </form>
    </div>
  )
}

export default CreateCoin