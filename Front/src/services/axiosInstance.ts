import axios from 'axios'
import { DropAuthorizationAction } from 'modules/auth/store/actions'
import store from 'redux/store'
import { getCookiesAccessToken, removeToken } from 'utils/token'

const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Credentials': '*',
    },
})

axiosInstance.interceptors.request.use(
    config => {
        const token = getCookiesAccessToken()

        if (config.headers && token) {
            config.headers.Authorization = `Bearer ${token}`
        }

        return config
    },
    error => Promise.reject(error),
)

axiosInstance.interceptors.response.use(
    config => config,
    error => {
        if (error.response.status === 401) {
            const { dispatch } = store
            dispatch(DropAuthorizationAction())
            removeToken()
            window.location.href = '/sign_in'
        }
        return Promise.reject(error)
    },
)

export default axiosInstance
