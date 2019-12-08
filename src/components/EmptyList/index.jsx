import React from "react"
import sadEmoticon from "../../images/sadEmoticon.png"
import useStyles from "./styles"
import CustomButton from "../CustomButton"
import { TRACK_PATH } from "../../constants/links"
import { Link } from "react-router-dom"

const StartPage = () => {
  const { pageContainer, sadImage, button, emptyText } = useStyles()
  return (
    <div className={pageContainer}>
      <img className={sadImage} src={sadEmoticon} alt="sad emoticon"></img>
      <p className={emptyText}>Nothing is there</p>
      <Link className={button} to={TRACK_PATH}>
        <CustomButton>Create your jog first</CustomButton>
      </Link>
    </div>
  )
}

export default StartPage
