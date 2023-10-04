import { render, screen } from '@testing-library/react';
import App from '../components/App';
import forecast from '../data/forecast.json';

describe("App", () => {
  test("renders App component correctly", () => {
     const forecasts = [];
     render(<App location={forecast.location} forecasts={forecasts} />);
     const h1Element = screen.getByText(/Manchester, UK/i);
     expect(h1Element).toBeInTheDocument();
  });
});