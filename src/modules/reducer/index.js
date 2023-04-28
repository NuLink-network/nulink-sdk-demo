/*
 * reducer
 */
import { combineReducers } from "redux"
import account from "./account"
import staking from "./staking"
import notice from "./notice"
import node from "./node"

let reducer = combineReducers({ account, staking, notice, node })

export default reducer
