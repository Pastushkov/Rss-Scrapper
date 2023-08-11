import { all, fork, AllEffect, ForkEffect } from 'redux-saga/effects'
import authorizationSaga from 'modules/auth/store/saga'
import articleSaga from 'modules/articles/store/saga'


export function* rootSaga(): Generator<
    AllEffect<ForkEffect<void>>,
    void,
    unknown
> {
    yield all([fork(authorizationSaga), fork(articleSaga)])
}
