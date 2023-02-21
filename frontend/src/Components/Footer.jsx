import facebookIcon from "../icons/f-icon-lt.png";
import instagramIcon from "../icons/ig-icon-lt.png";
import snapchatIcon from "../icons/snap-icon-lt.png";
import twitterIcon from "../icons/tw-icon-lt.png";

export default function Footer() {
    return (
        <footer>
            <div className="footer-socials">
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
        </footer>
    );
};