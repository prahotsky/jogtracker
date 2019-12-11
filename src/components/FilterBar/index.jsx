import React from "react"
import PropTypes from "prop-types"

import useStyles from "./styles"
import CustomDatePicker from "../CustomDatePicker"

const FilterBar = ({
  filterMenuOpen,
  startDate,
  setStartDate,
  endDate,
  setEndDate
}) => {
  const { barContainer, datePickerContainer, invisible } = useStyles()

  return (
    <div className={filterMenuOpen ? barContainer : invisible}>
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
  filterMenuOpen: PropTypes.bool.isRequired
}

export default FilterBar
