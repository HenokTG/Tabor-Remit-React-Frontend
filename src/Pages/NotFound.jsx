import React from "react";

import { FaLongArrowAltLeft } from "react-icons/fa";

function NotFound() {
  return (
    <div className="response-container" style={{ backgroundColor: "#004A59" }}>
      <div className="resp-card" style={{ boxShadow: "none" }}>
        <h1 className="oops-header">Oops!</h1>
        <h2>404 - PAGE NOT FOUND</h2>
        <div className="card-body">
          <div className="info-not-found">
            <p style={{ textAlign: "center" }}>
              Sorry, we couldn’t find the page you’re looking for. Perhaps
              you’ve mistyped the URL? Be sure to check your spelling.
            </p>
          </div>
          <button
            className="back-home-btn"
            type="button"
            onClick={() => window.location.replace(window.location.origin)}
          >
            <div className="btn-flex">
              <FaLongArrowAltLeft />
              Back to Home
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
