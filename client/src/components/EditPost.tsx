import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { useParams, useHistory } from 'react-router-dom'
import { fetchBlogPostById }  from '../store/actions/blogFeedActions'
import { axiosWithAuth } from '../utils/axiosWithAuth'
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
    const history = useHistory()

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
        <form onSubmit={handleEditSubmit}>
            <label htmlFor='title'>
                Blog Title
                <input 
                    type='text'
                    name='title'
                    value={editPostInputs.title}
                    onChange={handleEditChange}
                />
            </label>

            {/* Author */}
            {/* Date */}

            <label htmlFor='content'>
                Content
                <textarea 
                    name='content'
                    value={editPostInputs.content}
                    onChange={handleEditChange}
                />
            </label>
        <button>Edit Post</button>
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

export default connect(mapStateToProps, { fetchBlogPostById })(EditPost)