import "./styles.css";

export default function Section({ height, children, backgroundColor }) {
    return (
        <section className="section" style={{height: height, backgroundColor: backgroundColor}}>
            {children}
        </section>
    );
}