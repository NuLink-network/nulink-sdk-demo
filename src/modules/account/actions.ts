import { action } from 'typesafe-actions'
import { Account } from "@nulink_network/nulink-sdk";

export interface IBalanceData {
    balance: number | string
    nlkBalance: number | string
}

export const FETCH_ACCOUNT_REQUEST = '[Request] Fetch Account Info'
export const FETCH_Account_SUCCESS = '[Success] Fetch Account Info'
export const FETCH_Account_FAILURE = '[Failure] Fetch Account Info'
export const FETCH_ACCOUNT_BALANCE_REQUEST = '[Request] Fetch Account Balance'

export const fetchAccountInfoRequest = (defaultAccount: Account) => action(FETCH_ACCOUNT_REQUEST, { data: defaultAccount })
export const fetchAccountBalanceRequest = (balanceData: IBalanceData) => action(FETCH_ACCOUNT_BALANCE_REQUEST, { data: balanceData })

export const fetchAccountInfoSuccess = (
    timestamp: number
) =>
    action(FETCH_Account_SUCCESS, {
        timestamp
    })

export const fetchAccountInfoFailure = (
    error: string,
    timestamp: number
) => action(FETCH_Account_FAILURE, { error, timestamp })

export type FetchAccountInfoRequestAction = ReturnType<typeof fetchAccountInfoRequest>
export type FetchAccountInfoSuccessAction = ReturnType<typeof fetchAccountInfoSuccess>
export type FetchAccountInfoFailureAction = ReturnType<typeof fetchAccountInfoFailure>
export type FetchAccountBalanceAction = ReturnType<typeof fetchAccountBalanceRequest>