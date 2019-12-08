import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(({ colors, fonts }) => ({
  pageContainer: {
    height: "100%",
    overflow: "hidden",
    padding: "0 25px",
    margin: "0 auto",
    maxWidth: "614px"
  },
  title: {
    color: colors.appleGreen,
    fontSize: fonts.huge,
    marginTop: "24px",
    marginBottom: "6px"
  },
  text: {
    marginTop: 0,
    fontSize: fonts.small,
    lineHeight: "24px",
    color: colors.warmGrey
  }
}))

export default useStyles
