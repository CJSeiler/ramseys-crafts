import { Link } from "react-router-dom";

const Menu = ({ setShowMenu }) => {
    return (
        <nav id="mobile-nav" className="mobile-nav" aria-label="mobile-navigation">
            <ul className="mobile-nav__links">
                <li>
                    <Link 
                        to="/" 
                        className="mobile-nav__link" 
                        onClick={() => setShowMenu(false)}
                    >
                        Home
                    </Link>
                </li>

                <li>
                    <Link 
                        to="/products" 
                        className="mobile-nav__link" 
                        onClick={() => setShowMenu(false)}
                    >
                        Products
                    </Link>
                </li>

                <li>
                    <Link 
                        to="/contact" 
                        className="mobile-nav__link" 
                        onClick={() => setShowMenu(false)}
                    >
                        Contact
                    </Link>
                </li>

                <li>
                    <Link 
                        to="/about" 
                        className="mobile-nav__link" 
                        onClick={() => setShowMenu(false)}
                    >
                        About
                    </Link>
                </li>

                <li>
                    <Link 
                        to="/profile" 
                        className="mobile-nav__link" 
                        onClick={() => setShowMenu(false)}
                    >
                        Profile
                    </Link>
                </li>

                <li>
                    <Link 
                        to="/cart" 
                        className="mobile-nav__link" 
                        onClick={() => setShowMenu(false)}
                    >
                        Cart
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Menu;