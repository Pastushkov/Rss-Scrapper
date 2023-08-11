import { Request } from "express"

export interface IRssRawQuery {
    category?: string
    search?: string
    source?: string
    sortBy?:'asc' |'desc'
}

export interface IRssQuery {
    [key: string]: any
}

export interface IAuthRequest extends Request {
    user?: any
}