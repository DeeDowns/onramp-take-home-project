import axios from 'axios'

export const axiosWithAuth = () => {
    return axios.create({
        baseURL: 'http://localhost:4003',
        headers: {
            Authorization: localStorage.getItem('token')
        }
    })
}