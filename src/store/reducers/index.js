import { combineReducers } from "redux"
import userReducer from "./user"
import jogsReducer from "./jogs"

const mainReducer = combineReducers({
  user: userReducer,
  jogs: jogsReducer
})

export default mainReducer
