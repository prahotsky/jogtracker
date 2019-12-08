import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(({ colors, fonts }) => ({
  menuContainer: {
    width: "100vw",
    position: "relative"
  },
  closeButton: {
    position: "absolute",
    top: "20px",
    right: "10px",
    color: colors.greyish
  },
  closeIcon: {
    fontSize: "35px"
  },
  logoImage: {
    margin: "26px 0 0 16px",
    width: "97pt"
  },
  activeLink: {
    color: `${colors.appleGreen}!important`
  },
  menuItemsContainer: {
    marginTop: "85px",
    borderRadius: "29px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "&>a": {
      marginTop: "30px",
      color: colors.warmGrey,
      textDecoration: "none",
      fontSize: fonts.huge,
      "-webkit-tap-highlight-color": "transparent"
    }
  }
}))

export default useStyles
