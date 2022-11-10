import React, { useState, useRef } from "react"
import { Link } from "react-router-dom"
import Menu from "./Menu"
import hamburger from "../icons/hamburger.png"

export default function Navbar() {
    const [showMenu, setShowMenu] = useState(false)
    const paths = ["/", "/about", "/products", "/contact", "/cart" ]

    // alters string in paths array to get capitalized path name for nav bar link
    const getPathName = (path) => {
        const newString = path.slice(1)
        const capitalizedNewPath = newString.charAt(0).toUpperCase() + newString.slice(1)
        return capitalizedNewPath
    }

    const navLinkElements = paths.map(path => {
        return (
                <Link
                    key={path}
                    to={path}
                    className="nav-link"               >
                    {path === "/" ? "Home" : getPathName(path)}
                </Link>
        )
    })

    return (
        <nav>
            <Menu show={showMenu} />
            <p>logo</p>
            <div className="nav-links-container">
                {navLinkElements}
            </div>
            <img className="nav-hamburger" 
                src={hamburger} 
                alt="menu icon" 
                onClick={()=> setShowMenu(prevShowMenu => !prevShowMenu)}
            />
        </nav>
    )
}