import './styles.css'
import P from 'prop-types'
import React from "react";

export const PostCard = ({post}) => (
    <div className="post">
        <img src={post.cover} alt={post.title} />
        <div className='post-content'>
            <h2 >{post.title}</h2>
            <p>{post.title}</p>
        </div>
    </div>
)

PostCard.propTypes = {
    post: P.object.isRequired
}