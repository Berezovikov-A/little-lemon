import { Formik, Form, Field } from "formik";
import "./styles.css";

export default function BookingForm({ availableTimes, reducer, onSubmit }) {

    return (
        <Formik
            initialValues={{
                date: "",
                time: availableTimes[0],
                guests: 1,
                occasion: "",
            }}
            onSubmit={async (values) => {
                await onSubmit(values);
            }}
        >
            {(props) => (
                <Form className="form" onChange={reducer}>
                    <label htmlFor="date" className="label">What date?</label>
                    <Field name="date" className="field" type="date" data-testid="date" />
                    <label htmlFor="time" className="label">What time?</label>
                    <Field name="time" as="select" id="time" className="field">
                        {availableTimes.map((val, id) => <option value={val} key={id} data-testid="time-option">{val}</option>)}
                    </Field>
                    <label htmlFor="guests" className="label">How many people?</label>
                    <Field name="guests" type="number" min="1" max="10" className="field" />
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

