import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { CustomButton, ButtonState } from "./CustomButton";
import "@testing-library/jest-dom";
describe(CustomButton, () => {
  test("Has correct button name", () => {
    const buttonName: string = "submit";
    const { getByText } = render(<CustomButton buttonName={buttonName} />);
    const button = getByText(buttonName);
    expect(button).toHaveClass();
  });
});
describe("CustomButton", () => {
  const buttonText = "Click Me";

  it("renders with initial idle state", () => {
    render(<CustomButton buttonName={buttonText} />);
    const button = screen.getByRole("button", { name: buttonText });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass(ButtonState.idle);
  });

  it("changes to hover state on mouse enter", () => {
    render(<CustomButton buttonName={buttonText} />);
    const button = screen.getByRole("button", { name: buttonText });
    fireEvent.mouseEnter(button);
    expect(button).toHaveClass(ButtonState.hover);
  });

  it("changes to clicked state on click", () => {
    render(<CustomButton buttonName={buttonText} />);
    const button = screen.getByRole("button", { name: buttonText });
    fireEvent.click(button);
    expect(button).toHaveClass(ButtonState.clicked);
  });

  it("returns to idle state on mouse leave", () => {
    render(<CustomButton buttonName={buttonText} />);
    const button = screen.getByRole("button", { name: buttonText });
    fireEvent.mouseEnter(button);
    fireEvent.mouseLeave(button);
    expect(button).toHaveClass(ButtonState.idle);
  });
});
