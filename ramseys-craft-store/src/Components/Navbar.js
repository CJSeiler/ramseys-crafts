import React from "react"
import hamburger from "../icons/hamburger.png"

export default function Navbar(props) {
    return (
        <div className="App-header-nav">
                <p>logo</p>
                <img className="heading-hamburger" 
                    src={hamburger} 
                    alt="menu icon" 
                    onClick={props.handleClick}
                />
            </div>
    )
}