import React, { useState, useRef, useEffect } from "react";
import logo from "./assets/nav-logo.jpg";
import { Button } from "../../ui";
import { Link, NavLink } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <>
      <div className="nav-bg">
        <div>
          <Link to="/">
            <img className="nav-logo" src={logo} alt="Jollibee KSA" />
          </Link>
        </div>

        <div style={{ display: "flex", alignItems: "center" }}>
          <a href="https://main.order.tryotter.com/a46f86a1-3ca6-4d29-ae1a-ced896188089" target="_blank" rel='noreferrer'>
            <Button label="ORDER NOW" classname={"order-now-1"} />
          </a>

          <div
            className={`hamburger-icon ${isMenuOpen ? "menu-open" : ""}`}
            onClick={toggleMenu}
          >
            ME
            <br />
            NU
          </div>

          {isMenuOpen && (
            <div className="menu" ref={menuRef}>
              <div className="close-btn" onClick={toggleMenu}>
                &times;
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  paddingTop: "60px",
                }}
              >
                <NavLink
                  to="/"
                  style={{
                    color: window.location.pathname === "/" ? "#fa8003" : "",
                  }}
                  end
                >
                  !Home of the Famous Chickenjoy
                </NavLink>
                <NavLink
                  to="/menu"
                  style={{
                    color:
                      window.location.pathname === "/menu" ? "#fa8003" : "",
                  }}
                >
                  Menu
                </NavLink>
                <NavLink
                  to="/book-now"
                  style={{
                    color:
                      window.location.pathname === "/book-now" ? "#fa8003" : "",
                  }}
                >
                  Book Now
                </NavLink>
                <NavLink
                  to="/storelocations"
                  style={{
                    color:
                      window.location.pathname === "/storelocations"
                        ? "#fa8003"
                        : "",
                  }}
                >
                  Store Locations
                </NavLink>
                <NavLink
                  to="/aboutus"
                  style={{
                    color:
                      window.location.pathname === "/aboutus" ? "#fa8003" : "",
                  }}
                >
                  About us
                </NavLink>
                <NavLink
                  to="/beesafe"
                  style={{
                    color:
                      window.location.pathname === "/beesafe" ? "#fa8003" : "",
                  }}
                >
                  Beesafe
                </NavLink>
                <NavLink
                  to="/contactus"
                  style={{
                    color:
                      window.location.pathname === "/contactus"
                        ? "#fa8003"
                        : "",
                  }}
                >
                  Contact Us
                </NavLink>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
