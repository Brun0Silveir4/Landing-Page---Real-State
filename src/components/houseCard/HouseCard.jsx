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
  gap,
  gapHeading,
  titleSize,
  subtitleWidth
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
      toast.warning("Por favor, preencha o campo antes de continuar!", {
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
        style={{ width: `${widthText}px`, gap: `${gap}px` }}
      >
        <div className="heading-card" style={{gap: `${gapHeading}px`}}>
          {textTop ? (
            <div className="welcome">
              <p>Welcome to Realstate</p>
            </div>
          ) : (
            ""
          )}

          <div className="title">
            <p style={{fontSize: `${titleSize}px`}}>{title}</p>
          </div>

          <div className="subtitle" style={{width: `${subtitleWidth}px`}}>
            <p>{subtitle}</p>
          </div>
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
