import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './styles.scss'

export default function PostView() {

    const { id } = useParams()
    const [post, setPost] = useState({})

    useEffect(() => {
        const fetchPost = async () => {
            const response = await fetch(`http://localhost:5001/post/${id}`);
            const data = await response.json();

            // Convert date to dateString in dd/mm/yyyy format
            const date = new Date(data.createdAt);
            const dateString = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
            data.createdAt = dateString;

            setPost(data);
        }

        fetchPost();

    }, [])

    return (
        <div className='postContainer'>
            {
                post && (
                    <>
                        <h2>{post.title}</h2>
                        <p>{post.author?.name} | {post.createdAt}</p>
                        <p>{post.content}</p>
                    </>
                )
            }
        </div>
    )
}
