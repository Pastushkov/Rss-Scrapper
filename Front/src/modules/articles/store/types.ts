import { articleTypes } from './actionTypes'

export interface IQuery {
    limit?: number
    offset?: number
    search?: string
    category?: string
    source?: string
    sortBy?: string
}

export interface IArticleState {
    isLoading: boolean
    list: IArticle[] | null
    total: number
    categories: string[]
    isLoadigCategory: boolean
    sourceList: string[]
    isLoadigSource: boolean
    isLoadingSelectedArticle: boolean
    selectedArticle: IArticle | null
}

interface Article {
    title: string
    description: string
    link: string
    pubDate: string
    source: string
    category?: string[]
    media?: string
}

export interface IArticle extends Article {
    _id: string
}

export interface FetchArticlesList {
    type: typeof articleTypes.FETCH_ARTICLES_LIST
    payload: {
        limit?: number
        offset?: number
        search?: string
        category?: string
        source?: string
    }
}

export interface SetArticlesList {
    type: typeof articleTypes.SET_ARTICLES_LIST
    payload: {
        total: number
        list: IArticle[]
    }
}

export interface FethCategoryList {
    type: typeof articleTypes.FETCH_CATEGORY_LIST
}
export interface SetCategoryList {
    type: typeof articleTypes.SET_CATEGORY_LIST
    payload: string[]
}

export interface FethSourceList {
    type: typeof articleTypes.FETCH_SOURCE_LIST
}
export interface SetSourceList {
    type: typeof articleTypes.SET_SOURCE_LIST
    payload: string[]
}

export interface dropArticles {
    type: typeof articleTypes.DROP_ARTICLES
}

export interface FetchDeleteArticleyId {
    type: typeof articleTypes.FETCH_DELETE_ARTICLE_BY_ID
    payload: string
}

export interface SetDeleteArticleById {
    type: typeof articleTypes.SET_DELETE_ARTICLE_BY_ID
    payload: string
}

export interface FetchCreateArticle {
    type: typeof articleTypes.FETCH_CREATE_ARTICLE
    payload: Article
}

export interface SetCreateArticle {
    type: typeof articleTypes.SET_CREATE_ARTICLE
    payload: IArticle
}

export interface FetchArticleById {
    type: typeof articleTypes.FETCH_ARTICLE_BY_ID
    payload: string
}

export interface SetArticleById {
    type: typeof articleTypes.SET_ARTICLE_BY_ID
    payload: IArticle
}

export interface FetchEditArticleById {
    type: typeof articleTypes.FETCH_EDIT_ARTICLE_BY_ID
    payload: IArticle
}

export interface SetEditArticleById {
    type: typeof articleTypes.SET_EDIT_ARTICLE_BY_ID
    payload: IArticle
}

export type AricleActions =
    | dropArticles
    | SetSourceList
    | FethSourceList
    | SetArticleById
    | SetArticlesList
    | SetCategoryList
    | FethCategoryList
    | FetchArticleById
    | SetCreateArticle
    | FetchArticlesList
    | FetchCreateArticle
    | SetEditArticleById
    | FetchEditArticleById
    | SetDeleteArticleById
    | FetchDeleteArticleyId
