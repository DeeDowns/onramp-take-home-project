import { axiosWithAuth } from '../../utils/axiosWithAuth'
import { Dispatch } from 'redux'

export const FETCH_POST_START = 'FETCH_POST_START'
export const FETCH_POST_SUCCESS = 'FETCH_POST_SUCCESS'
export const FETCH_POST_FAILURE = 'FETCH_POST_FAILURE'
export const FETCH_POST_BY_ID_SUCCESS = 'FETCH_POST_BY_ID_SUCCESS'
export const POST_NEW_BLOG_POST_SUCCESS = 'POST_NEW_BLOG_POST_SUCCESS'

export const fetchBlogPosts = () => (dispatch:Dispatch) => {
    dispatch({ type: FETCH_POST_START})
    axiosWithAuth().get('/feed')
    .then((res:any) => {
        console.log('fdfd')
        console.log(res.data)
        dispatch({ type: FETCH_POST_SUCCESS, payload: res.data})
    })
    .catch((err:any) => {
        dispatch({ type: FETCH_POST_FAILURE, payload: err})
    })
}

export const fetchBlogPostById = (id:number) => (dispatch:Dispatch) => {
    dispatch({ type: FETCH_POST_START})
    axiosWithAuth().get(`/feed/${id}`)
    .then((res:any) => {
        console.log(res.data)
        dispatch({ type: FETCH_POST_BY_ID_SUCCESS, payload: res.data})
    })
    .catch((err:any) => {
        dispatch({ type: FETCH_POST_FAILURE, payload: err})
    })
}

export const createNewBlogPost = (newPost:any) => (dispatch:Dispatch) => {
    dispatch({ type: FETCH_POST_START})
    axiosWithAuth().post(`/feed`, newPost)
    .then((res:any) => {
        console.log(res.data)
        dispatch({ type: POST_NEW_BLOG_POST_SUCCESS, payload: res.data})
    })
    .catch((err:any) => {
        dispatch({ type: FETCH_POST_FAILURE, payload: err})
    })
}