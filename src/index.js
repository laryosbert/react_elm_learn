import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import 'babel-polyfill'
import configureStore from './config/configureStore'
import registerServiceWorker from './registerServiceWorker'
import App from './App'
// import Routes from './routes/routes'

const store = configureStore()

ReactDOM.render(
    <Provider store={store}>
        {/* <Routes /> */}
        <App />
    </Provider>,
    document.getElementById('root'),
)

registerServiceWorker();
