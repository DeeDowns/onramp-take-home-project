import React, { useState } from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { createNewBlogPost } from '../store/actions/blogFeedActions'

const initialAddPostInputs = {
    title: '',
    content: ''
}

const AddPost: React.FC = (props:any) => {
    const [addPostInputs, setAddPostInputs] = useState<{title:string; content:string}>(initialAddPostInputs)

    const history = useHistory()

    const handleAddChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setAddPostInputs({
            ...addPostInputs,
            [event.currentTarget.name]: event.currentTarget.value
        })
    }

    const handleAddSubmit = (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        console.log(addPostInputs)
        props.createNewBlogPost(addPostInputs)
        setAddPostInputs(initialAddPostInputs)
        
    }

    return (
        <form onSubmit={handleAddSubmit}>
            <label htmlFor='title'>
                Blog Title
                <input 
                    type='text'
                    name='title'
                    value={addPostInputs.title}
                    onChange={handleAddChange}
                />
            </label>

            {/* Author */}
            {/* Date */}

            <label htmlFor='content'>
                Content
                <textarea 
                    name='content'
                    value={addPostInputs.content}
                    onChange={handleAddChange}
                />
            </label>
        <button>Add Post</button>
        </form>
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

export default connect(mapStateToProps, { createNewBlogPost })(AddPost)