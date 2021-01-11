import { combineReducers } from 'redux'
import { blogFeedReducer } from './blogFeedReducer'
import { userReducer } from './userReducer'
import { favoritesReducer } from './favoritesReducer'

export const rootReducer = combineReducers({
    blogFeedReducer,
    userReducer,
    favoritesReducer
})