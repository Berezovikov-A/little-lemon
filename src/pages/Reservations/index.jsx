import Section from "../../components/Section";
import SectionTitle from "../../components/SectionTitle";
import BookingForm from "../../components/BookingForm";
import SectionImage from "../../components/SectionImage";
import restaurant from "../../assets/restaurant.jpg";
import { useReducer } from "react";
import "./styles.css";
import { fetchAPI, APIsubmit } from "../../utils/api";
import { useNavigate } from "react-router-dom";

export default function Reservations() {

    const updateTimes = (state, event) => {
        const dateFormat = /^\d{4}-\d{2}-\d{2}/;
        const date = event.target.value;
        if (dateFormat.test(date)) {
            return fetchAPI(new Date(date));
        }
        return [...state];
    };

    const initializeTimes = () => fetchAPI(new Date());

    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

    const navigate = useNavigate();

    const submitForm = async (formData) => {
        const response = await APIsubmit(formData);
        if (response) {
            navigate("/confirmed-booking");
        } else {
            alert("Something went wrong");
        }
    }

    return (
        <Section dark>
            <SectionTitle subtitle="complete the form">Reserve a table</SectionTitle>
            <BookingForm availableTimes={availableTimes} reducer={dispatch} onSubmit={submitForm}/>
            <SectionImage src={restaurant} alt="Restaurant" height="480px" />
        </Section>
    )
}