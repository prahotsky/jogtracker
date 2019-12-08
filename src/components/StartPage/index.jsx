import React from "react"
import bearFace from "../../images/bearFace.png"
import useStyles from "./styles"
import CustomButton from "../CustomButton"
import { JOGS_PATH } from "../../constants/links"
import { Link } from "react-router-dom"

const StartPage = () => {
  const { pageContainer, bearImage, button } = useStyles()
  return (
    <div className={pageContainer}>
      <img className={bearImage} src={bearFace} alt="bear face"></img>
      <Link className={button} to={JOGS_PATH}>
        <CustomButton>Let me in</CustomButton>
      </Link>
    </div>
  )
}

export default StartPage
