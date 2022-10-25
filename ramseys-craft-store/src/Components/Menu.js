import { Link } from "react-router-dom"
import "../Menu.css"
export default function Menu(props) {
    return (
        <div className={`Menu-wrapper ${props.show ? "show" : "hide"}`}>
            <nav className="Menu-nav">
                <Link to="/" className="Menu-nav-link">Home</Link>
                <Link to="/about" className="Menu-nav-link">About</Link>
                <Link to="/products" className="Menu-nav-link">Products</Link>
                <Link to="/contact" className="Menu-nav-link">Contact</Link>
                <Link to="/cart" className="Menu-nav-link">Cart</Link>
            </nav>
        </div>
    )
}