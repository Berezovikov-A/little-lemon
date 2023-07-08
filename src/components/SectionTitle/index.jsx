import "./styles.css";

export default function SectionTitle({subtitle, dark, children, ...props}) {
    return (
        <header className="section-title" {...props}>
            <h1
                className="title"
                style={dark && {color: "var(--primary-1)"}}
            >
                {children}
            </h1>
            {subtitle && <h2
                className="subtitle"
                style={dark && {color: "var(--highlight-2)"}}
            >
                {subtitle}
            </h2>}
        </header>

    )
}