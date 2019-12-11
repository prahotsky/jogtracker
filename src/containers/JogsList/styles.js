import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(({ fonts, colors, ...theme }) => ({
  addJogIconButton: {
    position: "fixed",
    bottom: "10px",
    right: "10px",
    color: colors.appleGreen,
    "-webkit-tap-highlight-color": "transparent"
  },
  addJogIcon: {
    fontSize: "57px"
  }
}))

export default useStyles
