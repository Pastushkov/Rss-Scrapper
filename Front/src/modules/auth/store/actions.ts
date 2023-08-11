import { authorizationTypes } from './actionTypes'
import {
    FetchAuthorizationRequest,
    SetEmployers,
    IAuthorization,
    IAuthorizationPost,
    DropAuthorization,
    SetErrorMessage,
    FetchRegisterRequest,
} from './types'

export const fetchAuthorizationAction = (
    payload: IAuthorizationPost,
): FetchAuthorizationRequest => ({
    type: authorizationTypes.FETCH_AUTHORIZATION_REQUEST,
    payload,
})

export const fetchRegisterAction = (
    payload: FetchRegisterRequest['payload'],
): FetchRegisterRequest => ({
    type: authorizationTypes.FETCH_REGISTER,
    payload,
})

export const SetAuthorizationAction = (payload: {
    authorization: IAuthorization | null
}): SetEmployers => ({
    type: authorizationTypes.SET_AUTHORIZATION,
    payload,
})

export const ErrorAuthorizationAction = (payload: string): SetErrorMessage => ({
    type: authorizationTypes.ERROR_AUTHORIZATION,
    payload,
})

export const DropAuthorizationAction = (): DropAuthorization => ({
    type: authorizationTypes.DROP_AUTHORIZATION,
})
