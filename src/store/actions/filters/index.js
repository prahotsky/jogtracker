import { SET_START_DATE, SET_END_DATE } from "../../constants/filters"

export const setStart = (startDate) => async (dispatch) => {
  dispatch({
    type: SET_START_DATE,
    payload: startDate
  })
}
export const setEnd = (endDate) => async (dispatch) => {
  dispatch({
    type: SET_END_DATE,
    payload: endDate
  })
}
