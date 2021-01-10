import axios from 'axios'
import { Dispatch } from 'redux'

export const FETCH_POST_START = 'FETCH_POST_START'
export const FETCH_POST_SUCCESS = 'FETCH_POST_SUCCESS'
export const FETCH_POST_FAILURE = 'FETCH_POST_FAILURE'
export const FETCH_POST_BY_ID_SUCCESS = 'FETCH_POST_BY_ID_SUCCESS'
export const POST_NEW_BLOG_POST_SUCCESS = 'POST_NEW_BLOG_POST_SUCCESS'

export const fetchBlogPosts = () => (dispatch:Dispatch) => {
    dispatch({ type: FETCH_POST_START})
    axios.get('http://localhost:4003/feed')
    .then((res:any) => {
        console.log(res.data)
        dispatch({ type: FETCH_POST_SUCCESS, payload: res.data})
    })
    .catch((err:any) => {
        dispatch({ type: FETCH_POST_FAILURE, payload: err})
    })
}

export const fetchBlogPostsById = (id:number) => (dispatch:Dispatch) => {
    dispatch({ type: FETCH_POST_START})
    axios.get(`http://localhost:4003/feed/${id}`)
    .then((res:any) => {
        console.log(res.data)
        dispatch({ type: FETCH_POST_BY_ID_SUCCESS, payload: res.data})
    })
    .catch((err:any) => {
        dispatch({ type: FETCH_POST_FAILURE, payload: err})
    })
}


export const creatNewBlogPosts = (newPost:any) => (dispatch:Dispatch) => {
    dispatch({ type: FETCH_POST_START})
    axios.get(`http://localhost:4003/feed/`, newPost)
    .then((res:any) => {
        console.log(res.data)
        dispatch({ type: POST_NEW_BLOG_POST_SUCCESS, payload: res.data})
    })
    .catch((err:any) => {
        dispatch({ type: FETCH_POST_FAILURE, payload: err})
    })
}