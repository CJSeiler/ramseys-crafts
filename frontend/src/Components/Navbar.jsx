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
            <div>
                <div className="header-socials" aria-label="socials list">
                    <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
                        <img src={instagramIcon} alt="instagram-icon"/>
                    </a>

                    <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
                        <img src={facebookIcon} alt="facebook-icon"/>
                    </a>

                    <a href="https://www.snapchat.com" target="_blank" rel="noreferrer">
                        <img src={snapchatIcon} alt="snapchat-icon"/>
                    </a>

                    <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
                        <img src={twitterIcon} alt="twitter-icon"/>
                    </a>
                </div>

                <Link to="/"><img className="header-logo" src="/images/logo.png" alt="store logo"/></Link>

                <div className="header-icons"> 
                    {/* wrapped in divs to prevent clicking the space around icon from activating the link*/}
                    <div>
                        <Link to="/login" aria-label="login link"><img className="header-profile-icon" src={profileIcon} alt="profile icon"/></Link>
                    </div>

                    <div className="header-icons__cart-container">
                        <Link to="/cart" aria-label="shopping cart link"><img className="header-cart-icon" src={cartIcon} alt="cart icon"/></Link>
                        {cartItems.length === 0 ? null : <p className="header-icons__cart-indicator">{cartItems.length}</p>}
                    </div>
                </div>

                <button 
                    className={`nav-hamburger-button ${isMenuShown ? "open" : ""}`}
                    aria-label="mobile navigation toggle"
                    aria-expanded={isMenuShown ? "true" : "false"}
                    onClick={()=> {setIsMenuShown(prevIsMenuShown => !prevIsMenuShown)}}     
                >
                    {/* important for hamburger menu button animation*/}
                    <span className="nav-hamburger-button__top"></span>
                    <span className="nav-hamburger-button__mid"></span>
                    <span className="nav-hamburger-button__bottom"></span>
                </button>
            </div>

            <nav className="main-navigation" aria-label="main navigation">
                <ul className="nav-links-container"> 
                    <li className="nav-link"><Link to="/">Home</Link></li>
                    <li className="nav-link"><Link to="/about">About</Link></li>
                    <li className="nav-link"><Link to="/products">Products</Link></li>
                    <li className="nav-link"><Link to="/contact">Contact</Link></li>
                    <li className="nav-link"><Link to="/cart">Cart</Link></li>
                </ul>
            </nav>

            {isMenuShown ? <Menu /> : null}
        </header>
    );
};

export default Header;