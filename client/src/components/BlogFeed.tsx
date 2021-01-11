import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchBlogPosts, fetchBlogPostById, createNewBlogPost } from '../store/actions/blogFeedActions'

import { Card, CardTitle, CardSubtitle, CardBody, Form, FormGroup, Label, Input } from 'reactstrap';

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
        <div className='feed-container'>
            <Form>
                <Label htmlFor='search-bar'>
                    <Input 
                        type='text' 
                        name='search-bar'
                        id='search-bar'
                        placeholder='Search for a Blog Post'
                        value={searchInput}
                        onChange={handleSearchInputChange}
                    />
                </Label>
            </Form>
            {props.feed &&
                props.feed.filter(( post:any) => {
                    return (
                        post.title.toLowerCase().includes(searchInput.toLowerCase()) || 
                        post.username.toLowerCase().includes(searchInput.toLowerCase())
                    )
                })
                .map((post:any) => (
<<<<<<< HEAD
                <Card body outline color="secondary" key={post.id}>
                    <CardBody>
                    <CardTitle tag='h1'>{post.title}</CardTitle>
                    <CardSubtitle tag='h2'>posted by: {post.username}</CardSubtitle>
=======
                <div key={post.id}>
                    <h2>Title: {post.title}</h2>
                    <h3>Author: {post.username}</h3>
>>>>>>> 2a17a3437489ca540fb798afc43b0d6579d0c9ca
                    <Link to={`/post/${post.id}`}>read</Link>
                    </CardBody>
                </Card>
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