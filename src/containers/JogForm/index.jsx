import React, { useEffect, useState } from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"
import parse from "date-fns/parse"

import CloseIcon from "@material-ui/icons/Close"

import { addJog, getJogs, updateJog } from "../../store/actions/jogs"
import useJogForm from "./FormHook"
import { JOGS_PATH } from "../../constants/links"
import withSpinner from "../WithSpinner"

import CustomButton from "../../components/CustomButton"
import NumberInput from "../../components/NumberInput"
import CustomDatePicker from "../../components/CustomDatePicker"
import useStyles from "./styles"

const JogForm = ({ addJog, match, instances, getJogs, updateJog }) => {
  const {
    pageContainer,
    jogForm,
    formContainer,
    closeIcon,
    formInput,
    saveButton
  } = useStyles()

  const [localInstance, setLocalInstance] = useState({})

  useEffect(() => {
    if (!instances.length) {
      getJogs()
    } else {
      let instance = instances.find((el) => el.id === parseInt(match.params.id))
      setLocalInstance(
        instance
          ? {
              ...instance,
              date: parse(instance.date, "dd.MM.yyyy", new Date())
            }
          : {}
      )
    }
  }, [instances, getJogs, match.params.id])

  const { inputs, handleInputChange, handleSubmit } = useJogForm(
    localInstance,
    match.params.id ? updateJog : addJog
  )

  return (
    <div className={pageContainer}>
      <div className={formContainer}>
        <Link to={JOGS_PATH}>
          <CloseIcon className={closeIcon}></CloseIcon>
        </Link>
        <form className={jogForm} onSubmit={handleSubmit}>
          <NumberInput
            name="distance"
            value={inputs.distance || ""}
            onChange={handleInputChange}
            label="Distance"
            required
          ></NumberInput>
          <NumberInput
            name="time"
            value={inputs.time || ""}
            onChange={handleInputChange}
            className={formInput}
            label="Time"
            required
          ></NumberInput>

          <CustomDatePicker
            name="date"
            value={inputs.date}
            onChange={handleInputChange}
            className={formInput}
            label="Date"
            disableFuture
          ></CustomDatePicker>
          <CustomButton type="submit" className={saveButton}>
            Save
          </CustomButton>
        </form>
      </div>
    </div>
  )
}

JogForm.propTypes = {
  addJog: PropTypes.func.isRequired,
  match: PropTypes.object,
  instances: PropTypes.array,
  getJogs: PropTypes.func,
  updateJog: PropTypes.func
}

export default connect(
  ({ jogs }) => ({
    instances: jogs.instances,
    isLoading: jogs.loading
  }),
  { addJog, getJogs, updateJog }
)(withSpinner(JogForm, "instances"))
