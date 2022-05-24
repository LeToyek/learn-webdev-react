import React from 'react'

export default function Dynamic_values() {
    const title = 'toyek'
    const link = 'github.com/LeToyek'
    
    return (
        <div>
            <h1>{title}</h1>
            <p><a href={link}>me is no scam </a></p>
            <p>{[1,2,3,4,5]}</p>
        </div>
    )
}
