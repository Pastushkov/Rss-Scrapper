import React from 'react'
import { Route } from 'react-router-dom'

interface IProtectedRoute {
    component: React.ComponentType<any>
}

const AnonRoute = ({
    component: Component,
    ...rest
}: IProtectedRoute): React.ReactElement => {
    return (
        <Route
            {...rest}
            render={props => {
                return <Component {...props} />
            }}
        />
    )
}

export default AnonRoute
