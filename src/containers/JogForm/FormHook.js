import { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { JOGS_PATH } from "../../constants/links"

const useJogForm = (initialState, callback) => {
  const history = useHistory()

  const [inputs, setInputs] = useState({ date: new Date() })

  useEffect(() => {
    if (Object.keys(initialState).length) {
      setInputs(initialState)
    }
  }, [initialState])

  const handleSubmit = (event) => {
    if (event) {
      event.preventDefault()
      callback(inputs)
      history.push(JOGS_PATH)
    }
  }
  const handleInputChange = (event) => {
    if (event instanceof Date) {
      setInputs((inputs) => ({
        ...inputs,
        date: event
      }))
    } else {
      event.persist()
      setInputs((inputs) => ({
        ...inputs,
        [event.target.name]: event.target.value
      }))
    }
  }
  return {
    handleSubmit,
    handleInputChange,
    inputs
  }
}

export default useJogForm
