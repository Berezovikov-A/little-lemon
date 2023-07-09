import "./styles.css";

export default function CardContainer({children, ...props}) {
    return (
        <div aria-label="card-container" className="card-container" {...props}>
            {children}
        </div>
    );
}