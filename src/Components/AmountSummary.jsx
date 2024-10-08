import React from "react";

import { useGlobalContext } from "../context";

function AmountSummary() {
  const { chargedAmount } = useGlobalContext();

  return (
    <div className="total-amount">
      <h2>Total Charge: </h2>
      <h2>$ {chargedAmount.toFixed(2)}</h2>
    </div>
  );
}

export default AmountSummary;
