import { AxiosResponse } from 'axios'
import {
    all,
    call,
    put,
    takeLatest,
    AllEffect,
    ForkEffect,
} from 'redux-saga/effects'
import { setToken } from 'utils/token'
import { messageTypes } from 'components/messages/store/actionTypes'
import { authorizationTypes } from './actionTypes'
import { Authorization, Register } from '../api/login.api'
import { IAuthorization } from './types'

function* fetchAuthorizationSaga({ payload }: any) {
    try {
        const response: AxiosResponse<{ payload: IAuthorization }> = yield call(
            Authorization,
            payload,
        )
        if (response.data) {
            yield call(setToken, response.data.payload as string)
            yield put({
                type: authorizationTypes.SET_AUTHORIZATION,
                payload: { authorization: response.data.payload },
            })
            yield put({
                type: messageTypes.SET_MESSAGE_TOAST,
                payload: {
                    message: 'Login Success',
                    type: 'success',
                },
            })
        }
    } catch (e: any) {
        yield put({
            type: messageTypes.SET_MESSAGE_TOAST,
            payload: {
                message: e?.response?.data?.error || 'Error',
                type: 'error',
            },
        })
        // error
    }
}

function* fetchRegisterSaga({ payload }: any) {
    try {
        const response: AxiosResponse<{ payload: any }> = yield call(
            Register,
            payload,
        )
        if (response.data) {
            yield put({
                type: authorizationTypes.SET_REGISTER,
                payload: response.data.payload,
            })
            yield put({
                type: messageTypes.SET_MESSAGE_TOAST,
                payload: {
                    message: 'Register success',
                    type: 'success',
                },
            })
        }
    } catch (e: any) {
        console.log(e)
        yield put({
            type: messageTypes.SET_MESSAGE_TOAST,
            payload: {
                message: e?.response?.data?.error || 'Error',
                type: 'error',
            },
        })
        // error
    }
}

function* authorizationSaga(): Generator<
    AllEffect<ForkEffect<never>>,
    void,
    unknown
> {
    yield all([
        takeLatest(
            authorizationTypes.FETCH_AUTHORIZATION_REQUEST,
            fetchAuthorizationSaga,
        ),
        takeLatest(authorizationTypes.FETCH_REGISTER, fetchRegisterSaga),
    ])
}

export default authorizationSaga
