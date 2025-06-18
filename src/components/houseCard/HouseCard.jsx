import Button from "../button/Button";
import "./HouseCard.scss";
import { toast, ToastContainer, Bounce } from "react-toastify";

export default function HouseCard({
  heightContainer,
  paddingContainer,
  textTop,
  widthText,
  widthLabel,
  title,
  subtitle,
  image,
  value,
  onChange,
  inputName,
  widthImage,
}) {
  const ClearInput = () => {
    if (value) {
      toast.success("Verfique seu email!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      onChange(inputName, "");
    } else {
      toast.warning("Preencha corretamente!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  };
  return (
    <div
      className="property-card"
      style={{ height: `${heightContainer}px`, padding: `${paddingContainer}` }}
    >
      <div
        className={`text-property ${textTop ? "" : "centeredText"}`}
        style={{ width: `${widthText}px` }}
      >
        {textTop ? (
          <div className="welcome">
            <p>Welcome to Realstate</p>
          </div>
        ) : (
          ""
        )}

        <div className="title">
          <p>{title}</p>
        </div>

        <div className="subtitle">
          <p>{subtitle}</p>
        </div>

        <div className="label" style={{ width: `${widthLabel}px` }}>
          <input
            type="text"
            placeholder="Enter your email"
            className="input"
            value={value}
            onChange={(e) => onChange(inputName, e.target.value)}
          />
          <Button dark text={"Get a Quote"} onClick={ClearInput} />
          <ToastContainer />
        </div>
      </div>

      <div className="image-property" style={{ width: `${widthImage}px` }}>
        <img src={image} alt="" className="image1" />
      </div>
    </div>
  );
}
