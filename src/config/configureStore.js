
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import rootReducer from '../reducers'



const loggerMiddleware = createLogger()

export default function configureStore(initialState) {
    // console.log('initialState', initialState) 
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(            
            thunkMiddleware,
            loggerMiddleware,

        )
    )
} 