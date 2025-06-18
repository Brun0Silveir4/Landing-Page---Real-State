import Button from "../button/Button";
import "./HouseCard.scss";

export default function HouseCard({
  heightContainer,
  paddingContainer,
  textTop,
  widthText,
  widthLabel,
  title,
  subtitle,
  image,
  widthImage,
}) {
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
          <p>
            {subtitle}
          </p>
        </div>

        <div className="label" style={{ width: `${widthLabel}px` }}>
          <input type="text" placeholder="Enter your email" className="input" />
          <Button dark text={"Get a Quote"} />
        </div>
      </div>

      <div className="image-property" style={{ width: `${widthImage}px` }}>
        <img src={image} alt="" className="image1" />
      </div>
    </div>
  );
}
