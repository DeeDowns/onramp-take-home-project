import {
    FETCH_FAVORITES_START,
    FETCH_FAVORITES_SUCCESS,
    FETCH_FAVORITES_FAILURE,
    POST_TO_FAVS_SUCCESS
} from '../actions/favoirtesActions'

const initialState = {
    favorites: [],
    isLoading: false,
    error: ''
    
}

export const favoritesReducer = (state = initialState, action:any) => {
    switch(action.type) {
        case FETCH_FAVORITES_START:
            return {
                ...state,
                isLoading: true,
                error: ''
            }
        case FETCH_FAVORITES_SUCCESS:
            return {
                ...state,
                isLoading: false,
                favorites: action.payload
            }
        case FETCH_FAVORITES_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        case POST_TO_FAVS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                favorites: [...state.favorites, action.payload]
            }
        default:
            return state
    }
}