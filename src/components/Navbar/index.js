import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "../Button";
import MenuItem from "../MenuItem";
import datas from "./datas";
import "./style.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  const location = useLocation();

  //destructuring pathname from location
  const { pathname } = location;

  //Javascript split method to get the name of the path in array
  const splitLocation = pathname.split("/");

  console.log("=====location======", splitLocation[1]);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="nav-top">
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
              <img
                src="https://static-news.caak.mn/img/logo.png"
                style={{ width: "100px" }}
                alt=""
              />
            </Link>
            <div className="menu-icon" onClick={handleClick}>
              <i className={click ? "fas fa-times" : "fas fa-bars"} />
            </div>
            {button && <Button buttonStyle="btn--outline">НЭВТРЭХ</Button>}
          </div>
          <div className="nav-bot">
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              {datas.map((data) => (
                <MenuItem
                  key={data.id}
                  title={data.title}
                  category={data.category}
                  closeMobileMenu={closeMobileMenu}
                  isActive={
                    splitLocation[1] === data.category ? "isActive" : ""
                  }
                />
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
