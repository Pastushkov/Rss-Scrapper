import React from 'react'
import AnonRoute from './AnonRoute'
import PrivateRoute from './PrivateRoute'

interface IRoute {
    path: string
    protected: boolean
    exact: boolean
    component: React.ComponentType
    module: string
    id: number
}

export interface IRoutes extends IRoute {
    routes?: Array<IRoute>
}

export const RouterRender = ({
    protected: privateRoute,
    module,
    id,
    ...rest
}: IRoutes): React.ReactElement => {
    const AppRoute = !privateRoute ? AnonRoute : PrivateRoute

    return <AppRoute key={module + id} {...rest} />
}

RouterRender.defaultProps = {
    routes: [],
}
