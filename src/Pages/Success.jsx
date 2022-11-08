import React from "react";
import { FaCheckCircle, FaLongArrowAltLeft } from "react-icons/fa";

import { useGlobalContext } from "../context";

function Success() {
  const { phoneNo, transferdAmount, operatorSelected } = useGlobalContext();
  const phoneNum = String(phoneNo);
  const customerNumber =
    "+251 " +
    phoneNum.slice(0, 3) +
    " " +
    phoneNum.slice(3, 5) +
    " " +
    phoneNum.slice(5, 7) +
    phoneNum.slice(7, 9);

  console.log("operator: ", operatorSelected);

  return (
    <div className="response-container">
      <div className="resp-card">
        <div className="card-head success">
          <FaCheckCircle size="3rem" />
          <h2>Success</h2>
        </div>
        <div className="card-body">
          <div className="card-message">
            You have purchased a mobile airtime of{" "}
            <strong>{transferdAmount}</strong> birr for{" "}
            {operatorSelected.operator && (
              <strong>{operatorSelected.operator.operator_name}</strong>
            )}{" "}
            customer <strong>{customerNumber}</strong>. You will recieve
            confirmition email on your PayPal account email. Thank you for
            Spreading Happiness.
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

export default Success;
