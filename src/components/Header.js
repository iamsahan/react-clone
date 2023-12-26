import React from "react"
import logo from "../images/react-logo-1.png"
import "./header.css"

function Header() {
    return(
        <nav>
            <img src={logo} className="logo"></img>
            <h2 className="nav-info">ReactFacts</h2>
            <h3 className="nav-items">React-Course Project 1</h3>
        </nav>
    )
}

export default Header;