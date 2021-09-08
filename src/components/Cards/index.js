import React from "react";
import CardItem from "./CardItem";
import "./style.css";
import img from "../../image/w1.png";
import img1 from "../../image/w2.png";
import img2 from "../../image/m1.png";
import img3 from "../../image/m2.png";

function Cards() {
  return (
    <div className="cards">
      <div className="cards_container">
        <div className="cards_wrapper">
          <h1>WOMEN</h1>
          <ul className="cards_items">
            <CardItem src={img} text="CARDIGANS" path="/women" />
            <CardItem src={img1} text="DRESSES" path="/women" />
            <CardItem src={img} text="CARDIGANS" path="/women" />
          </ul>
          <h1>MAN</h1>
          <ul className="cards_items">
            <CardItem src={img2} text="TURTLENECK" path="/men" />
            <CardItem src={img3} text="POLO" path="/men" />
            <CardItem src={img2} text="TURTLENECK" path="/men" />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
