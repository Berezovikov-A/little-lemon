import Logo from '../../assets/Logo.svg';

export default function Header(props) {
    return (
        <header>
            <img src={Logo} alt="logo" />
            {props.children}
        </header>
    )
}