import React from "react";
import "./contactus.css";
import { Footer, Navbar } from "../../component";
import qrcode from './contact.jpg'

const Contactus = () => {
  return (
    <>
      <header>
        <nav>
          <Navbar />
        </nav>
      </header>

      <main className="contactus-main">
        <h1>For Comments, Feedback and Suggestion</h1>
        <h3>Scan or Click Me</h3>
        <a
          href="https://jfcgrp.service-now.com/csm?id=landing_page&type=feedback&country=Saudi"
          target="_blank"
          rel="noreferrer"
        >
          <img src={qrcode} alt="https://jfcgrp.service-now.com/csm?id=landing_page&type=feedback&country=Saudi" />
        </a>
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Contactus;
