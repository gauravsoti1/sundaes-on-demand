import { fireEvent, render, screen } from "@testing-library/react";
import SummaryForm from "../SummaryForm";

describe("checkbox works properly", () => {
  function getTermsAndConditionsCheckbox() {
    return screen.getByRole("checkbox", {
      name: /i agree to terms and conditions/i,
    });
  }
  function getPlaceOrderButton() {
    return screen.getByRole("button", { name: /Confirm Order/i });
  }
  test("Checkbox is unchecked by default", () => {
    render(<SummaryForm />);
    const checkbox = getTermsAndConditionsCheckbox();
    expect(checkbox).not.toBeChecked();
  });
  test("Button is disabled by default", () => {
    render(<SummaryForm />);
    const button = getPlaceOrderButton();
    expect(button).toBeDisabled();
  });
  test("Checking checkbox enables button", () => {
    render(<SummaryForm />);
    const checkbox = getTermsAndConditionsCheckbox();
    const button = getPlaceOrderButton();
    fireEvent.click(checkbox);
    expect(button).toBeEnabled();
  });
  test("Unchecking checkbox again disables button", () => {
    render(<SummaryForm />);
    const checkbox = getTermsAndConditionsCheckbox();
    const button = getPlaceOrderButton();
    // to check the checkbox
    fireEvent.click(checkbox);
    // to uncheck the checkbox
    fireEvent.click(checkbox);
    expect(button).toBeDisabled();
  });
});
