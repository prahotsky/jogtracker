import React from "react"
import PropTypes from "prop-types"

import Button from "@material-ui/core/Button"
import useStyles from "./styles"

const CustomButton = ({ children, className, ...props }) => {
  const { button } = useStyles()
  return (
    <Button
      variant="outlined"
      classes={{ root: `${button} ${className}` }}
      {...props}
    >
      {children}
    </Button>
  )
}

CustomButton.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string.isRequired
}

export default CustomButton
