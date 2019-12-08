import StartPage from "../components/StartPage"
import Info from "../components/Info"
import JogsList from "../containers/JogsList"
import JogForm from "../containers/JogForm"
import { ROOT_PATH, INFO_PATH, JOGS_PATH, TRACK_PATH } from "../constants/links"

const routes = [
  { path: ROOT_PATH, component: StartPage, exact: true },
  { path: INFO_PATH, component: Info },
  { path: JOGS_PATH, component: JogsList },
  { path: TRACK_PATH, component: JogForm }
]

export default routes
