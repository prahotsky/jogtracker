import React, { useState } from "react"

import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import IconButton from "@material-ui/core/IconButton"
import Drawer from "@material-ui/core/Drawer"
import MenuIcon from "@material-ui/icons/Menu"
import useStyles from "./styles"

import logo from "../../images/logo.png"
import DesktopMenu from "../DesktopMenu"
import MobileMenu from "../MobileMenu"

const Header = ({ isLogged }) => {
  const { header, toolbar, logoImage, menuButton, desktopMenu } = useStyles()

  const [drawer, setDrawer] = useState(false)

  return (
    <AppBar className={header} position="static">
      <Toolbar className={toolbar}>
        <img src={logo} alt="logo" className={logoImage} />
        {isLogged && <DesktopMenu className={desktopMenu}></DesktopMenu>}
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
      </Toolbar>
      <Drawer
        transitionDuration={100}
        anchor="right"
        open={drawer}
        onClose={() => setDrawer(false)}
      >
        <MobileMenu setDrawer={setDrawer}></MobileMenu>
      </Drawer>
    </AppBar>
  )
}

export default Header
