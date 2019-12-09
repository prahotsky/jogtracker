import React from "react"
import { BrowserRouter as Router } from "react-router-dom"
import { Provider } from "react-redux"
import store from "./store"
import { ThemeProvider } from "@material-ui/core/styles"
import { MuiPickersUtilsProvider } from "@material-ui/pickers"
import DateFnsUtils from "@date-io/date-fns"
import theme from "../src/theme"
import Main from "./layouts/Main"
import "./App.css"

function App() {
  return (
    <Provider store={store}>
      <Router>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <ThemeProvider theme={theme}>
            <Main></Main>
          </ThemeProvider>
        </MuiPickersUtilsProvider>
      </Router>
    </Provider>
  )
}

export default App
