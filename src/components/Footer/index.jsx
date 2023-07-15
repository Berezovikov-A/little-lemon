import navLinks from "../navigation.json";
import logoVerticalWhite from "../../assets/logo-vertical-white.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import "./styles.css";

export default function Footer() {
    const contacts = [
        {
            key: 0,
            display: "Address",
        },
        {
            key: 1,
            display: "Phone Number"
        },
        {
            key: 2,
            display: "Email",
        },
    ];

    const socialMedia = [
        {
            key: 0,
            icon: faFacebook,
            href: "https://www.facebook.com/",
            label: "Go to Facebook",
        },
        {
            key: 1,
            icon: faInstagram,
            href: "https://www.instagram.com/",
            label: "Go to Instagram",
        },
        {
            key: 2,
            icon: faTwitter,
            href: "https://twitter.com/",
            label: "Go to Twitter",
        },
    ];

    return (
        <footer className="footer">
            <img className="footer-logo" src={logoVerticalWhite} alt="Little Lemon" />
            <div className="doormat-nav">
                <div className="doormat-section">
                    <h3 className="doormat-title">Doormat navigation</h3>
                    <ul className="doormat-list">
                        {navLinks.map(({key, display, href}) =>
                            <li key={key}><a className="doormat-link" href={href}>{display}</a></li>
                        )}
                    </ul>
                </div>
                <div className="doormat-section">
                    <h3 className="doormat-title">Contacts</h3>
                    <ul className="doormat-list">
                        {contacts.map(({key, display}) =>
                            <li key={key}>{display}</li>
                        )}
                    </ul>
                </div>
                <div className="doormat-section">
                    <h3 className="doormat-title">Social media</h3>
                    <ul className="doormat-list icons">
                        {socialMedia.map(({key, icon, href, label}) =>
                            <li key={key}><a className="doormat-link" href={href} target="_blank" rel="noreferrer" aria-label={label}>
                                <FontAwesomeIcon icon={icon} size="2xl" />
                            </a></li>
                        )}
                    </ul>
                </div>
            </div>
        </footer>
    );
}