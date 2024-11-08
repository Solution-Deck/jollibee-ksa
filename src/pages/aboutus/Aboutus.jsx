import React from "react";
import "./aboutus.css";
import { Footer, Navbar } from "../../component";
import {
  flag1,
  flag10,
  flag11,
  flag12,
  flag13,
  flag2,
  flag3,
  flag4,
  flag5,
  flag6,
  flag7,
  flag8,
  flag9,
} from ".";
import Marquee from "react-fast-marquee";

const Aboutus = () => {
  const renderFlags = (flagArray) => {
    return flagArray.map((flag, index) => (
      <img key={index} src={flag} alt={`flag-${index + 1}`} />
    ));
  };

  return (
    <>
      <header>
        <nav>
          <Navbar />
        </nav>
      </header>

      <main className="aboutus-main">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h1>OUR STORY</h1>
        </div>
        <p>
          We are the largest Asian restaurant company and the largest fast-food
          chain in the Philippines, operating a Filipino network of more than
          1074 restaurants, as the dominant leader in the Philippine market.
        </p>

        <div>
          <Marquee>
            {renderFlags([
              flag1,
              flag2,
              flag3,
              flag4,
              flag5,
              flag6,
              flag7,
              flag8,
              flag9,
              flag10,
              flag11,
              flag12,
              flag13,
            ])}
          </Marquee>
        </div>

        <p>
          Jollibee has embarked on a robust international expansion plan now
          with more than 180 branches worldwide in the USA, Canada, UAE, Kuwait,
          Qatar, Saudi Arabia, Bahrain, Oman, Vietnam, Brunei, Singapore and
          Hong Kong. With its delicious, crunchy chicken with original and spicy
          flavours, and the beloved spaghetti for its sweet sauce mixed with
          ground beef and sliced ​​hot dogs. Jollibee is also famous for its
          sweets, we have our favorite chocolate sundae. Our company is keen to
          provide an enjoyable dining experience for its customers by providing
          delicious food.
        </p>
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Aboutus;
