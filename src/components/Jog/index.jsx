import React from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"

import { UPDATE_JOG_PATH } from "../../constants/links"

import jogicon from "../../images/jogIcon.png"
import useStyles from "./styles"

const Jog = ({ date, distance, time, id }) => {
  const {
    jogLink,
    jogContainer,
    jogIcon,
    jogInfoContainer,
    jogDate,
    jogInfo
  } = useStyles()

  return (
    <Link className={jogLink} to={UPDATE_JOG_PATH + id}>
      <div className={jogContainer}>
        <img src={jogicon} className={jogIcon} alt="jog"></img>
        <div className={jogInfoContainer}>
          <p className={jogDate}>{date}</p>
          <dl className={jogInfo}>
            <dt>Speed:</dt>
            <dd>15</dd>
          </dl>
          <dl className={jogInfo}>
            <dt>Distance:</dt>
            <dd>{distance} km</dd>
          </dl>
          <dl className={jogInfo}>
            <dt>Time:</dt>
            <dd>{time} minutes</dd>
          </dl>
        </div>
      </div>
    </Link>
  )
}

Jog.propTypes = {
  date: PropTypes.string.isRequired,
  distance: PropTypes.number.isRequired,
  time: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired
}

export default Jog
