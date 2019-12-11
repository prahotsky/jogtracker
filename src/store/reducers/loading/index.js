import { START_LOADING, STOP_LOADING } from "../../constants/loading"
const initialState = 0

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case START_LOADING:
      return state + 1
    case STOP_LOADING:
      return state - 1
    default:
      return state
  }
}
