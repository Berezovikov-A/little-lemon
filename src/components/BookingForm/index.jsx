import { Formik, Form, Field, ErrorMessage } from "formik";
import "./styles.css";
import * as Yup from "yup";

const minDate = new Date();
minDate.setDate(minDate.getDate() - 1);

const bookingValidationSchema = Yup.object().shape({
    date: Yup.date()
        .min(minDate, "Date is unavavilable")
        .required("Please choose the date"),
    time: Yup.string()
        .required("Please select the time"),
    guests: Yup.number()
        .min(1, "There must be at least 1 person")
        .max(10, "No more than 10 people")
});

export default function BookingForm({ availableTimes, reducer, onSubmit }) {

    return (
        <Formik
            initialValues={{
                date: "",
                time: availableTimes[0],
                guests: 1,
                occasion: "",
            }}
            validationSchema={bookingValidationSchema}
            onSubmit={async (values) => {
                await onSubmit(values);
            }}
        >
            {(props) => (
                <Form className="form" onChange={reducer}>
                    <label htmlFor="date" className="label">What date?*</label>
                    <Field name="date" id="date" className="field" type="date" data-testid="date" />
                    <ErrorMessage name="date" className="error" component="label" htmlFor="date" />
                    <label htmlFor="time" className="label">What time?*</label>
                    <Field name="time" as="select" id="time" className="field">
                        {availableTimes.map((val, id) => <option value={val} key={id} data-testid="time-option">{val}</option>)}
                    </Field>
                    <ErrorMessage name="time" className="error" component="label" htmlFor="time" />
                    <label htmlFor="guests" className="label">How many people?*</label>
                    <Field name="guests" id="guests" type="number" className="field" />
                    <ErrorMessage name="guests" className="error" component="label" htmlFor="guests" />
                    <label htmlFor="occasion" className="label">What's the occasion?</label>
                    <Field name="occasion" as="select" id="occasion" className="field">
                        <option value="" defaultValue disabled>Select the occasion</option>
                        <option value="birthday">Birthday</option>
                        <option value="anniversary">Anniversary</option>
                    </Field>
                    <button type="submit" className="submit" disabled={props.isSubmitting}>Make your reservation</button>
                </Form>
            )}
        </Formik>

    );
}

