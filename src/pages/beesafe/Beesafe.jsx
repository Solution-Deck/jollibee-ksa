import React from "react";
import "./Beesafe.css";
import { Footer, Navbar } from "../../component";
import {
  beesafe,
  delrpo1,
  delrpo2,
  delrpo3,
  reminder1,
  reminder2,
  reminder3,
  reminder4,
  safety1,
  safety2,
  safety3,
  safety4,
} from ".";

const Beesafe = () => {
  return (
    <>
      <header>
        <nav>
          <Navbar />
        </nav>
      </header>

      <main className="beesafe-main">
        <img className="beesafe" src={beesafe} alt="" />

        <section>
          <div className="beesafe-content">
            <h1> We follow safe delivery procedures:</h1>
            <div className="gridbox">
              <div className="beesafe-card">
                <img src={delrpo1} alt="hygienic prepartion" />
                <ul>
                  <li>Use of gloves and portioning tools.</li>
                  <li>Sealed delivery bags.</li>
                  <li>Sanitized delivery equipment.</li>
                </ul>
                <div className="divider"></div>
              </div>

              <div className="beesafe-card">
                <img src={delrpo2} alt="ride and crew safety" />
                <ul>
                  <li>Use of gloves and portioning tools.</li>
                  <li>Sealed delivery bags.</li>
                  <li>Sanitized delivery equipment.</li>
                </ul>
                <div className="divider"></div>
              </div>

              <div className="beesafe-card">
                <img src={delrpo3} alt="contactless delivery" />
                <ul>
                  <li>Use of gloves and portioning tools.</li>
                  <li>Sealed delivery bags.</li>
                  <li>Sanitized delivery equipment.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="beesafe-content">
            <h1> Because your safety is our priority, our crew ensures:</h1>
            <div className="gridbox">
              <div className="beesafe-card">
                <img src={safety1} alt="hygienic prepartion" />
                <ul>
                  <h2>Temperature Checks</h2>
                  <li>
                    We do temperature checks regularly & before entering the
                    restaurant.
                  </li>
                </ul>
                <div className="divider"></div>
              </div>

              <div className="beesafe-card">
                <img src={safety2} alt="ride and crew safety" />
                <ul>
                  <h2>Contactless Preparation</h2>
                  <li>
                    We handle our ingredients with the right gloves and
                    portioning tools.
                  </li>
                </ul>
                <div className="divider"></div>
              </div>

              <div className="beesafe-card">
                <img src={safety3} alt="contactless delivery" />
                <ul>
                  <h2>Workplace Sanitation</h2>
                  <li>
                    We frequently clean and sanitize both our kitchen and your
                    seating area.
                  </li>
                </ul>
                <div className="divider"></div>
              </div>

              <div className="beesafe-card">
                <img src={safety4} alt="contactless delivery" />
                <ul>
                  <h2>Proper Hygiene</h2>
                  <li>
                    We wash our hands every hour or when necessary with liquid
                    soap.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="beesafe-content">
            <h1>
              Friendly reminders from{" "}
              <span style={{ textDecoration: "underline" }}>
                {" "}
                The World Health Organization:
              </span>
            </h1>
            <div className="gridbox">
              <div className="beesafe-card">
                <img src={reminder1} alt="hygienic prepartion" />
                <ul>
                  <h2>Wash your Hands</h2>
                  <li>
                    Regularly & thoroughly wash your hands with soap & water for
                    about 20 seconds
                  </li>
                </ul>
                <div className="divider"></div>
              </div>

              <div className="beesafe-card">
                <img src={reminder2} alt="ride and crew safety" />
                <ul>
                  <h2>Avoid touching eyes, nose & mouth</h2>
                  <li>
                    Avoid touching your eyes, nose or mouth to reduce exposure
                    to virus
                  </li>
                </ul>
                <div className="divider"></div>
              </div>

              <div className="beesafe-card">
                <img src={reminder3} alt="contactless delivery" />
                <ul>
                  <h2>Maintain Social Distancing</h2>
                  <li>
                    Maintain at least 1 meter distance from anyone. Shaking
                    hands is discouraged
                  </li>
                </ul>
                <div className="divider"></div>
              </div>

              <div className="beesafe-card">
                <img src={reminder4} alt="contactless delivery" />
                <ul>
                  <h2>Practice respiratory hygiene</h2>
                  <li>
                    Regularly & thoroughly wash your hands with soap & water for
                    about 20 seconds
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Beesafe;
