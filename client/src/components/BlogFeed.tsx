import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchBlogPosts, fetchBlogPostById, createNewBlogPost } from '../store/actions/blogFeedActions'
import SearchBar from './SearchBar'


const BlogFeed: React.FC = (props:any) => {
    console.log('PROP',props.blogPost)
   
    useEffect(() => {
        props.fetchBlogPosts()
    }, [])

    return (
        <div>
            <h1>Feed</h1>
            <SearchBar />
            {
                props.feed.filter(( post:any) => {
                    console.log(post)
                    post.title.toLowerCase().includes()
                })
            }
            <Link to='/add-post'>Add New Post</Link>
            {props.feed.map((post:any,) => (
                <div key={post.id}>
                    <h2>{post.title}</h2>
                    <h3>{post.username}</h3>
                    {/* <p>{post.content}</p> */}
                    <button>add to favorites</button>
                    <Link to={`/post/${post.id}`}>read more</Link>
                </div>
            ))}
        </div>
    )
}

const mapStateToProps = (state: any) => {
    console.log(state)
    return {
        feed: state.blogFeedReducer.feed,
        blogPost: state.blogFeedReducer.blogPost,
        isLoading: state.blogFeedReducer.isLoading,
        error: state.blogFeedReducer.error
    }
}

export default connect(mapStateToProps, { fetchBlogPosts,  fetchBlogPostById, createNewBlogPost })(BlogFeed)