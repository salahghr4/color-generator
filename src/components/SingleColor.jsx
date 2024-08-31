import toast from "react-hot-toast";
import { FaRegCircle } from "react-icons/fa";
import { MdOutlineFileCopy } from "react-icons/md";

const SingleColor = ({ color }) => {
  const { hex, type, weight } = color;

  const copyToClipboard = async () => {
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(`#${hex}`);
        toast.success(`'#${hex}' copied to clipboard!`);
      } catch {
        toast.error("Failed to copy color to clipboard");
      }
    } else {
      toast.error("Clipboard access not available");
    }
  };

  return (
    <div
      className={`color-item ${color.getBrightness() > 55 ? "light" : "dark"} ${
        type === "base" ? "base" : ''
      }`}
      style={{ backgroundColor: `#${hex}` }}
    >
      <div>
        <div className="item-percent">
          {type !== "base" && <FaRegCircle className={`${type}-icon`} />}
          <p>{weight}%</p>
        </div>
        <p>#{hex}</p>
      </div>
      <div className="copy-btn">
        <button
          type="button"
          className="icon-btn"
          onClick={copyToClipboard}
        >
          <MdOutlineFileCopy />
        </button>
      </div>
    </div>
  );
};

export default SingleColor;
