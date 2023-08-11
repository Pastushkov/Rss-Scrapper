import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './modules/app/App'
import reportWebVitals from './utils/reportWebVitals'
import store from './redux/store'

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root'),
)

reportWebVitals()
