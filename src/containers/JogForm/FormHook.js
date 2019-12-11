import { useState } from "react"
import { useHistory } from "react-router-dom"

const useJogForm = (callback) => {
  const history = useHistory()

  const [inputs, setInputs] = useState({ date: new Date() })
  const handleSubmit = (event) => {
    if (event) {
      event.preventDefault()
      callback(inputs)
      history.push("/jogs")
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
