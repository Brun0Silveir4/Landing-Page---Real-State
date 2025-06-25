import "./hamburguerMenu.scss"
import { slide as Menu } from "react-burger-menu";

export default function HamburguerMenu(){
    return(
        <Menu right>
          <p className="header-items">About Us</p>
          <p className="header-items">Projects</p>
          <p className="header-items">Agents</p>
          <p className="header-items">Services</p>
          <p className="header-items">Listings</p>
          <p className="header-items">Other services</p>
          <p className="header-items">Contact Us</p>
        </Menu>
    )
}