import React, { useContext, useState } from 'react'
import Box from '../../components/Box/Box'
import { PostsContext } from '../../components/App/App'

export default function Home() {
    // const { blogs } = useContext(PostsContext)

    return (
        // <div className='vw-100 vh-100'>
        <div className='d-flex flex-column align-items-center justify-content-center'>
            {
                blogs.map((blog, index) => {
                    return (
                        <Box
                            key={index}
                            title={blog.title}
                            description={blog.description}
                            date={blog.date}
                            author={blog.author}
                            image={blog.image}
                        />
                    )
                })
            }
        </div>
        // </div>
    )
}



