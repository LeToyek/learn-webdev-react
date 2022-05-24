import React, { useState } from 'react'

export default function Output_list() {
    const [blogs,setBlog] = useState([
        {title: 'Toyek coding', body: "lorem ipsum..", id :1},
        {title: 'Toyek Gaming', body: "lorem ipsum..", id :2},
        {title: 'Toyek learning', body: "lorem ipsum..", id :3}
    ])
    return (
        <div>
            {blogs.map(blog => ())}
        </div>
    )
}
