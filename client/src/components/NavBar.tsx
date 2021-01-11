import React from 'react'
import NavLinks from './NavLinks'
import Logout from './Logout'

const NavBar: React.FC = () => {
    

    return (
        <nav>
            <Logout />
            <NavLinks />
        </nav>
    )
}

export default NavBar