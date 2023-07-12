import "./styles.css";

export default function Button({ href, value, ...props }) {
    return (
        <a href={href} className="button" {...props}>{value}</a>
    );
}