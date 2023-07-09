import navLinks from "../navigation.json";
import './styles.css';

export default function Nav() {

    return (
        <nav className="navbar">
            <ul className="nav-links">
                {navLinks.map(
                    ({key, display, href}) =>
                        <li key={key}><a href={href} className="nav-link">{display}</a></li>
                    )}
            </ul>
        </nav>
    );
}