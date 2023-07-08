import "./styles.css";

export default function Paragraph({dark, children, ...props}) {
    return (
        <p
            className="paragraph"
            style={dark && {color: "var(--highlight-2)"}}
            {...props}
        >
            {children}
         </p>

    )
}