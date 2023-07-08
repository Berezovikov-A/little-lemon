import "./styles.css";

export default function Article({ children, ...props }) {
    return (
        <article className="article" {...props}>
            {children}
        </article>
    );
}