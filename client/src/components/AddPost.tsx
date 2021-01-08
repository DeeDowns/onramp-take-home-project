import { stringify } from 'querystring'
import React, { useState } from 'react'

const initialAddPostInputs = {
    title: '',
    content: ''
}

const AddPost: React.FC = () => {
    const [addPostInputs, setAddPostInputs] = useState<{title:string; content:string}>(initialAddPostInputs)

    const handleAddChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setAddPostInputs({
            ...addPostInputs,
            [event.currentTarget.name]: event.currentTarget.value
        })
    }

    const handleAddSubmit = (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        console.log(addPostInputs)
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

export default AddPost