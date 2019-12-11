import { combineReducers } from "redux"
import userReducer from "./user"
import jogsReducer from "./jogs"
import loadingReducer from "./loading"
import filterReducer from "./filters"

const mainReducer = combineReducers({
  user: userReducer,
  jogs: jogsReducer,
  isLoading: loadingReducer,
  filters: filterReducer
})

export default mainReducer
