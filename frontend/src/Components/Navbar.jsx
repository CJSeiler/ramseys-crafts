import React, { useState } from "react"
import { Link } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux';
import { logout } from "../Redux/Actions/UserActions"
import Menu from "./Menu"
import hamburger from "../icons/hamburger.png"

export default function Navbar() {
    const [showMenu, setShowMenu] = useState(false)
    const currentPath = window.location.pathname
    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin
    const dispatch = useDispatch()

    const logoutHandler = () => {
        dispatch(logout())
    }
 
    // each link has an onclick function that sets state for current tab
    
    return (
        <nav>
            <Menu show={showMenu} close={() => setShowMenu(false)} />
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

                { userInfo ? (
                    <Link 
                        onClick={logoutHandler} 
                        to="/login"
                    >
                        <li className={`nav-link ${currentPath === "/login" ? "active" : ""}`}>Logout</li>
                    </Link>
                ) : (
                    <Link 
                        to="/login" 
                    >
                        <li className={`nav-link ${currentPath === "/login" ? "active" : ""}`}>Login</li>
                    </Link>
                )}
            </ul>
            <button className="nav-button">
                <img 
                    src={hamburger}
                    alt="menu icon"
                    onClick={()=> {
                        if(showMenu === false) {
                            setShowMenu(true)
                        }
                    }}
                />
            </button>
        </nav>
    )
}