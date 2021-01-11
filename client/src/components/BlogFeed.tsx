import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchBlogPosts, fetchBlogPostById, createNewBlogPost } from '../store/actions/blogFeedActions'
import {  addToFavorites } from '../store/actions/favoirtesActions'

const BlogFeed: React.FC = (props:any) => {
    const [searchInput, setSearchInput] = useState<string>('')
    
    useEffect(() => {
        props.fetchBlogPosts()
    }, [])

    const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchInput(event.currentTarget.value) 
        console.log(searchInput) 
    }
   
    return (
        <div>
            <form >
                <label htmlFor='search-bar'>
                    Search:
                    <input 
                        type='text' 
                        name='search-bar'
                        id='search-bar'
                        value={searchInput}
                        onChange={handleSearchInputChange}
                    />
                </label>
            </form>
            <h1>Feed</h1>
            {props.feed &&
                props.feed.filter(( post:any) => {
                    return (
                        post.title.toLowerCase().includes(searchInput.toLowerCase()) || 
                        post.username.toLowerCase().includes(searchInput.toLowerCase())
                    )
                })
                .map((post:any) => (
                <div key={post.id}>
                    <h2>Title: {post.title}</h2>
                    <h3>Author: {post.username}</h3>
                    <Link to={`/post/${post.id}`}>read</Link>
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
        favorites: state.favoritesReducer.favorites,
        isLoading: state.blogFeedReducer.isLoading,
        error: state.blogFeedReducer.error
    }
}

export default connect(mapStateToProps, { fetchBlogPosts,  fetchBlogPostById, createNewBlogPost, addToFavorites })(BlogFeed)