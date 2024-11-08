import React, { useEffect, useState } from "react";
import "./App.css";
import { Footer, Navbar } from "./component";
import { Link, NavLink } from "react-router-dom";
import { Button } from "./ui";
import Marquee from "react-fast-marquee";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import elements from "./assets/side-elements.jpeg";
import hero_img from "./assets/hero-img.jpg";
import hero_img_2 from "./assets/hero-img-2.jpg";
import hero_img_3 from "./assets/hero-img-3.jpeg";
import bs1 from "./assets/best-seller-1.jpg";
import bs2 from "./assets/best-seller-2.jpg";
import bs3 from "./assets/best-seller-3.jpg";
import bs4 from "./assets/best-seller-4.jpeg";
import bs5 from "./assets/best-seller-5.jpg";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Divider,
  Typography,
} from "@mui/material";
import SouthWestIcon from '@mui/icons-material/SouthWest';

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [gradientWidth, setGradientWidth] = useState(220);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          dots: false
        }
      }
    ]
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const parallaxScale = 1 + scrollPosition * 0.0003;

  useEffect(() => {
    const handleResize = () => {
      const newGradientWidth = window.innerWidth <= 820 ? 50 : 220;
      setGradientWidth(newGradientWidth);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <header>
        <nav>
          <Navbar />
        </nav>
      </header>

      <main>
        <section className="first-sec">
          <Slider {...settings} style={{height:"auto"}}>
                <img
                  src={hero_img}
                  alt="best-seller"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
                <img
                  src={hero_img_2}
                  alt="best-seller"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
                <img
                  src={hero_img_3}
                  alt="best-seller"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
          </Slider>
          <a
            href="/menu"
            rel="noreferrer"
          >
            <Button label={"ORDER NOW"} classname={"order-now-2"} />
          </a>
        </section>

        <section className="second-sec">
          <h1>Welcome to Jollibee!</h1>
          <p>
            Jollibee is famous across the world for delicious crispy fried
            Chicken and fast food classics like Burgers and Pies. We’ve been
            serving our delicious Chickenjoy, Jolly Spaghetti, and Yumburgers
            since 1978.
          </p>
          <p>
            Come experience our hospitality as well as the juiciest, tastiest,
            and crispiest fried chicken around.
            <br />
            See you soon!
          </p>
          <img
            src={elements}
            alt="elements"
            className="parallax-img"
            style={{ transform: `scale(${parallaxScale})` }}
          />
        </section>

        <section className="third-sec">
          <h1>The Best Sellers</h1>
          <Link to="/menu">
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Marquee
                pauseOnHover
                gradient={true}
                gradientWidth={gradientWidth}
              >
                <div>
                  <img src={bs1} alt="best-seller1" />
                </div>
                <div>
                  <img src={bs2} alt="best-seller2" />
                </div>
                <div>
                  <img src={bs3} alt="best-seller3" />
                </div>
                <div>
                  <img className="indiv" src={bs4} alt="best-seller4" />
                </div>
                <div>
                  <img src={bs5} alt="best-seller5" />
                </div>
              </Marquee>
            </div>
          </Link>
        </section>

        <section className="fourth-sec">
          <div className="our-menu">
            <h1>Our Menu</h1>
            <p>
              Fast food classics made with joy. Enjoy our great-tasting range of
              products — Fried Chicken, Burgers, Pies, Spaghetti, Rice Bowls,
              Wraps and many more!
            </p>
          </div>
          <div className="location">
            <h1>Our Locations</h1>
            <Link to="/storelocations">
              <Button label={"VIEW LOCATIONS"} classname={"location-btn"} />
            </Link>
          </div>
        </section>

        <section className="fifth-sec">
          <h1>Say Hi!</h1>
          <p>
            Follow us on{" "}
            <a
              href="https://www.facebook.com/JollibeeSaudiArabia"
              target="_blank"
              rel="noreferrer"
              style={{ color: "#3b5998" }}
            >
              Facebook
            </a>{" "}
          </p>

          <Divider sx={{ mx:"3em", my:"5em", background:"#fa8003", height:"2px", borderRadius:"20px"}}/>

          <h1>Frequently Asked Questions (FAQS)</h1>

          <Box sx={{fontFamily:"Faro, sans-serif", textAlign:'left'}} paddingX={{ xs: 2, sm: 4, lg: 30 }} paddingBottom={5} paddingTop={2}>
            <Accordion sx={{backgroundColor:"#65357e", color:"white", my:"5px"}}>
              <AccordionSummary
                expandIcon={<SouthWestIcon sx={{color:"white"}}/>}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography variant="h4" sx={{fontSize:{xs:"22px", sm:"28px", md:"35px"}}}>Is Jollibee delivery available nationwide?</Typography>
              </AccordionSummary>
              <AccordionDetails sx={{backgroundColor:"white", color:"black"}}>
                <Typography variant="caption" sx={{fontSize:{xs:"1em", sm:"1.2em", md:"1.5em"}}}>
                  Yes, Jollibee delivery is available nationwide.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion sx={{backgroundColor:"#65357e", color:"white", my:"8px"}}>
              <AccordionSummary
                expandIcon={<SouthWestIcon sx={{color:"white"}}/>}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography variant="h4" sx={{fontSize:{xs:"22px", sm:"28px", md:"35px"}}}>Where can I check your menu options?</Typography>
              </AccordionSummary>
              <AccordionDetails sx={{backgroundColor:"white", color:"black"}}>
                <Typography variant="caption" sx={{fontSize:{xs:"1em", sm:"1.2em", md:"1.5em"}}}>
                  You sure can! Please click <NavLink to="/menu" style={{color:"#fa8003"}}>here</NavLink> to see our delicious line up. 🤤
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion sx={{backgroundColor:"#65357e", color:"white", my:"5px"}}>
              <AccordionSummary
                expandIcon={<SouthWestIcon sx={{color:"white"}}/>}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography variant="h4" sx={{fontSize:{xs:"22px", sm:"28px", md:"35px"}}}>How to book a Jollibee Party?</Typography>
              </AccordionSummary>
              <AccordionDetails sx={{backgroundColor:"white", color:"black"}}>
                <Typography variant="caption" sx={{fontSize:{xs:"1em", sm:"1.2em", md:"1.5em"}}}>
                  You may contact us or book a party <NavLink to="/book-now" style={{color:"#fa8003"}}>here.</NavLink>
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Box>
        </section>

      </main>

      <footer>
        <div className="home-footer">
          <div>
            <h2> Quick Links</h2>
            <ul
              style={{
                listStyle: "none",
                display: "grid",
                gridTemplateColumns: "repeat(2,1fr)",
                gap: "3em",
              }}
            >
              <li>
                <Link to="/storelocations">Find Us</Link>
              </li>
              <li>
                <Link to="/menu">Menu</Link>
              </li>
              <li>
                <Link to="/aboutus">About Us</Link>
              </li>
              <li>
                <Link to="/contactus">Contact Us</Link>
              </li>
            </ul>
          </div>

          <div>
            <h2> Our Locations</h2>
            <ul
              style={{
                listStyle: "none",
                display: "grid",
                gridTemplateColumns: "repeat(2,1fr)",
                gap: "1em",
              }}
            >
              <li>Jeddah</li>
              <li>Taif</li>
              <li>Yanbu</li>
              <li>Al-Khobar</li>
              <li>Riyadh</li>
              <li>Al-Jubail</li>
            </ul>
          </div>
        </div>

        <Footer />
      </footer>
    </>
  );
}

export default App;
