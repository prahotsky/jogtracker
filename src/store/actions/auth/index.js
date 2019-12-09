import axios from "axios"
import { BASE_URL, LOGIN_USER, LOGIN_USER_ERROR } from "../../constants/auth"

export const authenticateUser = () => async (dispatch) => {
  try {
    const response = await axios.post(`${BASE_URL}/uuidLogin`, {
      uuid: "hello"
    })
    dispatch({
      type: LOGIN_USER,
      payload: {
        token: response.data.response.access_token
      }
    })
  } catch (e) {
    dispatch({ type: LOGIN_USER_ERROR, payload: e.response.status })
  }
}
