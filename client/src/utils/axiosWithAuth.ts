import axios from 'axios'

export const axiosWithAuth = () => {
    console.log(localStorage.getItem('token'))
    return axios.create({
        baseURL: 'http://localhost:4003',
        headers: {
            Authorization: localStorage.getItem('token')
        }
    })

}