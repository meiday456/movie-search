import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("헤더의 title이 출력이 되는가?", () => {
  render(<App />);
  const titleText = screen.getByText(/OMDbAPI/i);
  expect(titleText).toBeInTheDocument();
});
