import { authorizationTypes } from './actionTypes'
import { EmployersActions, AuthorizationState } from './types'

const initialState: AuthorizationState = {
    authorization: null,
    isLoading: false,
    errorMessage: '',
    registerSuccess: false
}

export default (
    state = initialState,
    action: EmployersActions,
): AuthorizationState => {
    switch (action.type) {
        case authorizationTypes.FETCH_AUTHORIZATION_REQUEST:
            return {
                ...state,
                isLoading: true,
            }
        case authorizationTypes.SET_AUTHORIZATION:
            return {
                ...state,
                authorization: action.payload.authorization,
                isLoading: false,
            }
        case authorizationTypes.ERROR_AUTHORIZATION:
            return {
                ...state,
                errorMessage: action.payload,
                isLoading: false,
            }
        case authorizationTypes.DROP_AUTHORIZATION:
            return {
                ...state,
                authorization: null,
            }
        case authorizationTypes.FETCH_REGISTER:
            return {
                ...state,
                isLoading: true,
            }
        case authorizationTypes.SET_REGISTER:
            return {
                ...state,
                isLoading: false,
                registerSuccess: action.payload
            }
        default:
            return {
                ...state,
            }
    }
}
