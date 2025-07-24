
import { menu, slider, text, links } from "./Menu.module.css";
import Button from "./Button";
import img1 from "../assets/chef-preparing-dessert-2022-03-14-17-10-23-utc-610x610.jpg";
import { Link } from "react-router-dom";

const Menu = ({ onMouseOver, onMouseLeave }) => {


  return (
    <div className={menu} onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>
      <div className={text}>
        <h2>Served with a Modern Twist.</h2>
        <p>
          From mouthwatering appetizers to decadent desserts, our culinary
          journey is an exploration of taste, texture, and artistry.
        </p>
        <Button style={{ padding: "16px", textTransform: "uppercase" }}>
          <Link to="/Reservation"> Make A Reservation</Link>
        </Button>
      </div>
      <ul className={links}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/aAbout">About</Link>
        </li>
        <li>
          <Link to="/Menu">Our Menus</Link>
        </li>
        <li>
          <Link to="/">Contact</Link>
        </li>
        <li>
          <Link to="/Reservation">Reservation</Link>
        </li>
      </ul>
      <div className={slider}>
        <img
          src={img1}
          alt=""
          style={{ width: "100%", borderRadius: "24px" }}
        />
      </div>
    </div>
  );
};

export default Menu;
