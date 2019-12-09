import axios from "axios"
import store from "../../index"
import { BASE_URL, GET_JOGS, GET_JOGS_ERROR } from "../../constants/jogs"

export const getJogs = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/sync`, {
      headers: { Authorization: "Bearer " + store.getState().user.token }
    })
    dispatch({
      type: GET_JOGS,
      payload: {
        jogs: data.response.jogs
      }
    })
  } catch (e) {
    dispatch({ type: GET_JOGS_ERROR, payload: e.response.status })
  }
}
