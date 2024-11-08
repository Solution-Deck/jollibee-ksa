import React from "react";
import { BookingForm, Navbar } from "../../component";
import "./booknow.css";
import hero_img from "../../assets/Jollibe-Logo.png";

const Booknow = () => {
  return (
    <>
      <header>
        <nav>
          <Navbar />
        </nav>
      </header>

      <main className="booknow-main">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h1>Book a Party with Jollibee</h1>
        </div>

        <section className="hero-section">
          <div className="img-section">
            <img
              src={hero_img}
              alt="Jollibee"
              style={{ width: "400px", height: "auto" }}
            />
          </div>

          <div className="form-section">
            <h2>
              Make celebrations even more special with{" "}
              <span style={{ color: "#cc0d2e" }}>Jollibee!</span> <span style={{fontSize:"2em"}}>&#127881;</span>
            </h2>
            <h2>
                
            </h2>
            <div className="booking-form">
                <BookingForm />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Booknow;
