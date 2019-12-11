import React from "react"
import { Switch, Route } from "react-router-dom"
import PropTypes from "prop-types"

import routes from "../../routes"

import useStyles from "./styles"

const View = ({ isLogged }) => {
  const { view } = useStyles()
  return (
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
  )
}

View.propTypes = {
  isLogged: PropTypes.bool.isRequired
}

export default View
