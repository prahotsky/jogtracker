import React from "react"
import PropTypes from "prop-types"

import jogicon from "../../images/jogIcon.png"
import useStyles from "./styles"

const Jog = ({ date, distance, time }) => {
  const {
    jogContainer,
    jogIcon,
    jogInfoContainer,
    jogDate,
    jogInfo
  } = useStyles()

  return (
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
  )
}

Jog.propTypes = {
  date: PropTypes.string.isRequired,
  distance: PropTypes.number.isRequired,
  time: PropTypes.number.isRequired
}

export default Jog
