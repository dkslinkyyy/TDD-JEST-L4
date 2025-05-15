import { useState } from "react";

export enum ButtonState {
  idle = "idle",
  hover = "hover",
  clicked = "clicked",
}

interface CustomButtonProps {
  buttonName: string;
}

export function CustomButton(props: CustomButtonProps) {
  const [buttonState, setButtonState] = useState<ButtonState>(ButtonState.idle);

  return (
    <button
      type="button"
      className={buttonState}
      onMouseLeave={() => setButtonState(ButtonState.idle)}
      onMouseEnter={() => setButtonState(ButtonState.hover)}
      onClick={() => setButtonState(ButtonState.clicked)}
    >
      {props.buttonName}
    </button>
  );
}
