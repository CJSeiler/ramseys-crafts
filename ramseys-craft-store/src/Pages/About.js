import React from "react"
import craft from "../images/craft.jpg"
export default function About() {
    return (
        <section className="about-container flex-column">
            <h3 className="about-subheading">About</h3>
            <img className="about-image"src={craft} alt="yarn layed out on a desk" />
            <p className="about-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
            culpa qui officia deserunt mollit anim id est laborum.</p>
        </section>
    )
}