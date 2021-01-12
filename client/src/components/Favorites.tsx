import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchFavorites, addToFavorites } from '../store/actions/favoirtesActions'

import { Card, CardTitle, CardSubtitle, CardBody } from 'reactstrap'

const Favorites: React.FC = (props:any) => {
    useEffect(() => {
        props.fetchFavorites()
    }, [])

    return (
        <Card>
             {props.favorites &&
                 props.favorites.map((favorite:any) => (
                     <CardBody key={favorite.id}>
                        <CardTitle tag='h1'>{favorite.title}</CardTitle>
                        {/* <CardSubtitle tag='h1'>{favorite.username}</CardSubtitle> */}
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