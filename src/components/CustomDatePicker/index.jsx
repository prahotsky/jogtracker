import React from "react"
import { DatePicker } from "@material-ui/pickers"
import useStyles from "./styles"

const CustomDatePicker = ({ label, className }) => {
  const { inputContainer, datepicker } = useStyles()

  return (
    <div className={`${inputContainer} ${className}`}>
      <label>{label}</label>
      <DatePicker
        inputVariant="outlined"
        className={datepicker}
        format="MM/dd/yyyy"
        value={new Date()}
        onChange={() => {}}
      />
    </div>
  )
}

export default CustomDatePicker
