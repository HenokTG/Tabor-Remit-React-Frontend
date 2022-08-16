import React from "react";

import { useGlobalContext } from "../context";

function Packages({ pkData, packUSD, serviceCharge }) {
  const { setTransferdAmount, setPackageSelected, setSummaryMax, setDiscount } =
    useGlobalContext();

  const handlePackage = () => {
    console.log("Package Selected!", pkData, packUSD);
    setPackageSelected(true);
    setTransferdAmount(pkData);
    setSummaryMax(4);
    setDiscount(0.1);
  };
  return (
    <div className="pack-Container" onClick={handlePackage}>
      <div className="Currency-pack etb-pack">
        <p>The customer gets: </p>
        <h4>{pkData} ETB</h4>
      </div>
      <div className="pack-hrt-rule--horizontal"></div>
      <div className="Currency-pack usd-pack">
        <p>Packages in USD:</p> <h3>$ {packUSD.toFixed(2)}</h3>
      </div>
      <div className="package-footer">
        <span className="package-footer-icon">!</span>
        <span className="package-footer-text">
          includes {serviceCharge * 100}% Service Charge
        </span>
      </div>
    </div>
  );
}

export default Packages;
