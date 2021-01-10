import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import { registerNewUser } from '../store/actions/userActions'



const initialRegInputs = {
    username: '',
    email: '',
    password: ''
}

const Register: React.FC = (props:any) =>  {
    const [regInputs, setRegInputs] = useState<{username: string; email: string; password: string}>(initialRegInputs)
    const history = useHistory()

    const handleRegChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRegInputs({
            ...regInputs,
            [event.currentTarget.name]: event.currentTarget.value
        })
    }

    const handleRegSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        props.registerNewUser(regInputs)
        history.push('/login') 
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

const mapStateToProps = (state: any) => {
    console.log(state)
    return {
        user: state.userReducer.user,
        isLoading: state.userReducer.isLoading,
        error: state.userReducer.error
    }
}

export default connect(mapStateToProps, { registerNewUser })(Register) 