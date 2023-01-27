import { Link } from "react-router-dom"
import closeIcon from "../icons/close-menu.png"
import "../Menu.css"
export default function Menu(props) {
    const closeMenuBtn = props.show 
        ? <img
            className="close-menu-icon" 
            src={closeIcon} 
            alt="close menu icon" 
            onClick={() => props.close()} />
        : null
            
    return (
        <nav className={`Menu ${props.show ? "show" : "hidden"} mobile-nav`}>
            <ul className="mobile-nav__links">
                {closeMenuBtn}
                <li><Link to="/" className="Menu-nav-link">Home</Link></li>
                <li><Link to="/about" className="Menu-nav-link">About</Link></li>
                <li><Link to="/products" className="Menu-nav-link">Products</Link></li>
                <li><Link to="/contact" className="Menu-nav-link">Contact</Link></li>
                <li><Link to="/cart" className="Menu-nav-link">Cart</Link></li>
            </ul>
        </nav>
    )
}