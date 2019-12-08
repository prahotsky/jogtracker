import React from "react"
import { BrowserRouter as Router } from "react-router-dom"
import { ThemeProvider } from "@material-ui/core/styles"
import { MuiPickersUtilsProvider } from "@material-ui/pickers"
import DateFnsUtils from "@date-io/date-fns"
import theme from "../src/theme"
import Main from "./layouts/Main"
import "./App.css"

function App() {
  return (
    <Router>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <ThemeProvider theme={theme}>
          <Main></Main>
        </ThemeProvider>
      </MuiPickersUtilsProvider>
    </Router>
  )
}

export default App
