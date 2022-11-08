import React from "react";
import { FaExclamationCircle, FaLongArrowAltLeft } from "react-icons/fa";
function Error() {
  return (
    <div className="response-container">
      <div className="resp-card">
        <div className="card-head error">
          <FaExclamationCircle size="3rem" />
          <h2>Error</h2>
        </div>
        <div className="card-body">
          <div className="card-message">
            There was an error with your transaction. Your airtime purchase is{" "}
            <strong>not successful</strong>. Please try again.
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

export default Error;
