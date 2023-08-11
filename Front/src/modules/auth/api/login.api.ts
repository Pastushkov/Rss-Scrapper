import { AxiosResponse } from 'axios'
import axiosInstance from 'services/axiosInstance'

import {
    IAuthorization,
    IAuthorizationPost,
    IRegisterPost,
} from '../store/types'

const LOGIN_URLS = '/auth/login'
const REGISTER_URL = '/auth/register'

export const Authorization = (
    body: IAuthorizationPost,
): Promise<AxiosResponse<IAuthorization>> =>
    axiosInstance.post(`${LOGIN_URLS}`, body)

export const Register = (body: IRegisterPost): Promise<AxiosResponse<any>> =>
    axiosInstance.post(`${REGISTER_URL}`, body)
