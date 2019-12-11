import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(({ colors, fonts, ...theme }) => ({
  jogContainer: {
    display: "flex",
    height: "187px",
    width: "100%",
    maxWidth: "600px",
    borderBottom: `1px solid ${colors.warmGrey}`,
    justifyContent: "center",
    alignItems: "center",
    margin: "auto",
    [theme.breakpoints.up("sm")]: {
      borderBottom: "unset"
    }
  },
  jogIcon: {
    width: "87px",
    margin: "0 46px 0 0"
  },
  jogDate: {
    fontSize: fonts.regular,
    color: colors.warmGrey,
    margin: "0"
  },
  jogInfo: {
    margin: "9px 0 12px 0",
    display: "flex",
    "&>dd": {
      margin: "0 0 0 5px",
      fontSize: fonts.regular,
      color: colors.warmGrey
    },
    "&>dt": {
      fontSize: fonts.regular
    }
  },
  jogInfoContainer: {
    marginTop: "25px",
    minWidth: "150px"
  }
}))

export default useStyles
