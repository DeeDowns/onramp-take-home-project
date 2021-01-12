import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import { userLogin } from '../store/actions/userActions'
import {axiosWithAuth} from '../utils/axiosWithAuth'

import { Button, Form, FormGroup, Label, Input } from 'reactstrap';


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

    const login = (event: React.FormEvent<HTMLFormElement>) =>  {
        event.preventDefault()
        axiosWithAuth().post(`/login`, credInputs)
        .then((res:any) => {
            console.log(res.data)
            localStorage.setItem('token', res.data.token)
            history.push('/')
        })
        .catch((err:any) => {
            console.log(err)
        })
    }
    return (
        <Form onSubmit={login}>
            <FormGroup>
            <Label htmlFor='username'>
                Username
                <Input 
                    type='text'
                    name='username'
                    value={credInputs.username}
                    onChange={handleCredChange}
                />
            </Label>
            </FormGroup>

            <FormGroup>
            <Label htmlFor='password'>
                Password
                <Input 
                    type='password'
                    name='password'
                    value={credInputs.password}
                    onChange={handleCredChange}
                />
            </Label>
            </FormGroup>
            <Button color='primary'>Sign-in</Button>
        </Form>
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