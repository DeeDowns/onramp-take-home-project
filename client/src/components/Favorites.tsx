import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchFavorites, addToFavorites } from '../store/actions/favoirtesActions'

const Favorites: React.FC = (props:any) => {
    console.log('fdfdfdfjf', props.favorites)

    useEffect(() => {
        props.fetchFavorites()
    }, [])

    return (
        <div>
             <h2>Favorite Posts</h2>
             {
                 props.favorites.map((favorite:any) => (
                     <div key={favorite.id}>
                        <h2>{favorite.title}</h2>
                        <h3>{favorite.username}</h3>
                        <Link to={`/post/${favorite.id}`}>read</Link>
                    </div>
                 ))
             }
        </div>
       
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