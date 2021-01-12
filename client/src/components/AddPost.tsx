import React, { useState } from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { createNewBlogPost } from '../store/actions/blogFeedActions'

import {  Form, FormGroup, Label, Input, Button, Col } from 'reactstrap'

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
        props.createNewBlogPost(addPostInputs)
        setAddPostInputs(initialAddPostInputs)
        
    }

    return (
        <Form onSubmit={handleAddSubmit} className='add-edit-form'>
            <FormGroup>
            <Label  className='title-wrapper' htmlFor='title'>
                Blog Title
                <Col md={20}>
                <Input 
                    type='text'
                    name='title'
                    value={addPostInputs.title}
                    onChange={handleAddChange}
                />
                </Col>
            </Label>
            </FormGroup>
            

            {/* Author */}
            {/* Date */}
            <FormGroup >
            <Label className='content-wrapper' htmlFor='content'>
                Content
                <Col lg={20}>
                <Input 
                    style={{ height: '450px'}}
                    type='textarea'
                    name='content'
                    value={addPostInputs.content}
                    onChange={handleAddChange}
                />
                 </Col>
            </Label>
           
            </FormGroup>
           
        <Button color='primary'>Add Post</Button>
        </Form>
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