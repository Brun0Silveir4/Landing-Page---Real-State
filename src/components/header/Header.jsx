import "./Header.scss";
import Logo from "../../../public/images/Logo.svg";
import { LuSearch } from "react-icons/lu";
import Button from "../button/Button";
import useWindowDimensions from "../../hooks/useWindowDimension";
import HamburguerMenu from "../Hamburguer-menu/hamburguerMenu";
import { slide as Menu } from "react-burger-menu";

export default function Header() {
  const { width } = useWindowDimensions();
  const isMobile = width < 1100;


  return (
    <div className="header">
      <div className="logo">
        <img src={Logo} alt="Logo" className="logo-image" />
      </div>

      {isMobile ? (
        <HamburguerMenu />
      ) : (
        <div className="navigation">
          <p className="header-items">About Us</p>
          <p className="header-items">Projects</p>
          <p className="header-items">Agents</p>
          <p className="header-items">Services</p>
          <p className="header-items">Listings</p>
          <LuSearch size={24} color="#1F1F1F" cursor={"pointer"} />
        </div>
      )}

      {!isMobile && (
        <div className="btn-group-header">
          <p className="btn-other">Other services</p>
          <Button text={"Contact Us"} />
        </div>
      )}
    </div>
  );
}
