import { createMuiTheme } from "@material-ui/core/styles"

const theme = createMuiTheme({
  colors: {
    warmGrey: "#979797",
    whiteTwo: "#eaeaea",
    babyPurple: "#e990f9",
    appleGreen: "#7ed321",
    white: "#d7d7d7",
    greyish: "#b0abab"
  },
  fonts: {
    huge: "25px",
    big: "18px",
    medium: "16px",
    regular: "14px",
    small: "12px"
  },
  palette: {
    primary: {
      main: "#7ed321",
      contrastText: "#fff",
      light: "#ffff00"
    },
    secondary: {
      light: "#b0abab",
      main: "#979797"
    }
  }
})

export default theme
