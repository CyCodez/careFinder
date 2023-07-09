import React from "react";
import { render, screen } from "@testing-library/react";
import About from "./about";

test("renders the component correctly", () => {
  render(<About />);
  const element = screen.getByText("About CareFinder");
  expect(element).toBeInTheDocument();
});
