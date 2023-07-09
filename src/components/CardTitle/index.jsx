import "./styles.css";

export default function CardTitle({children, ...props}) {
    return (
        <h3 className="card-title" {...props}>{children}</h3>
    );
}