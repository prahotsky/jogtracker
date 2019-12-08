import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(({ colors, ...theme }) => ({
  header: {
    boxShadow: "unset",
    background: colors.appleGreen,
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
    },
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  },
  logoImage: {
    width: "97pt"
  },
  desktopMenu: {
    [theme.breakpoints.down("xs")]: {
      display: "none"
    }
  }
}))

export default useStyles
