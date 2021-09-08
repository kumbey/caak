import React from "react";
import { Link } from "react-router-dom";

function CardItem(props) {
  return (
    <>
      <li className="cards_item">
        <Link className="cards_item_link" to={props.path}>
          <figure className="cards_item_pic-wrap">
            <img src={props.src} className="cards_item_img" alt=""></img>
          </figure>
          <h5 className="cards_item_txt">{props.text}</h5>
        </Link>
      </li>
    </>
  );
}

export default CardItem;
