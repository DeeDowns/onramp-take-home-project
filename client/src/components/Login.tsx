import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import { userLogin } from '../store/actions/userActions'

const initialCredInputs = {
    username: '',
    password: ''
}

const Login: React.FC = (props:any) =>  {
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
        props.userLogin(credInputs)
        setCredInputs(initialCredInputs)
        history.push('/')
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
            <button>Sign-in</button>
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

export default connect(mapStateToProps, { userLogin })(Login) 