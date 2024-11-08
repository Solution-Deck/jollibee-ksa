import React, { useState } from "react";
import { useCookies } from "react-cookie";
import { Link } from "react-router-dom";
import "./cookie.css";

const Cookies = () => {
  // eslint-disable-next-line
  const [cookies, setCookie] = useCookies(["cookieConsent"]);
  const [display, setDisplay] = useState(true);

  const giveCookieConsent = () => {
    setCookie("cookieConsent", true, { path: "/" });
  };

  const handleClose = () => {
    setDisplay(false);
  };

  if (!display) return null;

  return (
    <div className="cookieConsent">
      <p>
        We use cookies on our website to see how you interact with it. By
        accepting, you agree to our use of such cookies.
        <Link href="/"> See Privacy Policy</Link>
      </p>
      <div style={{ display: "flex", gap: "0.5em" }}>
        <button className="cookie-btn" onClick={giveCookieConsent}>
          Accept
        </button>
        <button className="cookie-btn dismiss" onClick={handleClose}>
          x
        </button>
      </div>
    </div>
  );
};

export default Cookies;
