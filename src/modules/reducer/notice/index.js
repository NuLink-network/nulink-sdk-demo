import * as types from "store/action-types"

let initState = {
  noticeData: null
}

const account = (state = initState, action) => {
  switch (action.type) {
    case types.UPDATE_NOTICE_LIST:
      return {
        ...state,
        noticeData: action.payload
      }
    default:
      return state
  }
}

export default account
