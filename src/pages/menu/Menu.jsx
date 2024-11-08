import React from "react";
import "./Menu.css";
import { Card, Footer, Navbar } from "../../component";
import { DotDivider, LinkedButton } from "../../ui";
import * as img from ".";
import { Element } from "react-scroll";

const Menu = () => {
  const buttonData = [
    { label: "New", href: "new" },
    { label: "Chickenjoy Meal Deals", href: "meal" },
    { label: "Buckets and Platters", href: "bucket" },
    { label: "Jolly Spaghetti", href: "spag" },
    { label: "Yumburger", href: "yum" },
    { label: "Burger Steak", href: "steak" },
    { label: "Wrap & Sandwiches", href: "wrap" },
    { label: "Chicken Strips", href: "strips" },
    { label: "Sides & Extra", href: "sides" },
    { label: "Dessert", href: "dessert" },
    { label: "Beverages", href: "beverages" },
  ];

  const mealNames = [
    "2-pc Chickenjoy",
    "2-pc Chickenjoy Combo Mixed Spicy & Regular",
    "2-pc Chickenjoy Combo Value Meal",
    "2-pc Chickenjoy Combo",
    "2-pc Chickenjoy Spicy",
    "2-pc Chickenjoy Value Meal",
    "3-pc Spicy Chickenjoy Combo Value Meal",
    "3-pc Chickenjoy Combo",
    "2-pc Chickenjoy",
    "3-pc Chickenjoy Combo Spicy",
    "2-pc Chickenjoy Combo Spicy",
    "2-pc Chickenjoy Mixed Spicy & Regular",
    "3-pc Chickenjoy Combo Mixed Spicy & Regular",
    "Chickenjoy & Spaghetti",
    "Spicy Chickenjoy & Spaghetti",
    "2-pc Chickenjoy & Spaghetti",
    "2-pc Chickenjoy Mixed Spicy & Regular",
    "2-pc Spicy Chickenjoy Value Meal",
    "2-pc Mix Chickenjoy Value Meal",
    "2-pc Spicy Chickenjoy Combo Value Meal",
    "2-pc Mix Chickenjoy Combo Value Meal",
    "3-pc Mix Chickenjoy Combo Value Meal",
    "Chickenjoy Spaghetti Value Meal",
    "Spicy Chickenjoy Spaghetti Value Meal",
    "2-pc Chickenjoy Spaghetti Value Meal",
    "2-pc Spicy Chickenjoy Spaghetti Value Meal",
    "2-pc Mix Chickenjoy Spaghetti Value Meal",
  ];

  const bucketNames = [
    "6-pc Chickenjoy Bucket",
    "6-pc Mix Chickenjoy Bucket",
    "6-pc Spicy Chickenjoy Bucket",
    "8-pc Chickenjoy Bucket",
    "8-pc Spicy Chickenjoy Bucket",
    "8-pc Mix Chickenjoy Bucket",
    "3-pc Spicy Chickenjoy Combo Value Meal",
    "8-pc Spicy Chickenjoy Bucket",
    "8-pc Mix Chickenjoy Bucket",
  ];

  const spagNames = [
    "Jolly Spaghetti",
    "Value Meal Jolly Spaghetti",
    "Value Meal Jolly Spaghetti & Regular Yum",
    "Jolly Spaghetti Pan Good for 4",
    "Jolly Spaghetti Pan Good for 5",
  ];

  const yumNames = [
    "Regular Yum",
    "Regular Yum Cheese",
    "Double TLC",
    "Value Meal Regular Yum",
    "Value Meal Regular Yum with Cheese",
    "Value Meal Double TLC",
  ];

  const steakNames = [
    "2-pc Burgersteak",
    "3-pc Burgersteak",
    "Value Meal 2-pc Burgersteak",
    "Value Meal 3-pc Burgersteak",
    "Burgersteak Pan Good for 6",
    "Burgersteak Pan Good for 8",
  ];

  const wrapNames = [
    "Jolly Hotdog",
    "Jolly Wrap",
    "Chicken Sandwich with Cheese",
    "Chicken Sandwich with Beef Bacon",
    "Spicy Chicken Sandwich with Beef Bacon",
    "Value Meal Jolly Hotdog",
    "Value Meal Jolly Wrap",
    "Value Meal Chicken Sandwich with Cheese",
    "Value Meal Spicy Chicken Sandwich with Cheese",
    "Value Meal Chicken Sandwich with Beef Bacon",
    "Value Meal Spicy Chicken Sandwich with Beef Bacon",
  ];

  const stripsNames = [
    "3-pc Chicken Strips",
    "3-pc Spicy Chicken Strips",
    "4-pc Chicken Strips",
    "4-pc Spicy Chicken Strips",
    "Value Meal 3-pc Chicken Strips",
    "Value Meal 3-pc Spicy Chicken Strips",
    "Value Meal 4-pc Chicken Strips",
    "Value Meal 4-pc Spicy Chicken Strips",
  ];

  const sidesNames = [
    "Mashed Potato",
    "Coleslaw",
    "Coleslaw (Large)",
    "Jolly Fries (Small)",
    "Jolly Fries (Medium)",
    "Jolly Fries (Large)",
    "Family Fries",
    "Buttered Corn",
    "Macaroni Soup",
    "Extra Steak Sauce",
    "Extra Gravy",
    "Extra Rice",
    "Extra Bun",
  ];

  const dessertNames = [
    "Choco Sundae",
    "Strawberry Sundae",
    "Peach Mango Pie",
    "Cup Twirl",
  ];

  const beveragesNames = ["Jolly Float", "Bottled Water", "Pepsi", "7UP"];

  return (
    <>
      <header>
        <nav>
          <Navbar />
        </nav>
      </header>

      <main className="menu-main">
        <h1>Menu</h1>

        <section
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h2>Jollibee is well-loved by fans</h2>
          <p>
            Try our menu to see what makes Jollibee loved by millions around the
            world. We’re so excited to serve you!
          </p>
          <LinkedButton
            label={"VIEW DINE IN MENU"}
            classname={"dine-in"}
            source={"menu"}
          />
        </section>

        <div id="new"></div>
        <section className="promo">
          <DotDivider />
          <img src={img.promo} alt="promo" />
        </section>

        <section className="menu-list">
          <Element name="menu" />
          <div
            className="padding-left"
            style={{ flexGrow: 1, paddingLeft: "3em" }}
          >
            <DotDivider />
            <Element name="meal" />
            <h3>Chickenjoy Meal Deals</h3>
            <div className="menu-content">
              {mealNames.map((mealName, index) => (
                <Card
                  key={index}
                  source={img[`meal${index + 1}`]}
                  name={mealName}
                />
              ))}
            </div>

            <DotDivider />
            <Element name="bucket" />
            <h3>Buckets and Platters</h3>
            <div className="menu-content">
              {bucketNames.map((bucketName, index) => (
                <Card
                  key={index}
                  source={img[`bucket${index + 1}`]}
                  name={bucketName}
                />
              ))}
            </div>

            <DotDivider />
            <Element name="spag" />
            <h3>Jolly Spaghetti</h3>
            <div className="menu-content">
              {spagNames.map((spagName, index) => (
                <Card
                  key={index}
                  source={img[`spag${index + 1}`]}
                  name={spagName}
                />
              ))}
            </div>

            <DotDivider />
            <Element name="yum" />
            <h3>Yumburger</h3>
            <div className="menu-content">
              {yumNames.map((yumName, index) => (
                <Card
                  key={index}
                  source={img[`yum${index + 1}`]}
                  name={yumName}
                />
              ))}
            </div>

            <DotDivider />
            <Element name="steak" />
            <h3>Burger Steak</h3>
            <div className="menu-content">
              {steakNames.map((steakName, index) => (
                <Card
                  key={index}
                  source={img[`steak${index + 1}`]}
                  name={steakName}
                />
              ))}
            </div>

            <DotDivider />
            <Element name="wrap" />
            <h3>Wrap & Sandwiches</h3>
            <div className="menu-content">
              {wrapNames.map((wrapName, index) => (
                <Card
                  key={index}
                  source={img[`wrap${index + 1}`]}
                  name={wrapName}
                />
              ))}
            </div>

            <DotDivider />
            <Element name="strips" />
            <h3>Chicken Strips</h3>
            <div className="menu-content">
              {stripsNames.map((stripsName, index) => (
                <Card
                  key={index}
                  source={img[`strips${index + 1}`]}
                  name={stripsName}
                />
              ))}
            </div>

            <DotDivider />
            <Element name="sides" />
            <h3>Sides & Extra</h3>
            <div className="menu-content">
              {sidesNames.map((sidesName, index) => (
                <Card
                  key={index}
                  source={img[`sides${index + 1}`]}
                  name={sidesName}
                />
              ))}
            </div>

            <DotDivider />
            <Element name="dessert" />
            <h3>Dessert</h3>
            <div className="menu-content">
              {dessertNames.map((dessertName, index) => (
                <Card
                  key={index}
                  source={img[`dessert${index + 1}`]}
                  name={dessertName}
                />
              ))}
            </div>

            <DotDivider />
            <Element name="beverages" />
            <h3>Beverages</h3>
            <div className="menu-content">
              {beveragesNames.map((beveragesName, index) => (
                <Card
                  key={index}
                  source={img[`beverages${index + 1}`]}
                  name={beveragesName}
                />
              ))}
            </div>
          </div>

          <aside>
            <div className="sidebar">
              <h3 style={{ textAlign: "center" }}>
                Select your favourite <br /> Jollibee Menu item:
              </h3>
              {buttonData.map((data, index) => (
                <LinkedButton
                  key={index}
                  label={data.label}
                  source={data.href}
                  classname="sidebar-btn"
                />
              ))}
            </div>
          </aside>
        </section>
      </main>

      <footer style={{ marginTop: "4em" }}>
        <Footer />
      </footer>
    </>
  );
};

export default Menu;
