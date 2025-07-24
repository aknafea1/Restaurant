import { useEffect, useRef, useState } from "react";
import Menu from "./Menu";
import { nav, menu, links, logo, contact } from "./Nav.module.css";
import { Link } from "react-router-dom";
import logoImg from "../assets/Logo-1.png";
const Nav = ({ style }) => {
  const [showMenu, setShowMenu] = useState(false);
  const mouseOverMenu = useRef(false);
  useEffect(() => {
    const handleScroll = () => {
      mouseOverMenu.current = window.scrollY > 0 ? false : "";
      setShowMenu(window.scrollY === 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav className={nav} style={{ ...style }}>
      {showMenu && (
        <Menu
          onMouseOver={() => {
            mouseOverMenu.current = true;
          }}
          onMouseLeave={() => {
            setShowMenu(false);
          }}></Menu>
      )}
      <div style={{ display: "flex", alignItems: "center", gap: "64px" }}>
        <Link
          to="/"
          className={menu}
          onMouseEnter={() => {
            setShowMenu(true);
          }}
          onMouseLeave={() => {
            (async () => {
              await new Promise((r) => setTimeout(r, 800));
              if (!mouseOverMenu.current) {
                console.log(showMenu);
                setShowMenu(false);
              }
            })();
          }}>
          Menu <i className="fa-solid fa-chevron-down"></i>
        </Link>
        <div className={links}>
          <Link to="/">
            <i className="fa-brands fa-facebook"></i>
          </Link>
          <Link to="/">
            <i className="fa-brands fa-instagram"></i>
          </Link>
          <Link to="/">
            <i className="fa-brands fa-yelp"></i>
          </Link>
        </div>
      </div>
      <Link to="/" className={logo}>
        <img src={logoImg} alt="logo" />
      </Link>
      <div className={contact}>
        <i className="fa-solid fa-phone-flip"></i>
      </div>
    </nav>
  );
};

export default Nav;
