import { GET_JOGS, ADD_JOG, CLEAR_JOGS, UPDATE_JOG } from "../../constants/jogs"

export const getJogs = () => (dispatch) => {
  dispatch({
    type: GET_JOGS,
    payload: {
      method: "get",
      path: "/data/sync"
    }
  })
}

export const addJog = (jog) => (dispatch) => {
  dispatch({
    type: ADD_JOG,
    payload: {
      method: "post",
      data: jog,
      path: "/data/jog"
    }
  })
  dispatch({
    type: CLEAR_JOGS
  })
}

export const updateJog = (jog) => (dispatch) => {
  jog = { ...jog, jog_id: jog.id }
  delete jog["id"]
  dispatch({
    type: UPDATE_JOG,
    payload: {
      method: "put",
      data: jog,
      path: "/data/jog"
    }
  })
  // dispatch({
  //   type: CLEAR_JOGS
  // })
}
