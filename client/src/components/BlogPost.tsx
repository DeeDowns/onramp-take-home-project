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

    console.log('BLOG-POST-PROPS',props.blogPost[0])

    return (
        <div>
            {props.isLoading ? <div><p>fetching post</p></div> : null}
            <h1>{props.blogPost[0].title}</h1>
            <h2>{props.blogPost[0].username}</h2>
            <p>{props.blogPost[0].content}</p>
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

export default connect(mapStateToProps, { fetchBlogPostById })(BlogPost)