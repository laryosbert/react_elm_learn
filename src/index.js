import React from 'react'
import ReactDOM from 'react-dom'
import 'babel-polyfill'
import { Provider } from 'react-redux'
import configureStore from './config/configureStore'
import Routes from './config/routes'
import registerServiceWorker from './registerServiceWorker'

const store = configureStore()

// ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(
    <Provider store={store}>
        <Routes />
    </Provider>,
    document.getElementById('root'),
)

registerServiceWorker();
