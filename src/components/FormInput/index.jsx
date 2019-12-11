import React from "react"
import PropTypes from "prop-types"

import { OutlinedInput } from "@material-ui/core"
import useStyles from "./styles"

const FormInput = ({ label, className }) => {
  const { inputContainer, input } = useStyles()

  return (
    <div className={`${inputContainer} ${className}`}>
      <label>{label}</label>
      <OutlinedInput className={input}></OutlinedInput>
    </div>
  )
}

EmptyList.propTypes = {
  label: PropTypes.string.isRequired,
  className: PropTypes.string
}

export default FormInput
