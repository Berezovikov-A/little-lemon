import Section from "../../components/Section";
import SectionTitle from "../../components/SectionTitle";
import BookingForm from "../../components/BookingForm";
import { useReducer } from "react";
import "./styles.css";

export default function Reservations() {

    const updateTimes = (state, event) => {
        const dateFormat = /^\d{4}-\d{2}-\d{2}/;
        if (dateFormat.test(event.target.value)) {
            return [...state];
        }
        return [...state];
    };

    const initializeTimes = () => ["17:00", "18:00", "19:00"];

    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

    return (
        <Section dark>
            <SectionTitle subtitle="complete the form">Reserve a table</SectionTitle>
            <BookingForm availableTimes={availableTimes} reducer={dispatch} />
        </Section>
    )
}