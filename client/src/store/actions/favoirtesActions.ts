import { axiosWithAuth } from '../../utils/axiosWithAuth'
import { Dispatch } from 'redux'

export const FETCH_FAVORITES_START = 'FETCH_FAVORITES_START'
export const FETCH_FAVORITES_SUCCESS = 'FETCH_FAVORITES_SUCCESS'
export const FETCH_FAVORITES_FAILURE = 'FETCH_FAVORITES_FAILURE'
export const POST_TO_FAVS_SUCCESS = 'POST_TO_FAVS_SUCCESS'

export const fetchFavorites = () => (dispatch: Dispatch) => {
    dispatch({ type: FETCH_FAVORITES_START })
    axiosWithAuth().get('/favorites')
    .then(res => {
        console.log(res.data)
        dispatch({ type: FETCH_FAVORITES_SUCCESS, payload: res.data })
    })
    .catch(err => {
        console.log(err)
        dispatch({ type: FETCH_FAVORITES_FAILURE, payload: err })
    })
}

export const addToFavorites = (id:any) => (dispatch: Dispatch) => {
    dispatch({ type: FETCH_FAVORITES_SUCCESS })
    axiosWithAuth().post(`/favorites/${id}`)
    .then(res => {
        console.log(res.data)
        dispatch({ type: POST_TO_FAVS_SUCCESS, payload: res.data })
    })
    .catch(err => {
        console.log(err)
        dispatch({ type: FETCH_FAVORITES_FAILURE, payload: err })
    })
}