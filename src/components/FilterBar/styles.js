import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(({ colors, fonts, ...theme }) => ({
  barContainer: {
    display: "flex",
    minHeight: "60px",
    background: colors.whiteTwo,
    justifyContent: "center",
    padding: "0 29px 0 29px"
  },
  datePickerContainer: {
    display: "flex",
    flexDirection: "row!important",
    alignItems: "center!important",
    justifyContent: "center!important",
    width: "45%",
    maxWidth: "200px",
    "&:nth-child(1)": {
      marginRight: "17px"
    },
    "&:nth-child(2)": {
      marginLeft: "17px"
    },
    "&>div": {
      minWidth: "72px",
      marginTop: "0!important"
    },
    "&>label": {
      whiteSpace: "nowrap",
      marginRight: "16px",
      fontSize: "13px",
      color: colors.warmGrey
    },
    "& input": {
      fontSize: "14px"
    }
  },
  invisible: {
    display: "none"
  }
}))

export default useStyles
