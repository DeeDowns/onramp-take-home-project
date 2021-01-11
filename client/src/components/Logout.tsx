import React from 'react'
import { useHistory } from 'react-router-dom'

const Logout: React.FC = () => {
    const history = useHistory()
    const handleLogout = (event:React.MouseEvent) => {
        event.preventDefault()
        localStorage.removeItem('token')
        history.push('/login')
    }

    return (
        <button onClick={handleLogout}>Logout</button>
    )
}

export default Logout