import { lazy } from 'react'
import { PATH_ALL } from '../config/path'

export const ArticleRoutes = [
    {
        id: 1,
        module: 'ArticleRoutes',
        protected: false,
        exact: true,
        path: PATH_ALL.articles,
        component: lazy(() => import('modules/articles/Articles')),
    }
]