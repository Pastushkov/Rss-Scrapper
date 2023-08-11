import { PATH_ALL } from 'config/path'
import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { getCookiesAccessToken } from 'utils/token'

interface IProtectedRoute {
    component: React.ComponentType<any>
}

const PrivateRoute = ({
    component: Component,
    ...rest
}: IProtectedRoute): React.ReactElement => {
    const currentUser = getCookiesAccessToken()
    return (
        <Route
            {...rest}
            render={props => {
                if (!currentUser) {
                    return (
                        <Redirect
                            to={{
                                pathname: PATH_ALL.sign_in,
                            }}
                        />
                    )
                }

                return <Component {...props} />
            }}
        />
    )
}

export default PrivateRoute
