import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = (props) => {
    return (
        <header className="navbar navbar-expand-lg navbar-dark bg-primary">
            <NavLink className="navbar-brand logo" to="/">smartWATCH</NavLink>
            <div className="collapse navbar-collapse w-100" id="navbarColor01">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/">Home</NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink className="nav-link" to="/services">Services</NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink className="nav-link" to="/login">Login</NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink className="nav-link" to="/register">Register</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/logout">Logout</NavLink>
                    </li>
                    <li className="nav-item">
                        Test Li
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header