import "./Header.scss";
import Logo from "../../../public/images/Logo.svg";
import { LuSearch } from "react-icons/lu";
import Button from "../button/Button";

export default function Header() {
  return (
    <div className="header">
      <div className="logo">
        <img src={Logo} alt="" className="logo-image" />
      </div>
      <div className="navigation">
        <p className="header-items">About Us</p>
        <p className="header-items">Projects</p>
        <p className="header-items">Agents</p>
        <p className="header-items">Services</p>
        <p className="header-items">Listings</p>
        <LuSearch size={24} color="#1F1F1F" cursor={"pointer"} />
      </div>
      <div className="btn-group-header">
        <p className="btn-other">Other services</p>
        <Button text={"Contact Us"} />
      </div>
    </div>
  );
}
