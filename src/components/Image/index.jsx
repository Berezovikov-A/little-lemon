import "./styles.css";

export default function Image({ src, alt, width = "100%", height = "100%", ...props}) {
    return (
        <div className="frame"  {...props}>
            <img
                className="image"
                src={src}
                alt={alt}
                width={width}
                height={height}
            />
        </div>
    );
}