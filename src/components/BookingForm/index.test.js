import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import BookingForm from '.';
import { act } from 'react-dom/test-utils';

const today = new Date();
const todayDate = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;

describe("Booking form", () => {
    test("renders inputs and button", () => {
        render(<BookingForm availableTimes={["17:00", "18:00"]} />);

        expect(screen.getByTestId("date"))
            .toBeInTheDocument();
        expect(screen.getByRole("combobox", {name: "What time?*"}))
            .toBeInTheDocument();
        expect(screen.getByRole("spinbutton", {name: "How many people?*"}))
            .toBeInTheDocument();
        expect(screen.getByRole("combobox", {name: "What's the occasion?"}))
            .toBeInTheDocument();
        expect(screen.getByRole("button", {name: "Make your reservation"}))
            .toBeInTheDocument();
    });

    test("submits with valid inputs", async () => {
        const handleSubmit = jest.fn()
        render(<BookingForm availableTimes={["17:00", "18:00"]} onSubmit={handleSubmit} />);

        fireEvent.change(screen.getByTestId("date"), {target: {value: todayDate}});
        fireEvent.click(screen.getByRole("button", {name: "Make your reservation"}));

        await waitFor(() => {
            expect(handleSubmit).toHaveBeenCalledWith({
                date: todayDate,
                time: "17:00",
                guests: 1,
                occasion: "",
            });
        });
    });

    test("renders error messages for required fields", async() => {
        render(<BookingForm availableTimes={["17:00", "18:00"]} />);

        fireEvent.change(screen.getByTestId("date"), { target: { value: "" }});
        fireEvent.change(screen.getByRole("combobox", {name: "What time?*"}), {target: { value: "" }})

        await act(async () => {
            fireEvent.click(screen.getByRole("button", {name: "Make your reservation"}));
        });

        expect(screen.getByText(/Please choose the date/i))
            .toBeInTheDocument();
        expect(screen.getByText(/Please select the time/i))
            .toBeInTheDocument();
    });

    test("renders error messages for limited fields", async() => {
        render(<BookingForm availableTimes={["17:00", "18:00"]} />);

        fireEvent.change(screen.getByTestId("date"), {target: {value: "2000-01-01"}});
        const guests = screen.getByRole("spinbutton", {name: "How many people?*"});
        fireEvent.change(guests, {target: { value: 0 }})

        const button = screen.getByRole("button", {name: "Make your reservation"});
        await act(async () => {
            fireEvent.click(button);
        });

        expect(screen.getByText(/Date is unavavilable/i))
            .toBeInTheDocument();
        expect(screen.getByText(/There must be at least 1 person/i))
            .toBeInTheDocument();

        fireEvent.change(guests, {target: { value: 11 }})

        await act(async () => {
            fireEvent.click(button);
        });

        expect(screen.getByText(/No more than 10 people/i))
            .toBeInTheDocument();
    });
});