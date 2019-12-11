import {
  GET_JOGS_SUCCESS,
  GET_JOGS_ERROR,
  ADD_JOG_SUCCESS,
  CLEAR_JOGS
} from "../../constants/jogs"
import format from "date-fns/format"
const initialState = []

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_JOGS_SUCCESS:
      return payload.data.response.jogs
        .sort((a, b) => b.id - a.id)
        .slice(0, 30)
        .filter((jog) => jog.user_id === "3")
        .map((jog) => ({
          ...jog,
          date: format(jog.date * 1000, "dd.MM.yyyy")
        }))
    case GET_JOGS_ERROR:
      return {
        ...state,
        loginError: payload
      }
    case ADD_JOG_SUCCESS:
      return state
    case CLEAR_JOGS:
      return []
    default:
      return state
  }
}
