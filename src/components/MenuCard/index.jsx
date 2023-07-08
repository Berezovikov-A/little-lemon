import Image from "../Image";
import Article from "../Article";
import Paragraph from "../Paragraph";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMotorcycle } from "@fortawesome/free-solid-svg-icons";
import "./styles.css";

export default function MenuCard({ img, name, price, children, ...props}) {
    return (
        <div aria-label="card" className="menu-card" {...props}>
            <Image src={(() => require(`../../assets/menu-items/${img}`))()} alt={name} height="270px" />
            <Article>
                <header className="card-header">
                    <h3 className="card-title">{name}</h3>
                    <h3 className="card-title price">$ {price}</h3>
                </header>
                <Paragraph dark>{children}</Paragraph>
            </Article>
            <footer className="card-footer">
                <h3 className="card-title">Order delivery</h3>
                <FontAwesomeIcon icon={faMotorcycle} />
            </footer>
        </div>
    )
}