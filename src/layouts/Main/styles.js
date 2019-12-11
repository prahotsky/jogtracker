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

export default useStyles
