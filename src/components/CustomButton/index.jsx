import React from "react"
import Button from "@material-ui/core/Button"
import useStyles from "./styles"

const CustomButton = ({ children, className, ...props }) => {
  const { button } = useStyles()
  return (
    <Button variant="outlined" classes={{ root: `${button} ${className}` }}>
      {children}
    </Button>
  )
}

export default CustomButton
