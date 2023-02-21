import { Link } from "react-router-dom";

const Menu = () => {
    return (
        <nav className="mobile-nav" aria-label="mobile-navigation">
            <ul className="mobile-nav__links">
                <li><Link to="/" className="mobile-nav__link">Home</Link></li>
                <li><Link to="/products" className="mobile-nav__link">Products</Link></li>
                <li><Link to="/contact" className="mobile-nav__link">Contact</Link></li>
                <li><Link to="/about" className="mobile-nav__link">About</Link></li>
            </ul>
        </nav>
    );
};

export default Menu;