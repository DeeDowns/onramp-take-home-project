import { axiosWithAuth } from '../../utils/axiosWithAuth'
import { Dispatch } from 'redux'

export const POST_USER_START = 'POST_USER_START'
export const POST_USER_LOGIN_SUCCESS = 'POST_USER_LOGIN_START'
export const POST_USER_REGISTER_SUCCESS = 'POST_USER_REGISTER_SUCCESS'
export const POST_USER_FAILURE = 'POST_USER_FAILURE'

export const registerNewUser = (newPost:any) => (dispatch:Dispatch) => {
    dispatch({ type: POST_USER_START})
    axiosWithAuth().post(`/users`, newPost)
    .then((res:any) => {
        dispatch({ type: POST_USER_REGISTER_SUCCESS, payload: res.data})
    })
    .catch((err:any) => {
        dispatch({ type: POST_USER_FAILURE, payload: err})
    })
}

export const userLogin = (newPost:any) => (dispatch:Dispatch) => {
    dispatch({ type: POST_USER_START})
    axiosWithAuth().post(`/login`, newPost)
    .then((res:any) => {
        localStorage.setItem('token', res.data.token)
        dispatch({ type: POST_USER_LOGIN_SUCCESS, payload: res.data})
    })
    .catch((err:any) => {
        dispatch({ type: POST_USER_FAILURE, payload: err})
    })
}


