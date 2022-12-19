import React, { useState } from "react"
import { Link } from "react-router-dom"
import Menu from "./Menu"
import hamburger from "../icons/hamburger.png"
import closeIcon from "../icons/close-menu.png"

export default function Navbar() {
    const [showMenu, setShowMenu] = useState(false)
    const currentPath = window.location.pathname
    console.log(currentPath);

     
    // each link has an onclick function that sets state for current tab
    
    return (
        <nav>
            <Menu show={showMenu} />
            <Link to="/"><p className="nav-logo">logo</p></Link>
            
            <ul className="nav-links-container">
                <Link 
                    to="/" 
                >
                    <li className={`nav-link ${currentPath === "/" ? "active" : ""}`}>Home</li>
                </Link>

                <Link 
                    to="/about"  
                >
                    <li className={`nav-link ${currentPath === "/about" ? "active" : ""}`}>About</li>
                </Link>

                <Link 
                    to="/products"  
                >
                    <li className={`nav-link ${currentPath.includes("/products") ? "active" : ""}`}>Products</li>
                </Link>

                <Link 
                    to="/contact"  
                >
                    <li className={`nav-link ${currentPath === "/contact" ? "active" : ""}`}>Contact</li>
                </Link>

                <Link 
                    to="/cart" 
                >
                    <li className={`nav-link ${currentPath === "/cart" ? "active" : ""}`}>Cart</li>
                </Link>
            </ul>

            <img className="nav-button" 
                src={showMenu ? closeIcon : hamburger}
                alt="menu icon"
                onClick={()=> {
                    setShowMenu(prevShowMenu => !prevShowMenu)
                }}
            />
        </nav>
    )
}