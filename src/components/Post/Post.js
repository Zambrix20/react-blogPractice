import React from 'react'
import { Link } from 'react-router-dom'
import "./styles.scss"

export default function Post(props) {
    const { _id, title, author, content, createdAt, comments } = props

    return (
        <Link to={`/post/${_id}`} className='post'>
            <div className='postCard'>
                <h2>{title}</h2>
                <h3>{author && author.name} | {createdAt}</h3>
                <p>{content}</p>
                <p>Comments: {comments}</p>
            </div>
        </Link>

    )
}
