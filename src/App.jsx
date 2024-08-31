import { useState } from "react";
import { Toaster } from "react-hot-toast";
import Colors from "./components/Colors";
import Header from "./components/Header";
import { getRandomColor } from "./helpers";

function App() {
  const [color, setColor] = useState(getRandomColor());
  const [weight, setWeight] = useState(10);

  return (
    <>
      <Header
        color={color}
        setColor={setColor}
        weight={weight}
        setWeight={setWeight}
      />
      <Colors
        color={color}
        weight={weight}
      />
      <Toaster
        position="top-center"
        reverseOrder={true}
        toastOptions={{
          style: {
            width: `max-content`,
            border: "1px solid #b3b3b3",
            fontSize: ".9rem",
            padding: "16px 20px",
            color: "#FFF",
            backgroundColor: "#333",
            fontFamily: `Roboto Mono`,
          },
        }}
      />
    </>
  );
}

export default App;
