import React from "react";

import { useGlobalContext } from "../context";

function Operators({ operatorsList }) {
  const { setSummaryMax, setOperatorSelected, chargedAmount } =
    useGlobalContext();

  const chooseOperator = (operatorId) => {
    console.log("Operator Selected!", operatorId);
    const operatorPicked = operatorsList.filter(
      (elem) => elem.id === operatorId
    )[0];
    console.log("Operator Selected!", operatorPicked);
    setOperatorSelected({
      isOpSelected: true,
      operator: operatorPicked,
    });
    setSummaryMax(4);
    console.log("Operator Check: ", chargedAmount);
  };

  return (
    <div className="operator-section">
      <div className="hrt-rule--horizontal"></div>
      <h4>Choose Operator</h4>
      <div className="operator-container">
        {operatorsList &&
          operatorsList.map((operator) => {
            const { id, operator_name, operator_image_link } = operator;
            const elemId = `buy-${operator_name}`;
            return (
              <div
                key={id}
                id={elemId}
                className="operator-wrapper"
                onClick={(e) => chooseOperator(id)}
              >
                <img
                  src={operator_image_link}
                  alt="Operator"
                  className="operator-img"
                />

                <strong>{operator_name}</strong>
              </div>
            );
          })}
      </div>
      {/* <div className="hrt-rule--horizontal"></div> */}
    </div>
  );
}

export default Operators;
