import { AxiosResponse } from 'axios'
import {
    all,
    call,
    put,
    takeLatest,
    AllEffect,
    ForkEffect,
} from 'redux-saga/effects'
import { messageTypes } from 'components/messages/store/actionTypes'
import {
    FetchArticleById,
    FetchArticlesList,
    FetchCreateArticle,
    FetchEditArticleById,
    FetchDeleteArticleyId,
    FetchUploadToMedium,
} from './types'
import {
    createArticle,
    getSourceList,
    editArticleyId,
    getArticleById,
    getArticlesList,
    getCategoryList,
    deleteArticleById,
    uploadToMedium,
    uploadToGhost,
} from '../api/api.articles'
import { articleTypes } from './actionTypes'

function* fetchArticleListSaga({ payload }: FetchArticlesList) {
    try {
        const response: AxiosResponse = yield call(getArticlesList, payload)
        if (response.data) {
            yield put({
                type: articleTypes.SET_ARTICLES_LIST,
                payload: response.data.payload,
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
        yield put({
            type: articleTypes.DROP_ARTICLES,
        })
    }
}

function* fetchCategoryListSaga() {
    try {
        const response: AxiosResponse = yield call(getCategoryList)
        if (response.data) {
            yield put({
                type: articleTypes.SET_CATEGORY_LIST,
                payload: response.data.payload,
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
        yield put({
            type: articleTypes.DROP_ARTICLES,
        })
    }
}

function* fetchSourceListSaga() {
    try {
        const response: AxiosResponse = yield call(getSourceList)
        if (response.data) {
            yield put({
                type: articleTypes.SET_SOURCE_LIST,
                payload: response.data.payload,
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
        yield put({
            type: articleTypes.DROP_ARTICLES,
        })
    }
}

function* fetchDeleteArticleByIdSaga({ payload }: FetchDeleteArticleyId) {
    try {
        const response: AxiosResponse = yield call(deleteArticleById, payload)
        if (response.data) {
            yield put({
                type: articleTypes.SET_DELETE_ARTICLE_BY_ID,
                payload: response.data.payload,
            })
            yield put({
                type: messageTypes.SET_MESSAGE_TOAST,
                payload: {
                    message: 'Article deleted successfuly',
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
        yield put({
            type: articleTypes.DROP_ARTICLES,
        })
    }
}

function* fetchCreateArticleSaga({ payload }: FetchCreateArticle) {
    try {
        const response: AxiosResponse = yield call(createArticle, payload)
        if (response.data) {
            yield put({
                type: articleTypes.SET_CREATE_ARTICLE,
                payload: response.data.payload,
            })
            yield put({
                type: messageTypes.SET_MESSAGE_TOAST,
                payload: {
                    message: 'Article created',
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
        yield put({
            type: articleTypes.DROP_ARTICLES,
        })
    }
}

function* fetchArticleByIdSaga({ payload }: FetchArticleById) {
    try {
        const response: AxiosResponse = yield call(getArticleById, payload)
        if (response.data) {
            yield put({
                type: articleTypes.SET_ARTICLE_BY_ID,
                payload: response.data.payload,
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
        yield put({
            type: articleTypes.DROP_ARTICLES,
        })
    }
}

function* fetchEditArticleByIdSaga({ payload }: FetchEditArticleById) {
    try {
        const response: AxiosResponse = yield call(editArticleyId, payload)
        if (response.data) {
            yield put({
                type: articleTypes.SET_EDIT_ARTICLE_BY_ID,
                payload: response.data.payload,
            })
            yield put({
                type: messageTypes.SET_MESSAGE_TOAST,
                payload: {
                    message: 'Article updated',
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
        yield put({
            type: articleTypes.DROP_ARTICLES,
        })
    }
}

function* fetchUploadToMediumSaga({ payload }: FetchUploadToMedium) {
    try { 
        const response: AxiosResponse = yield call(uploadToMedium, payload)
        if (response.data) {
            yield put({
                type: articleTypes.SET_ARTICLE_BY_ID,
                payload: response.data.payload,
            })
            yield put({
                type: messageTypes.SET_MESSAGE_TOAST,
                payload: {
                    message: 'Article updated',
                    type: 'success',
                },
            })
        }
    } catch (e: any) {
        yield put({
            type: messageTypes.SET_MESSAGE_TOAST,
            payload: {
                message: e?.response?.data?.error.message || 'Error',
                type: 'error',
            },
        })
        yield put({
            type: articleTypes.DROP_ARTICLES,
        })
    }
}

function* fetchUploadToGhostSaga({ payload }: FetchUploadToMedium) {
    try { 
        const response: AxiosResponse = yield call(uploadToGhost, payload)
        if (response.data) {
            yield put({
                type: articleTypes.SET_ARTICLE_BY_ID,
                payload: response.data.payload,
            })
            yield put({
                type: messageTypes.SET_MESSAGE_TOAST,
                payload: {
                    message: 'Article updated',
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
        yield put({
            type: articleTypes.DROP_ARTICLES,
        })
    }
}

function* articleSaga(): Generator<
    AllEffect<ForkEffect<never>>,
    void,
    unknown
> {
    yield all([
        takeLatest(articleTypes.FETCH_SOURCE_LIST, fetchSourceListSaga),
        takeLatest(articleTypes.FETCH_ARTICLE_BY_ID, fetchArticleByIdSaga),
        takeLatest(articleTypes.FETCH_ARTICLES_LIST, fetchArticleListSaga),
        takeLatest(articleTypes.FETCH_CATEGORY_LIST, fetchCategoryListSaga),
        takeLatest(articleTypes.FETCH_CREATE_ARTICLE, fetchCreateArticleSaga),
        takeLatest(
            articleTypes.FETCH_DELETE_ARTICLE_BY_ID,
            fetchDeleteArticleByIdSaga,
        ),
        takeLatest(
            articleTypes.FETCH_EDIT_ARTICLE_BY_ID,
            fetchEditArticleByIdSaga,
        ),
        takeLatest(articleTypes.FETCH_UPLOAD_TO_MEDIUM,
            fetchUploadToMediumSaga),
            takeLatest(articleTypes.FETCH_UPLOAD_TO_GHOST,
                fetchUploadToGhostSaga)
            ])
}

export default articleSaga
