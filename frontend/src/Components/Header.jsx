import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Menu from "./Menu";
import cartIcon from "../icons/cart.svg";
import profileIcon from "../icons/profile-icon.svg";
import facebookIcon from "../icons/f-icon.png";
import instagramIcon from "../icons/ig-icon.png";
import snapchatIcon from "../icons/snap-icon.png";
import twitterIcon from "../icons/tw-icon.png";

const Header = () => {
    const [isMenuShown, setIsMenuShown] = useState(false);
    const cart = useSelector(state => state.cart);
    const { cartItems } = cart;
    
    return (
        <header>
            <nav className="main-navigation" aria-label="main navigation">
                <div className="main-navigation__top-bar">
                    <div className="header-socials" aria-label="socials list">
                        <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
                            <img src={instagramIcon} alt="instagram"/>
                        </a>

                        <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
                            <img src={facebookIcon} alt="facebook"/>
                        </a>

                        <a href="https://www.snapchat.com" target="_blank" rel="noreferrer">
                            <img src={snapchatIcon} alt="snapchat"/>
                        </a>

                        <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
                            <img src={twitterIcon} alt="twitter"/>
                        </a>
                    </div>

                    <div>
                        <Link to="/"><img className="header-logo" src="/images/logo.png" alt="store logo link to homepage" tabIndex="0"/></Link>

                    </div>

                    <div className="header-icons"> 
                        {/* wrapped in divs to prevent clicking the space around icon from activating the link*/}
                        <div>
                            <Link to="/login" aria-label="login link"><img className="header-profile-icon" src={profileIcon} alt="profile icon"/></Link>
                        </div>

                        <div className="header-icons__cart-container">
                            <Link to="/cart" aria-label="shopping cart link">
                                <img className="header-cart-icon" src={cartIcon} alt="cart icon"/>
                                {cartItems.length === 0 ? null : <p className="header-icons__cart-indicator" aria-label="cart items quantity">{cartItems.length}</p>}
                            </Link>
                        </div>
                    </div>

                    <button 
                        className={`mobile-nav__hamburger-button ${isMenuShown ? "open" : ""}`}
                        aria-label="mobile navigation toggle"
                        aria-expanded={isMenuShown ? "true" : "false"}
                        onClick={()=> {setIsMenuShown(prevIsMenuShown => !prevIsMenuShown)}}     
                    >
                        {/* hamburger menu button pieces*/}
                        <span className="mobile-nav__hamburger-button__top"></span>
                        <span className="mobile-nav__hamburger-button__mid"></span>
                        <span className="mobile-nav__hamburger-button__bottom"></span>
                    </button>
                </div>

                <div className="main-navigation__bottom-bar">
                    <ul className="main-navigation__links-container"> 
                        <li className="nav-link"><Link to="/">Home</Link></li>
                        <li className="nav-link"><Link to="/about">About</Link></li>
                        <li className="nav-link"><Link to="/products">Products</Link></li>
                        <li className="nav-link"><Link to="/contact">Contact</Link></li>
                        <li className="nav-link"><Link to="/cart">Cart</Link></li>
                    </ul>
                </div>
            </nav>

            {isMenuShown ? <Menu /> : null}
        </header>
    );
};

export default Header;