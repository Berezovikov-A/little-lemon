import Card from "../Card";
import Image from "../Image";
import CardTitle from "../CardTitle";
import Article from "../Article";
import Paragraph from "../Paragraph";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./styles.css";

export default function TestimonialsCard({ img, name, rating, children, ...props }) {
    return (
        <Card height="300px" width="200px" {...props}>
            <header className="testimonials-header">
                <Image src={(() => require(`../../assets/testimonials/${img}`))()} alt={name} height="100px" avatar />
                <CardTitle>{name}</CardTitle>
            </header>
            <Article>
                <div className="rating">
                    {[...Array(rating)].map((val, id) => <FontAwesomeIcon icon={faStar} key={id} />)}
                </div>
                <Paragraph dark>{children}</Paragraph>
            </Article>
        </Card>
    );
}