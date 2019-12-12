import { LOGIN_USER } from "../../constants/auth"

export const authenticateUser = () => (dispatch) => {
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
