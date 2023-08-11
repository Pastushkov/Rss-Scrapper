import { lazy } from 'react'
import { PATH_ALL } from '../config/path'

export const RegisterRoutes = [
    {
        id: 1,
        module: 'RegisterRoutes',
        protected: false,
        exact: true,
        path: PATH_ALL.register,
        component: lazy(() => import('modules/auth/Register')),
    },
]