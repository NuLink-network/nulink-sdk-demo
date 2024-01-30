import { Account } from "@nulink_network/nulink-sdk"
import {
    IBalanceData,
    FetchAccountInfoRequestAction,
    FetchAccountInfoSuccessAction,
    FetchAccountInfoFailureAction,
    FetchAccountBalanceAction,
    FETCH_ACCOUNT_REQUEST,
    FETCH_ACCOUNT_BALANCE_REQUEST
} from './actions'

export type AccountState = {
    data: Account | null,
    balanceData: IBalanceData | null
}

const INITIAL_STATE: AccountState = {
    data: null,
    balanceData: null
}

type AccountReducerAction =
    | FetchAccountInfoRequestAction
    | FetchAccountInfoSuccessAction
    | FetchAccountInfoFailureAction
    | FetchAccountBalanceAction

export function accountReducer(
    state: AccountState = INITIAL_STATE,
    action: AccountReducerAction
): AccountState {
    switch (action.type) {
        case FETCH_ACCOUNT_REQUEST: {
            return {
                ...state,
                data: action.payload.data
            }
        }
        case FETCH_ACCOUNT_BALANCE_REQUEST: {
            return {
                ...state,
                balanceData: action.payload.data
            }
        }
        default:
            return state
    }
}
