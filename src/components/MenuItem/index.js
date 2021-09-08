import React from "react";
import { Link } from "react-router-dom";

function MenuItem(props) {
  return (
    <li className="nav-item">
      <Link
        to={props.category}
        // className="nav-links"
        className={`nav-links ${props.isActive}`}
        onClick={props.closeMobileMenu}
      >
        {props.title}
      </Link>
    </li>
  );
}
export default MenuItem;
