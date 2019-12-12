import format from "date-fns/format"
import {
  GET_JOGS_SUCCESS,
  GET_JOGS_ERROR,
  CLEAR_JOGS,
  ADD_JOG_SUCCESS,
  UPDATE_JOG_SUCCESS
} from "../../constants/jogs"
import { START_LOADING, STOP_LOADING } from "../../constants/loading"
import { SET_START_DATE, SET_END_DATE } from "../../constants/filters"
import { updateJogInArray } from "../../../utils"

const initialState = {
  instances: [],
  loading: 0,
  filters: {}
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_JOGS_SUCCESS:
      return {
        ...state,
        instances: payload.data.response.jogs
          .sort((a, b) => b.id - a.id)
          .slice(0, 30)
          .filter((jog) => jog.user_id === "3")
          .map((jog) => ({
            ...jog,
            date: format(jog.date * 1000, "dd.MM.yyyy")
          }))
      }
    case GET_JOGS_ERROR:
      return {
        ...state,
        loginError: payload
      }
    case ADD_JOG_SUCCESS:
      return {
        ...state,
        instances: [
          {
            ...payload.data.response,
            date: format(new Date(payload.data.response.date), "dd.MM.yyyy")
          },
          ...state.instances
        ]
      }
    case UPDATE_JOG_SUCCESS:
      return {
        ...state,
        instances: updateJogInArray(state.instances, payload.data.response)
      }
    case CLEAR_JOGS:
      return { ...state, instances: [] }
    case START_LOADING:
      return { ...state, loading: state.loading + 1 }
    case STOP_LOADING:
      return { ...state, loading: state.loading - 1 }
    case SET_START_DATE:
      return { ...state, filters: { ...state.filters, startDate: payload } }
    case SET_END_DATE:
      return { ...state, filters: { ...state.filters, endDate: payload } }
    default:
      return state
  }
}
