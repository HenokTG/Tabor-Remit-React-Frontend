import React from "react";

import { useGlobalContext } from "../context";

function Packages({ packId, pkData, packUSD, serviceCharge, setSummaryMax }) {
  const {
    packagesList,
    setTransferdAmount,
    setChargedAmount,
    operatorSelected,
    setPackageSelected,
  } = useGlobalContext();

  const choosePackage = () => {
    const operDisc =
      operatorSelected.operator !== null
        ? operatorSelected.operator.operator_discount_rate
        : 0;

    const packagePicked = packagesList.filter((elem) => elem.id === packId)[0];

    setPackageSelected({
      packageChosen: true,
      package: packagePicked,
    });
    setSummaryMax(5);
    setTransferdAmount(pkData);
    setChargedAmount(packUSD * (1 - operDisc));
  };
  return (
    <div className="pack-Container" onClick={choosePackage}>
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
