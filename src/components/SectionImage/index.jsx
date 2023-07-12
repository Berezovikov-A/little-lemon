import "./styles.css";

export default function SectionImage({ src, alt, width = "100%", height = "100%", ...props}) {
    return (
        <div className="section-frame"  {...props}>
            <img
                className="section-image"
                src={src}
                alt={alt}
                width={width}
                height={height}
            />
        </div>
    );
}