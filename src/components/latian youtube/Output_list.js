import React, { useState } from 'react'
import Bloglist from './Bloglist'

export default function Output_list() {
    const [blogs,setBlog] = useState([
        {title: 'Toyek googling', body: "lorem ipsum..", id :1},
        {title: 'Toyek Gaming', body: "lorem ipsum..", id :2},
        {title: 'Toyek googling', body: "lorem ipsum..", id :3}
    ])
    function handleDelete(id) {
        const newBlogs = blogs.filter(blog => blog.id !== id)
        setBlog(newBlogs)
    }
    function AddBlog(blog) {
        const newBlogs = blogs.push(blog)
        console.log(blogs)
        setBlog(newBlogs)
    }
    
    return (
        <div>
            <Bloglist blogs={blogs.filter ((blog)=>blog.title === 'Toyek googling') } 
                example='Second blog' handleDelete={handleDelete} handleAdd={AddBlog}/>
        </div>
    )
}
