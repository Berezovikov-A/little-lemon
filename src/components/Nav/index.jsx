import navLinks from "../navigation.json";
import './styles.css';

export default function Nav({ ...props }) {

    return (
        <nav className="navbar" {...props}>
            <ul className="nav-links">
                {navLinks.map(
                    ({key, display, href}) =>
                        <li key={key}><a href={href} className="nav-link">{display}</a></li>
                    )}
            </ul>
        </nav>
    );
}