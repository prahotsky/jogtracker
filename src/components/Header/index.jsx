import React from "react"

import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import useStyles from "./styles"

import logo from "../../images/logo.png"

const Header = () => {
  const { header, toolbar, logoImage, menuButton } = useStyles()

  return (
    <AppBar className={header} position="static">
      <Toolbar className={toolbar}>
        <img src={logo} alt="logo" className={logoImage} />
        <IconButton edge="end" className={menuButton} color="inherit">
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}

export default Header
