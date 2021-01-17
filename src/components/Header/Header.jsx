import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = (props) => {
    return (
        <header>
            <NavLink to="/">smartWATCH</NavLink>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/register">Register</NavLink>
            <NavLink to="/logout">Logout</NavLink>
        </header>
    )
}

export default Header