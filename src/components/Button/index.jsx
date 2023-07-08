import "./styles.css";

export default function Button({ href, value, ...props }) {
    return (
        <a href={href} {...props} className="button">{value}</a>
    );
}