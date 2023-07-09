import React from "react";
import { render, screen } from "@testing-library/react";
import HomePage from "./home";

test("renders the component correctly", () => {
  render(<HomePage />);
  const element = screen.getByText(
    "Find The nearest hospital to you and make an appointment today"
  );
  expect(element).toBeInTheDocument();
});
