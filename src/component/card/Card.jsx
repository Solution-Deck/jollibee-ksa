import React from "react";
import { ButtonPage } from "../../ui";

const Card = ({ source, name }) => {
  return (
    <div
      className="each-card"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        width: "400px",
        border: "solid black 1px",
        padding: "2em",
        margin: "0.5em",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
        }}
      >
        <div
          style={{
            alignSelf: "center",
          }}
        >
          <img src={source} alt={name} />
        </div>

        <h4 style={{ textAlign: "left", fontSize: "20px" }}>{name}</h4>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "flex-end",
        }}
      >
        <ButtonPage href={'https://main.order.tryotter.com/a46f86a1-3ca6-4d29-ae1a-ced896188089'} label={"+Add To Order"} classname={"add-order-btn"} />
      </div>
    </div>
  );
};

export default Card;
