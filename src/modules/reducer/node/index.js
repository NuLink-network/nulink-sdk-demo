import * as types from "store/action-types"

let initState = {
  nodeData: null,
  operatorAddress: null,
  nodeDetail: null
}

const account = (state = initState, action) => {
  switch (action.type) {
    case types.UPDATE_NODE_LIST:
      return {
        ...state,
        nodeData: action.payload
      }
    case types.GET_OPERATOR_FROM_STAKING_PROVIDER:
      return {
        ...state,
        operatorAddress: action.payload
      }
    case types.FETCH_STAKER_NODE_DETAIL:
      return {
        ...state,
        nodeDetail: action.payload
      }
    default:
      return state
  }
}

export default account
