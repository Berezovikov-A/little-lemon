import Logo from '../../assets/Logo.svg';
import './styles.css';

export default function Header({ children }) {
    return (
        <header className="header">
            <a href="/" className="logo"><img src={Logo} alt="logo" /></a>
            {children}
        </header>
    );
}