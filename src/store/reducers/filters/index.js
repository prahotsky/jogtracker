import { SET_START_DATE, SET_END_DATE } from "../../constants/filters"

const initialState = {}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_START_DATE:
      return { ...state, startDate: payload }
    case SET_END_DATE:
      return { ...state, endDate: payload }
    // case FILTER_JOGS:
    //   return state.filter((jog) => {
    //     console.log(
    //       "state",
    //       parse(jog.date, "dd.MM.yyyy", new Date()).getTime()
    //     )
    //     console.log("payload", payload.startDate.getTime())
    //     return (
    //       parse(jog.date, "dd.MM.yyyy", new Date()).getTime() >=
    //       payload.startDate.getTime()
    //     )
    //   })
    default:
      return state
  }
}
