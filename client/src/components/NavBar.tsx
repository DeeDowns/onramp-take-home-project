import React, { useState } from 'react'
import SearchBar from './SearchBar'
import NavLinks from './NavLinks'

const NavBar: React.FC = () => {
    

    return (
        <nav>
            <SearchBar />
            <NavLinks />
        </nav>
    )
}

export default NavBar