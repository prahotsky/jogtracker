import React from "react"
import PropTypes from "prop-types"

import { DatePicker } from "@material-ui/pickers"

import useStyles from "./styles"

const CustomDatePicker = ({ label, className, ...props }) => {
  const { inputContainer, datepicker } = useStyles()
  return (
    <div className={`${inputContainer} ${className}`}>
      <label>{label}</label>
      <DatePicker
        {...props}
        inputVariant="outlined"
        className={datepicker}
        format="dd.MM.yyyy"
      />
    </div>
  )
}

CustomDatePicker.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
  value: PropTypes.instanceOf(Date),
  onChange: PropTypes.func
}

export default CustomDatePicker
