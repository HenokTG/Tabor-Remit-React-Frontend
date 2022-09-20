import React from "react";

import { useGlobalContext } from "../context";

function Packages({ packId, pkData, packUSD, serviceCharge }) {
  const {
    packagesList,
    setTransferdAmount,
    chargedAmount,
    setChargedAmount,
    operatorSelected,
    setPackageSelected,
  } = useGlobalContext();

  const choosePackage = () => {
    const operDisc =
      operatorSelected.operator !== null
        ? operatorSelected.operator.operator_discount_rate
        : 0;
    console.log("Discount Check: ", chargedAmount, operDisc);

    const packagePicked = packagesList.filter((elem) => elem.id === packId)[0];
    console.log("Package Selected!", pkData, packUSD, packagePicked);
    setPackageSelected({
      packageChosen: true,
      package: packagePicked,
    });
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
