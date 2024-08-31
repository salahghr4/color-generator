import Values from "values.js";
import SingleColor from "./SingleColor";

const Colors = ({ color, weight }) => {
  const colors = new Values(color).all(weight);

  return (
    <main>
      <div className="colors-wrapper">
        {colors.map((color, index) => {
          return (
            <SingleColor
              color={color}
              key={index}
            />
          );
        })}
      </div>
    </main>
  );
};

export default Colors;
