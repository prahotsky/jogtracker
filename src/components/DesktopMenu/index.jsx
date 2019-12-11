import React from "react"
import { NavLink } from "react-router-dom"
import PropTypes from "prop-types"

import { menuRoutes } from "../../routes/menuRoutes"

import useStyles from "./styles"

const DesktopMenu = ({ className }) => {
  const { link, activeLink } = useStyles()
  return (
    <div className={className}>
      {menuRoutes.map((route, index) => (
        <NavLink
          activeClassName={activeLink}
          className={link}
          key={index}
          to={route.path}
        >
          {route.name}
        </NavLink>
      ))}
    </div>
  )
}

DesktopMenu.propTypes = {
  className: PropTypes.string
}

export default DesktopMenu
