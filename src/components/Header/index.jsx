import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"

import { setStart, setEnd } from "../../store/actions/filters"
import { JOGS_PATH } from "../../constants/links"

import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import IconButton from "@material-ui/core/IconButton"
import Drawer from "@material-ui/core/Drawer"
import MenuIcon from "@material-ui/icons/Menu"

import useStyles from "./styles"
import logo from "../../images/logo.png"
import filter from "../../images/filter.png"
import filterActive from "../../images/filterActive.png"

import DesktopMenu from "../DesktopMenu"
import MobileMenu from "../MobileMenu"
import FilterBar from "../FilterBar"

const Header = ({ isLogged, setStart, setEnd, location }) => {
  const [filterMenuOpen, setFilterMenu] = useState(false)
  const [drawer, setDrawer] = useState(false)

  const [startDate, setStartDate] = useState(null)
  const [endDate, setEndDate] = useState(null)

  const isJogList = location.pathname === JOGS_PATH

  useEffect(() => {
    setStart(startDate)
  }, [startDate, setStart])

  useEffect(() => {
    setEnd(endDate)
  }, [endDate, setEnd])

  useEffect(() => {
    setStartDate(null)
    setEndDate(null)
  }, [filterMenuOpen])

  const {
    header,
    toolbar,
    logoImage,
    menuButton,
    desktopMenu,
    filterImage,
    filterImageActive,
    navContainer
  } = useStyles()

  return (
    <>
      <AppBar className={header} position="static">
        <Toolbar className={toolbar}>
          <img src={logo} alt="logo" className={logoImage} />
          <div className={navContainer}>
            {isLogged && <DesktopMenu className={desktopMenu}></DesktopMenu>}
            {isLogged && isJogList && (
              <IconButton
                onClick={() => setFilterMenu(!filterMenuOpen)}
                className={filterMenuOpen ? filterImageActive : filterImage}
              >
                <img
                  src={filterMenuOpen ? filterActive : filter}
                  alt="filter"
                />
              </IconButton>
            )}
            {isLogged && (
              <IconButton
                onClick={() => setDrawer(true)}
                edge="end"
                className={menuButton}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
            )}
          </div>
        </Toolbar>
        <Drawer anchor="right" open={drawer} onClose={() => setDrawer(false)}>
          <MobileMenu setDrawer={setDrawer}></MobileMenu>
        </Drawer>
      </AppBar>
      {isJogList && filterMenuOpen && (
        <FilterBar
          startDate={startDate}
          setStartDate={setStartDate}
          endDate={endDate}
          setEndDate={setEndDate}
        ></FilterBar>
      )}
    </>
  )
}

Header.propTypes = {
  isLogged: PropTypes.bool.isRequired
}

export default connect(null, { setStart, setEnd })(withRouter(Header))
