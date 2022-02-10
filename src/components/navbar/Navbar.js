import React, { useState } from "react";
import "./navbar.css";
import { FaBars, FaFacebook, FaTimes, FaInstagram } from "react-icons/fa";
import { GiCarWheel } from "react-icons/gi";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [slide, setSlide] = useState(false);

  const handleClose = () => {
    setNav(!nav);
  };

  const handleNav = () => {
    setNav(!nav);
    setSlide(!slide);
  };

  return (
    <div className="navbar">
      <div className="container">
        <div className={slide ? "logo slide-right" : "logo"}>
          <h1>Race.</h1>
        </div>

        <ul className={nav ? "nav-menu active" : "nav-menu"}>
          <li>
            <a href="/">
              {" "}
              <Link
                onClick={handleClose}
                activeClass="active"
                to="power"
                spy={true}
                smooth={true}
                duration={500}
              >
                Power
              </Link>
            </a>
          </li>
          <li>
            <a href="/">
              <Link
                onClick={handleClose}
                activeClass="active"
                to="speed"
                spy={true}
                smooth={true}
                duration={500}
              >
                Speed
              </Link>
            </a>
          </li>
          <li>
            <a href="/">
              <Link
                onClick={handleClose}
                activeClass="active"
                to="handling"
                spy={true}
                smooth={true}
                duration={500}
              >
                Handling
              </Link>
            </a>
          </li>
          <li>
            <a href="/">
              <Link
                onClick={handleClose}
                activeClass="active"
                to="options"
                spy={true}
                smooth={true}
                duration={500}
              >
                Options
              </Link>
            </a>
          </li>
          <li>
            <a href="/">
              <Link
                onClick={handleClose}
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                duration={500}
              >
                Contact
              </Link>
            </a>
          </li>

          <div className="mobile-menu">
            <button>Shop</button>
            <button>Account</button>
            <div className="social-icons">
              <FaFacebook className="icon" />
              <FaInstagram className="icon" />
              <GiCarWheel className="icon" />
            </div>
          </div>
        </ul>

        <ul className={nav ? "nav-menu hide" : "nav-menu"}>
          <li>
            <a href="/">Shop</a>
          </li>
          <li>
            <a href="/">Account</a>
          </li>
        </ul>

        <div className="hamburger" onClick={handleNav}>
          {nav ? (
            <FaTimes size={20} style={{ color: "#ffffff" }} />
          ) : (
            <FaBars style={{ color: "#ffffff" }} size={20} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
