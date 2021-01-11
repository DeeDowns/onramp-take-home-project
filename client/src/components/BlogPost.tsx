import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useParams, useHistory } from 'react-router-dom'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import { fetchBlogPostById  } from '../store/actions/blogFeedActions'
import {  addToFavorites } from '../store/actions/favoirtesActions'

interface ParamsType {
    id: string
}
const BlogPost: React.FC = (props:any) => {
    const { id } = useParams<ParamsType>()
    const history = useHistory()

    useEffect(() => {
        props.fetchBlogPostById(id)
    }, [id])

    const handleAddFavorite =  (event:React.MouseEvent) => {
        event.preventDefault()
        props.addToFavorites(props.blogPost.id)
    } 

    const handleEdit = (event:React.MouseEvent) => {
        event.preventDefault()
        history.push(`/edit-post/${props.blogPost.id}`)
    } 

    const handleDelete = (event:React.MouseEvent) => {
        event.preventDefault()
        event.preventDefault()
        axiosWithAuth().delete(`/feed/${id}`)
        .then(res => {
          console.log(res)
          history.push('/')
        })
        .catch(err => {
          console.log(err)
        })
    } 

    return (
        <div>
            {props.isLoading ? <div><p>fetching post</p></div> : null}
            <h1>{props.blogPost.title}</h1>
            <h2>{props.blogPost.username}</h2>
            <p>{props.blogPost.content}</p>
            <button onClick={handleAddFavorite}>add to favorites</button>
            <button onClick={handleEdit}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
}

const mapStateToProps = (state: any) => {
    console.log('STAT',state.blogFeedReducer.blogPost)
    return {
        feed: state.blogFeedReducer.feed,
        blogPost: state.blogFeedReducer.blogPost,
        favorites: state.favoritesReducer.favorites,
        isLoading: state.blogFeedReducer.isLoading,
        error: state.blogFeedReducer.error
    }
}

export default connect(mapStateToProps, { fetchBlogPostById, addToFavorites })(BlogPost)