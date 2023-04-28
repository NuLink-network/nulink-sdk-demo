import * as types from "store/action-types"

let initState = {
  userAddress: null,
  balance: null,
  nlkBalance: null,
  unreadTotal: null
}

const account = (state = initState, action) => {
  switch (action.type) {
    case types.SET_USER_ADDRESS:
      return {
        ...state,
        ...action.payload
      }
    case types.UPDATE_USER_BALANCE:
      return {
        ...state,
        balance: action.payload
      }
    case types.UPDATE_USER_NLK_BALANCE:
      return {
        ...state,
        nlkBalance: action.payload
      }
    case types.GET_UNREAD_TOTAL:
      return {
        ...state,
        unreadTotal: action.payload
      }
    default:
      return state
  }
}

export default account
