import * as types from "store/action-types"

let initState = {
  userInfo: null,
  poolInfo: null,
  userPendingReward: null
}

const staking = (state = initState, action) => {
  switch (action.type) {
    case types.FETCH_STAKE_USERINFO:
      return {
        ...state,
        userInfo: action.payload
      }
    case types.FETCH_STAKE_POOLINFO:
      return {
        ...state,
        poolInfo: action.payload
      }
    case types.FETCH_USER_PENDING_REWARD:
      return {
        ...state,
        userPendingReward: action.payload
      }
    default:
      return state
  }
}

export default staking
