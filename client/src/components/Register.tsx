import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import { registerNewUser } from '../store/actions/userActions'

import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

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
        <Form onSubmit={handleRegSubmit}>
            <FormGroup>
            <Label htmlFor='username'>
                Username
                <Input 
                    type='text'
                    name='username'
                    value={regInputs.username}
                    onChange={handleRegChange}
                />
            </Label>
            </FormGroup>

            <FormGroup>
            <Label htmlFor='email'>
                Email
                <Input 
                    type='email'
                    name='email'
                    value={regInputs.email}
                    onChange={handleRegChange}
                />
            </Label>
            </FormGroup>

            <FormGroup>
            <Label htmlFor='password'>
                Password
                <Input 
                    type='password'
                    name='password'
                    value={regInputs.password}
                    onChange={handleRegChange}
                />
            </Label>
            </FormGroup>
            <Button color='primary'>Sign-Up</Button>
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

export default connect(mapStateToProps, { registerNewUser })(Register) 