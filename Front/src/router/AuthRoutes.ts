import { lazy } from 'react'
import { PATH_ALL } from '../config/path'
import { RedirectPage } from './Redirect.rout'

export const AuthRoutes = [
    {
        id: 1,
        module: 'AuthRoutes',
        protected: false,
        exact: true,
        path: PATH_ALL.root,
        component: RedirectPage,
    },
    {
        id: 2,
        module: 'AuthRoutes',
        protected: false,
        exact: true,
        path: PATH_ALL.sign_in,
        component: lazy(() => import('modules/auth/SignIn')),
    },
    {
        id: 3,
        module: 'AuthRoutes',
        protected: false,
        exact: true,
        path: PATH_ALL.register,
        component: lazy(() => import('modules/auth/Register')),
    },
]