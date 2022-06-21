import React from 'react'

export default function Bloglist({blogs,example,handleDelete,handleAdd}) {
    const newBlogTest = {
        title: 'Toyek testing', body: "lorem ipsum..", id :4
    }
    return (
        <div>
            <br></br>
            <h2>
                {example}
            </h2>
            {blogs.map((blog)=>(
                    <div className='blog-preview' key={blog.id}>
                        <h4>{blog.title}</h4>
                        <p>{blog.body}</p>
                        <button onClick={()=> handleDelete(blog.id)}>delete blog</button>
                    </div>
                ))}
            <button onClick={()=>handleAdd(newBlogTest)}>add blog</button>    
        </div>
    )
}
