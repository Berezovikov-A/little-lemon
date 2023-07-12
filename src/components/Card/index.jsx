import "./styles.css";

export default function MenuCard({ height = "fit-content", width = "fit-contennt", children, ...props }) {
    return (
        <div aria-label="card" className="card" style={{height: height, width: width, minHeight: height, minWidth: width}} {...props}>
            {children}
        </div>
    );
}