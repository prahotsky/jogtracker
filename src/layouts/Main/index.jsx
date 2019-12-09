import React from "react"
import { connect } from "react-redux"
import { Switch, Route } from "react-router-dom"
import routes from "../../routes"
import Header from "../../components/Header"
import { makeStyles } from "@material-ui/core/styles"

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

const Main = ({ isLogged }) => {
  const { mainLayout, view } = useStyles()

  return (
    <div className={mainLayout}>
      <Header isLogged={isLogged}></Header>
      <main className={view}>
        {isLogged ? (
          <Switch>
            {routes
              .filter((route) => route.private === true)
              .map((route, index) => (
                <Route key={index} {...route}></Route>
              ))}
          </Switch>
        ) : (
          <>
            <Switch>
              {routes
                .filter((route) => route.private === false)
                .map((route, index) => (
                  <Route key={index} {...route}></Route>
                ))}
            </Switch>
          </>
        )}
      </main>
    </div>
  )
}

export default connect(
  ({ user }) => ({
    isLogged: user.isLogged
  }),
  {}
)(Main)
