import Card from "../Card";
import Image from "../Image";
import CardTitle from "../CardTitle";
import Article from "../Article";
import Paragraph from "../Paragraph";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMotorcycle } from "@fortawesome/free-solid-svg-icons";
import "./styles.css";

export default function MenuCard({ img, name, price, children, ...props}) {
    return (
        <Card height="480px" width="270px" {...props}>
            <Image src={(() => require(`../../assets/menu-items/${img}`))()} alt={name} height="270px" />
            <Article style={{height: "206px"}}>
                <header className="menu-header">
                    <CardTitle>{name}</CardTitle>
                    <CardTitle style={{color: "var(--secondary-1)"}}>$ {price}</CardTitle>
                </header>
                <Paragraph dark>{children}</Paragraph>
                <footer className="card-footer">
                    <CardTitle>Order delivery</CardTitle>
                    <FontAwesomeIcon icon={faMotorcycle} />
                </footer>
            </Article>
        </Card>
    );
}