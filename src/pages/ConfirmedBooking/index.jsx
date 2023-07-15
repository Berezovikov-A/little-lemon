import Section from "./../../components/Section";
import SectionTitle from "./../../components/SectionTitle";
import SectionImage from "./../../components/SectionImage";
import restaurant from "../../assets/restaurant.jpg";
import Button from "./../../components/Button";
import "./styles.css";

export default function ConfirmedBooking() {
    return (
        <Section dark>
            <SectionTitle subtitle="Reservation confirmed">Thank you!</SectionTitle>
            <SectionImage src={restaurant} alt="Restaurant" />
            <Button href="/" value="Back to home"  className="button button-back" />
        </Section>
    )
}