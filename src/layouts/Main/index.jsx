import React from "react"
import routes from "../../routes"
import Header from "../../components/Header"

import { makeStyles } from "@material-ui/core/styles"

import { Switch, Route } from "react-router-dom"

const useStyles = makeStyles(() => ({
  mainLayout: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  view: {
    flex: 1
  }
}))

const Main = () => {
  const { mainLayout, view } = useStyles()

  return (
    <div className={mainLayout}>
      <Header></Header>
      <main className={view}>
        <Switch>
          {routes.map((route, index) => (
            <Route key={index} {...route}></Route>
          ))}
        </Switch>
      </main>
    </div>
  )
}

export default Main
