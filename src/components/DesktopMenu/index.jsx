import React from "react"
import { NavLink } from "react-router-dom"
import useStyles from "./styles"
import { menuRoutes } from "../../constants/menuRoutes"

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

export default DesktopMenu
