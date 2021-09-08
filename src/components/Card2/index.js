import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./styles.css";

function Card2(props) {
  return (
    <div
      class="card mb-3"
      style={{ maxWidth: "540px" }}
      // onClick={() => history.pushState}
    >
      <Link to="/news/:id">
        <div class="row g-0">
          <div class="col-md-6">
            <div class="card-body">
              <h5 class="card-title">{props.title}</h5>
              <p class="card-text">{props.content}</p>
            </div>
          </div>
          <div class="col-md-4">
            <img src={props.src} class="img-fluid rounded-start" alt="..." />
          </div>
        </div>
      </Link>
    </div>
  );
}
export default withRouter(Card2);
