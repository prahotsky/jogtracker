import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(({ colors }) => ({
  spinner: {
    position: "absolute",
    top: "300px",
    margin: "auto",
    left: 0,
    right: 0,
    textAlign: "center"
  },
  view: {
    flex: 1,
    height: "100%"
  },
  invisible: {
    display: "none"
  }
}))

export default useStyles
