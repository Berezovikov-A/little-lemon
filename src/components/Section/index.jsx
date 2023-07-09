import "./styles.css";

export default function Section({ height = "fit-content", dark, children, ...props }) {
    return (
        <section className="section" style={{height: height, backgroundColor: dark ? "var(--primary-1)" : ""}} {...props}>
            {children}
        </section>
    );
}