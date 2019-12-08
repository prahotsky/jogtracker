import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(({ fonts, colors }) => ({
  inputContainer: {
    display: "flex",
    flexDirection: "column"
  },
  datepicker: {
    height: "31px",
    background: "white",
    marginTop: "6px",
    borderRadius: "6px",
    "&>div": {
      height: "31px"
    }
  }
}))

export default useStyles
