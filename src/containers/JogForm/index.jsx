import React from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"

import CloseIcon from "@material-ui/icons/Close"

import { addJog } from "../../store/actions/jogs"
import useJogForm from "./FormHook"
import { JOGS_PATH } from "../../constants/links"

import CustomButton from "../../components/CustomButton"
import NumberInput from "../../components/NumberInput"
import CustomDatePicker from "../../components/CustomDatePicker"
import useStyles from "./styles"

const JogForm = ({ addJog }) => {
  const {
    pageContainer,
    jogForm,
    formContainer,
    closeIcon,
    formInput,
    saveButton
  } = useStyles()

  const { inputs, handleInputChange, handleSubmit } = useJogForm(addJog)

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
  addJog: PropTypes.func.isRequired
}

export default connect(null, { addJog })(JogForm)
