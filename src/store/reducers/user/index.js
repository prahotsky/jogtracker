import { LOGIN_USER, LOGIN_USER_ERROR } from "../../constants/auth"
const initialState = {
  isLogged: false,
  token: ""
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_USER:
      return {
        ...state,
        isLogged: true,
        token: payload.token
      }
    case LOGIN_USER_ERROR:
      return {
        ...state,
        loginError: payload
      }
    default:
      return state
  }
}
