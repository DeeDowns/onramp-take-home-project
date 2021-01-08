import React from 'react'
import { Link } from 'react-router-dom'

const BlogFeed: React.FC = () => {
    return (
        <div>
            <h1>Feed</h1>
            <Link to='/add-post'>Add New Post</Link>
        </div>
    )
}

export default BlogFeed