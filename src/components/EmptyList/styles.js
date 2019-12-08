import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(({ fonts, colors }) => ({
  pageContainer: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    alignItems: "center",
    justifyContent: "center"
  },
  sadImage: {
    width: "23%",
    maxWidth: "150px",
    margin: "20px 0 0 0"
  },
  button: {
    marginTop: "145px",
    textDecoration: "none",
    "-webkit-tap-highlight-color": "transparent"
  },
  emptyText: {
    fontSize: fonts.huge,
    color: colors.warmGrey,
    margin: "30px 0 0 0"
  }
}))

export default useStyles
