import { authorizationTypes } from './actionTypes'

export interface IAuthorizationPost {
    email: string
    password: string
}

export interface AuthorizationState {
    authorization: IAuthorization | null
    isLoading: boolean
    errorMessage: string
    registerSuccess: boolean
}

export interface IAuthorization {
    token?: string | null
}

export interface FetchAuthorizationRequest {
    type: typeof authorizationTypes.FETCH_AUTHORIZATION_REQUEST
    payload: IAuthorizationPost
}

export interface SetEmployers {
    type: typeof authorizationTypes.SET_AUTHORIZATION
    payload: { authorization: IAuthorization | null }
}

export interface SetErrorMessage {
    type: typeof authorizationTypes.ERROR_AUTHORIZATION
    payload: string
}

export interface DropAuthorization {
    type: typeof authorizationTypes.DROP_AUTHORIZATION
}

export interface IRegisterPost {
    email: string
    password: string
    name: string
}

export interface FetchRegisterRequest {
    type: typeof authorizationTypes.FETCH_REGISTER
    payload: IRegisterPost
}

export interface SetRegister {
    type: typeof authorizationTypes.SET_REGISTER
    payload: boolean
}

export type EmployersActions =
    | FetchAuthorizationRequest
    | SetEmployers
    | DropAuthorization
    | SetErrorMessage
    | FetchRegisterRequest
    | SetRegister
