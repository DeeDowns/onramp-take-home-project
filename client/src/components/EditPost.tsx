import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { useParams, useHistory } from 'react-router-dom'
import { fetchBlogPostById }  from '../store/actions/blogFeedActions'
import { axiosWithAuth } from '../utils/axiosWithAuth'


import {  Form, FormGroup, Label, Input, Button, Col } from 'reactstrap'

const initialEditInputs = {
    title: '',
    content: ''
}

interface ParamsType {
    id: string
}

const EditPost: React.FC = (props:any) => {
    const [editPostInputs, setEditPostInputs] = useState<{title:string | number | readonly string[] | undefined; content:string | number | readonly string[] | undefined}>(initialEditInputs)
    const { id } = useParams<ParamsType>()

    useEffect(() => {
       axiosWithAuth().get(`/feed/${id}`)
       .then((res:any) => {
        console.log('edit',res.data)
        setEditPostInputs(res.data)
    })
    .catch((err:any) => {
        console.log(err)
    })
    }, [id])

    const handleEditChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setEditPostInputs({
            ...editPostInputs,
            [event.currentTarget.name]: event.currentTarget.value
        })
    }

    const handleEditSubmit =  (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        console.log(editPostInputs)
        axiosWithAuth().put(`/feed/${id}`, editPostInputs)
            .then((res:any) => {
            console.log('edit',res)
        })
    .catch((err:any) => {
        console.log(err)
    })
        // setEditPostInputs(initialEditInputs)
        // history.push('/')
        
    }

    return (
        <Form onSubmit={handleEditSubmit} className='add-edit-form'>
            <FormGroup>
            <Label className='title-wrapper' htmlFor='title'>
                Blog Title
                <Col md={20}>
                <Input 
                    type='text'
                    name='title'
                    value={editPostInputs.title}
                    onChange={handleEditChange}
                />
                </Col>
            </Label>
            </FormGroup>

            {/* Author */}
            {/* Date */}

            <FormGroup>
            <Label className='content-wrapper' htmlFor='content'>
                Content
                <Col lg={20}>
                <Input 
                    style={{ height: '450px'}}
                    type='textarea'
                    name='content'
                    value={editPostInputs.content}
                    onChange={handleEditChange}
                />
                </Col>
            </Label>
            </FormGroup>

        <Button color='primary'>Edit Post</Button>
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

export default connect(mapStateToProps, { fetchBlogPostById })(EditPost)