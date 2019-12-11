import React from "react"
import { NavLink } from "react-router-dom"
import PropTypes from "prop-types"

import { menuRoutes } from "../../routes/menuRoutes"

import CloseIcon from "@material-ui/icons/Close"
import IconButton from "@material-ui/core/IconButton"

import useStyles from "./styles"
import greenLogo from "../../images/greenLogo.png"

const MobileMenu = ({ setDrawer }) => {
  const {
    menuContainer,
    closeButton,
    closeIcon,
    logoImage,
    menuItemsContainer,
    activeLink
  } = useStyles()
  return (
    <div className={menuContainer}>
      <img src={greenLogo} alt="logo" className={logoImage} />
      <IconButton className={closeButton} onClick={() => setDrawer(false)}>
        <CloseIcon className={closeIcon}></CloseIcon>
      </IconButton>
      <nav className={menuItemsContainer}>
        {menuRoutes.map((route, index) => (
          <NavLink
            key={index}
            onClick={() => setDrawer(false)}
            to={route.path}
            activeClassName={activeLink}
          >
            {route.name}
          </NavLink>
        ))}
      </nav>
    </div>
  )
}

MobileMenu.propTypes = {
  setDrawer: PropTypes.func.isRequired
}

export default MobileMenu
