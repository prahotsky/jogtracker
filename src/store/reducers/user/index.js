import { LOGIN_USER_ERROR, LOGIN_USER_SUCCESS } from "../../constants/auth"
const initialState = {
  isLogged: false,
  token: ""
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        isLogged: true,
        token: payload.data.response.access_token
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
