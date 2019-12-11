import React from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"

import Header from "../../components/Header"
import View from "../../containers/View"
import useStyles from "./styles"

const Main = ({ isLogged }) => {
  const { mainLayout } = useStyles()
  return (
    <div className={mainLayout}>
      <Header isLogged={isLogged}></Header>
      <View isLogged={isLogged}></View>
    </div>
  )
}

Main.propTypes = {
  isLogged: PropTypes.bool
}

export default connect(
  ({ user, isLoading }) => ({
    isLogged: user.isLogged,
    isLoading: isLoading
  }),
  {}
)(Main)
