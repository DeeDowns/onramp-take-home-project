import React from 'react'
import { Link } from 'react-router-dom'


export const NavLinks: React.FC = () => {

    return (
        <div> 
        <p>Hello, Username</p>
        <Link to='/'>Blog Feed</Link>
        <Link to='/add-post'>Add Post</Link>
        <Link to='/favorites'>Favorites</Link>
        </div>
    )
}

export default NavLinks