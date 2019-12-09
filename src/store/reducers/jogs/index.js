import { GET_JOGS, GET_JOGS_ERROR } from "../../constants/jogs"
const initialState = []

export default (state = initialState, { type, payload }) => {
  switch (type) {
    // case ADD_JOG:
    //   return {
    //     ...state,
    //     isLogged: true,
    //     token: payload.token
    //   }
    // case ADD_JOG_ERROR:
    //   return {
    //     ...state,
    //     loginError: payload
    //   }
    case GET_JOGS:
      return payload.jogs
    case GET_JOGS_ERROR:
      return payload
    default:
      return state
  }
}
