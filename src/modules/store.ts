import { applyMiddleware, legacy_createStore as createStore } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import promise from "redux-promise"
import logger from 'redux-logger'
import thunk from "redux-thunk"

import { createRootReducer } from './reducer'

export const history = require('history').createBrowserHistory()

export function initStore() {
    const rootReducer = createRootReducer(history)
    const middleware = applyMiddleware(
        routerMiddleware(history),
        logger,
        thunk,
        promise
    )

    return createStore(rootReducer, middleware)
}
