import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(({ fonts, colors }) => ({
  inputContainer: {
    display: "flex",
    flexDirection: "column"
  },
  input: {
    height: "31px",
    background: "white",
    marginTop: "6px"
  }
}))

export default useStyles
