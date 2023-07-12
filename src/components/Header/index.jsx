import Nav from '../Nav';
import Logo from '../../assets/Logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './styles.css';
import { useEffect, useState } from 'react';

export default function Header() {
    const [mobile, setMobile] = useState(false);
    const [menu, setMenu] = useState(true);

    useEffect(() => {
        console.log(mobile);
        const resolution = window.matchMedia("(max-width: 768px)");
        const changeHandler = (event) => {
            if (event.matches) {
                setMobile(true);
                setMenu(false);
            } else {
                setMobile(false);
                setMenu(true);
            }
        }
        changeHandler(resolution);
        resolution.addEventListener("change", changeHandler);
        return () => {
            resolution.removeEventListener("change", changeHandler);
        }}, [mobile]);

    useEffect(() => {
        const burger = document.getElementById("burger");
        const eventHandler = () => {
            setMenu((previous) => !previous);
        }
        burger.addEventListener("click", eventHandler);
        return () => {
            burger.removeEventListener("click", eventHandler);
    }}, [menu]);

    return (
        <header className="header">
            <div id="burger"><FontAwesomeIcon icon={faBars} size='2xl'/></div>
            <a href="/" className="logo"><img src={Logo} alt="logo" /></a>
            <Nav style={{display: menu ? "block" : "none"}} />
        </header>
    );
}