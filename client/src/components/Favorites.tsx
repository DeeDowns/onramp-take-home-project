import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchFavorites, addToFavorites } from '../store/actions/favoirtesActions'

import { Card, CardTitle, CardBody } from 'reactstrap'

const Favorites: React.FC = (props:any) => {

    useEffect(() => {
        props.fetchFavorites()
    }, [])

    return (
        <Card>
             {
            props.favorites.length === 0 ? <h1>You have no favorites</h1> : null
            }
             {props.favorites &&
                 props.favorites.map((favorite:any) => (
                     <CardBody key={favorite.id}>
                        <CardTitle tag='h1'>{favorite.title}</CardTitle>
                        <Link to={`/post/${favorite.id}`}>read</Link>
                    </CardBody>
                 ))
             }
        </Card>
       
    )
}

const mapStateToProps = (state: any) => {
    return {
        favorites: state.favoritesReducer.favorites,
        feed: state.blogFeedReducer.feed,
        isLoading: state.blogFeedReducer.isLoading,
        error: state.blogFeedReducer.error
    }  
}

export default connect(mapStateToProps, { fetchFavorites,  addToFavorites })(Favorites)