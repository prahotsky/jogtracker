import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(({ fonts, colors, ...theme }) => ({
  pageContainer: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    alignItems: "center"
    // justifyContent: "center"
  },
  formContainer: {
    position: "relative",
    marginTop: "85px",
    height: "380px",
    minWidth: "310px",
    maxWidth: "503px",
    width: "80%",
    background: colors.appleGreen,
    borderRadius: "29px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  jogForm: {
    marginTop: "65px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "75%",
    maxWidth: "325px"
  },
  closeIcon: {
    position: "absolute",
    top: "15px",
    right: "15px",
    color: "white",
    fontSize: "35px"
  },
  formInput: {
    margin: "20px 0 0 0"
  },
  saveButton: {
    width: "237px",
    height: "42px",
    margin: "41px 0 0 0",
    background: "unset",
    border: "2px solid white",
    color: "white",
    fontSize: "15px"
  }
}))

export default useStyles
