import React from "react"
import PropTypes from "prop-types"

import { TextField } from "@material-ui/core"

import useStyles from "./styles"

const NumberInput = ({ label, className, ...props }) => {
  const { inputContainer, input } = useStyles()
  return (
    <div className={`${inputContainer} ${className}`}>
      <label>{label}</label>
      <TextField
        {...props}
        className={input}
        variant="outlined"
        type="number"
        inputProps={{ min: "0" }}
      ></TextField>
    </div>
  )
}

NumberInput.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func
}

export default NumberInput
