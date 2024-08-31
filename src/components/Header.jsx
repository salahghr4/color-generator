import { useRef, useState } from "react";
import { FaPercent } from "react-icons/fa";
import { MdColorize } from "react-icons/md";
import { TbArrowsCross } from "react-icons/tb";
import { getRandomColor, isValidColor, normalizeColor } from "../helpers";

const Header = ({ color, setColor, weight, setWeight }) => {
  const [colorInput, setColorInput] = useState(color);
  const colorInputRef = useRef(null);

  const handleColorPicker = (e) => {
    setColor(e.target.value);
    setColorInput(e.target.value);
    colorInputRef.current.setCustomValidity("");
  };

  const handleWeightChange = (e) => {
    const value = e.target.value;
    if (value > 100) {
      setWeight(100);
      return;
    } else if (value < 1) {
      setWeight(1);
      return;
    }
    setWeight(Number(value));
  };

  const handleColorInput = (e) => {
    const input = e.target;
    setColorInput(input.value);
    if (isValidColor(input.value)) {
      input.setCustomValidity("");
      setColor(input.value);
    } else {
      input.setCustomValidity("Invalid color format");
    }
  };

  const handleRandomColor = () => {
    let randomColor = getRandomColor();
    setColor(randomColor);
    setColorInput(randomColor);
    colorInputRef.current.setCustomValidity("");
  };

  return (
    <header className="header">
      <div className="logo">
        <img
          src="/logo.svg"
          alt="app logo"
          className="logo-img"
        />
      </div>
      <div className="input-wrapper">
        <label
          htmlFor="colorPicker"
          className="color-picker-wrapper"
        >
          <MdColorize className="icon" />
          <input
            type="color"
            name="colorPicker"
            id="colorPicker"
            value={normalizeColor(color)}
            onInput={handleColorPicker}
          />
          <div
            className="color-picker"
            style={{ backgroundColor: color }}
          ></div>
        </label>

        <label
          htmlFor="color-input"
          className="color-input-wrapper"
        >
          <input
            type="text"
            name="color-input"
            id="color-input"
            className="color-input"
            ref={colorInputRef}
            value={colorInput}
            onInput={handleColorInput}
          />
        </label>

        <label
          htmlFor="color-weight"
          className="color-weight-wrapper"
        >
          <FaPercent className="percent-icon" />
          <input
            type="number"
            name="color-weight"
            id="color-weight"
            value={weight}
            onChange={handleWeightChange}
            className="color-weight-input"
          />
        </label>
      </div>

      <button
        className="random-btn"
        onClick={handleRandomColor}
        title="Get random color"
      >
        <TbArrowsCross className="random-icon" />
      </button>
    </header>
  );
};

export default Header;
