import React, { FC } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import routes from 'router/index'
import NotFoundPage from 'modules/app/404/index'
import './App.scss'
import { Loader } from 'components/loader/Loader'
import CustomMessage from 'components/messages/CustomMessage'
import { RouterRender } from 'router/components/RouteRender'
import Sidebar from 'components/Sidebar/Sidebar'

const App: FC = () => (
    <div>
        <CustomMessage />
        <Router>
            <React.Suspense fallback={<Loader> {' ...'}</Loader>}>
                <Sidebar>
                    <Switch>
                        {routes.map(route => (
                            <RouterRender
                                {...route}
                                key={route.module + route.id}
                            />
                        ))}

                        <Route component={NotFoundPage} />
                    </Switch>
                </Sidebar>
            </React.Suspense>
        </Router>
    </div>
)

export default App
