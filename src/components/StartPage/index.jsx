import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"

import CustomButton from "../CustomButton"
import { authenticateUser } from "../../store/actions/auth"

import bearFace from "../../images/bearFace.png"
import useStyles from "./styles"

const StartPage = ({ authenticateUser }) => {
  const { pageContainer, bearImage, button } = useStyles()
  return (
    <div className={pageContainer}>
      <img className={bearImage} src={bearFace} alt="bear face"></img>

      <CustomButton className={button} onClick={authenticateUser}>
        Let me in
      </CustomButton>
    </div>
  )
}

StartPage.propTypes = {
  authenticateUser: PropTypes.func.isRequired
}

export default connect(null, {
  authenticateUser
})(StartPage)
