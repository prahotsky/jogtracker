import React from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import CustomButton from "../CustomButton"
import { authenticateUser } from "../../store/actions/auth"
import bearFace from "../../images/bearFace.png"
import useStyles from "./styles"

const StartPage = ({ authenticateUser }) => {
  const { pageContainer, bearImage, button } = useStyles()
  return (
    <div className={pageContainer}>
      <img className={bearImage} src={bearFace} alt="bear face"></img>
      <Link className={button} onClick={authenticateUser} to={"/"}>
        <CustomButton>Let me in</CustomButton>
      </Link>
    </div>
  )
}

export default connect(null, {
  authenticateUser
})(StartPage)
