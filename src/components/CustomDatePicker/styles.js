import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(({ fonts, colors, ...theme }) => ({
  inputContainer: {
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up("sm")]: {
      flexDirection: "row",
      width: "100%",
      justifyContent: "space-between",
      alignItems: "center"
    }
  },
  datepicker: {
    height: "31px",
    background: "white",
    marginTop: "6px",
    borderRadius: "6px",
    "&>div": {
      height: "31px"
    },
    [theme.breakpoints.up("sm")]: {
      marginTop: "0"
    }
  }
}))

export default useStyles
