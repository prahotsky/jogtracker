import React from "react"
import useStyles from "./styles"
import CloseIcon from "@material-ui/icons/Close"
import { Link } from "react-router-dom"
import { JOGS_PATH } from "../../constants/links"
import CustomButton from "../../components/CustomButton"
import FormInput from "../../components/FormInput"
import CustomDatePicker from "../../components/CustomDatePicker"

const JogForm = () => {
  const {
    pageContainer,
    jogForm,
    formContainer,
    closeIcon,
    formInput,
    saveButton
  } = useStyles()

  return (
    <div className={pageContainer}>
      <div className={formContainer}>
        <Link to={JOGS_PATH}>
          <CloseIcon className={closeIcon}></CloseIcon>
        </Link>
        <form className={jogForm}>
          <FormInput label="Distance"></FormInput>
          <FormInput className={formInput} label="Time"></FormInput>

          <CustomDatePicker
            className={formInput}
            label="Date"
          ></CustomDatePicker>
          <CustomButton className={saveButton}>Save</CustomButton>
        </form>
      </div>
    </div>
  )
}

export default JogForm
