import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
  header: {
    boxShadow: "unset",
    background: theme.colors.appleGreen,
    height: "77pt"
  },
  toolbar: {
    display: "flex",
    height: "100%",
    alignItems: "center",
    justifyContent: "space-between"
  },
  menuButton: {
    "& svg": {
      fontSize: 40
    }
  },
  logoImage: {
    width: "97pt"
  }
}))

export default useStyles
