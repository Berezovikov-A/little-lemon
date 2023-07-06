export default function Nav() {
    const navLinks = [
        {
            key: 0,
            display: "Home",
            href: "/home",
        },
        {
            key: 1,
            display: "About",
            href: "/about",
        },
        {
            key: 2,
            display: "Menu",
            href: "/menu",
        },
        {
            key: 3,
            display: "Reservations",
            href: "/reservations",
        },
        {
            key: 4,
            display: "Order Online",
            href: "/order-online",
        },
        {
            key: 5,
            display: "Log In",
            href: "/log-in"
        },
    ];

    return (
        <nav>
            <ul>
                {navLinks.map(
                    ({key, display, href}) => <li key={key}><a href={href}>{display}</a></li>
                )}
            </ul>
        </nav>
    )
}