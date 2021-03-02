import {
  fireEvent,
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
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
    userEvent.click(checkbox);
    expect(button).toBeEnabled();
  });

  test("Unchecking checkbox again disables button", () => {
    render(<SummaryForm />);
    const checkbox = getTermsAndConditionsCheckbox();
    const button = getPlaceOrderButton();
    // to check the checkbox
    userEvent.click(checkbox);
    // to uncheck the checkbox
    userEvent.click(checkbox);
    expect(button).toBeDisabled();
  });
  test("popover responds to hover", async () => {
    render(<SummaryForm />);
    // popover starts out hidden
    {
      const popover = screen.queryByText(
        /no icecream will actually be delivered/i
      );
      expect(popover).not.toBeInTheDocument();
    }
    // popover appears upon mouseover of checkbox label
    const termsAndConditions = screen.getByText(/terms and conditions/i);
    userEvent.hover(termsAndConditions);
    const popover = screen.getByText(/no icecream will actually be delivered/i);
    /* 
     this line is not required but we are
     using it anyway because it is more readable
     this line is not required because the previous
     line will throw error if popover is not present
    */
    expect(popover).toBeInTheDocument();

    // popover disappears when we mouse out
    userEvent.unhover(termsAndConditions);
    await waitForElementToBeRemoved(() =>
      screen.queryByText(/no icecream will actually be delivered/i)
    );
  });
});
