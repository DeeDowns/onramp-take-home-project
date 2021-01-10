import { combineReducers } from 'redux'
import { blogFeedReducer } from './blogFeedReducer'
import { userReducer } from './userReducer'

export const rootReducer = combineReducers({
    blogFeedReducer,
    userReducer
})