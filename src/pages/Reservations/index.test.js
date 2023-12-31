import { fireEvent, render, screen } from '@testing-library/react';
import Reservations from '.';
import { BrowserRouter } from 'react-router-dom';
import { act } from 'react-dom/test-utils';

const today = new Date();
const todayDate = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;


describe("Booking form", () => {
    test("renders labels", () => {
        render(
            <BrowserRouter>
                <Reservations />
            </BrowserRouter>
        );

        expect(screen.getByText(/what date?/i)).toBeInTheDocument();
        expect(screen.getByText(/what time?/i)).toBeInTheDocument();
        expect(screen.getByText(/how many people?/i)).toBeInTheDocument();
        expect(screen.getByText(/what's the occasion?/i)).toBeInTheDocument();
    });

    test("renders time select", () => {
        render(
            <BrowserRouter>
                <Reservations />
            </BrowserRouter>
        );

        expect(screen.getByLabelText(/What time?/i)).toBeInTheDocument();
    });

    test("select has initial options", () => {
        render(
            <BrowserRouter>
                <Reservations />
            </BrowserRouter>
        );

        const options = screen.getAllByTestId("time-option");
        expect(options.length).toBeGreaterThan(0);
    });

    test("select has options after date update", async () => {
        render(
            <BrowserRouter>
                <Reservations />
            </BrowserRouter>
        );

        await act(() => {
            fireEvent.change(screen.getByTestId("date"), { target: { value: todayDate } });
        });

        const options = screen.getAllByTestId("time-option");
        expect(options.length).toBeGreaterThan(0);
    })
});