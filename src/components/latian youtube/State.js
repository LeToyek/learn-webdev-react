import React from 'react'
import { useState } from 'react'

export default function State() {
    const [isUser,setUser] = useState(false)

    return (
        <div>
            <button onClick={()=>{
                setUser(!isUser)
            }}>
                Change Name
            </button>
            <h2>
                {isUser ? 'toyek':'bukan toyek'}
            </h2>
        </div>
    )
}
