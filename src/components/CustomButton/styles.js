import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
  button: {
    minWidth: "150px",
    height: "60px",
    borderRadius: "36px",
    background: "white",
    fontSize: theme.fonts.medium,
    fontWeight: "bold",
    color: theme.colors.babyPurple,
    border: `3px solid ${theme.colors.babyPurple}`,
    "&:hover": {
      background: "unset"
    }
  }
}))

export default useStyles
