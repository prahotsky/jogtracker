import { LOGIN_USER } from "../../constants/auth"

export const authenticateUser = () => async (dispatch) => {
  // const response = await axios.post(`${BASE_URL}/uuidLogin`, {
  //   uuid: "hello"
  // })

  dispatch({
    type: LOGIN_USER,
    payload: {
      method: "post",
      path: `/auth/uuidLogin`,
      data: {
        uuid: "hello"
      }
    }
  })
}
