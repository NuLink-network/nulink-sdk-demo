import {
    FETCH_ROUTER_STATE, FetchRouterStateRequestAction
} from './actions'

type RouterReducerAction = FetchRouterStateRequestAction

export type RouterState = {
    data: string | null
}

const INITIAL_STATE: RouterState = {
    data: ''
}

export function routerStateReducer(
    state: RouterState = INITIAL_STATE,
    action: RouterReducerAction
): RouterState {
    switch (action.type) {
        case FETCH_ROUTER_STATE: {
            return {
                ...state,
                data: action.payload.data
            }
        }
        default:
            return state
    }
}
