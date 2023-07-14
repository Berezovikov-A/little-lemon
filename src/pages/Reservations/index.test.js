import { fireEvent, render, screen } from '@testing-library/react';
import Reservations from '.';
import { act } from 'react-dom/test-utils';

describe("Booking form", () => {
    test("renders labels", () => {
        render(<Reservations />);

        expect(screen.getByText(/what date?/i)).toBeInTheDocument();
        expect(screen.getByText(/what time?/i)).toBeInTheDocument();
        expect(screen.getByText(/how many people?/i)).toBeInTheDocument();
        expect(screen.getByText(/what's the occasion?/i)).toBeInTheDocument();
    });

    test("renders time select", () => {
        render(<Reservations />);

        expect(screen.getByLabelText(/What time?/i)).toBeInTheDocument();
    });

    test("select has initial options", () => {
        render(<Reservations />);

        const options = screen.getAllByTestId("time-option");
        expect(options.length).toBeGreaterThan(0);
    });

    test("select has options after date update", () => {
        render(<Reservations />);

        fireEvent.change(screen.getByTestId("date"), {target: `2023-07-15`});
        const options = screen.getAllByTestId("time-option");
        expect(options.length).toBeGreaterThan(0);
    })
});