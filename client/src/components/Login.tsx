import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

const initialCredInputs = {
    username: '',
    password: ''
}

const Login: React.FC = () =>  {
    const [credInputs, setCredInputs] = useState<{username: string; password: string}>(initialCredInputs)
    const history = useHistory()

    const handleCredChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCredInputs({
            ...credInputs,
            [event.currentTarget.name]: event.currentTarget.value
        })
    }

    const handleLoginSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        console.log(credInputs)
        axios.post('http://localhost:4003/login', credInputs)
        .then( (res: any) => {
            console.log(res)
            history.push('/feed') 
        })
        .catch((err:any) => {
            console.log(err.message, err.name)
        })
        setCredInputs(initialCredInputs)


    }
    return (
        <form onSubmit={handleLoginSubmit}>
            <label htmlFor='username'>
                Username
                <input 
                    type='text'
                    name='username'
                    value={credInputs.username}
                    onChange={handleCredChange}
                />
            </label>

            <label htmlFor='password'>
                Password
                <input 
                    type='password'
                    name='password'
                    value={credInputs.password}
                    onChange={handleCredChange}
                />
            </label>
            <button>Sign-Up</button>
        </form>
    )

}

export default Login