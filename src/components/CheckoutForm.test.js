import React from "react";
import MutationObserver from 'mutationobserver-shim';
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {
  render(<CheckoutForm />);
});

test("shows success message on submit with form details", async () => {
  render(<CheckoutForm />);

  const submitButton = screen.getByRole('button');
  userEvent.click(submitButton);

  const successMessageRender = await screen.findByTestId(/successMessage/i);

  expect(successMessageRender).toBeInTheDocument();
});
