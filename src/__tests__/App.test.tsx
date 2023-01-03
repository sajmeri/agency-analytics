import { render, screen } from "@testing-library/react";
import App from "../App";

test("renders navigation with links to cities", () => {
  render(<App />);
  const linkElement = screen.getByText(/Ottawa/i);
  expect(linkElement).toBeInTheDocument();
});
