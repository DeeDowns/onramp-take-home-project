import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchBlogPostById  } from '../store/actions/blogFeedActions'

interface ParamsType {
    id: string
}
const BlogPost: React.FC = (props:any) => {
    const { id } = useParams<ParamsType>()

    useEffect(() => {
        props.fetchBlogPostById(id)
    }, [id])

    console.log('BLOG-POST-PROPS',props.blogPost.title)

    return (
        <div>
            {props.isLoading ? <div><p>fetching post</p></div> : null}
            <h1>{props.blogPost.title}</h1>
            <h2>{props.blogPost.username}</h2>
            <p>{props.blogPost.content}</p>
        </div>
    )
}

const mapStateToProps = (state: any) => {
    console.log('STAT',state.blogFeedReducer.blogPost[0])
    return {
        feed: state.blogFeedReducer.feed,
        blogPost: state.blogFeedReducer.blogPost[0],
        isLoading: state.blogFeedReducer.isLoading,
        error: state.blogFeedReducer.error
    }
}

export default connect(mapStateToProps, { fetchBlogPostById })(BlogPost)