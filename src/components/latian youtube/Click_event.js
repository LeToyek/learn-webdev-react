import React from 'react'

export default function Click_event() {
    const handleClick = () =>{
        console.log('hello toyek')
    }
    const handleClickAgain = (name) =>{
        console.log('hello '+name)
    }
    return (
        <div>
            <button onClick={handleClick}>click me!</button>
            <button onClick={handleClickAgain('matamu')}>click me again</button>
            <br/>
            <button onClick={(e)=>{console.log(e)}}>bukan flutter</button>
        </div>
    )     
}
