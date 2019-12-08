import React from "react"
import { TextField } from "@material-ui/core"
import useStyles from "./styles"

const NumberInput = ({ label, className }) => {
  const { inputContainer, input } = useStyles()

  return (
    <div className={`${inputContainer} ${className}`}>
      <label>{label}</label>
      <TextField
        className={input}
        variant="outlined"
        type="number"
        min={0}
      ></TextField>
    </div>
  )
}

export default NumberInput
