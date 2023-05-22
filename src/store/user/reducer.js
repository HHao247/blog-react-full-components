import { ACT_LOGIN } from "./actions"

const initState = {
  token: localStorage.getItem('ACCESS_TOKEN'),
}

function reducer(state = initState, action) {
  switch (action.type) {
    case ACT_LOGIN:
      localStorage.setItem('ACCESS_TOKEN', action.payload.token)
      return {
        ...state,
        token: action.payload.token
      }
    default:
      return state
  }
}

export default reducer