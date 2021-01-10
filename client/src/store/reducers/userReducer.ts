import {
    POST_USER_START,
    POST_USER_LOGIN_SUCCESS,
    POST_USER_REGISTER_SUCCESS,
    POST_USER_FAILURE
} from '../actions/userActions'

const initialState = {
    user: {},
    isLoading: false,
    error: ''
}

export const userReducer = (state = initialState, action:any) => {
    switch(action.type) {
        case POST_USER_START:
            return {
                ...state,
                isLoading: true,
                error: ''
            }
        case POST_USER_REGISTER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                user: action.payload
            }
        case POST_USER_LOGIN_SUCCESS:
            return {
                ...state,
                isLoading: false,
                user: action.payload
            }
        case POST_USER_FAILURE:
            return {
                ...state,
                isLoading: false,
               error: action.payload
            }
        default:
            return state
    }
}