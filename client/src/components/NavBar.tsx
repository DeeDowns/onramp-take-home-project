import React from 'react'
import { connect } from 'react-redux'
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

const mapStateToProps = (state: any) => {
    return {
        user: state.userReducer.user,
        isLoading: state.userReducer.isLoading,
        error: state.userReducer.error
    }
}

export default connect(mapStateToProps, { null:null })(NavBar)