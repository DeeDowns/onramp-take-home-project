import {
    FETCH_POST_START,
    FETCH_POST_SUCCESS,
    FETCH_POST_FAILURE,
    FETCH_POST_BY_ID_SUCCESS,
    POST_NEW_BLOG_POST_SUCCESS
} from '../actions/blogFeedActions'


const initialState = {
    feed: [],
    blogPost: {},
    isLoading: false,
    error: ''
}

export const blogFeedReducer = (state = initialState, action:any) => {
    switch(action.type) {
        case FETCH_POST_START:
            return {
                ...state,
                isLoading: true,
                error: ''
            }
        case FETCH_POST_SUCCESS:
            return {
                ...state,
                isLoading: false,
                feed: action.payload
            }
        case FETCH_POST_BY_ID_SUCCESS:
            return {
                ...state,
                isLoading: false,
                blogPost: action.payload
            }
        case POST_NEW_BLOG_POST_SUCCESS:
            return {
                ...state,
                isLoading: false,
                feed: [...state.feed, action.payload]
            }
        case FETCH_POST_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
        
            } 
        default:
            return state
    }
}