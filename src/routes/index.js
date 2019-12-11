import React from "react"
import { Redirect } from "react-router-dom"

import StartPage from "../components/StartPage"
import Info from "../components/Info"
import JogsList from "../containers/JogsList"
import JogForm from "../containers/JogForm"
import {
  ROOT_PATH,
  INFO_PATH,
  JOGS_PATH,
  TRACK_PATH,
  INVALID_PATH,
  ABOUT_US_PATH
} from "../constants/links"

const routes = [
  { path: ROOT_PATH, component: StartPage, exact: true, private: false },
  { path: INFO_PATH, component: Info, private: true },
  { path: ABOUT_US_PATH, component: Info, private: true },
  { path: JOGS_PATH, component: JogsList, private: true },
  { path: TRACK_PATH, component: JogForm, private: true },
  {
    path: INVALID_PATH,
    render: () => <Redirect to={{ pathname: ROOT_PATH }} />,
    private: false
  },
  {
    path: INVALID_PATH,
    render: () => <Redirect to={{ pathname: JOGS_PATH }} />,
    private: true
  }
]

export default routes
