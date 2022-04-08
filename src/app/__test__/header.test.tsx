import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import React from "react";
import App from "../../App";
import Header from "../header";

jest.mock("react-redux");
jest.mock("react-router-dom");

test("shopping card screen currnetly", () => {
  render(<Header />);
  const cardEl = screen.getByTestId(/shoppingCard/i);
  expect(cardEl).toHaveTextContent("0");
});
