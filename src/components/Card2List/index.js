import { useHistory } from "react-router-dom";
import React from "react";
import Card2 from "../Card2";
import news from "./newsData";

import "./styles.css";

function Card2List() {
  let history = useHistory();
  const handleClick = () => {
    history.push("/news");
    console.log("====================================");
    console.log("CLICKED");
    console.log("====================================");
  };
  return (
    <div className="grid-container">
      {news.map((news) => (
        <Card2
          key={news.id}
          title={news.title}
          path={news.category}
          src={news.imgUrl}
          click={handleClick}
        />
      ))}
    </div>
  );
}

export default Card2List;
