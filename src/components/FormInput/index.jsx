import React from "react"
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

export default FormInput
