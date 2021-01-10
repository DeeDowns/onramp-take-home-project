import React, { useState } from 'react'
import axios from 'axios'

const initialRegInputs = {
    username: '',
    email: '',
    password: ''
}

const Register: React.FC = () =>  {
    const [regInputs, setRegInputs] = useState<{username: string; email: string; password: string}>(initialRegInputs)

    const handleRegChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRegInputs({
            ...regInputs,
            [event.currentTarget.name]: event.currentTarget.value
        })
    }

    const handleRegSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        console.log(regInputs)
        axios.post('http://localhost:4003/users', regInputs)
        .then( (res: any) => {
            console.log(res.data)
        })
        .catch((err:any) => {
            console.log(err.message, err.name)
        })
        setRegInputs(initialRegInputs)  

    }
    return (
        <form onSubmit={handleRegSubmit}>
            <label htmlFor='username'>
                Username
                <input 
                    type='text'
                    name='username'
                    value={regInputs.username}
                    onChange={handleRegChange}
                />
            </label>

            <label htmlFor='email'>
                Email
                <input 
                    type='email'
                    name='email'
                    value={regInputs.email}
                    onChange={handleRegChange}
                />
            </label>

            <label htmlFor='password'>
                Password
                <input 
                    type='password'
                    name='password'
                    value={regInputs.password}
                    onChange={handleRegChange}
                />
            </label>
            <button>Sign-Up</button>
        </form>
    )

}

export default Register