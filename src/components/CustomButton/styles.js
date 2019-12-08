import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(({ colors, fonts }) => ({
  button: {
    minWidth: "150px",
    height: "60px",
    borderRadius: "36px",
    background: "white",
    fontSize: fonts.medium,
    fontWeight: "bold",
    color: colors.babyPurple,
    border: `3px solid ${colors.babyPurple}`,
    "&:hover": {
      background: "unset"
    }
  }
}))

export default useStyles
