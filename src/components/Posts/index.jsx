import { PostCard } from '../PostCard';
import './styles.css'
import P from 'prop-types'
import React from "react";

export const Posts = ({ posts = []}) => (
    <div className='posts'>
        {posts.map(post => (
            <PostCard key={post.id} post={post} />
        ))}
    </div>
)

Posts.dedaultProps = {
    posts: []
}

Posts.propTypes = {
    posts: P.array,
}