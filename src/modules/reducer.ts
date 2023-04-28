import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import { History } from 'history'
import { accountReducer as account } from './account/reducer'
import { routerStateReducer as routerState} from './connect/reducer'

export const createRootReducer = (history: History) =>
    combineReducers({
        account,
        routerState,
        router: connectRouter(history)
    })

export type RootState = ReturnType<ReturnType<typeof createRootReducer>>
