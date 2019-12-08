import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(({ colors, fonts }) => ({
  link: {
    color: "white",
    textDecoration: "none",
    fontWeight: "bold",
    marginRight: "14px"
  },
  activeLink: {
    textDecoration: "underline"
  }
}))

export default useStyles
