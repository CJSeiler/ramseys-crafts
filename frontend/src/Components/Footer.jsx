import facebookIcon from "../icons/f-icon-lt.png";
import instagramIcon from "../icons/ig-icon-lt.png";
import snapchatIcon from "../icons/snap-icon-lt.png";
import twitterIcon from "../icons/tw-icon-lt.png";

const Footer = () => {
    return (
        <footer>
            <div className="footer__container">
                <div className="footer__about">
                    <h3>More about Ramsey's Craft Store</h3>
                    <p>Our store offers a variety of unique and high-quality crochet items, from cozy
                    blankets and scarves to trendy hats and bags. Each item is handmade with love 
                    and care, ensuring that you receive a quality piece.
                    </p>
                    <span>-Ramsey Valdes, Founder</span>
                </div>

                <div className="footer__socials">
                    <h3>Stay Connected</h3>

                    <div>
                        <div className="icon__container">
                            <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
                                <img src={instagramIcon} alt="instagram"/>
                            </a>
                            <p>Follow us on instagram.</p>
                        </div>

                        <div className="icon__container">
                            <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
                                <img src={facebookIcon} alt="facebook"/>
                            </a>
                            <p>Follow us on Facebook.</p>
                        </div>

                        <div className="icon__container">
                            <a href="https://www.snapchat.com" target="_blank" rel="noreferrer">
                                <img src={snapchatIcon} alt="snapchat"/>
                            </a>
                            <p>Follow us on Snapchat.</p>
                        </div>

                        <div className="icon__container">
                            <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
                                <img src={twitterIcon} alt="twitter"/>
                            </a>
                            <p>Follow us on twitter.</p>
                        </div>
                    </div>
                </div>


                <div className="footer__contact">
                    <h3>Contact Details</h3>
                    
                    <div>
                        <p>Ramsey's Craft Store</p>
                        <p>1234 Shetland Rd.</p>
                        <p>Tampa, FL 33615</p>
                        <p>813-123-4567</p>
                        <p>contact@example.com</p>
                    </div>
                </div>

                <div className="footer__copyright">© 2023 Ramsey's Craft Store. All Rights Reserved.</div>
            </div>
        </footer>
    );
};

export default Footer;