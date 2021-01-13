import React from 'react'
import { useHistory } from 'react-router-dom'

import { Button } from 'reactstrap'

const Logout: React.FC = () => {
    const history = useHistory()
    const handleLogout = (event:React.MouseEvent) => {
        event.preventDefault()
        localStorage.setItem('token', '')
        history.push('/login')
    }

    return (
        <Button color='primary' onClick={handleLogout}>Logout</Button>
    )
}

export default Logout