import React from 'react'
import { connect } from 'react-redux'
import NavLinks from './NavLinks'
import Logout from './Logout'

const NavBar: React.FC = (props:any) => {
    // console.log('NAV',props.user[0])
    return (
        <nav>
            {
            props.user[0] ? <p>{props.user[0].message}</p> : <p>Welcome</p>}
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