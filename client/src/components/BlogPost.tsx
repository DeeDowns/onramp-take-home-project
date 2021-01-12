import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useParams, useHistory } from 'react-router-dom'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import { fetchBlogPostById  } from '../store/actions/blogFeedActions'
import {  addToFavorites } from '../store/actions/favoirtesActions'

import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, ButtonGroup
  } from 'reactstrap';

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
        <Card className='blog-post-container'>
            {props.isLoading ? <CardBody><p>fetching post</p></CardBody> : null}
            <CardBody>
            <CardTitle tag='h1'>{props.blogPost.title}</CardTitle>
            <CardSubtitle tag='h2'>{props.blogPost.username}</CardSubtitle>
            <CardText tag='p'>{props.blogPost.content}</CardText>
            <div className='btn-container'>
                <Button color='primary' onClick={handleAddFavorite}>Favorite</Button>
                <Button color='primary' onClick={handleEdit}>Edit</Button>
                <Button color='primary' onClick={handleDelete}>Delete</Button>
            </div>
            </CardBody>
        </Card>
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