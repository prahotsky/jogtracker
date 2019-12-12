import React from "react"
import PropTypes from "prop-types"

import useStyles from "./styles"
import CustomDatePicker from "../CustomDatePicker"

const FilterBar = ({ startDate, setStartDate, endDate, setEndDate }) => {
  const { barContainer, datePickerContainer } = useStyles()

  return (
    <div className={barContainer}>
      <CustomDatePicker
        value={startDate}
        onChange={(e) => setStartDate(e)}
        className={datePickerContainer}
        label={"Date from"}
        maxDate={endDate}
        disableFuture
      ></CustomDatePicker>
      <CustomDatePicker
        value={endDate}
        onChange={setEndDate}
        className={datePickerContainer}
        label={"Date to"}
        minDate={startDate}
        disableFuture
      ></CustomDatePicker>
    </div>
  )
}

FilterBar.propTypes = {
  startDate: PropTypes.oneOfType([PropTypes.instanceOf(Date)]),
  endDate: PropTypes.oneOfType([PropTypes.instanceOf(Date)]),
  setStartDate: PropTypes.func.isRequired,
  setEndDate: PropTypes.func.isRequired
}

export default FilterBar
