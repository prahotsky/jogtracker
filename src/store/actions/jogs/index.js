import { GET_JOGS, ADD_JOG, CLEAR_JOGS } from "../../constants/jogs"

export const getJogs = () => async (dispatch) => {
  dispatch({
    type: GET_JOGS,
    payload: {
      method: "get",
      path: "/data/sync"
    }
  })
}

export const addJog = (jog) => async (dispatch) => {
  dispatch({
    type: CLEAR_JOGS
  })
  dispatch({
    type: ADD_JOG,
    payload: {
      method: "post",
      data: jog,
      path: "/data/jog"
    }
  })
}
