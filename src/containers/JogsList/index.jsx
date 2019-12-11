import React, { useEffect, useState } from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"

import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined"
import IconButton from "@material-ui/core/IconButton"

import { filterByDate } from "../../utils"
import { getJogs } from "../../store/actions/jogs"
import { TRACK_PATH } from "../../constants/links"
import withSpinner from "../WithSpinner"

import Jog from "../../components/Jog"
import EmptyList from "../../components/EmptyList"
import useStyles from "./styles"

const JogsList = ({ getJogs, jogs, startDate, endDate }) => {
  const { addJogIcon, addJogIconButton } = useStyles()
  const [filteredJogs, setFilteredJogs] = useState([])

  useEffect(() => {
    if (jogs.length === 0) getJogs()
  }, [getJogs, jogs.length])

  useEffect(() => {
    if (startDate || endDate) {
      const filtered = filterByDate(jogs, startDate, endDate)
      setFilteredJogs(filtered)
    } else {
      setFilteredJogs(jogs)
    }
  }, [startDate, endDate, jogs])

  return (
    <>
      {filteredJogs.length ? (
        filteredJogs.map(({ date, distance, time, id }) => (
          <Jog key={id} date={date} distance={distance} time={time}></Jog>
        ))
      ) : (
        <EmptyList></EmptyList>
      )}
      {!!jogs.length && (
        <Link className={addJogIconButton} to={TRACK_PATH}>
          <IconButton color="inherit">
            <AddCircleOutlineOutlinedIcon
              className={addJogIcon}
            ></AddCircleOutlineOutlinedIcon>
          </IconButton>
        </Link>
      )}
    </>
  )
}

JogsList.propTypes = {
  jogs: PropTypes.array,
  getJogs: PropTypes.func.isRequired
}

export default connect(
  ({ jogs, isLoading, filters }) => ({
    jogs: jogs,
    isLoading: isLoading,
    startDate: filters.startDate,
    endDate: filters.endDate
  }),
  { getJogs }
)(withSpinner(JogsList, "jogs"))
