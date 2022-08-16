import React from "react";

import BasicInfo from "../Components/BasicInfo";
import Packages from "../Components/Packages";
import PromoCodeForm from "../Components/PromoCodeForm";
import SubmitButton from "../Components/SubmitButton";

import { useGlobalContext } from "../context";
import { returnValue } from "../module";

function Summary() {
  const packagesList = [100.0, 200.0, 500.0, 1000.0, 2000.0, 5000.0];
  const {
    promo,
    discount,
    phoneNo,
    operator,
    summaryMax,
    packageSelected,
    transferdAmount,
  } = useGlobalContext();

  console.log("Transferded Amount: ", transferdAmount);
  const [serviceCharge, conversionRate, summaryData, totalAmount] = returnValue(
    promo,
    operator,
    discount,
    phoneNo,
    transferdAmount
  );
  const packUSD = (1 + serviceCharge) * conversionRate;
  return (
    <div className="summary-conatainer">
      <h2 style={{ marginBottom: "1rem" }}>Summary</h2>
      {summaryData.slice(0, summaryMax).map((infoElem, infoInx) => {
        return (
          <div className="pack-index" key={infoInx}>
            <BasicInfo infoData={infoElem} />
          </div>
        );
      })}
      <div className="hrt-rule--horizontal"></div>
      {packageSelected ? (
        <>
          <div className="total-amount">
            <h2>Total Charge: </h2>
            <h2>$ {totalAmount.toFixed(2)}</h2>
          </div>
          <div className="hrt-rule--horizontal"></div>
          <PromoCodeForm />
          <div className="hrt-rule--horizontal"></div>
          <SubmitButton />
        </>
      ) : (
        <section className="package-section">
          <div className="pack-title" style={{ marginBottom: "0.5rem" }}>
            <h3>Choose the Package</h3>
          </div>
          <div className="pack-list">
            {packagesList.map((pkElem, pkInx) => (
              <div className="pack-index" key={pkInx}>
                <Packages
                  packUSD={pkElem * packUSD}
                  pkData={pkElem}
                  serviceCharge={serviceCharge}
                />
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

export default Summary;
