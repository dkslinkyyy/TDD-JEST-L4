import { render } from "@testing-library/react";
import { CustomButton } from "./CustomButton";
import "@testing-library/jest-dom";
describe(CustomButton, () => {
  test("Has correct button name", () => {
    const buttonName: string = "submit";
    const { getByText } = render(<CustomButton buttonName={buttonName} />);
    const button = getByText(buttonName);
    expect(button).toHaveClass();
  });
});
