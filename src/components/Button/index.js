import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const STYLES = ["btn--primary", "btn--outline"];
const SIZES = ["btn--medium", "btn--large"];

export const Button = ({ children, type, onClick, btnStyle, btnSize }) => {
  const checkButtonStyle = STYLES.includes(btnStyle) ? btnStyle : STYLES[0];

  const checkButtonSize = SIZES.includes(btnSize) ? btnSize : SIZES[0];

  return (
    <Link to="sign-up" className="btn-mobile">
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
};
