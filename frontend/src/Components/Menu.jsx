import { Link } from "react-router-dom"
import "../Menu.css"
export default function Menu(props) {
    return (
        <nav className={`Menu ${props.show ? "show" : "hidden"}`}>
            <ul>
                <li><Link to="/" className="Menu-nav-link">Home</Link></li>
                <li><Link to="/about" className="Menu-nav-link">About</Link></li>
                <li><Link to="/products" className="Menu-nav-link">Products</Link></li>
                <li><Link to="/contact" className="Menu-nav-link">Contact</Link></li>
                <li><Link to="/cart" className="Menu-nav-link">Cart</Link></li>
            </ul>
        </nav>
    )
}