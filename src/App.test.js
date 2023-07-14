import { render, screen } from '@testing-library/react';
import App from './App';
import navLinks from "./components/navigation.json";

window.matchMedia = (query) => ({
  matches: false,
  media: query,
  onchange: null,
  addListener: jest.fn(), // Deprecated
  removeListener: jest.fn(), // Deprecated
  addEventListener: jest.fn(),
  removeEventListener: jest.fn(),
  dispatchEvent: jest.fn(),
})

describe("Header", () => {
  test('Renders Header Links', () => {
    render(<App />);

    navLinks.forEach(({display}) => {
      expect(screen.getByTestId(display))
      .toBeInTheDocument();
    })
  });
})
