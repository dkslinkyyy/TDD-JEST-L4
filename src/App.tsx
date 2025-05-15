import { useState } from "react";

import "./App.css";
import { ButtonState } from "./components/CustomButton";

function App() {
  const [buttonState, setButtonState] = useState<ButtonState>(ButtonState.Idle);

  return (
    <>
    </>
  );
}

export default App;
