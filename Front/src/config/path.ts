const path = (root: string, sublink: string) => `${root}${sublink}`
const ROOTS_ROOT = '/'

export const PATH_AUTH = {
    root: ROOTS_ROOT,
    sign_in: path(ROOTS_ROOT, 'sign_in'),

}

export const PATH_REGISTER = {
    register: path(ROOTS_ROOT, 'register'),
}

export const PATH_ARTICLE = {
    articles: path(ROOTS_ROOT, 'articles')
}


export const PATH_ALL = {
    ...PATH_AUTH,
    ...PATH_ARTICLE,
    ...PATH_REGISTER
}
