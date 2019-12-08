import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
  pageContainer: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    alignItems: "center",
    justifyContent: "center"
  },
  bearImage: {
    width: "43%",
    maxWidth: "300px"
  },
  button: {
    textDecoration: "none",
    marginTop: "100px",
    "-webkit-tap-highlight-color": "transparent"
  }
}))

export default useStyles
