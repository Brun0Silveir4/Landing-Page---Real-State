import House from "../../../public/images/House1.png"
import Button from "../button/Button";
import "./House1.scss"

export default function House1() {
  return (
    <div className="property-card">
      <div className="text-property">
        <div className="welcome">
          <p>Welcome to Realstate</p>
        </div>

        <div className="title">
          <p>Manage Your Property</p>
        </div>

        <div className="subtitle">
          <p>
            Your will have everything nearby supermarket, buses, station, the
            carmen neighborhood, etc
          </p>
        </div>

        <div className="label">
          <input type="text" placeholder="Enter your email" className="input" />
          <Button dark text={"Get a Quote"} />
        </div>
      </div>

      <div className="image-property">
        <img src={House} alt="" className="image1" />
      </div>
    </div>
  );
}
